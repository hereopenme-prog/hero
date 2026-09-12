'use client';

import { motion } from 'framer-motion';

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50 flex items-center justify-center h-10 w-full"
      style={{
        background: 'linear-gradient(90deg, var(--a10) 0%, transparent 60%, var(--a10) 100%)',
        borderBottom: '1px solid var(--a30)',
      }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
        <span className="font-body font-medium text-xs sm:text-[13px] text-[var(--ink-2)] tracking-wide">
          HERE OPEN — CONNECTED SMART BUSINESS ECOSYSTEM
        </span>
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 bg-[var(--a20)] border border-[var(--a40)]">
          <span className="font-body font-semibold text-[10px] text-[var(--accent)] tracking-[0.1em]">COMING SOON</span>
        </span>
      </div>
    </motion.div>
  );
}
