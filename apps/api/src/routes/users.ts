import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@hereopen/database';
import { ValidationError, NotFoundError } from '../middleware/error';

export const userRouter = Router();

const updateProfileSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(10).max(15).optional(),
  avatar: z.string().url().optional(),
});

// Get current user profile
userRouter.get('/me', async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: {
      id: true,
      email: true,
      phone: true,
      name: true,
      role: true,
      avatar: true,
      emailVerified: true,
      phoneVerified: true,
      createdAt: true,
      businesses: {
        select: {
          id: true,
          businessId: true,
          role: true,
          isOwner: true,
          business: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      },
    },
  });
  
  if (!user) {
    throw new NotFoundError('User not found');
  }
  
  res.json({
    success: true,
    data: user,
  });
});

// Update profile
userRouter.put('/me', async (req: Request, res: Response) => {
  const input = updateProfileSchema.parse(req.body);
  
  const user = await prisma.user.update({
    where: { id: req.user!.id },
    data: input,
    select: {
      id: true,
      email: true,
      phone: true,
      name: true,
      role: true,
      avatar: true,
    },
  });
  
  res.json({
    success: true,
    data: user,
  });
});

// Change password
userRouter.put('/me/password', async (req: Request, res: Response) => {
  const schema = z.object({
    currentPassword: z.string(),
    newPassword: z.string().min(8),
  });
  
  const input = schema.parse(req.body);
  
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
  });
  
  if (!user?.passwordHash) {
    throw new ValidationError('No password set');
  }
  
  // Verify current password
  const { comparePassword, hashPassword } = await import('@hereopen/auth');
  const valid = await comparePassword(input.currentPassword, user.passwordHash);
  
  if (!valid) {
    throw new ValidationError('Current password is incorrect');
  }
  
  // Hash new password
  const passwordHash = await hashPassword(input.newPassword);
  
  await prisma.user.update({
    where: { id: req.user!.id },
    data: { passwordHash },
  });
  
  res.json({
    success: true,
    message: 'Password updated successfully',
  });
});
