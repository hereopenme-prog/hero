'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Signal,
  Megaphone,
  Users,
  BellRing,
  Languages,
  SlidersHorizontal,
  PhoneCall,
  Flame,
  Radar,
  ShieldAlert,
  WifiOff,
  Smartphone,
  Moon,
  DoorClosed,
  PiggyBank,
  Sun,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

type Mode = 'open' | 'closed';

const openBenefits = [
  { icon: <Signal size={16} />, title: 'Live Open Status', caption: 'Customers know shop is open.' },
  { icon: <Megaphone size={16} />, title: 'Free Advertising', caption: 'Post instant offers to loyal customers daily.' },
  { icon: <Users size={16} />, title: 'Customer Connections', caption: 'Build lasting relationships.' },
  { icon: <BellRing size={16} />, title: 'Payment Alerts', caption: 'Get paid with confidence.' },
  { icon: <Languages size={16} />, title: 'Multi-Language Support', caption: 'Speaks your customer\u2019s language.' },
];

const closedBenefits = [
  { icon: <SlidersHorizontal size={16} />, title: 'Multi-Level Security Settings', caption: 'Customize protection.' },
  { icon: <PhoneCall size={16} />, title: 'Instant Thief Alerts', caption: 'Get calls and SMS instantly.' },
  { icon: <Flame size={16} />, title: '24/7 Instant Safety Alerts', caption: 'Fire and smoke detection.' },
  { icon: <Radar size={16} />, title: 'Motion Detection', caption: 'Instant alerts for any intrusion.' },
  { icon: <ShieldAlert size={16} />, title: 'Tamper Alerts', caption: 'Know if device is moved.' },
  { icon: <WifiOff size={16} />, title: 'Network Alerts', caption: 'Know if device goes offline.' },
  { icon: <Smartphone size={16} />, title: 'Security Dashboard', caption: 'Check shop status anytime from phone.' },
  { icon: <Moon size={16} />, title: 'Sleep With Peace of Mind', caption: 'The shop is watched all night.' },
  { icon: <DoorClosed size={16} />, title: 'Closed Status', caption: 'Customers know shop is closed.' },
  { icon: <PiggyBank size={16} />, title: 'Protect the Shop With Low Cost', caption: 'Security without the guard bill.' },
];

function BenefitRow({
  icon,
  title,
  caption,
  dark,
}: {
  icon: React.ReactNode;
  title: string;
  caption: string;
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
        <span className={`block font-display font-semibold text-[0.85rem] ${dark ? 'text-[var(--brand-ink)]' : 'text-[var(--ink)]'}`}>
          {title}
        </span>
        <span className={`block font-body text-[0.78rem] leading-relaxed ${dark ? 'text-[var(--brand-ink-muted)]' : 'text-[var(--ink)] opacity-80'}`}>
          {caption}
        </span>
      </span>
    </li>
  );
}

export function MerchantGrowthOsSection() {
  const [mode, setMode] = useState<Mode>('open');

  return (
    <Section id="merchant-growth-os" className="bg-[var(--section-2)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="ONE SMART DEVICE"
          title="THE MERCHANT GROWTH OS™"
          description="The merchant flips the toggle. The whole shop follows — growth by day, security by night."
        />

        {/* The toggle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto -mt-4 flex w-fit items-center gap-4"
        >
          <span className={`font-display font-bold text-[0.8rem] tracking-widest transition-colors ${mode === 'open' ? 'text-[var(--accent)]' : 'text-[var(--ink)] opacity-50'}`}>
            OPEN
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={mode === 'closed'}
            aria-label="Toggle shop mode between open and closed"
            onClick={() => setMode(mode === 'open' ? 'closed' : 'open')}
            className="relative h-11 w-24 rounded-full border border-[var(--border)] bg-[var(--section)] shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-colors"
          >
            <span
              className={`absolute top-1 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                mode === 'open' ? 'left-1 bg-[var(--accent)] text-[var(--accent-ink)]' : 'left-[calc(100%-2.5rem)] bg-[var(--panel-deep)] text-[var(--brand-accent)]'
              }`}
            >
              {mode === 'open' ? <Sun size={17} /> : <Moon size={17} />}
            </span>
          </button>
          <span className={`font-display font-bold text-[0.8rem] tracking-widest transition-colors ${mode === 'closed' ? 'text-[var(--ink)]' : 'text-[var(--ink)] opacity-50'}`}>
            CLOSED
          </span>
        </motion.div>

        {/* The two modes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {/* OPEN — Business Growth Mode */}
          <motion.div
            variants={fadeUp}
            className={`rounded-3xl border bg-[var(--section)] p-7 sm:p-8 transition-all duration-300 ${
              mode === 'open'
                ? 'border-[var(--a40)] shadow-[0_0_50px_var(--a20)]'
                : 'border-[var(--border)] opacity-80'
            }`}
          >
            <p className="font-display font-extrabold tracking-tight text-[1.5rem] text-[var(--accent)]">
              SHOP IS OPEN
            </p>
            <p className="mt-1 font-body font-semibold text-[0.75rem] tracking-[0.2em] text-[var(--ink)]">
              BUSINESS GROWTH MODE
            </p>
            <p className="mt-5 font-body font-bold text-[0.72rem] tracking-[0.18em] text-[var(--ink)] opacity-60">
              WHAT SHOPS GET
            </p>
            <ul className="mt-2 divide-y divide-[var(--border)]">
              {openBenefits.map((b) => (
                <BenefitRow key={b.title} icon={b.icon} title={b.title} caption={b.caption} />
              ))}
            </ul>
          </motion.div>

          {/* CLOSED — Security Mode */}
          <motion.div
            variants={fadeUp}
            className={`rounded-3xl border bg-[var(--panel-deep)] p-7 sm:p-8 transition-all duration-300 ${
              mode === 'closed'
                ? 'border-[var(--brand-a40)] shadow-[0_0_50px_var(--brand-a20)]'
                : 'border-[var(--dev-border)] opacity-80'
            }`}
          >
            <p className="font-display font-extrabold tracking-tight text-[1.5rem] text-[var(--brand-ink)]">
              SHOP IS CLOSED
            </p>
            <p className="mt-1 font-body font-semibold text-[0.75rem] tracking-[0.2em] text-[var(--brand-accent)]">
              SECURITY MODE
            </p>
            <p className="mt-5 font-body font-bold text-[0.72rem] tracking-[0.18em] text-[var(--brand-ink-muted)]">
              WHAT SHOPS GET
            </p>
            <ul className="mt-2 divide-y divide-white/10">
              {closedBenefits.map((b) => (
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
          ONE DEVICE. <span className="text-[var(--accent)]">TOTAL VALUE.</span>
        </motion.p>
      </Container>
    </Section>
  );
}