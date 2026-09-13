'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  Clock,
  EyeOff,
  ShieldAlert,
  MapPin,
  Siren,
  Layers,
  Landmark,
  UserPlus,
  UserMinus,
  Banknote,
  Link2Off,
  FileSearch,
  type LucideIcon,
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/app/components/Container';
import { fadeUp, stagger } from '@/lib/animations';

/* ── Scoped light palette (Problem section only) ─────────────────────── */
const C = {
  card: '#FFFFFF',
  hair: '#E8EBF0',
  hairStrong: '#D4DAE2',
  ink: '#191D26',
  ink2: '#3C4450',
  muted: '#6E7787',
  faint: '#97A1AF',
  accent: '#0E9F6E',
  accentSoft: 'rgba(14,159,110,0.08)',
  accentBorder: 'rgba(14,159,110,0.22)',
  shadow: '0 1px 2px rgba(15,23,42,0.04), 0 10px 30px rgba(15,23,42,0.06)',
  shadowHover: '0 2px 4px rgba(15,23,42,0.05), 0 16px 40px rgba(15,23,42,0.10)',
};

/* ── Shared pieces ────────────────────────────────────────────────────── */

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span
    className="font-display block text-lg font-bold uppercase tracking-[0.14em] sm:text-xl"
    style={{ color: C.accent }}
  >
    {children}
  </span>
);

const ProblemRows = ({ items }: { items: { title: string; desc: string; icon?: LucideIcon }[] }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={stagger}
    className="max-w-3xl"
  >
    {items.map((item, i) => (
      <motion.div
        key={item.title}
        variants={fadeUp}
        className="flex items-start gap-4 border-b py-6 last:border-b-0 sm:gap-6"
        style={{ borderColor: C.hair }}
      >
        <span className="font-display w-12 flex-shrink-0 font-extrabold leading-none text-[1.5rem] lg:text-[1.8rem]" style={{ color: C.accent }}>
          {String(i + 1).padStart(2, '0')}
        </span>
        {item.icon && (
          <span
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border"
            style={{ borderColor: C.accentBorder, backgroundColor: C.accentSoft }}
          >
            <item.icon size={20} strokeWidth={1.7} style={{ color: C.accent }} aria-hidden="true" />
          </span>
        )}
        <div className="min-w-0">
          <p className="font-display text-[0.95rem] font-bold leading-tight tracking-tight lg:text-[1.05rem]" style={{ color: C.ink }}>
            {item.title}
          </p>
          <p className="mt-1.5 font-body text-[0.85rem] leading-relaxed" style={{ color: C.muted }}>
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

/* ── Data ─────────────────────────────────────────────────────────────── */

const bankChallenges: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Layers,
    title: 'Limited differentiation',
    desc: 'Similar soundboxes give merchants few reasons to choose one bank over another.',
  },
  {
    icon: Landmark,
    title: 'Underused bank strengths',
    desc: 'Banking capabilities do not always translate into daily merchant value.',
  },
  {
    icon: UserPlus,
    title: 'Missed merchant acquisition',
    desc: 'A weak device proposition can limit new merchant relationships.',
  },
  {
    icon: UserMinus,
    title: 'Weak merchant retention',
    desc: 'Limited everyday value makes the relationship easier to replace.',
  },
  {
    icon: Landmark,
    title: 'CASA relationship risk',
    desc: 'Losing the merchant touchpoint can weaken deposit relationships.',
  },
  {
    icon: Banknote,
    title: 'Loan distribution',
    desc: 'Intermediated loan distribution can increase acquisition costs.',
  },
  {
    icon: Link2Off,
    title: 'Weaker direct relationships',
    desc: "Third-party channels can distance banks from the merchant's daily business.",
  },
  {
    icon: FileSearch,
    title: 'Limited lending context',
    desc: 'Fragmented business information can limit the context for credit assessment.',
  },
];

const merchantProblems: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Clock,
    title: 'TRUST LOSS & MISSED FOOTFALL',
    desc: 'Uncertain opening times can disappoint customers and erode trust. Shops lose potential visits when people cannot tell whether they are open.',
  },
  {
    icon: EyeOff,
    title: 'LOW VISIBILITY & MISSED UPDATES',
    desc: 'Without a current digital presence, nearby businesses remain hard to find. Time-sensitive offers and announcements may not reach the right customers.',
  },
  {
    icon: ShieldAlert,
    title: 'THEFT AND FIRE WORRIES',
    desc: 'Intrusion, fire and smoke hazards can go unnoticed without suitable monitoring, detection, alerts and a way to respond.',
  },
];

const customerProblems: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Clock,
    title: 'NO REAL-TIME CERTAINTY',
    desc: 'Opening hours do not confirm whether a shop is open right now. A trip to a closed shop can waste time, fuel and effort.',
  },
  {
    icon: MapPin,
    title: 'LIMITED DISCOVERY & MISSED OFFERS',
    desc: 'Finding a nearby business that is open and ready to serve can be difficult. Useful offers and announcements may never reach interested customers.',
  },
  {
    icon: Siren,
    title: 'UNCERTAINTY IN URGENT MOMENTS',
    desc: 'Urgent needs are harder to meet when open nearby shops are difficult to identify.',
  },
];

/* ── Section ──────────────────────────────────────────────────────────── */

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-[#F7F8FA] !pt-28 !pb-20 lg:!pt-44 lg:!pb-28">
      <Container>
        <div className="mx-auto max-w-[1080px]">
          {/* ── Section introduction ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <Eyebrow>PROBLEMS</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-8 font-display font-bold leading-[1.05] tracking-[-0.03em] text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem]"
              style={{ color: C.ink }}
            >
              The local connection is broken.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl font-body text-[15.5px] leading-relaxed lg:text-base"
              style={{ color: C.muted }}
            >
              Shops need visibility, customer connection and confidence after hours. People need certainty, convenient discovery and useful local information.
            </motion.p>
          </motion.div>

          {/* ── BANKS ── */}
          <div className="mx-auto mt-16 max-w-3xl lg:mt-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Eyebrow>BANKS</Eyebrow>
              </motion.div>
            </motion.div>

            <ProblemRows items={bankChallenges} />
          </div>

          {/* ── MERCHANTS ── */}
          <div className="mx-auto mt-14 max-w-3xl lg:mt-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Eyebrow>MERCHANTS</Eyebrow>
              </motion.div>
            </motion.div>

            <ProblemRows items={merchantProblems} />
          </div>

          {/* ── CUSTOMERS ── */}
          <div className="mx-auto mt-14 max-w-3xl lg:mt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Eyebrow>CUSTOMERS</Eyebrow>
              </motion.div>
            </motion.div>

            <ProblemRows items={customerProblems} />
          </div>
        </div>
      </Container>
    </Section>
  );
}