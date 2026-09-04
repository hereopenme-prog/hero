import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file from project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Database
  DATABASE_URL: z.string(),
  DIRECT_URL: z.string().optional(),
  
  // Authentication
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('15m'),
  REFRESH_TOKEN_SECRET: z.string().min(32),
  REFRESH_TOKEN_EXPIRES_IN: z.string().default('7d'),
  OTP_SECRET: z.string().min(16),
  OTP_EXPIRY_MINUTES: z.coerce.number().default(5),
  OTP_MAX_ATTEMPTS: z.coerce.number().default(3),
  
  // API Server
  API_PORT: z.coerce.number().default(3001),
  API_HOST: z.string().default('0.0.0.0'),
  CORS_ORIGIN: z.string().default('http://localhost:3000'),
  
  // App URLs
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3001'),
  NEXT_PUBLIC_ADMIN_URL: z.string().url().default('http://localhost:3002'),
  
  // IoT / MQTT
  MQTT_BROKER_URL: z.string().default('mqtt://localhost:1883'),
  MQTT_USERNAME: z.string().optional(),
  MQTT_PASSWORD: z.string().optional(),
  MQTT_CLIENT_ID: z.string().default('hereopen-api'),
  IOT_DEVICE_SECRET_KEY: z.string().min(16),
  IOT_COMMAND_TIMEOUT_MS: z.coerce.number().default(30000),
  IOT_HEARTBEAT_INTERVAL_MS: z.coerce.number().default(60000),
  
  // WebSocket
  WS_PORT: z.coerce.number().default(3001),
  
  // SMS
  SMS_PROVIDER: z.enum(['console', 'twilio', 'msg91']).default('console'),
  SMS_API_KEY: z.string().optional(),
  SMS_API_SECRET: z.string().optional(),
  
  // Email
  EMAIL_PROVIDER: z.enum(['console', 'smtp', 'sendgrid']).default('console'),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  EMAIL_FROM: z.string().email().default('noreply@hereopen.in'),
  
  // Push Notifications
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
  
  // Payments
  PAYMENT_PROVIDER: z.enum(['razorpay', 'stripe', 'manual']).default('razorpay'),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  
  // Storage
  STORAGE_PROVIDER: z.enum(['local', 's3']).default('local'),
  AWS_S3_BUCKET: z.string().optional(),
  AWS_S3_REGION: z.string().optional(),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  LOCAL_STORAGE_PATH: z.string().default('./uploads'),
  
  // Redis
  REDIS_URL: z.string().optional(),
  
  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),
  OTP_RATE_LIMIT_MAX: z.coerce.number().default(5),
  
  // Logging
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
  
  // Admin
  ADMIN_DEFAULT_EMAIL: z.string().email().default('admin@hereopen.in'),
  ADMIN_DEFAULT_PASSWORD: z.string().min(8).default('admin123'),
});

export type Env = z.infer<typeof envSchema>;

let env: Env | null = null;

export function getEnv(): Env {
  if (!env) {
    const result = envSchema.safeParse(process.env);
    if (!result.success) {
      console.error('Invalid environment variables:', result.error.format());
      throw new Error('Invalid environment variables');
    }
    env = result.data;
  }
  return env;
}

export function getEnvSafe(): Env | null {
  try {
    return getEnv();
  } catch {
    return null;
  }
}
