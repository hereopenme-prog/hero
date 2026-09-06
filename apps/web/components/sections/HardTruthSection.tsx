'use client';

import { motion } from 'framer-motion';
import { DoorClosed, Megaphone, MoonStar } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

const unsolved = [
  {
    icon: <DoorClosed size={18} />,
    title: 'Customers arrive at a closed shop.',
    caption: 'No status. Wasted trip. Lost trust.',
  },
  {
    icon: <Megaphone size={18} />,
    title: "He can't tell loyal customers about today's offer.",
    caption: 'No voice. Missed revenue.',
  },
  {
    icon: <MoonStar size={18} />,
    title: 'He worries about theft at night.',
    caption: 'No watch. No peace of mind.',
  },
];

export function HardTruthSection() {
  return (
    <Section id="hard-truth" className="bg-[var(--brand-bg)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,226,138,0.08)_0%,transparent_55%)] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE HARD TRUTH"
          title="BANKS ARE LOSING"
          titleAccent="THE MERCHANT ACQUIRING WAR."
          description="Not because the technology is weak. Not because the networks are small. But because the product is exactly the same as what fintechs offer."
          accent="light"
        />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto -mt-6 max-w-2xl text-center font-display font-semibold text-[1.15rem] lg:text-[1.35rem] text-[var(--brand-ink)] leading-relaxed"
        >
          A sound box that only confirms payments is not enough anymore.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {unsolved.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl border border-[var(--dev-border)] bg-[var(--brand-bg-2)] p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-a20)] text-[var(--brand-accent)]">
                {item.icon}
              </span>
              <p className="mt-4 font-display font-semibold text-[0.95rem] text-[var(--brand-ink)] leading-snug">
                {item.title}
              </p>
              <p className="mt-2 font-body text-[0.82rem] text-[var(--brand-ink-muted)] leading-relaxed">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mt-12 text-center font-display font-extrabold tracking-tight text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] text-[var(--brand-accent)] [text-shadow:0_0_40px_var(--brand-a60)]"
        >
          This device changes everything.
        </motion.p>
      </Container>
    </Section>
  );
}