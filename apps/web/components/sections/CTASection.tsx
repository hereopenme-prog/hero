'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

const bottomLine = [
  'Shops grow business by day.',
  'Shops stay protected by night.',
  'Customers check status from home.',
  'Customers find nearest open shop in emergency.',
  'Banks win with stickiness and CASA.',
];

export function CTASection() {
  return (
    <Section id="cta" className="bg-[var(--section-2)] relative overflow-hidden">
      {/* Center radial green glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle,var(--a18)_0%,transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[var(--a08)] blur-[80px]" />

        {/* Large ghosted device silhouette */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[520px] rounded-[2.5rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--section)_40%,transparent)] opacity-25" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%] w-[290px] h-[420px] rounded-[1.75rem] border border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--section)_30%,transparent)] opacity-30" />
        <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 flex gap-1.5 opacity-15">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--a70)]" />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold tracking-[-0.02em] text-[2.6rem] leading-[1.05] sm:text-[4rem] lg:text-[4.6rem] text-[var(--accent)]"
          >
            THE BOTTOM LINE
          </motion.h2>

          <motion.ul variants={fadeUp} className="mt-10 space-y-4 text-left sm:text-center">
            {bottomLine.map((line) => (
              <motion.li
                key={line}
                variants={fadeUp}
                className="flex items-start sm:items-center justify-start sm:justify-center gap-3 font-body text-[1.05rem] lg:text-[1.15rem] text-[var(--ink)] leading-relaxed"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--a0A)] text-[var(--accent)]">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span>{line}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            className="mt-10 font-display font-extrabold tracking-tight text-[1.5rem] sm:text-[1.9rem] text-[var(--ink)]"
          >
            One device. <span className="text-[var(--accent)]">Total value for everyone.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-10 py-4 font-display font-bold text-[0.95rem] tracking-wide text-[var(--accent-ink)] shadow-[0_0_40px_var(--a50)] transition-all duration-300 hover:brightness-[1.08]"
            >
              LET&apos;S TALK <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}