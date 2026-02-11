import { Request, Response, NextFunction } from 'express';
import { authService } from './authService';
import { JwtPayload, RateLimitInfo, ApiResponse } from './types';

// Rate limiting storage (use Redis in production)
const rateLimitStore: Map<string, RateLimitInfo> = new Map();

// Rate limit config
const MAX_ATTEMPTS = 5;
const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes in ms
const ATTEMPT_WINDOW = 15 * 60 * 1000; // 15 minutes in ms

/**
 * Extract client IP from request
 */
function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.ip || req.socket.remoteAddress || 'unknown';
}

/**
 * Rate limiting middleware for login attempts
 */
export function rateLimitMiddleware(req: Request, res: Response, next: NextFunction): void {
  const clientIp = getClientIp(req);
  const now = Date.now();

  let info = rateLimitStore.get(clientIp);

  // Check if blocked
  if (info?.blockedUntil && info.blockedUntil > now) {
    const remainingMinutes = Math.ceil((info.blockedUntil - now) / 60000);
    const response: ApiResponse<null> = {
      success: false,
      error: {
        code: 'RATE_LIMITED',
        message: `Cok fazla basarisiz deneme. ${remainingMinutes} dakika sonra tekrar deneyin`,
      },
    };
    res.status(429).json(response);
    return;
  }

  // Clean up old attempts
  if (info && (now - info.lastAttempt) > ATTEMPT_WINDOW) {
    rateLimitStore.delete(clientIp);
    info = undefined;
  }

  next();
}

/**
 * Record failed login attempt
 */
export function recordFailedAttempt(clientIp: string): void {
  const now = Date.now();
  let info = rateLimitStore.get(clientIp);

  if (!info) {
    info = { attempts: 0, lastAttempt: now };
  }

  info.attempts += 1;
  info.lastAttempt = now;

  if (info.attempts >= MAX_ATTEMPTS) {
    info.blockedUntil = now + BLOCK_DURATION;
  }

  rateLimitStore.set(clientIp, info);
}

/**
 * Clear rate limit for successful login
 */
export function clearRateLimit(clientIp: string): void {
  rateLimitStore.delete(clientIp);
}

/**
 * JWT Authentication middleware
 */
export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const response: ApiResponse<null> = {
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Authentication token required',
      },
    };
    res.status(401).json(response);
    return;
  }

  const token = authHeader.substring(7);
  const payload = authService.verifyToken(token);

  if (!payload) {
    const response: ApiResponse<null> = {
      success: false,
      error: {
        code: 'INVALID_TOKEN',
        message: 'Invalid or expired token',
      },
    };
    res.status(401).json(response);
    return;
  }

  // Attach user info to request
  (req as any).user = payload;
  next();
}

/**
 * Input validation middleware for login
 */
export function validateLoginInput(req: Request, res: Response, next: NextFunction): void {
  const { email, password } = req.body;
  const errors: string[] = [];

  // Email validation
  if (!email || typeof email !== 'string') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
  }

  // Password validation
  if (!password || typeof password !== 'string') {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

  if (errors.length > 0) {
    const response: ApiResponse<null> = {
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: errors.join(', '),
      },
    };
    res.status(400).json(response);
    return;
  }

  next();
}
