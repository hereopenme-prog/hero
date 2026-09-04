import crypto from 'crypto';
import { getEnv } from '@hereopen/config';

const OTP_LENGTH = 6;
const OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
const MAX_ATTEMPTS = 3;

export interface OTPRecord {
  code: string;
  expiresAt: number;
  attempts: number;
  createdAt: number;
}

// In-memory OTP store (should use Redis in production)
const otpStore = new Map<string, OTPRecord>();

export function generateOTP(): string {
  return crypto.randomInt(100000, 999999).toString();
}

export function createOTP(identifier: string): string {
  const code = generateOTP();
  const now = Date.now();
  
  otpStore.set(identifier, {
    code,
    expiresAt: now + OTP_EXPIRY_MS,
    attempts: 0,
    createdAt: now,
  });
  
  return code;
}

export function verifyOTP(identifier: string, code: string): {
  valid: boolean;
  error?: string;
} {
  const record = otpStore.get(identifier);
  
  if (!record) {
    return { valid: false, error: 'OTP not found' };
  }
  
  if (Date.now() > record.expiresAt) {
    otpStore.delete(identifier);
    return { valid: false, error: 'OTP expired' };
  }
  
  if (record.attempts >= MAX_ATTEMPTS) {
    otpStore.delete(identifier);
    return { valid: false, error: 'Maximum attempts exceeded' };
  }
  
  record.attempts++;
  
  if (record.code !== code) {
    return { valid: false, error: 'Invalid OTP' };
  }
  
  otpStore.delete(identifier);
  return { valid: true };
}

export function invalidateOTP(identifier: string): void {
  otpStore.delete(identifier);
}

export function getOTPAttempts(identifier: string): number {
  const record = otpStore.get(identifier);
  return record?.attempts || 0;
}
