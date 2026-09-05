'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { btnPrimary, btnSecondary } from '@/components/ui/buttonStyles';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const deviceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatingChips = [
  { label: 'PAYMENT RECEIVED', position: 'absolute -left-2 sm:-left-4 lg:-left-8 top-6', dot: true },
  { label: 'SHOP OPEN', position: 'absolute -right-2 sm:-right-4 lg:-right-8 top-6', dot: true },
  { label: 'CUSTOMER VISIBLE', position: 'absolute -left-2 sm:-left-4 lg:-left-8 bottom-20', dot: false },
  { label: 'DEVICE CONNECTED', position: 'absolute -right-2 sm:-right-4 lg:-right-8 bottom-20', dot: true },
  { label: 'SMART ALERT', position: 'absolute -left-4 sm:-left-8 lg:-left-14 top-1/2 -translate-y-1/2', dot: false },
];

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[calc(100svh-72px)] flex items-center overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-20"
      style={{ background: '#080C10' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.10)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,208,132,0.08)_0%,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left column — Copy */}
          <div>
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-[#00D08420] border border-[#00D08440]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
                <span className="font-body font-semibold text-xs text-[#00D084] tracking-[0.14em]">
                  SMART BUSINESS DEVICE
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-8 font-display font-extrabold text-[2.6rem] sm:text-[3.25rem] lg:text-[4rem] xl:text-[4.6rem] leading-[1.04] tracking-[-0.03em]"
              >
                <span className="text-[#E8EDF2]">THE SMART BUSINESS DEVICE</span>
                <br />
                <span className="text-[#00D084] [text-shadow:0_0_40px_#00D08460]">BUILT FOR MORE.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 font-display text-[1.125rem] lg:text-[1.1875rem] text-[#E8EDF2] max-w-[520px] leading-relaxed font-medium"
              >
                Payment alerts are just the beginning.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-3 font-body text-[1.0625rem] lg:text-[1.125rem] text-[#8A9BAE] max-w-[520px] leading-relaxed"
              >
                Here Open brings payment notifications, shop visibility, customer connectivity
                and configurable smart features together in one connected business device.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 mt-10"
              >
                <Link href="#contact" className={btnPrimary}>
                  GET HERE OPEN <ArrowRight size={16} />
                </Link>
                <Link href="#how-it-works" className={btnSecondary}>
                  SEE HOW IT WORKS <Play size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column — Device Illustration */}
          <div className="relative flex justify-center lg:justify-end px-2 sm:px-0">
            {/* Green glow behind device */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,208,132,0.15)_0%,transparent_65%)]" />
            </div>

            {/* Floating labels — desktop absolute */}
            <div className="hidden lg:block relative w-full max-w-[420px] h-[460px]">
              {floatingChips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={chipVariants}
                  className={chip.position}
                >
                  <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-[#1C2A38] bg-[#0F1923] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    {chip.dot && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
                    )}
                    <span className="font-body font-semibold text-xs text-[#A5B4C4] tracking-wide">{chip.label}</span>
                  </div>
                </motion.div>
              ))}

              {/* The device body — centered */}
              <motion.div
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={deviceVariants}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative w-[200px] h-[280px] rounded-[2rem] border border-[#1C2A38] bg-gradient-to-b from-[#0F1923] to-[#080C10] shadow-[0_0_60px_#00D08420,0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                  {/* Speaker grille */}
                  <div className="flex flex-col items-center gap-1.5 pt-6 pb-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-12 h-[1.5px] rounded-full bg-[#1C2A38]" />
                    ))}
                  </div>

                  {/* Status LED */}
                  <div className="flex justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#00D084] shadow-[0_0_8px_#00D084,0_0_16px_#00D08480] animate-pulse" />
                  </div>

                  {/* HERE OPEN text */}
                  <div className="flex flex-col items-center mt-6">
                    <span className="font-display font-bold text-sm text-[#E8EDF2] tracking-[0.2em]">HERE</span>
                    <span className="font-display font-bold text-sm text-[#00D084] tracking-[0.2em]">OPEN</span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D08460] to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* Mobile: stacked chips + device */}
            <div className="lg:hidden relative w-full max-w-[340px]">
              <motion.div
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={deviceVariants}
                className="flex justify-center mb-6"
              >
                <div className="relative w-[170px] h-[240px] rounded-[1.75rem] border border-[#1C2A38] bg-gradient-to-b from-[#0F1923] to-[#080C10] shadow-[0_0_40px_#00D08420,0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="flex flex-col items-center gap-1.5 pt-5 pb-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-10 h-[1.5px] rounded-full bg-[#1C2A38]" />
                    ))}
                  </div>
                  <div className="flex justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#00D084] shadow-[0_0_8px_#00D084] animate-pulse" />
                  </div>
                  <div className="flex flex-col items-center mt-5">
                    <span className="font-display font-bold text-xs text-[#E8EDF2] tracking-[0.2em]">HERE</span>
                    <span className="font-display font-bold text-xs text-[#00D084] tracking-[0.2em]">OPEN</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D08460] to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={stagger}
                className="grid grid-cols-2 gap-3"
              >
                {floatingChips.map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    custom={i}
                    variants={chipVariants}
                  >
                    <div className="flex items-center gap-2 rounded-full px-3 py-2 border border-[#1C2A38] bg-[#0F1923]">
                      {chip.dot && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
                      )}
                      <span className="font-body font-medium text-[10px] text-[#A5B4C4] tracking-wide">{chip.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
