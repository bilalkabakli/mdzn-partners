/**
 * Authentication Service
 * Handles login API calls, token management, and auth state
 *
 * SCRUM-5: User Login Feature
 * [FE] SCRUM-5-3: Authentication Service Entegrasyonu
 */

// API base URL - should be configured via environment variable
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

// Token storage keys
const TOKEN_KEY = 'auth_token';
const TOKEN_EXPIRY_KEY = 'auth_token_expiry';

// Types
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginSuccessData {
  user: User;
  token: string;
  expiresIn: number; // seconds
}

export interface LoginResponse {
  success: boolean;
  data?: LoginSuccessData;
  error?: {
    code: string;
    message: string;
  };
}

export interface AuthError {
  code: string;
  message: string;
}

/**
 * Custom error class for authentication errors
 */
export class AuthenticationError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = 'AuthenticationError';
  }
}

/**
 * Authentication Service
 */
export const authService = {
  /**
   * Login with email and password
   * POST /api/auth/login
   */
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          rememberMe: credentials.rememberMe || false,
        }),
      });

      const data: LoginResponse = await response.json();

      // Handle rate limiting (429)
      if (response.status === 429) {
        throw new AuthenticationError(
          'RATE_LIMITED',
          'Cok fazla basarisiz deneme. 15 dakika sonra tekrar deneyin'
        );
      }

      // Handle unauthorized (401)
      if (response.status === 401) {
        throw new AuthenticationError(
          data.error?.code || 'INVALID_CREDENTIALS',
          data.error?.message || 'Email veya sifre hatali'
        );
      }

      // Handle other errors
      if (!response.ok) {
        throw new AuthenticationError(
          data.error?.code || 'LOGIN_FAILED',
          data.error?.message || 'Giris yapilamadi. Lutfen tekrar deneyin.'
        );
      }

      return data;
    } catch (error) {
      // Re-throw AuthenticationError
      if (error instanceof AuthenticationError) {
        throw error;
      }

      // Handle network errors
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new AuthenticationError(
          'NETWORK_ERROR',
          'Baglanti hatasi. Internet baglantinizi kontrol edin.'
        );
      }

      // Handle unexpected errors
      throw new AuthenticationError(
        'UNKNOWN_ERROR',
        'Beklenmeyen bir hata olustu. Lutfen tekrar deneyin.'
      );
    }
  },

  /**
   * Store authentication token
   * Uses localStorage for persistent storage (rememberMe)
   * Uses sessionStorage for session-only storage
   */
  setToken(token: string, rememberMe: boolean = false): void {
    const storage = rememberMe ? localStorage : sessionStorage;

    // Calculate expiry time (30 days for rememberMe, 24 hours otherwise)
    const expiryDuration = rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
    const expiryTime = Date.now() + expiryDuration;

    storage.setItem(TOKEN_KEY, token);
    storage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
  },

  /**
   * Get stored authentication token
   * Checks both localStorage and sessionStorage
   * Returns null if token is expired
   */
  getToken(): string | null {
    // Check localStorage first (rememberMe)
    let token = localStorage.getItem(TOKEN_KEY);
    let expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

    // If not in localStorage, check sessionStorage
    if (!token) {
      token = sessionStorage.getItem(TOKEN_KEY);
      expiry = sessionStorage.getItem(TOKEN_EXPIRY_KEY);
    }

    // Check if token exists and is not expired
    if (token && expiry) {
      const expiryTime = parseInt(expiry, 10);
      if (Date.now() < expiryTime) {
        return token;
      }
      // Token expired, clear it
      this.clearToken();
    }

    return null;
  },

  /**
   * Clear authentication token from storage
   */
  clearToken(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_EXPIRY_KEY);
  },

  /**
   * Check if user is authenticated
   * Returns true if a valid token exists
   */
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  },

  /**
   * Logout - clear token and redirect
   */
  logout(): void {
    this.clearToken();
    // Redirect to login page
    window.location.href = '/login';
  },

  /**
   * Get authorization header for API requests
   */
  getAuthHeader(): { Authorization: string } | {} {
    const token = this.getToken();
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  },
};

/**
 * Axios Interceptor Setup (if using Axios)
 * This can be used to automatically add auth headers to requests
 *
 * Usage:
 * import axios from 'axios';
 * import { setupAxiosInterceptors } from './authService';
 * setupAxiosInterceptors(axios);
 */
export const setupAxiosInterceptors = (axiosInstance: any): void => {
  // Request interceptor - add auth token
  axiosInstance.interceptors.request.use(
    (config: any) => {
      const token = authService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor - handle 401 errors
  axiosInstance.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      if (error.response?.status === 401) {
        // Token expired or invalid, logout
        authService.logout();
      }
      return Promise.reject(error);
    }
  );
};

export default authService;
