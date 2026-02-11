import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, LoginRequest, LoginResponseData, JwtPayload } from './types';

// Environment variables (should be in .env)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const SALT_ROUNDS = 10;

// Token expiration times
const TOKEN_EXPIRY_DEFAULT = 24 * 60 * 60; // 24 hours in seconds
const TOKEN_EXPIRY_REMEMBER = 30 * 24 * 60 * 60; // 30 days in seconds

// Mock user database (replace with actual DB)
const mockUsers: Map<string, { id: string; email: string; name: string; passwordHash: string }> = new Map();

export class AuthService {
  /**
   * Hash a password using bcrypt
   */
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  }

  /**
   * Compare password with hash
   */
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  /**
   * Find user by email
   */
  async findUserByEmail(email: string): Promise<User | null> {
    const user = mockUsers.get(email.toLowerCase());
    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  /**
   * Validate user credentials
   */
  async validateCredentials(email: string, password: string): Promise<User | null> {
    const user = mockUsers.get(email.toLowerCase());
    if (!user) return null;

    const isValid = await this.comparePassword(password, user.passwordHash);
    if (!isValid) return null;

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  /**
   * Generate JWT token
   */
  generateToken(user: User, rememberMe: boolean = false): { token: string; expiresIn: number } {
    const expiresIn = rememberMe ? TOKEN_EXPIRY_REMEMBER : TOKEN_EXPIRY_DEFAULT;

    const payload: Omit<JwtPayload, 'iat' | 'exp'> = {
      userId: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn,
    });

    return { token, expiresIn };
  }

  /**
   * Verify JWT token
   */
  verifyToken(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, JWT_SECRET) as JwtPayload;
    } catch {
      return null;
    }
  }

  /**
   * Login user
   */
  async login(credentials: LoginRequest): Promise<LoginResponseData | null> {
    const { email, password, rememberMe = false } = credentials;

    // Validate credentials
    const user = await this.validateCredentials(email, password);
    if (!user) return null;

    // Generate token
    const { token, expiresIn } = this.generateToken(user, rememberMe);

    return {
      user,
      token,
      expiresIn,
    };
  }

  /**
   * Register user (for testing purposes)
   */
  async registerUser(email: string, password: string, name: string): Promise<User> {
    const id = `user_${Date.now()}`;
    const passwordHash = await this.hashPassword(password);

    mockUsers.set(email.toLowerCase(), {
      id,
      email: email.toLowerCase(),
      name,
      passwordHash,
    });

    return { id, email: email.toLowerCase(), name };
  }
}

export const authService = new AuthService();
