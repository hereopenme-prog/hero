export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  BUSINESS_OWNER = 'BUSINESS_OWNER',
  BUSINESS_MEMBER = 'BUSINESS_MEMBER',
  CUSTOMER = 'CUSTOMER',
}

export interface User {
  id: string;
  email?: string | null;
  phone?: string | null;
  name?: string | null;
  role: UserRole;
  avatar?: string | null;
  emailVerified: boolean;
  phoneVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserInput {
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
  role?: UserRole;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

export interface LoginInput {
  email?: string;
  phone?: string;
  password?: string;
  otp?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface JWTPayload {
  userId: string;
  email?: string;
  phone?: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}
