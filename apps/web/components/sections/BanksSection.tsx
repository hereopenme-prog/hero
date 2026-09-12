'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

export function BanksSection() {
  return (
    <Section id="banks" className="bg-[var(--section-2)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border bg-[var(--a12)]"
            style={{ borderColor: 'var(--a40)' }}
          >
            <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-display font-semibold text-xs tracking-[0.14em] text-[var(--accent)]">
              FOR BANKS
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-7 font-display font-bold text-[2.2rem] leading-[1.06] tracking-[-0.03em] text-[var(--ink)] sm:text-[2.8rem] lg:text-[3.4rem]"
          >
            Lead the change.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 font-body text-[1.15rem] leading-relaxed text-[var(--ink-muted)] max-w-2xl mx-auto"
          >
            Connect directly with merchants and customers. Build relationships beyond payment confirmation.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}