'use client';

import { motion } from 'framer-motion';
import { Store, Megaphone, Sparkles, Tag, Bell } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const chips = [
  { label: '10% OFF TODAY', icon: <Tag size={11} />, color: 'var(--accent)', bg: 'var(--a18)', border: 'var(--a40)' },
  { label: 'NEW ARRIVALS', icon: <Sparkles size={11} />, color: 'var(--ink)', bg: 'var(--ink-a10)', border: 'var(--border)' },
  { label: 'SPECIAL ANNOUNCEMENT', icon: <Bell size={11} />, color: '#FFD166', bg: '#FFD16618', border: '#FFD16640' },
];

export function BusinessCommunicationSection() {
  return (
    <Section id="business-comms" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="CUSTOMER-FACING"
          title="YOUR BUSINESS HAS SOMETHING TO SAY."
        />

        <div className="mx-auto mt-4 max-w-2xl">
          {/* Shop profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--section)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-6 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--a18)]">
                <Store size={18} className="text-[var(--accent)]" />
              </div>
              <div className="flex-1">
                <span className="font-display font-bold text-[0.95rem] tracking-wide text-[var(--ink)]">
                  SHARMA GENERAL STORE
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--a15)] border border-[var(--a40)] px-3 py-1">
                <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-body text-[0.6rem] font-bold tracking-[0.18em] text-[var(--accent)]">OPEN</span>
              </span>
            </div>

            {/* Content */}
            <div className="px-6 py-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--a12)] flex-shrink-0 mt-0.5">
                  <Megaphone size={15} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-display font-semibold text-[0.85rem] text-[var(--ink)]">Business Updates</p>
                  <p className="mt-1 font-body text-[0.8rem] text-[var(--ink-muted)] leading-relaxed">
                    Share what matters with your customers in real time.
                  </p>
                </div>
              </div>

              {/* Announcement chips */}
              <div className="flex flex-wrap gap-2 mt-2">
                {chips.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border"
                    style={{ borderColor: c.border, backgroundColor: c.bg }}
                  >
                    <span style={{ color: c.color }}>{c.icon}</span>
                    <span className="font-body text-[0.6rem] font-bold tracking-[0.16em]" style={{ color: c.color }}>
                      {c.label}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center font-body text-[0.95rem] text-[var(--ink-muted)] leading-relaxed max-w-lg mx-auto"
        >
          Share offers, new arrivals, announcements, opening updates and special notices with your customers.
        </motion.p>
      </Container>
    </Section>
  );
}
