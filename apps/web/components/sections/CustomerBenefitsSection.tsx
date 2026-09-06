'use client';

import { motion } from 'framer-motion';
import {
  Home,
  Navigation,
  Tag,
  BadgePercent,
  HeartHandshake,
  Wallet,
  DoorClosed,
  CalendarCheck,
  Smile,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

const whenOpen = [
  { icon: <Home size={16} />, title: 'Check shop status from home before leaving' },
  { icon: <Navigation size={16} />, title: 'Find nearest open shop in emergency' },
  { icon: <Tag size={16} />, title: 'Get daily offers from favorite shops' },
  { icon: <BadgePercent size={16} />, title: 'Save money with instant discounts' },
  { icon: <HeartHandshake size={16} />, title: 'Feel connected to local shops' },
  { icon: <Wallet size={16} />, title: 'Pay with confidence', caption: 'Payment confirmed instantly.' },
];

const whenClosed = [
  { icon: <DoorClosed size={16} />, title: 'Know shop is closed', caption: 'No wasted trips.' },
  { icon: <CalendarCheck size={16} />, title: 'Plan visit for tomorrow' },
  { icon: <Smile size={16} />, title: 'No frustration' },
];

const emergencyFlow = [
  'Customer needs medicine at night.',
  'Opens HERE OPEN. Sees all nearby shops.',
  'Filters by \u201COpen Now.\u201D',
  'Finds nearest open pharmacy.',
  'Goes directly. No wasted time.',
];

function BenefitRow({
  icon,
  title,
  caption,
  dark,
}: {
  icon: React.ReactNode;
  title: string;
  caption?: string;
  dark?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 py-3">
      <span
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border ${
          dark
            ? 'border-white/15 bg-white/[0.06] text-[var(--brand-accent)]'
            : 'border-[var(--border)] bg-[var(--section)] text-[var(--accent)]'
        }`}
      >
        {icon}
      </span>
      <span>
        <span className={`block font-display font-semibold text-[0.85rem] leading-snug ${dark ? 'text-[var(--brand-ink)]' : 'text-[var(--ink)]'}`}>
          {title}
        </span>
        {caption && (
          <span className={`block font-body text-[0.78rem] leading-relaxed ${dark ? 'text-[var(--brand-ink-muted)]' : 'text-[var(--ink)] opacity-80'}`}>
            {caption}
          </span>
        )}
      </span>
    </li>
  );
}

export function CustomerBenefitsSection() {
  return (
    <Section id="customers" className="bg-[var(--section-2)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.03)_0%,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FOR CUSTOMERS"
          title="WHAT CUSTOMERS GET"
          description="Whether the shop is open or closed, customers always know — before they step out."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto -mt-4 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {/* WHEN SHOP OPEN */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-[var(--a40)] bg-[var(--section)] p-7 sm:p-8 shadow-[0_0_50px_var(--a20)]"
          >
            <p className="font-display font-extrabold tracking-tight text-[1.5rem] text-[var(--accent)]">
              WHEN SHOP OPEN
            </p>
            <ul className="mt-4 divide-y divide-[var(--border)]">
              {whenOpen.map((b) => (
                <BenefitRow key={b.title} icon={b.icon} title={b.title} caption={b.caption} />
              ))}
            </ul>
          </motion.div>

          {/* WHEN SHOP CLOSED */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-[var(--dev-border)] bg-[var(--panel-deep)] p-7 sm:p-8"
          >
            <p className="font-display font-extrabold tracking-tight text-[1.5rem] text-[var(--brand-ink)]">
              WHEN SHOP CLOSED
            </p>
            <ul className="mt-4 divide-y divide-white/10">
              {whenClosed.map((b) => (
                <BenefitRow key={b.title} icon={b.icon} title={b.title} caption={b.caption} dark />
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mt-12 text-center font-display font-extrabold tracking-tight text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[var(--ink)]"
        >
          CUSTOMERS SAVE TIME. <span className="text-[var(--accent)]">SAVE MONEY.</span>
        </motion.p>

        {/* Emergency flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-2xl rounded-3xl border border-[var(--dev-border)] bg-[var(--panel-deep)] p-7 sm:p-10"
        >
          <p className="text-center font-display font-extrabold tracking-tight text-[1.3rem] sm:text-[1.6rem] text-[var(--brand-ink)]">
            EMERGENCY? <span className="text-[var(--brand-accent)]">FIND NEAREST OPEN SHOP</span>
          </p>

          <div className="relative mt-8">
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />
            <ol className="space-y-6">
              {emergencyFlow.map((step, i) => (
                <li key={step} className="relative flex items-start gap-4">
                  <span className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--panel-deep)] border border-[var(--brand-a40)] font-display font-bold text-[0.85rem] text-[var(--brand-accent)]">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 font-body text-[0.92rem] leading-relaxed text-[var(--brand-ink)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 text-center font-display font-extrabold tracking-tight text-[1.15rem] sm:text-[1.35rem] text-[var(--brand-ink)]">
            STATUS FROM HOME. <span className="text-[var(--brand-accent)]">SAVES TIME.</span>
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}