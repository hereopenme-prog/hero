'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Landmark,
  Store,
  Users,
  Smartphone,
  Eye,
  MapPin,
  Megaphone,
  ShieldAlert,
  Flame,
  UserPlus,
  Repeat,
  Banknote,
  Coins,
  Link2,
  PiggyBank,
  Sparkles,
  Star,
  Navigation,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PNumberedRows } from '@/components/sections/partnerLook';
import { Reveal } from '@/app/components/Reveal';
import { fadeUp, scaleIn, stagger } from '@/lib/animations';

/* ── Fixed premium-dark palette for this section ── */
const ACCENT = 'var(--accent)';

/* Fixed deep-navy hub canvas (both themes, per the reference) */
const HUB_NAVY = '#0B1B34';

/* ── HERE OPEN hub relationship diagram ───────────────────────────
   BANKS (top) → HERE OPEN (center) → MSMEs (bottom-left) +
   CUSTOMERS (bottom-right). Fixed deep-navy canvas in both themes,
   per the reference. Lines run center-to-center and hide beneath the
   opaque white circles; labels sit clear of every line. */
function HubDiagram() {
  const reduceMotion = useReducedMotion() ?? false;
  // Opacity-only entrance (pathLength draw animations can fragment
  // under non-uniform SVG scaling — plain lines always render solid)
  const lineAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      };

  return (
    <div
      role="img"
      aria-label="Relationship diagram: Banks connects to Here Open, which connects to MSMEs and Customers"
      className="relative mx-auto w-full max-w-[680px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="relative h-[560px] sm:h-[620px] lg:h-[660px]"
      >
        {/* Concentric backdrop rings + glow */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute left-1/2 top-[56%] aspect-square w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
          <div className="absolute left-1/2 top-[56%] aspect-square w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
          <div className="absolute left-1/2 top-[56%] aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.1]" />
          <div
            className="absolute left-1/2 top-[56%] aspect-square w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(120,160,255,0.10) 0%, transparent 62%)' }}
          />
        </div>

        {/* Connecting lines (behind the nodes) */}
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 z-[1] h-full w-full">
          {/* BANKS → hub: tuned per breakpoint so it starts just below the label */}
          <motion.line x1="50" y1="20" x2="50" y2="56" stroke="rgba(255,255,255,0.28)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeLinecap="round" className="block sm:hidden" viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} {...lineAnim} />
          <motion.line x1="50" y1="21.5" x2="50" y2="56" stroke="rgba(255,255,255,0.28)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeLinecap="round" className="hidden sm:block lg:hidden" viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} {...lineAnim} />
          <motion.line x1="50" y1="23.5" x2="50" y2="56" stroke="rgba(255,255,255,0.28)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeLinecap="round" className="hidden lg:block" viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} {...lineAnim} />
          {/* hub → MSMEs / CUSTOMERS */}
          <motion.line x1="50" y1="56" x2="13" y2="84.5" stroke="rgba(255,255,255,0.28)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeLinecap="round" viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} {...lineAnim} />
          <motion.line x1="50" y1="56" x2="87" y2="84.5" stroke="rgba(255,255,255,0.28)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeLinecap="round" viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} {...lineAnim} />
        </svg>

        {/* BANKS — top */}
        <div className="absolute left-1/2 top-[2%] z-10 -translate-x-1/2">
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:h-[88px] sm:w-[88px] lg:h-[104px] lg:w-[104px]">
              <Landmark className="h-[42%] w-[42%]" strokeWidth={1.6} style={{ color: '#3B82F6' }} />
            </span>
            <span className="font-display text-[10px] font-bold tracking-[0.18em] text-white sm:text-[11px] lg:text-xs">
              BANKS
            </span>
          </motion.div>
        </div>

        {/* HERE OPEN — center */}
        <div className="absolute left-1/2 top-[56%] z-10 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            variants={scaleIn}
            className="flex h-[168px] w-[168px] flex-col items-center justify-center gap-2 rounded-full bg-white text-center shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:h-[208px] sm:w-[208px] lg:h-[240px] lg:w-[240px]"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl sm:h-14 sm:w-14"
              style={{ background: 'linear-gradient(135deg, var(--accent), #00B4D8)' }}
            >
              <span className="font-display font-bold text-white" style={{ fontSize: '1.1rem' }}>
                H
              </span>
            </span>
            <span className="font-display text-sm font-bold tracking-[0.14em] sm:text-base lg:text-lg" style={{ color: HUB_NAVY }}>
              HERE OPEN
            </span>
          </motion.div>
        </div>

        {/* MSMEs — bottom left */}
        <div className="absolute bottom-[3%] left-[4%] z-10 sm:left-[6%]">
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:h-[88px] sm:w-[88px] lg:h-[104px] lg:w-[104px]">
              <Store className="h-[42%] w-[42%]" strokeWidth={1.6} style={{ color: '#0B7A4B' }} />
            </span>
            <span className="font-display text-[10px] font-bold tracking-[0.18em] text-white sm:text-[11px] lg:text-xs">
              MSMEs
            </span>
          </motion.div>
        </div>

        {/* CUSTOMERS — bottom right */}
        <div className="absolute bottom-[3%] right-[4%] z-10 sm:right-[6%]">
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:h-[88px] sm:w-[88px] lg:h-[104px] lg:w-[104px]">
              <Users className="h-[42%] w-[42%]" strokeWidth={1.6} style={{ color: '#7A5CD8' }} />
            </span>
            <span className="font-display text-[10px] font-bold tracking-[0.18em] text-white sm:text-[11px] lg:text-xs">
              CUSTOMERS
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Shared feature rows are rendered with PNumberedRows (partnership look) ── */

/* ── "One Device → X" flow pill (kept content, centered) ─────────────── */
function FlowPill({ label }: { label: string }) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--od-card-border)] bg-[var(--od-card)] px-3 py-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D084] opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D084]" />
        </span>
        <span className="font-body text-[9px] font-semibold tracking-[0.18em] uppercase text-[var(--ink-muted)]">
          One Device <ArrowRight className="inline h-3 w-3" /> {label}
        </span>
      </div>
    </div>
  );
}

/* ── Band: Banks ──────────────────────────────────────────── */
const bankCapabilities = [
  { icon: UserPlus, title: 'Merchant acquisition', desc: 'Give local businesses more reasons to choose your bank.' },
  { icon: Repeat, title: 'Daily transactions', desc: 'Build relationships around everyday payment activity.' },
  { icon: Banknote, title: 'Merchant lending', desc: 'Connect eligible merchants with suitable bank-led credit.' },
  { icon: Coins, title: 'Cash-credit opportunities', desc: 'Give loans directly without brokerage fees to fintechs or other intermediaries.' },
  { icon: Link2, title: 'Direct relationships', desc: 'Build trust through ongoing merchant engagement.' },
  { icon: PiggyBank, title: 'CASA growth potential', desc: 'Deepen account relationships and deposit engagement.' },
];

function BanksBand() {
  return (
    <Section className="bg-[var(--od-band2)]">
      <Container>
        <SectionHeading eyebrow="For Banks" title="Grow together." />
        <div className="-mt-8 mb-10">
          <FlowPill label="Banks" />
        </div>
        <PNumberedRows
          items={bankCapabilities.map((c) => ({ title: c.title, caption: c.desc }))}
        />
      </Container>
    </Section>
  );
}

/* ── Band: Merchants ──────────────────────────────────────── */
const merchantBenefits = [
  { icon: Smartphone, title: 'One-tap shop status', desc: 'Control the device from your mobile. Share open or closed status on the public app with a confidence score.' },
  { icon: MapPin, title: 'Local discovery', desc: 'Help nearby customers find your business.' },
  { icon: Eye, title: 'Business visibility', desc: 'Promote your shop through the Here Open network.' },
  { icon: Megaphone, title: 'Direct offers', desc: 'Share offers and discounts with interested customers.' },
  { icon: ShieldAlert, title: 'Theft-risk alerts', desc: 'Stay informed with supported shop-security alerts.' },
  { icon: Flame, title: 'Fire & smoke alerts', desc: 'Receive safety notifications where supported.' },
];

function MerchantsBand() {
  return (
    <Section className="bg-[var(--od-band)]">
      <Container>
        <SectionHeading eyebrow="For Merchants" title="More value," titleAccent="every day." />
        <div className="-mt-8 mb-10">
          <FlowPill label="Local Businesses" />
        </div>

        <Reveal>
          <div className="mx-auto flex max-w-3xl items-center gap-5 rounded-3xl border border-[rgba(0,226,138,0.24)] bg-gradient-to-br from-[rgba(0,226,138,0.12)] via-[rgba(0,226,138,0.05)] to-transparent p-6 sm:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(0,226,138,0.3)] bg-[rgba(0,226,138,0.1)]">
              <Sparkles size={22} strokeWidth={1.5} style={{ color: ACCENT }} />
            </span>
            <div className="min-w-0">
              <h4 className="font-display text-lg font-bold text-[var(--ink)]">A stronger offering</h4>
              <p className="mt-1 font-body text-[13px] leading-relaxed text-[var(--ink-2)]">
                Offer useful services beyond payment confirmation.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-4">
          <PNumberedRows
            items={merchantBenefits.map((c) => ({ title: c.title, caption: c.desc }))}
          />
        </div>
      </Container>
    </Section>
  );
}

/* ── Band: Customers ──────────────────────────────────────── */
const customerBenefits = [
  { icon: Eye, title: 'Live shop status', desc: "Check a shop's reported status before travelling." },
  { icon: Star, title: 'Relevant offers', desc: 'Discover offers from the businesses you follow.' },
  { icon: Navigation, title: 'Smarter journeys', desc: 'Plan visits to help save time, fuel and effort.' },
  { icon: CheckCircle2, title: 'More confident visits', desc: 'Make everyday shopping easier with timely updates.' },
];

function CustomersBand() {
  return (
    <Section className="bg-[var(--od-band2)]">
      <Container>
        <SectionHeading eyebrow="For Customers" title="Smarter choices." titleAccent="Easier visits." />
        <div className="-mt-8 mb-10">
          <FlowPill label="Customers" />
        </div>
        <PNumberedRows
          items={customerBenefits.map((c) => ({ title: c.title, caption: c.desc }))}
        />
      </Container>
    </Section>
  );
}

/* ── Closing statement + CTA + disclaimer ─────────────────── */
function ClosingBand() {
  return (
    <Section className="bg-[var(--od-band)] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,226,138,0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(0,124,205,0.05) 0%, transparent 50%)',
        }}
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h3 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-[-0.015em] text-[var(--ink)] sm:text-5xl">
              One device.
              <br />
              <span style={{ color: ACCENT }}>Three stronger relationships.</span>
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-xl font-body text-[15px] leading-relaxed text-[var(--ink-2)]">
              Connect banks, local businesses and customers through a bank-branded smart device.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00D084] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#04140C] transition-all duration-200 hover:bg-[#3AE6A1] hover:-translate-y-0.5"
              >
                Discuss a bank partnership
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--od-line)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                See How It Works
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-12 max-w-2xl border-t border-[var(--od-line)] pt-8 font-body text-xs leading-relaxed text-[var(--ink-muted)]">
              Credit is subject to bank eligibility and approval. Monitoring requires supported hardware, connectivity and configuration.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export function DeviceShowcaseSection() {
  return (
    <div className="relative">
      {/* Hub diagram hero (fixed deep-navy canvas, both themes) */}
      <Section id="device" className="overflow-hidden bg-[#0B1B34]">
        <Container className="relative z-10">
          <HubDiagram />
        </Container>
      </Section>

      <BanksBand />
      <MerchantsBand />
      <CustomersBand />
      <ClosingBand />
    </div>
  );
}