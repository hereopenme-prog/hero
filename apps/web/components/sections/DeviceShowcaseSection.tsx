'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
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
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/app/components/Reveal';
import { fadeUp } from '@/lib/animations';

/* ── Fixed premium-dark palette for this section ── */
const ACCENT = '#00D084';

/* ── Ecosystem nodes around the device ── */
type EcoNode = {
  key: string;
  icon: LucideIcon;
  label: string;
  caption: string;
  paths: string[];
  x: number;
  y: number;
};

const ecoNodes: EcoNode[] = [
  {
    key: 'bank',
    icon: Landmark,
    label: 'Banks',
    caption: 'Grow together.',
    paths: ['bankToDevice'],
    x: 50,
    y: 11,
  },
  {
    key: 'merchant',
    icon: Store,
    label: 'Local Businesses',
    caption: 'More value, every day.',
    paths: ['deviceToMerchant'],
    x: 17,
    y: 76,
  },
  {
    key: 'customer',
    icon: Users,
    label: 'Customers',
    caption: 'Smarter choices. Easier visits.',
    paths: ['deviceToCustomer'],
    x: 83,
    y: 76,
  },
];

const ECO_PATHS: Record<string, string> = {
  bankToDevice: 'M50,18 C50,28 50,38 50,44',
  deviceToMerchant: 'M42,54 C34,62 24,69 17,72',
  deviceToCustomer: 'M58,54 C66,62 76,69 83,72',
};

const particles = [
  { id: 'p1', path: 'bankToDevice', dur: 4, delay: 0.8 },
  { id: 'p2', path: 'bankToDevice', dur: 4, delay: 2.6 },
  { id: 'p3', path: 'deviceToMerchant', dur: 4.5, delay: 0.3 },
  { id: 'p4', path: 'deviceToCustomer', dur: 4.5, delay: 1.6 },
  { id: 'p5', path: 'deviceToCustomer', dur: 4.5, delay: 3.2 },
];

const sequence = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const nodeFade = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Central Smart Merchant Device visual ─────────────────── */
function SmartDeviceCard({ reduced = false }: { reduced?: boolean }) {
  return (
    <div className="relative flex flex-col items-center">
      <div
        aria-hidden="true"
        className="absolute -inset-14 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 138, 0.16) 0%, transparent 62%)',
          animation: reduced ? 'none' : 'glowPulse 5s ease-in-out infinite',
        }}
      />
      <div
        className="relative rounded-3xl border border-[rgba(0,226,138,0.24)] px-6 py-6 text-center shadow-[0_34px_80px_rgba(0,0,0,0.55),0_0_70px_rgba(0,226,138,0.16)] sm:px-8"
        style={{
          background: 'linear-gradient(165deg, #0D1F16 0%, #060F0A 60%, #05100A 100%)',
          animation: reduced ? 'none' : 'floatSlow 7s ease-in-out infinite',
        }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,226,138,0.28)] px-3 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D084] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D084]" />
          </span>
          <span className="font-body text-[9px] font-semibold tracking-[0.22em] text-[#00D084]">
            BANK-BRANDED EXPERIENCE
          </span>
        </span>

        <p className="mt-4 font-display text-[11px] font-bold tracking-[0.32em] text-[#6FE0B0]" style={{ color: ACCENT }}>
          HERE OPEN
        </p>
        <p className="mt-1 font-display text-[13px] font-bold tracking-[0.14em] text-white">SMART MERCHANT DEVICE</p>

        <div className="mx-auto mt-4 w-full max-w-[230px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="font-body text-[9px] font-semibold tracking-[0.18em] text-[#8FA39A]">SHOP STATUS</p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,226,138,0.35)] bg-[rgba(0,226,138,0.1)] px-2 py-0.5">
              <span className="h-1 w-1 rounded-full bg-[#00D084]" />
              <span className="font-display text-[10px] font-bold tracking-[0.12em] text-[#00D084]">OPEN</span>
            </span>
          </div>
          <div className="mt-2.5 border-t border-white/10 pt-2.5">
            <div className="flex items-center justify-between">
              <span className="font-body text-[9px] tracking-[0.16em] text-[#8FA39A]">CONFIDENCE</span>
              <span className="font-body text-[9px] font-semibold tracking-[0.12em] text-[#00D084]">HIGH</span>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
              <span className="h-1 flex-1 rounded-full bg-[#00D084]" />
              <span className="h-1 flex-1 rounded-full bg-[#00D084]" />
              <span className="h-1 flex-1 rounded-full bg-[#00D084]/50" />
              <span className="h-1 flex-1 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        <p className="mt-4 font-body text-[9px] tracking-[0.24em] text-[#5F7268]">ILLUSTRATIVE DEVICE DESIGN</p>
      </div>
    </div>
  );
}

/* ── Ecosystem node ───────────────────────────────────────── */
function EcoNode({
  node,
  active,
  onActivate,
  onClear,
  role = 'button',
}: {
  node: EcoNode;
  active: boolean;
  onActivate: () => void;
  onClear: () => void;
  role?: 'button' | 'cell';
}) {
  return (
    <div
      className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <div
        role={role}
        tabIndex={role === 'button' ? 0 : undefined}
        aria-label={`${node.label} — ${node.caption}`}
        onMouseEnter={onActivate}
        onMouseLeave={onClear}
        onFocus={onActivate}
        onBlur={onClear}
        className={`group/node flex flex-col items-center rounded-2xl border px-4 py-3 text-center transition-all duration-200 ${
          active
            ? 'border-[rgba(0,226,138,0.42)] bg-[rgba(0,226,138,0.1)]'
            : 'border-white/[0.09] bg-white/[0.03] hover:border-[rgba(0,226,138,0.28)] hover:bg-[rgba(0,226,138,0.06)]'
        }`}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0A1510]">
          <node.icon size={19} strokeWidth={1.5} style={{ color: ACCENT }} />
        </span>
        <p className="mt-2.5 font-display text-[11px] font-bold tracking-[0.1em] uppercase text-white">
          {node.label}
        </p>
        <p className="mt-1 max-w-[150px] font-body text-[11px] leading-snug text-[#8FA39A]">{node.caption}</p>
      </div>
    </div>
  );
}

/* ── Desktop ecosystem network ────────────────────────────── */
function DesktopNetwork({
  active,
  onActivate,
  onClear,
  reduced,
}: {
  active: string | null;
  onActivate: (k: string) => void;
  onClear: () => void;
  reduced: boolean;
}) {
  const isPathHot = (pathId: string) =>
    active === 'device' || (active !== null && (ecoNodes.find((n) => n.key === active)?.paths ?? []).includes(pathId));

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative h-[560px] w-full lg:h-[600px]">
      {/* Ambient glow behind center */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,226,138,0.12) 0%, transparent 60%)' }}
      />

      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ecoLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E28A" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00E28A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00E28A" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <g>
          {Object.entries(ECO_PATHS).map(([id, d]) => {
            const hot = isPathHot(id);
            return (
              <path
                key={id}
                d={d}
                fill="none"
                stroke="url(#ecoLine)"
                strokeLinecap="round"
                pathLength={1}
                vectorEffect="non-scaling-stroke"
                style={{
                  opacity: hot ? 1 : 0.5,
                  strokeWidth: hot ? 2 : 1.4,
                  strokeDasharray: 1,
                  strokeDashoffset: inView ? 0 : 1,
                  transition: 'opacity 0.25s ease, stroke-width 0.25s ease, stroke-dashoffset 1.8s ease',
                }}
              />
            );
          })}
        </g>

        {!reduced &&
          particles.map((p) => (
            <circle
              key={p.id}
              r={1.5}
              fill="#00D084"
              style={{
                offsetPath: `path('${ECO_PATHS[p.path]}')`,
                animation: `ecoFlow ${p.dur}s linear ${p.delay}s infinite`,
                filter: 'drop-shadow(0 0 3px rgba(0, 226, 138, 0.9))',
              }}
            />
          ))}
      </svg>

      {/* Nodes */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sequence}>
        {ecoNodes.map((n) => (
          <motion.div key={n.key} variants={nodeFade} style={{ position: 'absolute', inset: 0 }}>
            <EcoNode node={n} active={active === n.key} onActivate={() => onActivate(n.key)} onClear={onClear} />
          </motion.div>
        ))}
      </motion.div>

      {/* Central device */}
      <div
        className="absolute left-1/2 top-[52%] z-20 -translate-x-1/2 -translate-y-1/2"
        onMouseEnter={() => onActivate('device')}
        onMouseLeave={onClear}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={nodeFade}
        >
          <div className={active ? 'transition duration-300' : 'transition duration-300 saturate-90 brightness-95'}>
            <SmartDeviceCard reduced={reduced} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Mobile / tablet vertical flow ────────────────────────── */
function VerticalFlow({ reduced }: { reduced: boolean }) {
  const steps = [
    { node: ecoNodes[0], before: false },
    { node: null, before: false },
    { node: ecoNodes[1], before: true },
    { node: ecoNodes[2], before: true },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sequence}
      className="mx-auto flex w-full max-w-[320px] flex-col items-center"
    >
      <motion.div variants={nodeFade} className="flex flex-col items-center">
        <EcoNode node={ecoNodes[0]} active={false} onActivate={() => {}} onClear={() => {}} role="cell" />
        <div className="relative h-12 w-px bg-white/10">
          {!reduced && <span className="flow-dot-down" />}
        </div>
      </motion.div>

      <motion.div variants={nodeFade} className="my-2">
        <SmartDeviceCard reduced={reduced} />
      </motion.div>

      {steps
        .filter((s) => s.node !== null)
        .map((s) => (
          <motion.div key={s.node!.key} variants={nodeFade} className="flex flex-col items-center">
            {s.before && (
              <div className="relative h-12 w-px bg-white/10">
                {!reduced && <span className="flow-dot-down" />}
              </div>
            )}
            <EcoNode node={s.node!} active={false} onActivate={() => {}} onClear={() => {}} role="cell" />
          </motion.div>
        ))}
    </motion.div>
  );
}

/* ── Device-led capability chain ──────────────────────────── */
const capabilityFlow = [
  { icon: Smartphone, label: 'Shop status' },
  { icon: MapPin, label: 'Discovery' },
  { icon: Eye, label: 'Visibility' },
  { icon: Megaphone, label: 'Offers' },
  { icon: ShieldAlert, label: 'Alerts' },
];

function CapabilityStrip() {
  return (
    <div className="mt-14 border-t border-white/[0.08] pt-9 lg:mt-20">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-0 lg:justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,226,138,0.3)] bg-[rgba(0,226,138,0.08)] px-4 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D084] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D084]" />
          </span>
          <span className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-white">One Device</span>
        </span>

        <div className="flex flex-wrap items-center justify-center gap-y-3">
          {capabilityFlow.flatMap((c, i) => [
            <motion.span
              key={`chip-${c.label}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="group flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-2 transition-all duration-200 hover:border-[rgba(0,226,138,0.3)]"
            >
              <c.icon size={14} strokeWidth={1.6} style={{ color: ACCENT }} />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#B6C6BD] group-hover:text-white">
                {c.label}
              </span>
            </motion.span>,
            i < capabilityFlow.length - 1 ? (
              <span key={`arrow-${i}`} className="mx-3 hidden text-[#2E4A3C] lg:block" aria-hidden>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            ) : null,
          ])}
        </div>
      </div>
    </div>
  );
}

/* ── Shared feature card for the three connection areas ───── */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full rounded-2xl border border-white/[0.09] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,226,138,0.32)] hover:bg-white/[0.05]">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0A1510] transition-transform duration-300 group-hover:scale-105">
          <Icon size={19} strokeWidth={1.6} style={{ color: ACCENT }} />
        </span>
        <h4 className="mt-4 font-display text-sm font-semibold leading-snug text-white">{title}</h4>
        <p className="mt-2 font-body text-[13px] leading-relaxed text-[#8FA39A]">{desc}</p>
      </div>
    </Reveal>
  );
}

/* ── Connection panel header (audience intro + device link) ─ */
function ConnectionHeader({
  icon: Icon,
  eyebrow,
  heading,
  flowLabel,
}: {
  icon: LucideIcon;
  eyebrow: string;
  heading: string;
  flowLabel: string;
}) {
  return (
    <div>
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(0,226,138,0.28)] bg-[rgba(0,226,138,0.08)]">
        <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
      </span>
      <p className="mt-6 font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00D084]">{eyebrow}</p>
      <h3 className="mt-3 font-display text-[1.8rem] font-bold leading-tight text-white sm:text-4xl">{heading}</h3>

      <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D084] opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D084]" />
        </span>
        <span className="font-body text-[9px] font-semibold tracking-[0.18em] uppercase text-[#A9BBB2]">
          One Device <ArrowRight className="inline h-3 w-3" /> {flowLabel}
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
    <Section className="bg-[#0A0F14]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <ConnectionHeader icon={Landmark} eyebrow="For Banks" heading="Grow together." flowLabel="Banks" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {bankCapabilities.map((c, i) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} delay={(i % 3) * 70} />
            ))}
          </div>
        </div>
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
    <Section className="bg-[#06100A]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <ConnectionHeader icon={Store} eyebrow="For Merchants" heading="More value, every day." flowLabel="Local Businesses" />
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-5 rounded-3xl border border-[rgba(0,226,138,0.24)] bg-gradient-to-br from-[rgba(0,226,138,0.12)] via-[rgba(0,226,138,0.05)] to-transparent p-6 sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(0,226,138,0.3)] bg-[rgba(0,226,138,0.1)]">
                  <Sparkles size={22} strokeWidth={1.5} style={{ color: ACCENT }} />
                </span>
                <div className="min-w-0">
                  <h4 className="font-display text-lg font-bold text-white">A stronger offering</h4>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#8FA39A]">
                    Offer useful services beyond payment confirmation.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {merchantBenefits.map((c, i) => (
                <FeatureCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} delay={(i % 3) * 70} />
              ))}
            </div>
          </div>
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
    <Section className="bg-[#0A0F14]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <ConnectionHeader icon={Users} eyebrow="For Customers" heading="Smarter choices. Easier visits." flowLabel="Customers" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {customerBenefits.map((c, i) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} delay={(i % 4) * 70} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ── Closing statement + CTA + disclaimer ─────────────────── */
function ClosingBand() {
  return (
    <Section className="bg-[#06100A] overflow-hidden">
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
            <h3 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-[-0.015em] text-white sm:text-5xl">
              One device.
              <br />
              <span style={{ color: ACCENT }}>Three stronger relationships.</span>
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-xl font-body text-[15px] leading-relaxed text-[#9AA9A1]">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                See How It Works
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-12 max-w-2xl border-t border-white/[0.08] pt-8 font-body text-xs leading-relaxed text-[#6B7D74]">
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
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Hero: intro + device + ecosystem + capabilities */}
      <Section id="device" className="bg-[#06100A] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 68% 42%, rgba(0,226,138,0.07) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(0,124,205,0.05) 0%, transparent 50%)',
          }}
        />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(0,226,138,0.3)] bg-[rgba(0,226,138,0.08)] px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D084]" />
              <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: ACCENT }}>
                One Device
              </span>
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="mt-7 font-display text-[2.2rem] font-bold leading-[1.1] tracking-[-0.015em] text-white sm:text-[2.8rem] lg:text-[3.4rem]"
            >
              One device. <span style={{ color: ACCENT }}>Three stronger relationships.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl font-body text-[15px] leading-[1.75] text-[#9AA9A1] lg:text-base"
            >
              Connect banks, local businesses and customers through a bank-branded smart device.
            </motion.p>
          </div>

          {/* Ecosystem with device at the center */}
          <div className="mt-10">
            <div className="hidden lg:block">
              <DesktopNetwork active={active} onActivate={setActive} onClear={() => setActive(null)} reduced={reduced ?? false} />
            </div>
            <div className="lg:hidden">
              <VerticalFlow reduced={reduced ?? false} />
            </div>
          </div>

          <CapabilityStrip />
        </Container>
      </Section>

      <BanksBand />
      <MerchantsBand />
      <CustomersBand />
      <ClosingBand />
    </div>
  );
}