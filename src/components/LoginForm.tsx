import React, { useState } from 'react';
import './LoginForm.css';
import { authService, LoginCredentials, LoginResponse } from '../services/authService';

// Validation types
interface ValidationErrors {
  email?: string;
  password?: string;
  general?: string;
}

// Form state type
interface FormState {
  email: string;
  password: string;
  rememberMe: boolean;
  showPassword: boolean;
  isLoading: boolean;
  errors: ValidationErrors;
}

const LoginForm: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    rememberMe: false,
    showPassword: false,
    isLoading: false,
    errors: {},
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email format
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Bu alan zorunludur';
    }
    if (!emailRegex.test(email)) {
      return 'Gecerli bir email adresi giriniz';
    }
    return undefined;
  };

  // Validate password
  const validatePassword = (password: string): string | undefined => {
    if (!password) {
      return 'Bu alan zorunludur';
    }
    return undefined;
  };

  // Validate entire form
  const validateForm = (): ValidationErrors => {
    const errors: ValidationErrors = {};

    const emailError = validateEmail(formState.email);
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(formState.password);
    if (passwordError) {
      errors.password = passwordError;
    }

    return errors;
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormState(prev => ({
      ...prev,
      [name]: newValue,
      errors: {
        ...prev.errors,
        [name]: undefined, // Clear field error on change
        general: undefined, // Clear general error on change
      },
    }));
  };

  // Handle real-time validation on blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error: string | undefined;

    if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'password') {
      error = validatePassword(value);
    }

    if (error) {
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: error,
        },
      }));
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setFormState(prev => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors,
      }));
      return;
    }

    // Set loading state
    setFormState(prev => ({
      ...prev,
      isLoading: true,
      errors: {},
    }));

    try {
      const credentials: LoginCredentials = {
        email: formState.email,
        password: formState.password,
        rememberMe: formState.rememberMe,
      };

      const response: LoginResponse = await authService.login(credentials);

      if (response.success && response.data) {
        // Store token
        authService.setToken(response.data.token, formState.rememberMe);

        // Redirect to home page (placeholder - actual navigation depends on router)
        console.log('Login successful, redirecting...', response.data.user);
        window.location.href = '/';
      }
    } catch (error: any) {
      // Handle rate limiting
      if (error.code === 'RATE_LIMITED') {
        setFormState(prev => ({
          ...prev,
          isLoading: false,
          errors: {
            general: 'Cok fazla basarisiz deneme. 15 dakika sonra tekrar deneyin',
          },
        }));
      } else {
        // Handle invalid credentials or other errors
        setFormState(prev => ({
          ...prev,
          isLoading: false,
          password: '', // Clear password on error
          errors: {
            general: error.message || 'Email veya sifre hatali',
          },
        }));
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Giris Yap</h1>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          {/* General error message */}
          {formState.errors.general && (
            <div className="error-alert" role="alert">
              <span className="error-icon">!</span>
              {formState.errors.general}
            </div>
          )}

          {/* Email field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Adresi
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${formState.errors.email ? 'input-error' : ''}`}
              value={formState.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="ornek@email.com"
              disabled={formState.isLoading}
              autoComplete="email"
              aria-describedby={formState.errors.email ? 'email-error' : undefined}
              aria-invalid={!!formState.errors.email}
            />
            {formState.errors.email && (
              <span id="email-error" className="field-error" role="alert">
                {formState.errors.email}
              </span>
            )}
          </div>

          {/* Password field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Sifre
            </label>
            <div className="password-input-wrapper">
              <input
                type={formState.showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className={`form-input ${formState.errors.password ? 'input-error' : ''}`}
                value={formState.password}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Sifrenizi giriniz"
                disabled={formState.isLoading}
                autoComplete="current-password"
                aria-describedby={formState.errors.password ? 'password-error' : undefined}
                aria-invalid={!!formState.errors.password}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
                disabled={formState.isLoading}
                aria-label={formState.showPassword ? 'Sifreyi gizle' : 'Sifreyi goster'}
              >
                {formState.showPassword ? (
                  <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            {formState.errors.password && (
              <span id="password-error" className="field-error" role="alert">
                {formState.errors.password}
              </span>
            )}
          </div>

          {/* Remember me checkbox */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formState.rememberMe}
                onChange={handleInputChange}
                disabled={formState.isLoading}
                className="checkbox-input"
              />
              <span className="checkbox-text">Beni Hatirla</span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="submit-btn"
            disabled={formState.isLoading}
          >
            {formState.isLoading ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                <span>Giris yapiliyor...</span>
              </>
            ) : (
              'Giris Yap'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
