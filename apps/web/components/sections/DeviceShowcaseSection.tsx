'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Landmark,
  Cpu,
  Store,
  Users,
  CreditCard,
  Eye,
  Megaphone,
  ShieldCheck,
  Compass,
  Network,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

/* ── Fixed premium-dark palette for this section ── */
const ACCENT = '#00D084';
const INK = '#F2F6F4';
const MUTED = '#8FA39A';

type EcoNode = {
  key: string;
  icon: LucideIcon;
  label: string;
  caption: string;
  tooltip: string[];
  paths: string[];
  x: number;
  y: number;
};

const ecoNodes: EcoNode[] = [
  {
    key: 'bank',
    icon: Landmark,
    label: 'Bank',
    caption: 'Owns the merchant relationship.',
    tooltip: ['Owns the merchant relationship', 'Can brand and deploy the device'],
    paths: ['bankToHereOpen'],
    x: 42,
    y: 8,
  },
  {
    key: 'hereopen',
    icon: Cpu,
    label: 'Here Open Technology',
    caption: 'Device + platform ecosystem.',
    tooltip: ['Device infrastructure', 'Platform', 'Connected ecosystem'],
    paths: ['bankToHereOpen', 'hereOpenToDevice'],
    x: 79,
    y: 33,
  },
  {
    key: 'merchant',
    icon: Store,
    label: 'Merchant',
    caption: 'Payment, visibility and communication.',
    tooltip: ['Payment', 'Visibility', 'Communication'],
    paths: ['deviceToMerchant'],
    x: 13,
    y: 70,
  },
  {
    key: 'customer',
    icon: Users,
    label: 'Customer',
    caption: 'A better local business experience.',
    tooltip: ['Discovery', 'Convenience', 'Real-time information'],
    paths: ['deviceToCustomer'],
    x: 70,
    y: 72,
  },
];

const ECO_PATHS: Record<string, string> = {
  bankToHereOpen: 'M42,14 C 64,9 78,21 79,29',
  hereOpenToDevice: 'M79,37 C 74,54 58,52 48,50',
  deviceToMerchant: 'M36,50 C 26,57 18,62 13,66',
  deviceToCustomer: 'M48,51 C 57,59 64,65 68,69',
};

const particles = [
  { id: 'p1', path: 'bankToHereOpen', dur: 4, delay: 0.9 },
  { id: 'p2', path: 'bankToHereOpen', dur: 4, delay: 2.7 },
  { id: 'p3', path: 'hereOpenToDevice', dur: 5, delay: 1.5 },
  { id: 'p4', path: 'deviceToMerchant', dur: 4.5, delay: 0.3 },
  { id: 'p5', path: 'deviceToCustomer', dur: 4.5, delay: 1.8 },
  { id: 'p6', path: 'deviceToCustomer', dur: 4.5, delay: 3.4 },
];

const pathPills = [
  { label: 'DATA', x: 60, y: 10 },
  { label: 'PAYMENT', x: 27, y: 53 },
  { label: 'COMMUNICATION', x: 57, y: 59 },
];

const capabilities = [
  { icon: CreditCard, label: 'Payments' },
  { icon: Eye, label: 'Visibility' },
  { icon: Megaphone, label: 'Communication' },
  { icon: ShieldCheck, label: 'Security' },
  { icon: Compass, label: 'Discovery' },
  { icon: Network, label: 'Connected Services' },
];

const sequence = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const nodeFade = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Central smart-device card ─────────────────────────────── */
function SmartDeviceCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative flex flex-col items-center">
      <div
        aria-hidden="true"
        className="absolute -inset-14 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 226, 138, 0.16) 0%, transparent 62%)',
          animation: 'glowPulse 5s ease-in-out infinite',
        }}
      />
      <div
        className="relative rounded-3xl border border-[rgba(0,226,138,0.24)] px-7 py-6 text-center shadow-[0_34px_80px_rgba(0,0,0,0.55),0_0_70px_rgba(0,226,138,0.16)] sm:px-9"
        style={{
          background: 'linear-gradient(165deg, #0D1F16 0%, #060F0A 60%, #05100A 100%)',
          animation: 'floatSlow 7s ease-in-out infinite',
        }}
      >
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,226,138,0.3)] px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D084] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D084]" />
            </span>
            <span className="font-body text-[9px] font-semibold tracking-[0.24em] text-[#00D084]">ONLINE</span>
          </span>
        </div>

        <p className="mt-4 font-display text-[11px] font-bold tracking-[0.32em] text-[#6FE0B0]" style={{ color: ACCENT }}>
          HERE OPEN
        </p>
        <p className="mt-1 font-display text-[13px] font-bold tracking-[0.14em] text-white">SMART DEVICE</p>

        <div className="mx-auto mt-4 w-full max-w-[240px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
          <p className="font-display text-xl font-bold text-white">₹1,250</p>
          <p className="mt-0.5 font-body text-[9px] font-semibold tracking-[0.2em] text-[#00D084]">
            PAYMENT RECEIVED
          </p>
          <div className="mt-2 flex items-center justify-center gap-1.5 border-t border-white/10 pt-2.5">
            <span className="h-1 w-1 rounded-full bg-[#00D084]" />
            <p className="font-body text-[9px] tracking-[0.14em] text-[#8FA39A]">MERCHANT CONNECTED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Desktop ecosystem node ────────────────────────────────── */
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

        {role === 'button' && (
          <div
            className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-[180px] -translate-x-1/2 rounded-xl border border-[rgba(0,226,138,0.28)] bg-[#08130D] px-4 py-3 text-left opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.5)] transition-opacity duration-200 group-hover/node:opacity-100 group-focus-within/node:opacity-100"
          >
            <p className="font-display text-[10px] font-bold tracking-[0.14em] uppercase text-white">
              {node.label}
            </p>
            <ul className="mt-1.5 space-y-1">
              {node.tooltip.map((t) => (
                <li key={t} className="flex items-start gap-1.5 font-body text-[10px] leading-snug text-[#A9BBB2]">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-[#00D084]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Desktop animation container for the 5-node network ────── */
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
    active === 'device' ||
    (active !== null && (ecoNodes.find((n) => n.key === active)?.paths ?? []).includes(pathId));

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative h-[560px] w-full">
      {/* Ambient glow behind center */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,226,138,0.12) 0%, transparent 60%)' }}
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
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
                  transition:
                    'opacity 0.25s ease, stroke-width 0.25s ease, stroke-dashoffset 1.8s ease',
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

      {/* Path labels */}
      {pathPills.map((pl) => (
        <div
          key={pl.label}
          aria-hidden="true"
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${pl.x}%`, top: `${pl.y}%` }}
        >
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#07120C] px-2 py-0.5">
            <span className="h-1 w-1 rounded-full bg-[#00D084]" />
            <span className="font-body text-[8px] font-semibold tracking-[0.18em] text-[#6FE0B0]">{pl.label}</span>
          </span>
        </div>
      ))}

      {/* Nodes */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sequence}>
        {ecoNodes.map((n) => (
          <motion.div key={n.key} variants={nodeFade} style={{ position: 'absolute', inset: 0 }}>
            <EcoNode
              node={n}
              active={active === n.key}
              onActivate={() => onActivate(n.key)}
              onClear={onClear}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Central device */}
      <div
        className="absolute left-1/2 top-[46%] z-20 -translate-x-1/2 -translate-y-1/2"
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
            <SmartDeviceCard />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Mobile / tablet vertical flow ─────────────────────────── */
function VerticalFlow({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sequence}
      className="mx-auto flex w-full max-w-[320px] flex-col items-center"
    >
      {ecoNodes.slice(0, 2).map((n) => (
        <motion.div key={n.key} variants={nodeFade} className="flex flex-col items-center">
          <EcoNode node={n} active={false} onActivate={() => {}} onClear={() => {}} role="cell" />
          <div className="relative h-12 w-px bg-white/10">
            {!reduced && <span className="flow-dot-down" />}
          </div>
        </motion.div>
      ))}

      <motion.div variants={nodeFade} className="my-2">
        <SmartDeviceCard compact />
      </motion.div>

      {ecoNodes.slice(2).map((n) => (
        <motion.div key={n.key} variants={nodeFade} className="flex flex-col items-center">
          <div className="relative h-12 w-px bg-white/10">
            {!reduced && <span className="flow-dot-down" />}
          </div>
          <EcoNode node={n} active={false} onActivate={() => {}} onClear={() => {}} role="cell" />
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Section ───────────────────────────────────────────────── */
export function DeviceShowcaseSection() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section id="device" className="bg-[#06100A]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 68% 42%, rgba(0,226,138,0.07) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(0,124,205,0.05) 0%, transparent 50%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[44fr_56fr] lg:gap-10">
          {/* LEFT — headline / copy / CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
            className="max-w-2xl text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(0,226,138,0.3)] bg-[rgba(0,226,138,0.08)] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D084]" />
              <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: ACCENT }}>
                The Solution
              </span>
            </span>

            <h2 className="mt-7 font-display font-bold uppercase leading-[1.08] tracking-[-0.015em] text-[2.2rem] text-white sm:text-[2.6rem] lg:text-[3.3rem] xl:text-[3.9rem]">
              Our Device.
              <br />
              <span style={{ color: ACCENT }}>
                The Connected Merchant
                <br className="hidden sm:block" /> Ecosystem.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[600px] font-body text-[15px] leading-[1.75] text-[#9AA9A1] lg:mx-0 lg:text-base">
              The device is not just a payment confirmation box. It becomes a connected merchant
              touchpoint — linking banks, merchants and customers through one living ecosystem.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00D084] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#04140C] transition-all duration-200 hover:bg-[#3AE6A1]"
              >
                Request a Demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
              >
                See How It Works
              </a>
            </div>
          </motion.div>

          {/* RIGHT — ecosystem visualization */}
          <div className="relative">
            <div className="hidden lg:block">
              <DesktopNetwork
                active={active}
                onActivate={setActive}
                onClear={() => setActive(null)}
                reduced={reduced ?? false}
              />
            </div>
            <div className="lg:hidden">
              <VerticalFlow reduced={reduced ?? false} />
            </div>
          </div>
        </div>

        {/* Capability indicators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mt-16 border-t border-white/[0.08] pt-9 lg:mt-20"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className="flex items-center gap-2.5 justify-center lg:justify-start"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <c.icon size={14} strokeWidth={1.6} style={{ color: ACCENT }} />
                </span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-[#B6C6BD]">
                  {c.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footnote */}
        <p className="mt-10 text-center font-body text-[11px] text-[#6B7D74]">
          Final specifications and on-device capabilities are under development and subject to
          configuration.
        </p>
      </Container>
    </Section>
  );
}