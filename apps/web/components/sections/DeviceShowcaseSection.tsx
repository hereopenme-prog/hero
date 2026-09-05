'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

const callouts = [
  { label: 'SPEAKER', text: 'Designed for clear voice output', top: '8%', left: '-6%', line: 'right' as const },
  { label: 'CONNECTIVITY', text: 'Designed to support cellular connectivity', top: '32%', left: '-14%', line: 'right' as const },
  { label: 'STATUS INDICATOR', text: 'Designed to show device state via LED', top: '54%', left: '106%', line: 'left' as const },
  { label: 'CONTROL', text: 'Designed for simple one-tap interaction', top: '72%', left: '106%', line: 'left' as const },
  { label: 'POWER', text: 'Designed for plug-and-play power', top: '92%', left: '-4%', line: 'right' as const },
  { label: 'SMART FEATURES', text: 'Designed to support intelligent capabilities', top: '50%', left: '-14%', line: 'right' as const },
];

export function DeviceShowcaseSection() {
  return (
    <Section id="device" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="The Device"
          title="ONE DEVICE."
          titleAccent="BUILT FOR THE EVERYDAY BUSINESS."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative mx-auto max-w-3xl mt-10"
        >
          {/* Device Illustration */}
          <motion.div variants={fadeUp} className="relative mx-auto w-[260px] sm:w-[320px]">
            {/* Green glow behind device */}
            <div className="absolute inset-0 -m-12 bg-[radial-gradient(circle,rgba(0,208,132,0.15)_0%,transparent_60%)] pointer-events-none" />

            {/* Device body */}
            <div className="relative rounded-[2rem] border border-[#1C2A38] bg-[#0F1923] px-8 pt-10 pb-8 shadow-[0_0_60px_rgba(0,208,132,0.08)]">
              {/* Speaker grille */}
              <div className="flex flex-col items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-16 h-[2px] rounded-full bg-[#1C2A38]" />
                ))}
              </div>

              {/* LED dot */}
              <div className="flex justify-center mb-6">
                <div className="status-dot-pulse w-3 h-3 rounded-full bg-[#00D084] shadow-[0_0_12px_#00D084]" />
              </div>

              {/* "HERE OPEN" text */}
              <div className="text-center">
                <span className="font-display font-bold text-sm tracking-[0.2em] text-[#E8EDF2]">HERE OPEN</span>
              </div>

              {/* Control button area */}
              <div className="flex justify-center mt-6">
                <div className="w-10 h-10 rounded-full border border-[#1C2A38] bg-[#080C10] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#3D4F5E]" />
                </div>
              </div>

              {/* Base */}
              <div className="mt-6 h-2 rounded-full bg-[#1C2A38] mx-4" />
            </div>
          </motion.div>

          {/* Callout labels */}
          <div className="hidden lg:block">
            {callouts.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className="absolute"
                style={{ top: c.top, left: c.line === 'right' ? c.left : undefined, right: c.line === 'left' ? c.left : undefined }}
              >
                <div className={`flex items-center gap-2 ${c.line === 'left' ? 'flex-row-reverse' : ''}`}>
                  <span className="font-body font-semibold text-[11px] tracking-[0.12em] text-[#E8EDF2]">{c.label}</span>
                  <span className="w-8 h-px bg-[#3D4F5E]" />
                </div>
                <p className="font-body text-[10px] text-[#8A9BAE] mt-1 max-w-[140px]">{c.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile callouts */}
          <motion.div variants={stagger} className="lg:hidden mt-10 grid grid-cols-2 gap-4">
            {callouts.map((c) => (
              <motion.div key={c.label} variants={fadeUp} className="rounded-xl border border-[#1C2A38] bg-[#0F1923] px-4 py-3">
                <span className="font-body font-semibold text-[10px] tracking-[0.12em] text-[#00D084]">{c.label}</span>
                <p className="font-body text-[10px] text-[#8A9BAE] mt-1">{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
