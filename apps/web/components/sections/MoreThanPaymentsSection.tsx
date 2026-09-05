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
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#3D4F5E] mb-4">Ordinary Payment Speaker</p>
              <div className="flex flex-col gap-3">
                {ordinaryFeatures.map((f) => (
                  <p key={f} className="font-body text-sm text-[#8A9BAE] leading-relaxed">{f}</p>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-l from-[#3D4F5E]/40 to-transparent" />
            </motion.div>

            {/* Center — Arrow divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#3D4F5E] to-[#00D08460]" />
              <div className="flex items-center gap-3 rounded-full px-5 py-2.5 border border-[#00D08440] bg-[#00D08410]">
                <ArrowRight size={14} className="text-[#00D084]" />
                <span className="font-display font-bold text-[11px] text-[#00D084] tracking-[0.2em]">REIMAGINED</span>
                <ArrowRight size={14} className="text-[#00D084]" />
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#00D08460] via-[#3D4F5E] to-transparent" />
            </motion.div>

            {/* Right — Here Open */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideRight}
              className="pl-4"
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#00D084] mb-4 font-semibold">Here Open</p>
              <div className="flex flex-col gap-3">
                {hereOpenFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-[#00D084] flex-shrink-0" />
                    <p className="font-body text-sm text-[#E8EDF2] leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#00D08440] to-transparent" />
            </motion.div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-10">
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideLeft}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#3D4F5E] mb-4">Ordinary Payment Speaker</p>
              <div className="flex flex-col gap-3">
                {ordinaryFeatures.map((f) => (
                  <p key={f} className="font-body text-sm text-[#8A9BAE] leading-relaxed">{f}</p>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#3D4F5E]/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#3D4F5E] to-[#00D08460]" />
              <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-[#00D08440] bg-[#00D08410]">
                <ArrowRight size={12} className="text-[#00D084]" />
                <span className="font-display font-bold text-[10px] text-[#00D084] tracking-[0.2em]">REIMAGINED</span>
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#3D4F5E] to-[#00D08460]" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideRight}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#00D084] mb-4 font-semibold">Here Open</p>
              <div className="flex flex-col gap-3">
                {hereOpenFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-[#00D084] flex-shrink-0" />
                    <p className="font-body text-sm text-[#E8EDF2] leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#00D08440] to-transparent" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
