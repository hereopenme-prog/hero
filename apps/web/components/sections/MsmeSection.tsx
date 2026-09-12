'use client';

import { motion } from 'framer-motion';
import { Eye, ArrowLeftRight, Shield, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

const points: { icon: LucideIcon; text: string }[] = [
  { icon: Eye, text: 'Greater visibility.' },
  { icon: ArrowLeftRight, text: 'Direct access to banks and customers.' },
  { icon: Shield, text: 'Connected safety and security.' },
];

export function MsmeSection() {
  return (
    <Section id="msmes" className="bg-[var(--bg)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="font-display text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              MSMES
            </motion.p>
            <motion.div variants={fadeUp} className="mt-4">
              <span className="font-display font-extrabold text-[3.8rem] leading-[1] tracking-[-0.04em] text-[var(--ink)] sm:text-[4.6rem]">
                6.3
              </span>
              <span className="block font-display text-[1.3rem] font-bold tracking-[0.08em] text-[var(--accent)] mt-1">
                CRORE
              </span>
            </motion.div>
          </div>

          <ul className="space-y-5">
            {points.map((p) => (
              <motion.li
                key={p.text}
                initial={{ opacity: 0, x: 20 }}
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
        </motion.div>
      </Container>
    </Section>
  );
}