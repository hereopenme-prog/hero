import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { hashPassword, comparePassword, generateTokens, verifyRefreshToken, createOTP, verifyOTP } from '@hereopen/auth';
import { authRateLimiter, otpRateLimiter } from '../middleware/rateLimit';
import { ValidationError, UnauthorizedError } from '../middleware/error';

export const authRouter = Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().min(10).max(15).optional(),
  password: z.string().min(8).optional(),
  name: z.string().min(1).max(100),
  role: z.enum(['BUSINESS_OWNER', 'CUSTOMER']).default('CUSTOMER'),
}).refine(data => data.email || data.phone, {
  message: 'Either email or phone is required',
});

const loginSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().min(10).max(15).optional(),
  password: z.string().optional(),
  otp: z.string().length(6).optional(),
}).refine(data => data.email || data.phone, {
  message: 'Either email or phone is required',
});

const sendOtpSchema = z.object({
  phone: z.string().min(10).max(15),
  purpose: z.enum(['login', 'register', 'verify']).default('login'),
});

const verifyOtpSchema = z.object({
  phone: z.string().min(10).max(15),
  otp: z.string().length(6),
  purpose: z.enum(['login', 'register', 'verify']).default('login'),
});

const refreshTokenSchema = z.object({
  refreshToken: z.string(),
});

// Register
authRouter.post('/register', authRateLimiter, async (req: Request, res: Response) => {
  try {
    const input = registerSchema.parse(req.body);
    
    // Check if user exists
    const existingUser = input.email
      ? await prisma.user.findUnique({ where: { email: input.email } })
      : await prisma.user.findUnique({ where: { phone: input.phone } });
    
    if (existingUser) {
      throw new ValidationError('User already exists');
    }
    
    // Hash password if provided
    let passwordHash: string | undefined;
    if (input.password) {
      passwordHash = await hashPassword(input.password);
    }
    
    // Create user
    const user = await prisma.user.create({
      data: {
        email: input.email,
        phone: input.phone,
        name: input.name,
        passwordHash,
        role: input.role,
        emailVerified: false,
        phoneVerified: false,
      },
    });
    
    // Generate tokens
    const tokens = generateTokens({
      userId: user.id,
      email: user.email ?? undefined,
      phone: user.phone ?? undefined,
      role: user.role,
    });
    
    res.status(201).json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          phone: user.phone,
          name: user.name,
          role: user.role,
        },
        ...tokens,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', error.errors);
    }
    throw error;
  }
});

// Login
authRouter.post('/login', authRateLimiter, async (req: Request, res: Response) => {
  try {
    const input = loginSchema.parse(req.body);
    
    // Find user
    const user = input.email
      ? await prisma.user.findUnique({ where: { email: input.email } })
      : await prisma.user.findUnique({ where: { phone: input.phone } });
    
    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }
    
    // Verify password if provided
    if (input.password && user.passwordHash) {
      const valid = await comparePassword(input.password, user.passwordHash);
      if (!valid) {
        throw new UnauthorizedError('Invalid credentials');
      }
    } else if (input.otp) {
      // Verify OTP
      const identifier = input.phone || input.email || '';
      const result = verifyOTP(identifier, input.otp);
      if (!result.valid) {
        throw new UnauthorizedError(result.error || 'Invalid OTP');
      }
    } else {
      throw new ValidationError('Password or OTP is required');
    }
    
    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });
    
    // Generate tokens
    const tokens = generateTokens({
      userId: user.id,
      email: user.email ?? undefined,
      phone: user.phone ?? undefined,
      role: user.role,
    });
    
    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          phone: user.phone,
          name: user.name,
          role: user.role,
        },
        ...tokens,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', error.errors);
    }
    throw error;
  }
});

// Send OTP
authRouter.post('/send-otp', otpRateLimiter, async (req: Request, res: Response) => {
  try {
    const input = sendOtpSchema.parse(req.body);
    
    // Generate and store OTP
    const otp = createOTP(input.phone);
    
    // In production, send OTP via SMS provider
    console.log(`OTP for ${input.phone}: ${otp}`);
    
    res.json({
      success: true,
      message: 'OTP sent successfully',
      // In development, include OTP in response
      ...(process.env.NODE_ENV === 'development' && { otp }),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', error.errors);
    }
    throw error;
  }
});

// Verify OTP
authRouter.post('/verify-otp', authRateLimiter, async (req: Request, res: Response) => {
  try {
    const input = verifyOtpSchema.parse(req.body);
    
    const result = verifyOTP(input.phone, input.otp);
    
    if (!result.valid) {
      throw new UnauthorizedError(result.error || 'Invalid OTP');
    }
    
    res.json({
      success: true,
      message: 'OTP verified successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', error.errors);
    }
    throw error;
  }
});

// Refresh token
authRouter.post('/refresh', async (req: Request, res: Response) => {
  try {
    const input = refreshTokenSchema.parse(req.body);
    
    const payload = verifyRefreshToken(input.refreshToken);
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });
    
    if (!user || !user.isActive) {
      throw new UnauthorizedError('Invalid refresh token');
    }
    
    // Generate new tokens
    const tokens = generateTokens({
      userId: user.id,
      email: user.email ?? undefined,
      phone: user.phone ?? undefined,
      role: user.role,
    });
    
    res.json({
      success: true,
      data: tokens,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', error.errors);
    }
    throw error;
  }
});

// Logout
authRouter.post('/logout', async (req: Request, res: Response) => {
  // In production, invalidate refresh token in database
  res.json({
    success: true,
    message: 'Logged out successfully',
  });
});
