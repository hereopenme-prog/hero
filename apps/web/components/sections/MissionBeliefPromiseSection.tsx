'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Target, CheckCircle2, Heart, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';

const beliefs = [
  'Direct bank relationships',
  'Credit without brokerage fees',
  'Better-informed shop visits',
  'Connected safety monitoring',
];

function Card({
  icon: Icon,
  eyebrow,
  children,
  index,
}: {
  icon: LucideIcon;
  eyebrow: string;
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-3xl border bg-[var(--panel)] p-8 transition-colors duration-200 hover:border-[var(--a40)]"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--a12)]">
          <Icon size={22} strokeWidth={1.75} className="text-[var(--accent)]" />
        </div>
        <span className="font-display text-[12px] font-bold tracking-[0.18em] text-[var(--accent)]">
          {eyebrow}
        </span>
      </div>
      <div className="mt-7">{children}</div>
    </motion.article>
  );
}

export function MissionBeliefPromiseSection() {
  return (
    <Section id="mission" className="bg-[var(--bg)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card icon={Target} eyebrow="THE MISSION" index={0}>
            <h3 className="font-display text-[1.1rem] font-bold tracking-tight text-[var(--ink)]">
              Build a connected ecosystem that brings banks, merchants and customers together in real time.
            </h3>
          </Card>

          <Card icon={CheckCircle2} eyebrow="THE BELIEF" index={1}>
            <ul className="space-y-3.5">
              {beliefs.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--a12)]"
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={13} className="text-[var(--accent)]" />
                  </span>
                  <span className="font-body text-[14.5px] leading-snug text-[var(--ink)]">{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={Heart} eyebrow="THE PROMISE" index={2}>
            <h3 className="font-display text-[1.05rem] font-bold leading-snug tracking-tight text-[var(--ink)]">
              MSMEs are the heart of India's local economy.
            </h3>
            <p className="mt-5 font-body text-[14px] font-medium text-[var(--ink-muted)]">
              When a merchant grows...
            </p>
            <div className="mt-2 space-y-2">
              <p className="pl-4 font-display font-semibold text-[1rem] text-[var(--ink)]">A family grows.</p>
              <p className="pl-8 font-display font-semibold text-[1.1rem] text-[var(--ink)]">A community grows.</p>
              <p className="pl-12 font-display font-bold text-[1.25rem] text-[var(--accent)]">India grows.</p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}