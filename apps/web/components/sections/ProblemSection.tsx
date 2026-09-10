'use client';

import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Search, Store, Eye, MessageSquare, ShieldAlert, Flame, Thermometer, BellOff } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger } from '@/lib/animations';

const businessRows = [
  {
    icon: BellOff,
    title: "Customers don't know when they are open.",
    result: 'Silent storefront',
  },
  {
    icon: Store,
    title: 'Businesses lose potential visits.',
    result: 'Missed footfall',
  },
  {
    icon: Eye,
    title: 'No simple real-time status visibility.',
    result: 'Invisible to nearby customers',
  },
  {
    icon: MessageSquare,
    title: 'No direct way to communicate updates and offers.',
    result: 'Messages never reach the customer',
  },
  {
    icon: ShieldAlert,
    title: 'Security concerns after closing.',
    result: 'Worry when away',
  },
  {
    icon: Flame,
    title: 'Fire and smoke risks can go unnoticed.',
    result: 'Undetected danger',
  },
  {
    icon: Thermometer,
    title: 'Temperature risks can go unnoticed.',
    result: 'Untracked conditions',
  },
  {
    icon: Search,
    title: 'Limited visibility into their connected business environment.',
    result: "Can't see the bigger picture",
  },
];

function ProblemRow({ row, children }: { row: { icon: LucideIcon; title: string; result: string }; children?: ReactNode }) {
  return (
    <motion.div variants={{ hidden: {}, visible: {} }} className="relative pl-11">
      <div className="absolute left-0 top-1.5 flex items-center justify-center h-8 w-8 rounded-full border border-[var(--a40)] bg-[var(--section-2)]">
        <row.icon size={14} className="text-[var(--accent)]" strokeWidth={1.5} />
      </div>
      {children}
      <p className="font-display font-semibold text-[1rem] lg:text-[1.1rem] text-[var(--ink)] tracking-tight leading-snug">
        {row.title}
      </p>
      <p className="mt-1.5 font-body text-[0.85rem] text-[var(--ink-muted)]">{row.result}</p>
    </motion.div>
  );
}

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-[var(--section-2)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE PROBLEM"
          title="THE PROBLEM IS SIMPLE."
          titleAccent="MERCHANTS FEEL IT MOST."
          description="Shops lose visits because customers never know when they're open. Merchants live without real-time information about their own business."
        />

        <div className="mx-auto max-w-3xl">
          {/* FOR MERCHANTS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg border border-[var(--a30)] bg-[var(--a0A)]">
                <Store size={15} className="text-[var(--accent)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-sm tracking-[0.24em] text-[var(--ink)]">FOR MERCHANTS</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[16px] top-4 bottom-4 w-px bg-[var(--a20)]" aria-hidden="true" />
              <div className="space-y-6">
                {businessRows.map((row) => (
                  <ProblemRow key={row.title} row={row} />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 pl-11"
            >
              <p className="font-display font-semibold text-[1rem] text-[var(--accent)] tracking-tight">
                Businesses lose visits, revenue and peace of mind.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}