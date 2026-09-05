'use client';

import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const waveformBars = [0, 1, 2, 3];

export function PaymentExperienceSection() {
  return (
    <Section id="payment-experience" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="PAYMENT EXPERIENCE"
          title="PAYMENT RECEIVED."
          titleAccent="YOU HEAR IT INSTANTLY."
          description="Designed to help business owners quickly recognize incoming payments without constantly checking their phone."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl"
        >
          {/* Device illustration */}
          <div className="relative mx-auto w-64 h-80 rounded-[28px] border border-[#1C2A38] bg-gradient-to-b from-[#0F1923] to-[#080C10] shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col items-center justify-between overflow-hidden pt-10 pb-8">
            {/* Speaker grille */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-[3px]">
              {Array.from({ length: 18 }).map((_, i) => (
                <span key={i} className="block w-[3px] h-1 rounded-full bg-[#1C2A38]" />
              ))}
            </div>

            {/* LED */}
            <div className="status-dot-pulse w-2.5 h-2.5 rounded-full bg-[#00D084] shadow-[0_0_12px_#00D084]" />

            {/* Payment amount */}
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold text-4xl text-[#00D084] drop-shadow-[0_0_24px_#00D08460]"
              >
                ₹499
              </motion.p>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#00D08440] bg-[#00D08414] px-3 py-1 font-body text-[0.65rem] font-bold tracking-wider text-[#00D084]"
              >
                <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                PAYMENT RECEIVED
              </motion.span>
            </div>

            {/* Waveform animation */}
            <div className="flex items-end justify-center gap-[5px] h-8">
              {waveformBars.map((i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full bg-[#00D084]"
                  animate={{ height: ['8px', '24px', '8px'] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Speaker + text */}
            <div className="flex items-center gap-2">
              <Volume2 size={14} className="text-[#00D084]" />
              <span className="font-body text-[0.72rem] text-[#A5B4C4]">Payment received.</span>
            </div>
          </div>

          {/* Bottom label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-center font-body text-[0.75rem] tracking-wider text-[#3D4F5E]"
          >
            DIGITAL PAYMENT · PAYMENT CONFIRMATION · PAYMENT ALERT
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
