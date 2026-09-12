'use client';

import { motion } from 'framer-motion';
import { Landmark, Store, Users, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

const values: { icon: LucideIcon; eyebrow: string; text: string }[] = [
  {
    icon: Landmark,
    eyebrow: 'FOR BANKS',
    text: 'Stronger relationships, everyday engagement and lending opportunities.',
  },
  {
    icon: Store,
    eyebrow: 'FOR MSMEs',
    text: 'Direct access to banks and customers, with greater visibility and awareness.',
  },
  {
    icon: Users,
    eyebrow: 'FOR CUSTOMERS',
    text: 'Clear shop status and a better-connected local experience.',
  },
];

export function AudienceValueSection() {
  return (
    <Section id="value" className="bg-[var(--section-2)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {values.map((v) => (
            <motion.article
              key={v.eyebrow}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border bg-[var(--panel)] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--a40)]"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--a12)]">
                <v.icon size={22} strokeWidth={1.75} className="text-[var(--accent)]" />
              </div>
              <span className="mt-6 font-display text-[12px] font-bold tracking-[0.18em] text-[var(--accent)]">
                {v.eyebrow}
              </span>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-[var(--ink)]">
                {v.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}