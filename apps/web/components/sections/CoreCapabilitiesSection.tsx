'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const capabilities = [
  { num: '01', title: 'PAYMENTS', desc: 'Hear payment confirmations instantly.' },
  { num: '02', title: 'SHOP STATUS', desc: 'Keep your business status visible.' },
  { num: '03', title: 'CUSTOMER CONNECTIVITY', desc: 'Help customers know before they go.' },
  { num: '04', title: 'SMART MONITORING', desc: 'Support configured safety/security monitoring.' },
  { num: '05', title: 'BUSINESS COMMUNICATION', desc: 'Share offers, announcements and updates.' },
];

export function CoreCapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section id="features" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="ONE DEVICE."
          titleAccent="MULTIPLE POSSIBILITIES."
        />

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Desktop: star pattern with device center */}
          <div className="hidden lg:block relative h-[520px]">
            {/* Center device */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="relative w-[120px] h-[170px] rounded-[1.5rem] border border-[#1C2A38] bg-gradient-to-b from-[#0F1923] to-[#080C10] shadow-[0_0_40px_#00D08420,0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="flex flex-col items-center gap-1 pt-4 pb-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-[1px] rounded-full bg-[#1C2A38]" />
                  ))}
                </div>
                <div className="flex justify-center mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] shadow-[0_0_6px_#00D084] animate-pulse" />
                </div>
                <div className="flex flex-col items-center mt-3">
                  <span className="font-display font-bold text-[9px] text-[#E8EDF2] tracking-[0.2em]">HERE</span>
                  <span className="font-display font-bold text-[9px] text-[#00D084] tracking-[0.2em]">OPEN</span>
                </div>
              </div>
            </motion.div>

            {/* Connecting lines — SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 520">
              {/* Lines from center (500,260) to each capability position */}
              {[
                { x: 150, y: 80 },
                { x: 850, y: 80 },
                { x: 100, y: 340 },
                { x: 900, y: 340 },
                { x: 100, y: 260 },
              ].map((pos, i) => (
                <motion.line
                  key={i}
                  x1={500}
                  y1={260}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="#1C2A38"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: 'easeInOut' }}
                />
              ))}
            </svg>

            {/* Capability blocks — positioned around device */}
            {capabilities.map((cap, i) => {
              const positions = [
                'left-[80px] top-[30px]',
                'right-[80px] top-[30px]',
                'left-[40px] bottom-[60px]',
                'right-[40px] bottom-[60px]',
                'left-[40px] top-[220px]',
              ];
              const aligns = ['text-right', 'text-left', 'text-right', 'text-left', 'text-right'];

              return (
                <motion.div
                  key={cap.num}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className={`absolute ${positions[i]} ${aligns[i]} max-w-[200px]`}
                >
                  <p className="font-display font-bold text-xs text-[#00D084] tracking-[0.15em] mb-1">{cap.num}</p>
                  <h3 className="font-display font-semibold text-[13px] text-[#E8EDF2] tracking-wide mb-1">{cap.title}</h3>
                  <p className="font-body text-[12px] text-[#8A9BAE] leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile & Tablet: stacked list with device icon */}
          <div className="lg:hidden">
            {/* Device icon top-center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-10"
            >
              <div className="relative w-[100px] h-[140px] rounded-[1.25rem] border border-[#1C2A38] bg-gradient-to-b from-[#0F1923] to-[#080C10] shadow-[0_0_30px_#00D08415] overflow-hidden">
                <div className="flex flex-col items-center gap-1 pt-3 pb-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-7 h-[1px] rounded-full bg-[#1C2A38]" />
                  ))}
                </div>
                <div className="flex justify-center mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] shadow-[0_0_6px_#00D084] animate-pulse" />
                </div>
                <div className="flex flex-col items-center mt-2">
                  <span className="font-display font-bold text-[8px] text-[#E8EDF2] tracking-[0.2em]">HERE</span>
                  <span className="font-display font-bold text-[8px] text-[#00D084] tracking-[0.2em]">OPEN</span>
                </div>
              </div>
            </motion.div>

            {/* Capability list */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col gap-6 max-w-lg mx-auto"
            >
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.num}
                  variants={fadeUp}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative pl-6 border-l border-[#1C2A38]"
                >
                  <span className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full bg-[#00D084] -translate-x-[3.5px]" />
                  <p className="font-display font-bold text-xs text-[#00D084] tracking-[0.15em] mb-1">{cap.num}</p>
                  <h3 className="font-display font-semibold text-sm text-[#E8EDF2] tracking-wide mb-1">{cap.title}</h3>
                  <p className="font-body text-[13px] text-[#8A9BAE] leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
