'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
}

export function Section({ id, children, className = '', as: Tag = 'section' }: SectionProps) {
  const Comp = (Tag === 'section' ? motion.section : motion.div) as typeof motion.section;
  return (
    <Comp
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.02 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden py-24 scroll-mt-24 lg:py-32 ${className}`}
    >
      {children}
    </Comp>
  );
}