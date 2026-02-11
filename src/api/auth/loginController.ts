import { Router, Request, Response } from 'express';
import { authService } from './authService';
import {
  rateLimitMiddleware,
  recordFailedAttempt,
  clearRateLimit,
  validateLoginInput,
} from './authMiddleware';
import { LoginRequest, ApiResponse, LoginResponseData } from './types';

const router = Router();

/**
 * POST /api/auth/login
 *
 * Login endpoint with rate limiting and validation
 *
 * Request Body:
 * {
 *   "email": "string (required, valid email format)",
 *   "password": "string (required, min 8 chars)",
 *   "rememberMe": "boolean (optional, default: false)"
 * }
 *
 * Success Response (200):
 * {
 *   "success": true,
 *   "data": {
 *     "user": { "id": "string", "email": "string", "name": "string" },
 *     "token": "string (JWT)",
 *     "expiresIn": "number (seconds)"
 *   }
 * }
 *
 * Error Response (401):
 * {
 *   "success": false,
 *   "error": { "code": "INVALID_CREDENTIALS", "message": "Email veya sifre hatali" }
 * }
 */
router.post(
  '/login',
  rateLimitMiddleware,
  validateLoginInput,
  async (req: Request, res: Response): Promise<void> => {
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

    try {
      const credentials: LoginRequest = {
        email: req.body.email,
        password: req.body.password,
        rememberMe: req.body.rememberMe || false,
      };

      const result = await authService.login(credentials);

      if (!result) {
        // Record failed attempt
        recordFailedAttempt(clientIp);

        // Log failed attempt (without password)
        console.warn(`Failed login attempt for email: ${credentials.email} from IP: ${clientIp}`);

        const response: ApiResponse<null> = {
          success: false,
          error: {
            code: 'INVALID_CREDENTIALS',
            message: 'Email veya sifre hatali',
          },
        };
        res.status(401).json(response);
        return;
      }

      // Clear rate limit on success
      clearRateLimit(clientIp);

      // Log successful login
      console.info(`Successful login for user: ${result.user.id} from IP: ${clientIp}`);

      const response: ApiResponse<LoginResponseData> = {
        success: true,
        data: result,
      };
      res.status(200).json(response);
    } catch (error) {
      console.error('Login error:', error);

      const response: ApiResponse<null> = {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred',
        },
      };
      res.status(500).json(response);
    }
  }
);

/**
 * POST /api/auth/register (for testing only)
 */
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      res.status(400).json({
        success: false,
        error: { code: 'VALIDATION_ERROR', message: 'Email, password and name are required' },
      });
      return;
    }

    const user = await authService.registerUser(email, password, name);

    res.status(201).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' },
    });
  }
});

export default router;
