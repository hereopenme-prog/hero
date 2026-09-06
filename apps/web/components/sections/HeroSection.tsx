'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
  { label: 'SHOP', sublabel: 'OPEN / CLOSED', position: 'absolute -left-2 sm:-left-4 lg:-left-8 top-6', dot: true },
  { label: 'DEVICE', sublabel: 'CONNECTED', position: 'absolute -right-2 sm:-right-4 lg:-right-8 top-6', dot: true },
  { label: 'PLATFORM', sublabel: 'MANAGED', position: 'absolute -left-2 sm:-left-4 lg:-left-8 bottom-20', dot: false },
  { label: 'CUSTOMER', sublabel: 'VISIBLE', position: 'absolute -right-2 sm:-right-4 lg:-right-8 bottom-20', dot: true },
  { label: 'SMART', sublabel: 'ALERTS', position: 'absolute -left-4 sm:-left-8 lg:-left-14 top-1/2 -translate-y-1/2', dot: false },
];

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[calc(100svh-72px)] flex items-center overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-20"
      style={{ background: 'var(--brand-bg)' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.10)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,208,132,0.08)_0%,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger}>
              <motion.h1 variants={fadeUp} className="mt-1 font-display font-extrabold text-[1.4rem] sm:text-[1.95rem] lg:text-[2.4rem] xl:text-[2.75rem] leading-[1.08] tracking-[-0.015em]">
                <span className="text-[var(--brand-ink)] whitespace-nowrap">LOSING COMPETITIVE EDGE</span>
                <br />
                <span className="text-[var(--brand-accent)] [text-shadow:0_0_40px_var(--brand-a60)] text-[2.34rem] sm:text-[2.93rem] lg:text-[3.6rem] xl:text-[4.13rem]">OVER FINTECHS?</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 font-display font-semibold text-[1.05rem] lg:text-[1.15rem] text-[var(--brand-ink)] max-w-[540px] leading-relaxed">
                Not Because the Payment Sound Box Is Weak,
                <br />
                Because the Product Is the Same.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-6 flex items-center gap-2.5 font-display font-bold text-[1.125rem] lg:text-[1.1875rem] text-[var(--brand-ink)] max-w-[540px] leading-relaxed">
                <span className="inline-block w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[var(--brand-accent)] shadow-[0_0_8px_var(--brand-accent)]" />
                <span>Merchants have real problems.</span>
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 font-display text-[1.0625rem] lg:text-[1.125rem] text-[var(--brand-ink-muted)] max-w-[540px] leading-relaxed font-medium">
                Customers arrive at closed shops causing loss of trust. Offers don&apos;t reach loyal customers. They worry about theft, fire safety, low customer reach, and advertising costs.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 flex items-center gap-2.5 font-display text-[1.0625rem] lg:text-[1.125rem] text-[var(--brand-ink-muted)] max-w-[540px] leading-relaxed font-medium">
                <span className="inline-block w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[var(--brand-accent)] shadow-[0_0_8px_var(--brand-accent)]" />
                <span>Our sound box is not just for payment confirmation — it solves merchants&apos; real problems.</span>
              </motion.p>

              <motion.p variants={fadeUp} className="mt-2.5 flex items-center gap-2.5 font-display text-[1.0625rem] lg:text-[1.125rem] text-[var(--brand-ink-muted)] max-w-[540px] leading-relaxed font-medium">
                <span className="inline-block w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[var(--brand-accent)] shadow-[0_0_8px_var(--brand-accent)]" />
                <span>It gives a strong relationship with merchants and an edge over fintechs.</span>
              </motion.p>

              <motion.p variants={fadeUp} className="mt-4 font-display font-semibold text-[1.125rem] lg:text-[1.25rem] text-[var(--brand-ink)] max-w-[540px] leading-relaxed">
                This device <span className="text-[var(--brand-accent)]">changes everything.</span>
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link href="#banks" className={btnPrimary}>
                  PARTNER WITH US <ArrowRight size={16} />
                </Link>
                <Link href="#contact" className={btnSecondary}>
                  REQUEST A DEMO <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end px-2 sm:px-0">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,208,132,0.15)_0%,transparent_65%)]" />
            </div>

            <div className="hidden lg:block relative w-full max-w-[420px] h-[460px]">
              {floatingChips.map((chip, i) => (
                <motion.div key={chip.label} custom={i} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={chipVariants} className={chip.position}>
                  <div className="flex items-center gap-2.5 rounded-full px-4 py-2 border border-[var(--border)] bg-[var(--section)] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    {chip.dot && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />}
                    <div className="flex flex-col">
                      <span className="font-body font-semibold text-xs text-[var(--ink)] tracking-wide">{chip.label}</span>
                      <span className="font-body text-[0.6rem] text-[var(--ink-2)] tracking-wide">{chip.sublabel}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={deviceVariants} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[200px] h-[280px] rounded-[2rem] border border-[var(--border)] bg-gradient-to-b from-[var(--section)] to-[var(--bg)] shadow-[0_0_60px_var(--a20),0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="flex flex-col items-center gap-1.5 pt-6 pb-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-12 h-[1.5px] rounded-full bg-[var(--border)]" />
                    ))}
                  </div>
                  <div className="flex justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent),0_0_16px_var(--a80)] animate-pulse" />
                  </div>
                  <div className="flex flex-col items-center mt-6">
                    <span className="font-display font-bold text-sm text-[var(--ink)] tracking-[0.2em]">HERE</span>
                    <span className="font-display font-bold text-sm text-[var(--accent)] tracking-[0.2em]">OPEN</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--a60)] to-transparent" />
                </div>
              </motion.div>
            </div>

            <div className="lg:hidden relative w-full max-w-[340px]">
              <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={deviceVariants} className="flex justify-center mb-6">
                <div className="relative w-[170px] h-[240px] rounded-[1.75rem] border border-[var(--border)] bg-gradient-to-b from-[var(--section)] to-[var(--bg)] shadow-[0_0_40px_var(--a20),0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="flex flex-col items-center gap-1.5 pt-5 pb-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-10 h-[1.5px] rounded-full bg-[var(--border)]" />
                    ))}
                  </div>
                  <div className="flex justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
                  </div>
                  <div className="flex flex-col items-center mt-5">
                    <span className="font-display font-bold text-xs text-[var(--ink)] tracking-[0.2em]">HERE</span>
                    <span className="font-display font-bold text-xs text-[var(--accent)] tracking-[0.2em]">OPEN</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--a60)] to-transparent" />
                </div>
              </motion.div>

              <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger} className="grid grid-cols-2 gap-3">
                {floatingChips.map((chip, i) => (
                  <motion.div key={chip.label} custom={i} variants={chipVariants}>
                    <div className="flex items-center gap-2 rounded-full px-3 py-2 border border-[var(--border)] bg-[var(--section)]">
                      {chip.dot && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />}
                      <div className="flex flex-col">
                        <span className="font-body font-medium text-[10px] text-[var(--ink)] tracking-wide">{chip.label}</span>
                        <span className="font-body text-[0.55rem] text-[var(--ink-2)] tracking-wide">{chip.sublabel}</span>
                      </div>
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