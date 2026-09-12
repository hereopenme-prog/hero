'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';
import { btnPrimary } from '@/components/ui/buttonStyles';

export function PartnershipCTASection() {
  return (
    <Section id="get-involved" className="bg-[var(--brand-bg)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 100%, var(--brand-a20) 0%, transparent 65%)' }}
      />
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-[13px] font-bold uppercase tracking-[0.32em] text-[var(--brand-accent)]"
          >
            PEOPLE. BUSINESSES. COMMUNITIES.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-7 font-display font-bold text-[2.3rem] leading-[1.06] tracking-[-0.03em] text-[var(--brand-ink)] sm:text-[3rem] lg:text-[3.6rem]"
          >
            One device. Direct connections.
            <span className="block text-[var(--brand-accent)] [text-shadow:0_0_40px_var(--brand-a60)]">
              A stronger India.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 font-body text-[1.15rem] leading-relaxed text-[var(--brand-ink-muted)]"
          >
            Help shape the next chapter of local business.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="mailto:contact@hereopen.me"
              className="active:scale-[0.97] inline-flex items-center gap-2.5 rounded-xl bg-[var(--brand-accent)] px-8 py-3.5 font-display font-bold text-[15px] text-[var(--brand-accent-ink)] transition-all duration-300 hover:brightness-[1.08] shadow-[0_0_36px_var(--brand-a60)]"
            >
              Build with Here Open <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}