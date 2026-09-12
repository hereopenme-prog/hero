'use client';

import { motion } from 'framer-motion';
import { Activity, Tag, Navigation, ShieldCheck, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

const benefits: { icon: LucideIcon; title: string; caption: string }[] = [
  {
    icon: Activity,
    title: 'Live shop status',
    caption: "Check a shop's reported status before travelling.",
  },
  {
    icon: Tag,
    title: 'Relevant offers',
    caption: 'Discover offers from the businesses you follow.',
  },
  {
    icon: Navigation,
    title: 'Smarter journeys',
    caption: 'Plan visits to help save time, fuel and effort.',
  },
  {
    icon: ShieldCheck,
    title: 'More confident visits',
    caption: 'Make everyday shopping easier with timely updates.',
  },
];

export function CustomersSection() {
  return (
    <Section id="customers" className="bg-[var(--bg-soft)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border bg-[var(--a20)]"
            style={{ borderColor: 'var(--a40)' }}
          >
            <span
              className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span className="font-body font-semibold text-xs tracking-[0.14em] text-[var(--accent)]">FOR CUSTOMERS</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-7 font-display font-bold text-[2rem] leading-[1.08] tracking-[-0.03em] text-[var(--ink)] sm:text-[2.4rem] lg:text-[2.9rem]"
          >
            Smarter choices. Easier visits.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {benefits.map((b) => (
            <motion.article
              key={b.title}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border bg-[var(--panel)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--a40)] lg:p-8"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200"
                style={{ backgroundColor: 'var(--a12)' }}
              >
                <b.icon size={22} strokeWidth={1.75} className="text-[var(--accent)]" />
              </div>
              <h3 className="mt-5 font-display text-[1.05rem] font-bold tracking-tight text-[var(--ink)]">
                {b.title}
              </h3>
              <p className="mt-2.5 font-body text-[14.5px] leading-relaxed text-[var(--ink-muted)]">
                {b.caption}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}