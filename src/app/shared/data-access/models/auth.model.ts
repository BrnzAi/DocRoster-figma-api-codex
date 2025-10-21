export interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  phone?: string;
  agreeToTerms: boolean;
}

export interface RecoveryRequest {
  email: string;
}

export interface VerificationRequest {
  email: string;
  code: string;
}

export interface AuthSession {
  token: string;
  expiresAt: string;
  userId: string;
}
