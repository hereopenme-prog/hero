'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, PlayCircle } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

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
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold tracking-[-0.02em] text-[2.6rem] leading-[1.05] sm:text-[4rem] lg:text-[4.6rem] text-[var(--ink)]"
          >
            THE PHYSICAL WORLD
            <br />
            <span className="text-[var(--accent)] drop-shadow-[0_0_30px_var(--a30)]">IS READY TO CONNECT.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl font-body text-[1.05rem] text-[var(--ink-muted)] leading-relaxed"
          >
            From the smallest local shop to the largest merchant ecosystem, Here Open is building the
            infrastructure that connects businesses, devices and customers in real time.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[var(--accent-ink)] shadow-[0_0_40px_var(--a50)] transition-all duration-300 hover:brightness-[1.08]"
            >
              Explore Here Open <ArrowRight size={16} />
            </a>
            <a
              href="#banks"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-transparent px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[var(--ink)] transition-colors duration-300 hover:border-[var(--a40)] hover:text-[var(--accent)]"
            >
              <Building2 size={16} /> Partner With Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-transparent px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[var(--ink)] transition-colors duration-300 hover:border-[var(--a40)] hover:text-[var(--accent)]"
            >
              <PlayCircle size={16} /> Request a Demo
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
