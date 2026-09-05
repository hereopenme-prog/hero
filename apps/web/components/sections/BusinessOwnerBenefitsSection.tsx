'use client';

import { motion } from 'framer-motion';
import { Cpu, CreditCard, Eye, Bell, Users, BarChart3 } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const benefits = [
  { icon: <CreditCard size={18} />, label: 'GET PAID', desc: 'with supported payment notifications.' },
  { icon: <Eye size={18} />, label: 'STAY VISIBLE', desc: 'with shop status.' },
  { icon: <Bell size={18} />, label: 'STAY INFORMED', desc: 'with configurable alerts.' },
  { icon: <Users size={18} />, label: 'CONNECT WITH CUSTOMERS', desc: 'through business updates.' },
  { icon: <BarChart3 size={18} />, label: 'UNDERSTAND YOUR BUSINESS', desc: 'through the Here Open platform.' },
];

export function BusinessOwnerBenefitsSection() {
  return (
    <Section id="businesses" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.04)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FOR BUSINESS OWNERS"
          title="BUILT AROUND THE BUSINESS OWNER."
        />

        {/* Desktop: device center + benefits around */}
        <div className="relative mx-auto mt-6 max-w-5xl hidden md:block" style={{ minHeight: 480 }}>
          {/* Central device */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#00D08450] bg-[#0F1923] shadow-[0_0_50px_rgba(0,208,132,0.2)]">
                <Cpu size={36} className="text-[#00D084]" />
              </div>
              <span className="mt-3 font-body text-[0.6rem] font-bold tracking-[0.22em] text-[#00D084]">HERE OPEN</span>
            </div>
          </motion.div>

          {/* Decorative ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] aspect-square rounded-full border border-dashed border-[#00D08420]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] aspect-square rounded-full border border-[#00D08410]" />

          {/* Benefits positioned around */}
          {benefits.map((b, i) => {
            const positions = [
              'left-[2%] top-[8%]',
              'right-[2%] top-[8%]',
              'left-[-1%] top-[45%]',
              'right-[-1%] top-[45%]',
              'left-1/2 -translate-x-1/2 bottom-[2%]',
            ];
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute z-20 ${positions[i]}`}
              >
                <div className="flex items-start gap-3 rounded-xl border border-[#1C2A38] bg-[#0F1923]/90 backdrop-blur-sm px-4 py-3 max-w-[220px]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D08415] flex-shrink-0 text-[#00D084]">
                    {b.icon}
                  </span>
                  <div>
                    <span className="block font-display font-bold text-[0.65rem] tracking-[0.16em] text-[#E8EDF2]">
                      {b.label}
                    </span>
                    <span className="block mt-0.5 font-body text-[0.72rem] text-[#8A9BAE] leading-relaxed">
                      {b.desc}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: stacked list */}
        <div className="mt-6 md:hidden">
          <div className="mx-auto max-w-md flex flex-col items-center gap-5">
            {/* Device */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center mb-2"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00D08450] bg-[#0F1923] shadow-[0_0_30px_rgba(0,208,132,0.2)]">
                <Cpu size={26} className="text-[#00D084]" />
              </div>
              <span className="mt-2 font-body text-[0.55rem] font-bold tracking-[0.2em] text-[#00D084]">HERE OPEN</span>
            </motion.div>

            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                {i > 0 && <div className="border-t border-[#1C2A38] mb-5" />}
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00D08415] flex-shrink-0 text-[#00D084]">
                    {b.icon}
                  </span>
                  <div>
                    <span className="block font-display font-bold text-[0.7rem] tracking-[0.16em] text-[#E8EDF2]">
                      {b.label}
                    </span>
                    <span className="block mt-0.5 font-body text-[0.8rem] text-[#8A9BAE] leading-relaxed">
                      {b.desc}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
