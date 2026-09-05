'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const ordinaryFeatures = [
  'Payment received',
  'Voice announcement',
];

const hereOpenFeatures = [
  'Payment confirmations',
  'Shop status visibility',
  'Customer awareness',
  'Smart monitoring',
  'Business connectivity',
];

export function MoreThanPaymentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section id="product" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="MORE THAN PAYMENTS"
          title="A PAYMENT SPEAKER."
          titleAccent="REIMAGINED FOR BUSINESS."
          description="Traditional payment speakers tell you when a payment arrives. Here Open is designed to go further — connecting payments with shop visibility, customer awareness and configurable smart features."
        />

        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Desktop: side-by-side */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 items-center">
            {/* Left — Ordinary */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideLeft}
              className="text-right pr-4"
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)] mb-4">Ordinary Payment Speaker</p>
              <div className="flex flex-col gap-3">
                {ordinaryFeatures.map((f) => (
                  <p key={f} className="font-body text-sm text-[var(--ink-muted)] leading-relaxed">{f}</p>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-l from-[var(--ink-dim)]/40 to-transparent" />
            </motion.div>

            {/* Center — Arrow divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--ink-dim)] to-[var(--a60)]" />
              <div className="flex items-center gap-3 rounded-full px-5 py-2.5 border border-[var(--a40)] bg-[var(--a10)]">
                <ArrowRight size={14} className="text-[var(--accent)]" />
                <span className="font-display font-bold text-[11px] text-[var(--accent)] tracking-[0.2em]">REIMAGINED</span>
                <ArrowRight size={14} className="text-[var(--accent)]" />
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--a60)] via-[var(--ink-dim)] to-transparent" />
            </motion.div>

            {/* Right — Here Open */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideRight}
              className="pl-4"
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-4 font-semibold">Here Open</p>
              <div className="flex flex-col gap-3">
                {hereOpenFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <p className="font-body text-sm text-[var(--ink)] leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[var(--a40)] to-transparent" />
            </motion.div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-10">
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideLeft}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)] mb-4">Ordinary Payment Speaker</p>
              <div className="flex flex-col gap-3">
                {ordinaryFeatures.map((f) => (
                  <p key={f} className="font-body text-sm text-[var(--ink-muted)] leading-relaxed">{f}</p>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[var(--ink-dim)]/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--ink-dim)] to-[var(--a60)]" />
              <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-[var(--a40)] bg-[var(--a10)]">
                <ArrowRight size={12} className="text-[var(--accent)]" />
                <span className="font-display font-bold text-[10px] text-[var(--accent)] tracking-[0.2em]">REIMAGINED</span>
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[var(--ink-dim)] to-[var(--a60)]" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideRight}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-4 font-semibold">Here Open</p>
              <div className="flex flex-col gap-3">
                {hereOpenFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <p className="font-body text-sm text-[var(--ink)] leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[var(--a40)] to-transparent" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
