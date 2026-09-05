'use client';

import { motion } from 'framer-motion';
import { Activity, Eye, ToggleRight, Shield } from 'lucide-react';
import { Container } from '@/app/components/Container';

const items = [
  { icon: <Activity size={16} strokeWidth={1.8} />, label: '24/7', desc: 'Connected Monitoring' },
  { icon: <Eye size={16} strokeWidth={1.8} />, label: 'REAL-TIME', desc: 'Shop Status' },
  { icon: <ToggleRight size={16} strokeWidth={1.8} />, label: 'ONE TAP', desc: 'Control' },
  { icon: <Shield size={16} strokeWidth={1.8} />, label: 'SMART', desc: 'Security' },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--section-2)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-8 text-center ${
                i % 2 === 1 ? 'border-l border-[var(--border)]' : ''
              } ${i >= 2 ? 'border-t lg:border-t-0 border-[var(--border)]' : ''} ${
                i >= 1 ? 'lg:border-l lg:border-[var(--border)]' : ''
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="text-[var(--accent)]">{item.icon}</span>
                <p className="font-display font-bold text-xl lg:text-2xl tracking-tight text-[var(--ink)]">
                  {item.label}
                </p>
              </div>
              <p className="font-body text-[13px] text-[var(--ink-dim)]">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}