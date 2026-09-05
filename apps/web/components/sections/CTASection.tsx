'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';

export function CTASection() {
  return (
    <Section id="cta" className="bg-[#080C10] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#00D08410_0%,transparent_60%)]" />

        {/* Large device silhouette */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[480px] rounded-3xl border border-[#1C2A38] bg-[#0F1923]/40 opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] w-[280px] h-[380px] rounded-2xl border border-[#1C2A3860] bg-[#0F1923]/30 opacity-40" />

        {/* Speaker grille accent */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 flex gap-1.5 opacity-20">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#00D084]" />
          ))}
        </div>

        {/* Green glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00D08408] blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display font-extrabold tracking-tight text-[2.4rem] leading-[1.08] sm:text-[3.4rem] text-[#E8EDF2]">
            YOUR BUSINESS IS MORE
            <br />
            THAN A PAYMENT.
          </h2>
          <p className="mt-5 font-body text-[1.05rem] text-[#00D084] leading-relaxed">
            Make it connected.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D084] px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[#080C10] shadow-[0_0_40px_#00D08450] transition-all duration-300 hover:brightness-[1.08]"
            >
              GET HERE OPEN <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#1C2A38] bg-[#0F1923] px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[#E8EDF2] transition-colors duration-300 hover:border-[#00D08440]"
            >
              TALK TO OUR TEAM
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
