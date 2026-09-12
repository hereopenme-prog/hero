'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, stagger } from '@/lib/animations';

/* Shared PARTNERSHIP-look building blocks (same geometry + theme-var
   styling as BankPartnershipSection). Used by the Problem, Solution and
   One-Device bands so their headers, node visuals and item lists match. */

export interface PNode {
  icon: ReactNode;
  label: string;
  caption: string;
}

export function PNodeBadges({ nodes }: { nodes: PNode[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      {/* Desktop: connected badge row */}
      <div className="hidden md:flex items-start justify-between gap-3">
        {nodes.map((node) => (
          <motion.div key={node.label} variants={fadeUp} className="flex flex-col items-center flex-1 max-w-[160px]">
            <div className="w-14 h-14 rounded-full border border-[var(--border)] bg-[var(--section)] flex items-center justify-center mb-4">
              {node.icon}
            </div>
            <p className="font-display font-bold text-[11px] tracking-[0.1em] text-[var(--ink)] text-center leading-tight">
              {node.label}
            </p>
            <p className="mt-1.5 font-body text-[11px] text-[var(--ink-muted)] text-center leading-snug">
              {node.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile / tablet: stacked rows */}
      <div className="md:hidden space-y-3">
        {nodes.map((node, i) => (
          <motion.div key={node.label} variants={fadeUp} className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--section)] px-5 py-4">
            <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0">
              {node.icon}
            </div>
            <div className="min-w-0">
              <p className="font-display font-bold text-[11px] tracking-[0.1em] text-[var(--ink)] leading-tight">{node.label}</p>
              <p className="mt-0.5 font-body text-[11px] text-[var(--ink-muted)] leading-snug">{node.caption}</p>
            </div>
            {i < nodes.length - 1 && (
              <div className="ml-auto flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 2v10M4 9l3 3 3-3" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export interface PRowItem {
  title: string;
  caption: string;
}

export function PNumberedRows({ items }: { items: PRowItem[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="max-w-3xl mx-auto"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className="flex items-start gap-6 py-6 border-b border-[var(--border)] last:border-b-0"
        >
          <span className="font-display font-extrabold text-[1.5rem] lg:text-[1.8rem] text-[var(--accent)] leading-none flex-shrink-0 w-12">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="font-display font-bold text-[0.95rem] lg:text-[1.05rem] tracking-tight text-[var(--ink)] leading-tight">
              {item.title}
            </p>
            <p className="mt-1.5 font-body text-[0.85rem] text-[var(--ink-muted)] leading-relaxed">
              {item.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function PStatement({ children }: { children: ReactNode }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="font-display font-bold text-[1.25rem] lg:text-[1.6rem] tracking-[-0.02em] text-[var(--ink)] text-center mb-12"
    >
      {children}
    </motion.h3>
  );
}
