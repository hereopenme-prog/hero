'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeIn } from '@/lib/animations';

export function PatentSection() {
  return (
    <Section id="patent" className="bg-[var(--bg)]">
      <Container className="relative z-10 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="relative rounded-3xl border border-[var(--a20)] bg-[var(--section)] px-8 py-12 lg:px-14 lg:py-14 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--a0F)_0%,transparent_60%)] pointer-events-none" />

          <div
            className="relative mx-auto mb-6 flex items-center justify-center"
            style={{ background: 'var(--a1A)', borderRadius: 16, padding: 13, width: 56, height: 56 }}
          >
            <BadgeCheck size={24} className="text-[var(--accent)]" strokeWidth={1.5} />
          </div>

          <p className="relative inline-block rounded-full border border-[var(--a50)] bg-[var(--a10)] px-4 py-1.5 font-display font-bold text-[0.7rem] tracking-[0.25em] text-[var(--accent)]">
            PATENT-PENDING
          </p>

          <h2 className="relative mt-5 font-display font-bold text-[1.5rem] lg:text-[1.9rem] tracking-tight text-[var(--ink)]">
            The Here Open approach is patent-pending.
          </h2>

          <p className="relative mt-4 font-body text-[0.95rem] text-[var(--ink-muted)] leading-relaxed max-w-2xl mx-auto">
            The Here Open approach — connecting real-time shop visibility, business communication and
            configured monitoring through a single connected device — is patent-pending.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
