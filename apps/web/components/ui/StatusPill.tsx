'use client';

import { motion } from 'framer-motion';

interface StatusPillProps {
  label: string;
  tone?: 'green' | 'red' | 'neutral' | 'blue';
  pulse?: boolean;
  className?: string;
}

const tones = {
  green: {
    dot: 'bg-[#00D084]',
    text: 'text-[#00D084]',
    border: 'border-[#00D08440]',
    bg: 'bg-[#00D08420]',
    shadow: 'shadow-[0_0_12px_#00D08440]',
  },
  red: {
    dot: 'bg-[#FF4444]',
    text: 'text-[#FF6B6B]',
    border: 'border-[#FF444440]',
    bg: 'bg-[#FF444410]',
    shadow: 'shadow-[0_0_12px_#FF444440]',
  },
  blue: {
    dot: 'bg-[#00B4D8]',
    text: 'text-[#00B4D8]',
    border: 'border-[#00B4D840]',
    bg: 'bg-[#00B4D820]',
    shadow: 'shadow-[0_0_12px_#00B4D840]',
  },
  neutral: {
    dot: 'bg-[#3D4F5E]',
    text: 'text-[#8A9BAE]',
    border: 'border-[#1C2A38]',
    bg: 'bg-[#0F1923]',
    shadow: '',
  },
};

export function StatusPill({ label, tone = 'green', pulse = true, className = '' }: StatusPillProps) {
  const t = tones[tone];
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 border ${t.bg} ${t.border} ${className}`}
    >
      <span
        className={`inline-block w-1.5 h-1.5 rounded-full ${t.dot} ${t.shadow} ${
          pulse ? 'status-dot-pulse' : ''
        }`}
      />
      <span className={`font-body font-semibold text-xs ${t.text} tracking-wide`}>{label}</span>
    </motion.span>
  );
}