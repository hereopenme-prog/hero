'use client';

import { motion } from 'framer-motion';
import { FileCheck } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';

export function PatentSection() {
  return (
    <Section id="patent" className="bg-[#0A0F14]">
      <Container className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-3xl border border-[#00D08430] bg-[#0F1923] p-10 lg:p-12 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00D0840F_0%,transparent_60%)] pointer-events-none rounded-3xl" />
          <div
            className="relative mx-auto mb-6 flex items-center justify-center"
            style={{ background: '#00D0841A', borderRadius: 16, padding: 14, width: 60, height: 60 }}
          >
            <FileCheck size={26} className="text-[#00D084]" strokeWidth={1.5} />
          </div>
          <p
            className="relative inline-block rounded-full border border-[#00D08450] bg-[#00D08410] px-4 py-1.5 font-display font-bold text-[0.72rem] tracking-[0.25em] text-[#00D084]"
          >
            PATENT-PENDING
          </p>
          <h2 className="relative mt-5 font-display font-bold text-[1.6rem] lg:text-[2rem] tracking-tight text-[#E8EDF2]">
            The HERE OPEN approach is patent-pending.
          </h2>
          <p className="relative mt-4 font-body text-[0.95rem] text-[#8A9BAE] leading-relaxed max-w-2xl mx-auto">
            The combination of real-time shop visibility, automated after-hours security, and offline-safe GSM
            connectivity is being protected as intellectual property.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}