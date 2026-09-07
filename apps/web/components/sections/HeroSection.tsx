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

              <motion.p variants={fadeUp} className="mt-6 font-display font-bold text-[1.35rem] lg:text-[1.5rem] text-[var(--brand-ink)] max-w-[540px] leading-relaxed">
                <span>Merchants have real problems<span className="text-[var(--brand-ink)]">...</span></span>
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 font-display text-[1.0625rem] lg:text-[1.125rem] text-[var(--brand-ink-muted)] max-w-[540px] leading-relaxed font-medium">
                Customers arrive at closed shops causing loss of trust. Offers don&apos;t reach loyal customers. They worry about theft, fire safety, low customer reach, and advertising costs.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 font-display font-bold text-[1.125rem] lg:text-[1.1875rem] text-[var(--brand-ink)] max-w-[540px] leading-relaxed">
                Our sound box is not just for confirming payments — it solves merchant&apos;s real problems.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-2.5 font-display text-[1.0625rem] lg:text-[1.125rem] text-[var(--brand-ink-muted)] max-w-[540px] leading-relaxed font-medium">
                It gives a strong relationship with merchants and an edge over fintechs.
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

            <div className="hidden lg:block relative w-full max-w-[560px]">
              <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={deviceVariants} className="relative">
                <img
                  src="/hero-screenshot.png"
                  alt="HERE OPEN platform dashboard"
                  className="w-full h-auto rounded-3xl border border-[var(--border)] shadow-[0_0_60px_var(--a20),0_32px_80px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            </div>

            <div className="lg:hidden relative w-full max-w-[440px]">
              <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={deviceVariants}>
                <img
                  src="/hero-screenshot.png"
                  alt="HERE OPEN platform dashboard"
                  className="w-full h-auto rounded-2xl border border-[var(--border)] shadow-[0_0_40px_var(--a20),0_20px_60px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}