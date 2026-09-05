'use client';

import { motion } from 'framer-motion';
import { Users, Store } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const stats = [
  {
    icon: <Users size={26} className="text-[var(--accent)]" strokeWidth={1.5} />,
    value: '90+ Crore',
    label: 'Internet Users in India',
    note: 'Bharat\'s online consumers have nowhere to confirm a local shop is open.',
  },
  {
    icon: <Store size={26} className="text-[var(--accent)]" strokeWidth={1.5} />,
    value: '6.3+ Crore',
    label: 'Small Businesses & MSMEs',
    note: 'The vast majority have no real-time visibility or smart monitoring.',
  },
];

export function MarketSection() {
  return (
    <Section id="market" className="bg-[var(--bg)]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="MARKET OPPORTUNITY"
          title="A LARGE AND UNDERCONNECTED SMB MARKET"
          description="Small businesses drive local commerce but lack the digital infrastructure to stay visible, connected and secure."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={scaleIn}
              className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--section)] p-8"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--a50)] to-transparent" />
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex items-center justify-center"
                  style={{ background: 'var(--a1A)', borderRadius: 12, padding: 11, width: 48, height: 48 }}
                >
                  {s.icon}
                </div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                  <circle cx="17" cy="17" r="16" stroke="var(--a30)" strokeWidth="1" />
                  <circle cx="17" cy="17" r="10" stroke="var(--a40)" strokeWidth="1" />
                  <circle cx="17" cy="17" r="4" fill="var(--accent)" />
                </svg>
              </div>
              <p className="font-display font-bold text-[2.6rem] leading-none text-[var(--ink)]">{s.value}</p>
              <p className="mt-2 font-display font-semibold text-[1rem] text-[var(--accent)]">{s.label}</p>
              <p className="mt-3 font-body text-[0.85rem] text-[var(--ink-muted)] leading-relaxed">{s.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-center font-body text-[0.72rem] text-[var(--ink-dim)]">
          Figures presented in the Here Open pitch deck.
        </p>
      </Container>
    </Section>
  );
}
