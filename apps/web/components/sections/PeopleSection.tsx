'use client';

import { motion } from 'framer-motion';
import { Bell, MapPin, Navigation, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

const points: { icon: LucideIcon; text: string }[] = [
  { icon: Bell, text: 'Know which shops are open.' },
  { icon: MapPin, text: 'Discover nearby businesses.' },
  { icon: Navigation, text: 'Avoid uncertain and wasted trips.' },
];

export function PeopleSection() {
  return (
    <Section id="people" className="bg-[var(--section-2)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <ul className="order-2 lg:order-1 space-y-5">
            {points.map((p) => (
              <motion.li
                key={p.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 rounded-2xl border bg-[var(--panel)] p-5"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--a12)]">
                  <p.icon size={20} strokeWidth={1.75} className="text-[var(--accent)]" />
                </div>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-[var(--ink)]">
                  {p.text}
                </p>
              </motion.li>
            ))}
          </ul>

          <div className="order-1 lg:order-2">
            <motion.p
              variants={fadeUp}
              className="font-display text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              People
            </motion.p>
            <motion.div variants={fadeUp} className="mt-4">
              <span className="font-display font-extrabold text-[3.8rem] leading-[1] tracking-[-0.04em] text-[var(--ink)] sm:text-[4.6rem]">
                90
              </span>
              <span className="block font-display text-[1.3rem] font-bold tracking-[0.08em] text-[var(--accent)] mt-1">
                CRORE
              </span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}