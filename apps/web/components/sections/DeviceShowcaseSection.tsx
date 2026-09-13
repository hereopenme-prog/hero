'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Landmark, Store, Users } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, scaleIn, stagger } from '@/lib/animations';

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

/* ── Section ──────────────────────────────────────────────── */
export function DeviceShowcaseSection() {
  return (
    <Section id="device" className="overflow-hidden bg-[#0B1B34]">
      <Container className="relative z-10">
        <HubDiagram />
      </Container>
    </Section>
  );
}