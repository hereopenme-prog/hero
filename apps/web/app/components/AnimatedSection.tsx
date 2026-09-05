'use client';

import { useRef, useMemo, type ReactNode } from 'react';
import { motion, useInView, type Variants, type TargetAndTransition } from 'framer-motion';
import { animations, type AnimationVariant } from '@/lib/animations';

interface AnimatedSectionProps {
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function AnimatedSection({
  variant = 'fadeUp',
  delay = 0,
  className,
  children,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.15, once: true });

  const variants = useMemo<Variants>(() => {
    const base = animations[variant] as Variants;
    if (!delay) return base;
    const visible = base.visible as TargetAndTransition;
    return {
      ...base,
      visible: {
        ...visible,
        transition: {
          ...(visible.transition as Record<string, unknown>),
          delay,
        },
      },
    };
  }, [variant, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      aria-hidden="false"
    >
      {children}
    </motion.div>
  );
}