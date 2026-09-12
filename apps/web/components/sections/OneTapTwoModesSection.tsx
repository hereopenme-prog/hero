'use client';

import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Smartphone, Cpu, MonitorSmartphone, ChevronRight, ChevronDown } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

type Mode = 'open' | 'closed';

const flow: Record<
  Mode,
  {
    accent: string;
    nodeColor: string;
    steps: { num: string; text: string }[];
    nodes: { Icon: typeof Smartphone; title: string; caption: string }[];
    result: string;
  }
> = {
  open: {
    accent: '#45F59A',
    nodeColor: 'rgba(69,245,154,0.12)',
    steps: [
      { num: '01', text: 'Merchant taps OPEN in the app.' },
      { num: '02', text: 'The smart merchant device updates to OPEN.' },
      { num: '03', text: 'The public app instantly shows \u201CShop is open\u201D.' },
      { num: '04', text: 'The system continues to monitor motion and safety.' },
    ],
    nodes: [
      { Icon: Smartphone, title: 'Mobile App', caption: 'Merchant taps OPEN' },
      { Icon: Cpu, title: 'Smart device', caption: 'Device updates to OPEN' },
      { Icon: MonitorSmartphone, title: 'Public app', caption: 'Instantly shows \u201CShop is open\u201D' },
    ],
    result: 'Shop is open',
  },
  closed: {
    accent: '#FF6B6B',
    nodeColor: 'rgba(255,107,107,0.12)',
    steps: [
      { num: '01', text: 'Merchant taps CLOSED in the app.' },
      { num: '02', text: 'The smart merchant device updates to CLOSED.' },
      { num: '03', text: 'The public app instantly shows \u201CShop is closed\u201D.' },
      { num: '04', text: 'The system continues to monitor motion and safety.' },
    ],
    nodes: [
      { Icon: Smartphone, title: 'Mobile App', caption: 'Merchant taps CLOSED' },
      { Icon: Cpu, title: 'Smart device', caption: 'Device updates to CLOSED' },
      { Icon: MonitorSmartphone, title: 'Public app', caption: 'Instantly shows \u201CShop is closed\u201D' },
    ],
    result: 'Shop is closed',
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function OneTapTwoModesSection() {
  const [mode, setMode] = useState<Mode>('open');
  const data = flow[mode];

  return (
    <Section id="solution" className="bg-[var(--brand-bg)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 0%, var(--brand-a20) 0%, transparent 60%)' }}
      />
      <Container className="relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border"
            style={{ backgroundColor: 'var(--brand-a20)', borderColor: 'var(--brand-a40)' }}
          >
            <span
              className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--brand-accent)' }}
            />
            <span className="font-body font-semibold text-xs tracking-wide text-[var(--brand-accent)]">
              ONE TAP. TWO MODES.
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-7 font-display font-bold text-[2rem] leading-[1.08] tracking-[-0.025em] text-[var(--brand-ink)] sm:text-[2.4rem] lg:text-[3.1rem]"
          >
            A simple action.
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--brand-accent), #00B4D8)' }}
            >
              A connected response.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[560px] font-body text-lg leading-relaxed text-[var(--brand-ink-muted)]"
          >
            An app, a device, and a whole ecosystem, responding together.
          </motion.p>

          {/* ── Toggle ── */}
          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
              <button
                type="button"
                onClick={() => setMode('open')}
                aria-pressed={mode === 'open'}
                className={`rounded-full px-6 py-2 font-display text-[13px] font-bold tracking-[0.12em] transition-all duration-200 ${
                  mode === 'open'
                    ? 'bg-[#45F59A] text-[#03301C] shadow-[0_0_20px_rgba(69,245,154,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                OPEN
              </button>
              <button
                type="button"
                onClick={() => setMode('closed')}
                aria-pressed={mode === 'closed'}
                className={`rounded-full px-6 py-2 font-display text-[13px] font-bold tracking-[0.12em] transition-all duration-200 ${
                  mode === 'closed'
                    ? 'bg-[#FF6B6B] text-[#2A0B0B] shadow-[0_0_20px_rgba(255,107,107,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                CLOSED
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Flow ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mx-auto mt-12 max-w-5xl"
          >
            <p
              className="text-center font-body text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: data.accent }}
            >
              {mode === 'open' ? 'Open flow' : 'Closed flow'}
            </p>

            {/* Nodes */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-0"
            >
              {data.nodes.map((node, i) => (
                <div key={node.title} className="flex flex-col items-center sm:flex-row sm:flex-1">
                  <motion.div variants={itemVariants} className="w-full max-w-[260px] sm:w-auto sm:flex-1">
                    <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 text-center">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: data.nodeColor }}
                      >
                        <node.Icon size={22} strokeWidth={1.75} style={{ color: data.accent }} />
                      </span>
                      <span className="mt-4 font-display text-[15px] font-bold text-[#E8EDF2]">{node.title}</span>
                      <span className="mt-1.5 font-body text-[12.5px] text-[#8A9BAE]">{node.caption}</span>
                    </div>
                  </motion.div>

                  {i < data.nodes.length && (
                    <motion.span
                      variants={itemVariants}
                      className="flex items-center justify-center text-white/40 py-2 sm:px-1 sm:py-0"
                    >
                      <ChevronRight size={18} className="hidden rotate-0 sm:block" />
                      <ChevronDown size={18} className="sm:hidden" />
                    </motion.span>
                  )}
                </div>
              ))}

              {/* Result */}
              <motion.div variants={itemVariants} className="flex items-center justify-center sm:flex-1">
                <div
                  className="flex w-full max-w-[260px] flex-col items-center rounded-2xl border px-5 py-6 text-center sm:w-auto"
                  style={{
                    borderColor: `${data.accent}55`,
                    backgroundColor: data.nodeColor,
                    boxShadow: `0 0 40px ${data.accent}22`,
                  }}
                >
                  <span
                    className="rounded-full px-3 py-1 font-display text-[13px] font-bold tracking-[0.2em]"
                    style={{ backgroundColor: data.accent, color: mode === 'open' ? '#03301C' : '#2A0B0B' }}
                  >
                    {mode === 'open' ? 'OPEN' : 'CLOSED'}
                  </span>
                  <span className="mt-3 font-display text-[16px] font-bold text-[#E8EDF2]">{data.result}</span>
                  <span className="mt-1 font-body text-[11px] text-[#8A9BAE]">in the public app</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Steps */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {data.steps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={itemVariants}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="font-display text-[13px] font-bold tracking-[0.16em]" style={{ color: data.accent }}>
                    STEP {step.num}
                  </span>
                  <p className="mt-2 font-body text-[13px] leading-relaxed text-[#C7D2DC]">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-12 text-center font-body text-[12px] text-[var(--brand-ink-muted)]">
          Interactive demonstration — illustrative UI.
        </p>
      </Container>
    </Section>
  );
}