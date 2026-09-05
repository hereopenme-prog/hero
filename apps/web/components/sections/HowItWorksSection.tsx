'use client';

import { motion } from 'framer-motion';
import { Smartphone, Cpu, Cloud, Eye } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { scaleIn, stagger } from '@/lib/animations';

const steps = [
  {
    icon: <Smartphone size={24} className="text-[#00D084]" strokeWidth={1.5} />,
    num: '01',
    title: 'Owner',
    desc: 'Owner opens the HERE OPEN app and taps OPEN or CLOSED.',
  },
  {
    icon: <Cpu size={24} className="text-[#00D084]" strokeWidth={1.5} />,
    num: '02',
    title: 'Device',
    desc: 'The IoT device receives the command instantly.',
  },
  {
    icon: <Cloud size={24} className="text-[#00D084]" strokeWidth={1.5} />,
    num: '03',
    title: 'Cloud',
    desc: 'The status synchronizes with the cloud platform in real time.',
  },
  {
    icon: <Eye size={24} className="text-[#00D084]" strokeWidth={1.5} />,
    num: '04',
    title: 'Customer',
    desc: 'Customers see the shop\u2019s live status on the app.',
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.04)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="How It Works"
          title="Four Steps. Zero Guesswork."
          description="From the owner's tap to the customer's screen — everything happens in real time."
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="absolute left-[8%] right-[8%] top-[52px] h-px bg-gradient-to-r from-[#00D084]/0 via-[#00D084]/40 to-[#00D084]/0" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-4 gap-6"
          >
            {steps.map((s) => (
              <motion.div key={s.num} variants={scaleIn} className="relative text-center">
                <div className="relative mx-auto w-[104px] h-[104px] mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-[#00D0841A] border border-[#00D08430] rotate-6" />
                  <div className="absolute inset-0 rounded-2xl bg-[#0F1923] border border-[#1C2A38] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 rounded-full bg-[#00D084] text-[10px] font-bold text-[#080C10] px-2 py-0.5 shadow-[0_0_16px_#00D08450]">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[1rem] text-[#E8EDF2] mb-1.5">{s.title}</h3>
                <p className="font-body text-[0.85rem] text-[#8A9BAE] leading-relaxed max-w-[220px] mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile vertical timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="md:hidden space-y-0 relative max-w-md mx-auto"
        >
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-[#00D08420]" />
          {steps.map((s) => (
            <motion.div key={s.num} variants={scaleIn} className="relative flex items-start gap-5 pb-9 last:pb-0">
              <div className="relative z-10 w-11 h-11 rounded-2xl bg-[#0F1923] border border-[#00D08440] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_#00D08418]">
                {s.icon}
              </div>
              <div className="pt-1">
                <p className="font-display font-bold text-[0.75rem] text-[#00D084] tracking-widest mb-1">{s.num}</p>
                <h3 className="font-display font-semibold text-[1rem] text-[#E8EDF2] mb-1">{s.title}</h3>
                <p className="font-body text-[0.875rem] text-[#8A9BAE] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}