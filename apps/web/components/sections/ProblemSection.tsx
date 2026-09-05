'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Timer, Tag, Store, Eye, MessageSquare, ShieldAlert, Flame, Thermometer, BellOff } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger } from '@/lib/animations';

const customerRows = [
  {
    icon: MapPin,
    title: 'They travel to a shop only to find it closed.',
    result: 'Wasted trips',
  },
  {
    icon: Search,
    title: "They don't know whether the business is open right now.",
    result: 'No real-time certainty',
  },
  {
    icon: Timer,
    title: 'They waste time, fuel and effort.',
    result: 'Lost time and expense',
  },
  {
    icon: Tag,
    title: 'They miss offers and announcements.',
    result: 'Missed opportunities',
  },
  {
    icon: Eye,
    title: 'They cannot reliably discover nearby businesses that are open.',
    result: 'Limited discovery',
  },
];

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

function ProblemRow({ row, children }: { row: { icon: typeof MapPin; title: string; result: string }; children?: ReactNode }) {
  return (
    <motion.div variants={{ hidden: {}, visible: {} }} className="relative pl-11">
      <div className="absolute left-0 top-1.5 flex items-center justify-center h-8 w-8 rounded-full border border-[#00D08440] bg-[#0A0F14]">
        <row.icon size={14} className="text-[#00D084]" strokeWidth={1.5} />
      </div>
      {children}
      <p className="font-display font-semibold text-[1rem] lg:text-[1.1rem] text-[#E8EDF2] tracking-tight leading-snug">
        {row.title}
      </p>
      <p className="mt-1.5 font-body text-[0.85rem] text-[#8A9BAE]">{row.result}</p>
    </motion.div>
  );
}

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-[#0A0F14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE PROBLEM"
          title="THE PROBLEM IS SIMPLE."
          titleAccent="BOTH SIDES FEEL IT."
          description="Customers waste trips. Businesses lose visits. Both sides live without real-time information."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-16 lg:gap-10 items-stretch">
          {/* LEFT — FOR CUSTOMERS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg border border-[#00D08430] bg-[#00D0840A]">
                <Search size={15} className="text-[#00D084]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-sm tracking-[0.24em] text-[#E8EDF2]">FOR CUSTOMERS</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[16px] top-4 bottom-4 w-px bg-[#00D08420]" aria-hidden="true" />
              <div className="space-y-9">
                {customerRows.map((row) => (
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
              <p className="font-display font-semibold text-[1rem] text-[#00D084] tracking-tight">
                Customers lose time and trust.
              </p>
            </motion.div>
          </motion.div>

          {/* CENTER CONNECTING NODE (desktop only) */}
          <div className="hidden lg:flex flex-col items-center justify-center" aria-hidden="true">
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-px bg-gradient-to-b from-transparent via-[#00D08440] to-[#00D08440]" />
              <div className="relative flex items-center justify-center h-12 w-12 rounded-full border border-[#00D08440] bg-[#0F1923]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#00D084] shadow-[0_0_12px_#00D08480]" />
                <span className="absolute -bottom-6 font-body font-semibold text-[0.6rem] tracking-[0.3em] text-[#A5B4C4]">
                  BOTH
                </span>
              </div>
              <div className="h-24 w-px bg-gradient-to-b from-[#00D08440] via-[#00D08440] to-transparent" />
            </div>
          </div>

          {/* RIGHT — FOR BUSINESS OWNERS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg border border-[#00D08430] bg-[#00D0840A]">
                <Store size={15} className="text-[#00D084]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-sm tracking-[0.24em] text-[#E8EDF2]">FOR BUSINESS OWNERS</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[16px] top-4 bottom-4 w-px bg-[#00D08420]" aria-hidden="true" />
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
              <p className="font-display font-semibold text-[1rem] text-[#00D084] tracking-tight">
                Businesses lose visits, revenue and peace of mind.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}