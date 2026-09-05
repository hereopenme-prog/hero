'use client';

import { motion } from 'framer-motion';
import { Factory, ShoppingCart, Zap, Fingerprint, Lock, Layers } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

const ladder = [
  'ONE BUSINESS',
  '100 BUSINESSES',
  '1,000 BUSINESSES',
  'CITY',
  'REGION',
  'COUNTRY',
];

const scaleRows = [
  {
    icon: <Factory size={16} className="text-[var(--accent)]" />,
    title: 'Manufacturing Partnerships',
    caption: 'Designed as potential supply relationships.',
  },
  {
    icon: <ShoppingCart size={16} className="text-[var(--accent)]" />,
    title: 'Online / Partner Availability',
    caption: 'Potential paths to get devices into businesses.',
  },
  {
    icon: <Zap size={16} className="text-[var(--accent)]" />,
    title: 'Simple Onboarding',
    caption: 'Designed to be quick to set up.',
  },
  {
    icon: <Fingerprint size={16} className="text-[var(--accent)]" />,
    title: 'Secure Device Identity',
    caption: 'Each device with a unique identity.',
  },
  {
    icon: <Lock size={16} className="text-[var(--accent)]" />,
    title: 'Authenticated Access',
    caption: 'Controlled, role-based use.',
  },
  {
    icon: <Layers size={16} className="text-[var(--accent)]" />,
    title: 'Connected Platform',
    caption: 'One platform, many devices.',
  },
];

export function ScalabilitySection() {
  return (
    <Section id="scalability" className="bg-[var(--bg)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,208,132,0.03)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="SCALABILITY"
          title="FROM ONE SHOP"
          titleAccent="TO THE WHOLE NETWORK."
          description="The ecosystem is designed to grow from a single business to a city — and beyond."
        />

        <div className="max-w-6xl mx-auto mt-14 lg:mt-16">
          {/* Desktop: side-by-side */}
          <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Ascent ladder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="relative flex flex-col"
            >
              {/* Vertical connector */}
              <div className="absolute top-[20px] bottom-[20px] left-[19px] w-[1px] bg-gradient-to-b from-[var(--ink-dim)] via-[var(--a40)] to-[var(--a80)]" />

              {ladder.map((step, i) => (
                <motion.div
                  key={step}
                  variants={fadeUp}
                  className="relative flex items-center gap-5 py-4"
                >
                  {/* Rung node */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-[var(--a50)] bg-[var(--section)] flex items-center justify-center shadow-[0_0_10px_rgba(0,208,132,0.1)]">
                    <span className="font-body font-bold text-[10px] text-[var(--accent)] tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Step label */}
                  <span className="font-display font-bold text-sm lg:text-base text-[var(--ink)] tracking-tight">
                    {step}
                  </span>

                  {/* Increasing green intensity bar */}
                  <div
                    className="ml-auto h-[2px] rounded-full bg-[var(--accent)]"
                    style={{ width: `${(i + 1) * 12}px`, opacity: 0.3 + i * 0.12 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Right — Designed to scale rows */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)] mb-5">
                Designed to scale with
              </p>

              <div className="flex flex-col gap-4">
                {scaleRows.map((row) => (
                  <motion.div
                    key={row.title}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--section)] flex items-center justify-center">
                      {row.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-sm text-[var(--ink)] tracking-tight">
                        {row.title}
                      </span>
                      <span className="font-body text-sm text-[var(--ink-muted)] leading-relaxed mt-0.5">
                        {row.caption}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-10">
            {/* Ladder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="relative flex flex-col"
            >
              <div className="absolute top-[20px] bottom-[20px] left-[19px] w-[1px] bg-gradient-to-b from-[var(--ink-dim)] via-[var(--a40)] to-[var(--a80)]" />

              {ladder.map((step, i) => (
                <motion.div
                  key={step}
                  variants={fadeUp}
                  className="relative flex items-center gap-4 py-3.5"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-[var(--a50)] bg-[var(--section)] flex items-center justify-center">
                    <span className="font-body font-bold text-[10px] text-[var(--accent)] tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="font-display font-bold text-sm text-[var(--ink)] tracking-tight">
                    {step}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Scale rows */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)] mb-5">
                Designed to scale with
              </p>

              <div className="flex flex-col gap-4">
                {scaleRows.map((row) => (
                  <motion.div
                    key={row.title}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--section)] flex items-center justify-center">
                      {row.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-sm text-[var(--ink)] tracking-tight">
                        {row.title}
                      </span>
                      <span className="font-body text-sm text-[var(--ink-muted)] leading-relaxed mt-0.5">
                        {row.caption}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 font-body text-xs text-[var(--ink-dim)] text-center tracking-wide">
            Operational claims are not made — these are design intentions.
          </p>
        </div>
      </Container>
    </Section>
  );
}
