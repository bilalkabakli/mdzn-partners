// Authentication Types

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponseData {
  user: User;
  token: string;
  expiresIn: number; // seconds
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface JwtPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

export interface RateLimitInfo {
  attempts: number;
  lastAttempt: number;
  blockedUntil?: number;
}
