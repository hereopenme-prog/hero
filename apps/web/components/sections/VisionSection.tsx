'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  Heart,
  Landmark,
  Store,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Reveal } from '@/app/components/Reveal';
import { Section } from '@/components/ui/Section';
import { drawLine, fadeUp, stagger, staggerFast } from '@/lib/animations';

/* ── Supplied content (source of truth) ───────────────────────── */

const SUPPORTS = ['Empowering banks.', 'Supporting merchants.', 'Bringing customers closer.'];

interface Figure {
  to: number;
  decimals: number;
  suffix: string;
}

interface Audience {
  key: string;
  icon: LucideIcon;
  name: string;
  headline?: string;
  figure?: Figure;
  lines: string[];
}

const AUDIENCES: Audience[] = [
  {
    key: 'banks',
    icon: Landmark,
    name: 'BANKS',
    headline: 'Lead the change.',
    lines: [
      'Connect directly with merchants and customers.',
      'Build relationships beyond payment confirmation.',
    ],
  },
  {
    key: 'msmes',
    icon: Store,
    name: 'MSMEs',
    figure: { to: 6.3, decimals: 1, suffix: 'CRORE' },
    lines: [
      'Greater visibility.',
      'Direct access to banks and customers.',
      'Connected safety and security.',
    ],
  },
  {
    key: 'people',
    icon: Users,
    name: 'PEOPLE',
    figure: { to: 90, decimals: 0, suffix: 'CRORE' },
    lines: [
      'Know which shops are open.',
      'Discover nearby businesses.',
      'Avoid uncertain and wasted trips.',
    ],
  },
];

const GROWTH_STEPS = ['A family grows.', 'A community grows.', 'India grows.'];

const PROMISES = [
  {
    index: '01',
    label: 'For Banks',
    text: 'Stronger relationships, everyday engagement and lending opportunities.',
  },
  {
    index: '02',
    label: 'For MSMEs',
    text: 'Direct access to banks and customers, with greater visibility and awareness.',
  },
  {
    index: '03',
    label: 'For Customers',
    text: 'Clear shop status and a better-connected local experience.',
  },
];

/* ── Animated scale figure (6.3 / 90 CRORE) ───────────────────── */

function ScaleFigure({ to, decimals, duration = 1500, className = '' }: { to: number; decimals: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setVal(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimals)}
    </span>
  );
}

/* ── Connection link with travelling pulse (motion-gated) ─────── */

function ChainLink({ orientation = 'horizontal' }: { orientation?: 'horizontal' | 'vertical' }) {
  if (orientation === 'vertical') {
    return (
      <div aria-hidden="true" className="relative mx-auto h-12 w-px overflow-hidden bg-gradient-to-b from-transparent via-[var(--ink-dim)] to-transparent lg:hidden">
        <motion.span
          className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[var(--accent)]"
          animate={{ y: ['-12px', '48px'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="relative hidden h-px w-16 shrink-0 self-center overflow-hidden bg-gradient-to-r from-transparent via-[var(--ink-dim)] to-transparent lg:block xl:w-20">
      <motion.span
        className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-[var(--accent)]"
        animate={{ x: ['-24px', '80px'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

/* ── Eyebrow pill ─────────────────────────────────────────────── */

function Eyebrow({ children }: { children: string }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-flex items-center gap-2.5 rounded-full border border-[var(--a30)] bg-[var(--a10)] px-5 py-2"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      <span className="font-body text-[11px] font-semibold tracking-[0.22em] text-[var(--ink-2)] uppercase">
        {children}
      </span>
    </motion.span>
  );
}

/* ── 1 · Hero ─────────────────────────────────────────────────── */

function VisionHero() {
  return (
    <Section id="vision" className="bg-[var(--section-2)]">
      {/* Ambient accent wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 0%, var(--a10) 0%, transparent 70%)' }}
      />
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <Eyebrow>OUR VISION / VOCAL FOR LOCAL</Eyebrow>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance text-[var(--ink)] sm:text-5xl lg:text-6xl"
          >
            {"Connecting India's "}
            <span className="text-[var(--accent)]">local economy.</span>
          </motion.h2>

          {/* Supporting statements */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-0"
          >
            {SUPPORTS.map((s, i) => (
              <span key={s} className="flex flex-col items-center sm:flex-row">
                <span className="font-body text-base text-[var(--ink-2)] lg:text-lg">{s}</span>
                {i < SUPPORTS.length - 1 && (
                  <span aria-hidden="true" className="my-1 h-4 w-px bg-[var(--ink-dim)] sm:mx-6 sm:my-0 sm:h-4" />
                )}
              </span>
            ))}
          </motion.div>

          {/* Hero statement */}
          <motion.div variants={fadeUp} className="mt-12 w-full lg:mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--a30)] bg-[var(--section)] px-6 py-8 sm:px-10 lg:py-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 60% 90% at 50% 100%, var(--a10) 0%, transparent 70%)' }}
              />
              <p className="relative font-display text-xl leading-snug font-bold tracking-tight text-balance text-[var(--ink)] sm:text-2xl lg:text-[28px]">
                ONE DEVICE. <span className="text-[var(--accent)]">DIRECT CONNECTIONS.</span> A STRONGER INDIA.
              </p>
              <span aria-hidden="true" className="relative mx-auto mt-5 block h-[3px] w-16 rounded-full bg-[var(--accent)]" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ── Audience node ────────────────────────────────────────────── */

function AudienceNode({ audience, delay = 0 }: { audience: Audience; delay?: number }) {
  const Icon = audience.icon;
  return (
    <Reveal delay={delay} className="w-full max-w-xs">
      <div className="flex h-full flex-col items-center rounded-2xl border border-[var(--ink-dim)] bg-[var(--section)] px-6 py-8 text-center transition-colors duration-300 hover:border-[var(--a30)]">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--a30)] bg-[var(--a10)]">
          <Icon size={22} strokeWidth={1.5} className="text-[var(--accent)]" />
        </span>
        <h3 className="mt-5 font-display text-sm font-bold tracking-[0.2em] text-[var(--ink)]">
          {audience.name}
        </h3>
        {audience.figure ? (
          <p data-figure={audience.key} className="mt-3 font-display text-5xl font-bold tracking-tight text-[var(--ink)] lg:text-[56px]">
            <ScaleFigure to={audience.figure.to} decimals={audience.figure.decimals} />
            {' '}
            <span className="ml-2 align-middle font-body text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">
              {audience.figure.suffix}
            </span>
          </p>
        ) : (
          <p className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--ink)]">
            {audience.headline}
          </p>
        )}
        <ul className="mt-5 space-y-2">
          {audience.lines.map((line) => (
            <li key={line} className="font-body text-sm leading-relaxed text-[var(--ink-2)]">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ── 2 · Who we connect ───────────────────────────────────────── */

function WhoWeConnect() {
  return (
    <Section as="div" className="bg-[var(--section)]">
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <Eyebrow>WHO WE CONNECT</Eyebrow>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[var(--ink)] sm:text-4xl"
          >
            The people and businesses this device aims to serve
          </motion.h2>
        </motion.div>

        {/* Connected chain: BANKS → MSMEs → PEOPLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerFast}
          className="mx-auto mt-12 flex max-w-6xl flex-col items-center lg:mt-16 lg:flex-row lg:items-stretch lg:justify-center"
        >
          <motion.div variants={fadeUp} className="flex w-full max-w-xs justify-center">
            <AudienceNode audience={AUDIENCES[0]} />
          </motion.div>

          <ChainLink orientation="vertical" />
          <ChainLink orientation="horizontal" />

          <motion.div variants={fadeUp} className="flex w-full max-w-xs justify-center">
            <AudienceNode audience={AUDIENCES[1]} delay={80} />
          </motion.div>

          <ChainLink orientation="vertical" />
          <ChainLink orientation="horizontal" />

          <motion.div variants={fadeUp} className="flex w-full max-w-xs justify-center">
            <AudienceNode audience={AUDIENCES[2]} delay={160} />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ── 3 · The future we want to build ──────────────────────────── */

function TheFuture() {
  return (
    <Section as="div" className="bg-[var(--section-2)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, var(--a10) 0%, transparent 70%)' }}
      />
      {/* Restrained network line-work */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.path d="M-20,260 C240,220 360,120 620,150 S980,220 1220,120" fill="none" stroke="var(--a30)" strokeWidth="1.5" variants={drawLine} />
        <motion.path d="M-20,120 C220,160 420,240 700,200 S1000,120 1220,180" fill="none" stroke="var(--a30)" strokeWidth="1.5" variants={drawLine} />
        <circle cx="620" cy="150" r="4" fill="var(--accent)" opacity="0.7" />
        <circle cx="700" cy="200" r="3" fill="var(--accent)" opacity="0.5" />
        <circle cx="360" cy="186" r="3" fill="var(--accent)" opacity="0.5" />
      </motion.svg>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow>THE FUTURE WE WANT TO BUILD</Eyebrow>
          </div>
          <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-2xl font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance text-[var(--ink)] sm:text-5xl lg:text-6xl">
            {'Local progress. '}
            <span className="text-[var(--accent)]">National possibility.</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto mt-12 grid max-w-5xl gap-8 text-center sm:text-left md:grid-cols-2 lg:mt-16 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="border-t-2 border-[var(--accent)] pt-6">
            <p className="font-body text-base leading-relaxed text-[var(--ink-2)] lg:text-lg">
              {"A future where every bank is a direct partner in people's progress, every merchant is better connected and every shop is visible."}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="border-t-2 border-[var(--ink-dim)] pt-6">
            <p className="font-body text-base leading-relaxed text-[var(--ink-2)] lg:text-lg">
              One smart platform connecting banks, merchants and customers in real time, with zero intermediaries and stronger local relationships.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ── 4 · Mission + Belief ─────────────────────────────────────── */

function MissionBelief() {
  return (
    <Section as="div" className="bg-[var(--section)]">
      <Container className="relative z-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <Eyebrow>THE MISSION</Eyebrow>
            <motion.span
              variants={fadeUp}
              className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--a30)] bg-[var(--a10)]"
            >
              <Compass size={24} strokeWidth={1.5} className="text-[var(--accent)]" />
            </motion.span>
            <motion.blockquote
              variants={fadeUp}
              className="mt-6 max-w-md border-l-0 font-display text-2xl leading-snug font-bold tracking-tight text-balance text-[var(--ink)] sm:text-[28px] lg:border-l-2 lg:border-[var(--accent)] lg:pl-6"
            >
              Build a connected ecosystem that brings banks, merchants and customers together in real time.
            </motion.blockquote>
          </motion.div>

          {/* Belief */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <Eyebrow>THE BELIEF</Eyebrow>
            <motion.span
              variants={fadeUp}
              className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--a30)] bg-[var(--a10)]"
            >
              <Heart size={24} strokeWidth={1.5} className="text-[var(--accent)]" />
            </motion.span>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md font-display text-2xl leading-snug font-bold tracking-tight text-balance text-[var(--ink)] sm:text-[28px]"
            >
              {"MSMEs are the heart of India's local economy."}
            </motion.p>

            {/* Growth ladder */}
            <motion.div variants={fadeUp} className="mt-6 w-full max-w-md">
              <p className="font-body text-sm font-semibold tracking-[0.14em] text-[var(--ink-muted)] uppercase">
                When a merchant grows...
              </p>
              <ul className="mt-4 space-y-3">
                {GROWTH_STEPS.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 border-b border-[var(--ink-dim)] pb-3"
                  >
                    <span aria-hidden="true" className="h-8 w-[3px] shrink-0 rounded-full bg-[var(--accent)]" style={{ opacity: 0.45 + i * 0.27 }} />
                    <span
                      className="font-display font-bold tracking-tight text-[var(--ink)]"
                      style={{ fontSize: `${1.05 + i * 0.22}rem` }}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

/* ── 5 · The promise ──────────────────────────────────────────── */

function ThePromise() {
  return (
    <Section as="div" className="bg-[var(--section-2)]">
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <Eyebrow>THE PROMISE</Eyebrow>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[var(--ink)] sm:text-4xl"
          >
            Three outcomes of the HERE OPEN vision
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5"
        >
          {PROMISES.map((p) => (
            <motion.div
              key={p.index}
              variants={fadeUp}
              className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--section)] p-6 transition-colors duration-300 hover:border-[var(--a30)] lg:p-7"
            >
              <span className="font-display text-sm font-bold tracking-[0.2em] text-[var(--accent)]">
                {p.index}
              </span>
              <span className="mt-3 font-display text-lg font-bold tracking-tight text-[var(--ink)] uppercase">
                {p.label}
              </span>
              <span className="mt-2 font-body text-[15px] leading-relaxed text-[var(--ink-2)]">
                {p.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

/* ── 6 · Final CTA ────────────────────────────────────────────── */

function VisionClosing() {
  return (
    <Section as="div" className="bg-[var(--section)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 60% at 50% 100%, var(--a10) 0%, transparent 70%)' }}
      />
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-xs font-semibold tracking-[0.28em] text-[var(--ink-muted)] uppercase"
          >
            PEOPLE. <span className="mx-2 text-[var(--accent)]">·</span> BUSINESSES. <span className="mx-2 text-[var(--accent)]">·</span> COMMUNITIES.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[var(--ink)] sm:text-4xl lg:text-5xl"
          >
            {'One device. Direct connections. '}
            <span className="text-[var(--accent)]">A stronger India.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 font-body text-base text-[var(--ink-2)] lg:text-lg">
            Help shape the next chapter of local business.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 font-display text-sm font-bold tracking-[0.12em] text-[var(--section)] uppercase transition-all duration-300 hover:gap-4 hover:brightness-110"
            >
              Build with Here Open
              <ArrowRight size={17} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

/* ── Section root (keeps the #vision anchor) ──────────────────── */

export function VisionSection() {
  return (
    <div>
      <VisionHero />
      <WhoWeConnect />
      <TheFuture />
      <MissionBelief />
      <ThePromise />
      <VisionClosing />
    </div>
  );
}
