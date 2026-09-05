'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';

export function CTASection() {
  return (
    <Section id="cta" className="bg-surface-base relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#00D08414_0%,transparent_60%)]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#00D08440] to-transparent" />
      </div>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-display font-bold text-[0.85rem] tracking-[0.3em] text-[#00D084] mb-6">
            JOIN THE MOVEMENT
          </p>
          <h2 className="font-display font-extrabold tracking-tight text-[2.4rem] leading-[1.08] sm:text-[3.4rem] text-[#E8EDF2]">
            MAKE EVERY SHOP VISIBLE.
            <br />
            <span className="text-[#00D084] drop-shadow-[0_0_30px_#00D08460]">MAKE EVERY BUSINESS SMARTER.</span>
          </h2>
          <p className="mt-6 font-body text-[1.05rem] text-[#8A9BAE] leading-relaxed">
            Your shop stays open longer in the minds of your customers — and protected every minute you&apos;re closed.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D084] px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[#080C10] shadow-[0_0_40px_#00D08450] transition-all duration-300 hover:brightness-[1.08]"
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#1C2A38] bg-[#0F1923] px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[#E8EDF2] transition-colors duration-300 hover:border-[#00D08440]"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}