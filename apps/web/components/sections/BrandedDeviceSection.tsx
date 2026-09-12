'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { fadeUp, scaleIn, stagger } from '@/lib/animations';

export function BrandedDeviceSection() {
  return (
    <Section id="device" className="bg-[var(--brand-bg)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 45% at 50% 40%, var(--brand-a20) 0%, transparent 65%)' }}
      />
      <Container className="relative z-10">
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
            <span className="font-body font-semibold text-xs tracking-[0.14em] text-[var(--brand-accent)]">
              BANK-BRANDED EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-7 font-display font-bold text-[2rem] leading-[1.08] tracking-[-0.03em] text-[var(--brand-ink)] sm:text-[2.4rem] lg:text-[2.9rem]"
          >
            Smart Merchant Device
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
          className="relative mt-14 flex justify-center lg:mt-16"
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle, var(--brand-a20) 0%, transparent 62%)' }}
          />
          <div className="relative">
            <div className="hero-float">
              <DeviceVisual size="xl" brand="HERE OPEN" online showQr={false} showNotif={false} />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 text-center font-body text-[13px] tracking-wide text-[var(--brand-ink-muted)]"
        >
          Illustrative device design
        </motion.p>
      </Container>
    </Section>
  );
}