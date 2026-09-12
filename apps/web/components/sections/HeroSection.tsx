'use client';

import { motion, type Variants } from 'framer-motion';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { Container } from '@/app/components/Container';

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
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  return (
    <section
      id="vision"
      className="relative min-h-[calc(100svh-72px)] flex items-center pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden"
      style={{ background: 'var(--brand-bg)' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.10)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,208,132,0.08)_0%,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border"
                style={{ backgroundColor: 'var(--brand-a20)', borderColor: 'var(--brand-a40)' }}
              >
                <span
                  className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--brand-accent)' }}
                />
                <span className="font-display text-[13px] font-bold tracking-[0.14em] text-[var(--brand-accent)]">
                  OUR VISION <span className="text-[var(--brand-ink-muted)]">/</span> VOCAL FOR LOCAL
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 font-display font-extrabold leading-[1.05] tracking-[-0.015em] text-[var(--brand-ink)] text-[2.1rem] sm:text-[2.75rem] lg:text-[3.2rem] xl:text-[3.6rem]"
              >
                Connecting India's
                <span
                  className="block text-[var(--brand-accent)] [text-shadow:0_0_40px_var(--brand-a60)]"
                >
                  local economy.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 font-body text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-[var(--brand-ink-muted)] max-w-[540px]"
              >
                Empowering banks. Supporting merchants.
                <br className="hidden sm:block" /> Bringing customers closer.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 inline-flex items-center gap-3 rounded-xl border border-[var(--brand-a40)] bg-white/[0.04] px-4 py-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                <span className="font-display text-[12px] font-bold tracking-[0.16em] text-[var(--brand-ink)]">
                  ONE DEVICE. DIRECT CONNECTIONS. A STRONGER INDIA.
                </span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={deviceVariants}
            className="relative flex items-center justify-center py-6 lg:py-0"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,208,132,0.16)_0%,transparent_65%)]" />
            </div>
            <div className="hero-float relative">
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(0,208,132,0.18)_0%,transparent_62%)] blur-2xl pointer-events-none" />
              <DeviceVisual size="xl" brand="HERE OPEN" online showQr showNotif />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}