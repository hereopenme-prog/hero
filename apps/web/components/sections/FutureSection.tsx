'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

export function FutureSection() {
  return (
    <Section id="future" className="bg-[var(--brand-bg)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 0%, var(--brand-a20) 0%, transparent 65%)' }}
      />
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border"
            style={{ backgroundColor: 'var(--brand-a20)', borderColor: 'var(--brand-a40)' }}
          >
            <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
            <span className="font-display font-semibold text-xs tracking-[0.14em] text-[var(--brand-accent)]">
              THE FUTURE WE WANT TO BUILD
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-8 font-display font-bold text-[2.2rem] leading-[1.06] tracking-[-0.03em] text-[var(--brand-ink)] sm:text-[2.9rem] lg:text-[3.5rem]"
          >
            Local progress.
            <span className="block text-[var(--brand-accent)] [text-shadow:0_0_40px_var(--brand-a60)]">
              National possibility.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl font-body text-[1.1rem] leading-relaxed text-[var(--brand-ink-muted)]"
          >
            A future where every bank is a direct partner in people's progress, every merchant is better
            connected and every shop is visible.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl font-body text-[1.05rem] leading-relaxed text-[var(--brand-ink-muted)]"
          >
            One smart platform connecting banks, merchants and customers in real time, with zero intermediaries
            and stronger local relationships.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}