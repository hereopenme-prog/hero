'use client';

import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Bell, MousePointerClick, SlidersHorizontal, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { HereOpenDevice } from '@/components/ui/HereOpenDevice';
import { fadeUp, stagger } from '@/lib/animations';

const features: { icon: LucideIcon; label: string; caption: string }[] = [
  {
    icon: Eye,
    label: 'Public shop status',
    caption: 'Instant open/closed status to the public.',
  },
  {
    icon: ShieldCheck,
    label: 'Confidence score',
    caption: 'Confidence scores reflect available activity signals.',
  },
  {
    icon: Bell,
    label: 'Merchant alerts',
    caption: 'Safety and security alerts to merchants.',
  },
];

const controls = [
  {
    icon: MousePointerClick,
    text: 'Manage your connected device with a tap.',
  },
  {
    icon: SlidersHorizontal,
    text: 'Merchant control.',
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-[var(--bg-soft)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 30%, rgba(69,245,154,0.045) 0%, transparent 60%)' }}
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
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border bg-[var(--a2-12)]"
            style={{ borderColor: 'var(--a2-36)' }}
          >
            <span
              className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--accent-2)' }}
            />
            <span className="font-body font-semibold text-xs tracking-wide" style={{ color: 'var(--accent-2)' }}>
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-7 font-display font-bold text-[2rem] leading-[1.08] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.4rem] lg:text-[3.1rem]"
          >
            Our solution goes
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--accent-2), #00B4D8)' }}
            >
              beyond payment confirmation.
            </span>
          </motion.h2>
        </motion.div>

        {/* ── Feature trio ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 lg:mt-20"
        >
          {features.map((f) => (
            <motion.article
              key={f.label}
              variants={fadeUp}
              className="flex flex-col items-start gap-4 rounded-2xl border p-6 transition-colors duration-200 hover:border-[var(--a2-40)]"
              style={{ backgroundColor: 'var(--panel-2)', borderColor: 'var(--glass-2)' }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'var(--a2-10)' }}
              >
                <f.icon size={20} strokeWidth={1.75} className="text-[var(--accent-2)]" />
              </div>
              <div>
                <h3 className="font-display text-[15px] font-bold leading-snug text-[var(--ink)]">
                  {f.label}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[var(--ink-muted)]">
                  {f.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ── Connected control band ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-center gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2.5 font-body text-sm font-semibold tracking-wide"
              style={{ color: 'var(--accent-2)' }}
            >
              From one mobile app.
            </span>
            <ul className="mt-6 space-y-5">
              {controls.map((c) => (
                <li key={c.text} className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: 'var(--a2-10)' }}
                  >
                    <c.icon size={18} strokeWidth={1.75} className="text-[var(--accent-2)]" />
                  </div>
                  <p className="pt-1.5 font-body text-base font-medium leading-relaxed text-[var(--ink)]">
                    {c.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: 'radial-gradient(circle, var(--a2-10) 0%, transparent 60%)' }}
              />
              <HereOpenDevice size="md" status="open" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}