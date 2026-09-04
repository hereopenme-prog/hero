import jwt from 'jsonwebtoken';
import { getEnv } from '@hereopen/config';
import type { JWTPayload, AuthTokens } from '@hereopen/types';

export function generateTokens(payload: Omit<JWTPayload, 'iat' | 'exp'>): AuthTokens {
  const env = getEnv();
  
  const accessToken = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
  
  const refreshToken = jwt.sign(
    { userId: payload.userId },
    env.REFRESH_TOKEN_SECRET,
    { expiresIn: env.REFRESH_TOKEN_EXPIRES_IN }
  );
  
  return {
    accessToken,
    refreshToken,
    expiresIn: 900, // 15 minutes in seconds
  };
}

export function verifyAccessToken(token: string): JWTPayload {
  const env = getEnv();
  return jwt.verify(token, env.JWT_SECRET) as JWTPayload;
}

export function verifyRefreshToken(token: string): { userId: string } {
  const env = getEnv();
  return jwt.verify(token, env.REFRESH_TOKEN_SECRET) as { userId: string };
}

export function decodeToken(token: string): JWTPayload | null {
  try {
    return jwt.decode(token) as JWTPayload;
  } catch {
    return null;
  }
}
