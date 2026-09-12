'use client';

import { motion } from 'framer-motion';
import { Landmark, Store, Users, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

const audiences: { icon: LucideIcon; title: string; caption: string }[] = [
  {
    icon: Landmark,
    title: 'BANKS',
    caption: 'Build relationships beyond payment confirmation.',
  },
  {
    icon: Store,
    title: 'MSMES',
    caption: 'Greater visibility. Direct access to banks and customers.',
  },
  {
    icon: Users,
    title: 'CUSTOMERS',
    caption: 'Know which shops are open.',
  },
];

export function AudiencesSection() {
  return (
    <Section id="audiences" className="bg-[var(--bg)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl font-display text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--ink-muted)]"
          >
            The people and businesses this device aims to serve
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6"
          >
            {audiences.map((a, idx) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col rounded-2xl border bg-[var(--panel)] p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--a40)]"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--a12)]">
                  <a.icon size={26} strokeWidth={1.75} className="text-[var(--accent)]" />
                </div>
                <h3 className="mt-6 font-display text-[1.1rem] font-bold tracking-[0.18em] text-[var(--ink)]">
                  {a.title}
                </h3>
                <p className="mt-3 font-body text-[14.5px] leading-relaxed text-[var(--ink-muted)]">
                  {a.caption}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}