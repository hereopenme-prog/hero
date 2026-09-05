'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';
import {
  CreditCard,
  Eye,
  Users,
  Activity,
  Brain,
} from 'lucide-react';

const stages = [
  { icon: <CreditCard size={18} className="text-[#00D084]" />, label: 'PAYMENTS' },
  { icon: <Eye size={18} className="text-[#00D084]" />, label: 'SHOP VISIBILITY' },
  { icon: <Users size={18} className="text-[#00D084]" />, label: 'CUSTOMER CONNECTIVITY' },
  { icon: <Activity size={18} className="text-[#00D084]" />, label: 'SMART MONITORING' },
  { icon: <Brain size={18} className="text-[#00D084]" />, label: 'BUSINESS INTELLIGENCE' },
];

export function FutureReadySection() {
  return (
    <Section id="about" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,208,132,0.05)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Future Ready"
          title="START WITH PAYMENTS."
          titleAccent="BUILD TOWARD MORE."
          description="Designed to grow with your business. Each capability is built on the same connected platform."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-14"
        >
          {/* Desktop horizontal flow */}
          <div className="hidden md:flex items-center justify-center gap-0 max-w-4xl mx-auto">
            {stages.map((stage, i) => (
              <motion.div key={stage.label} variants={fadeUp} className="flex items-center">
                {/* Stage node */}
                <div className="flex flex-col items-center gap-3 w-32">
                  <div className="w-14 h-14 rounded-full border border-[#1C2A38] bg-[#0F1923] flex items-center justify-center shadow-[0_0_20px_rgba(0,208,132,0.06)]">
                    {stage.icon}
                  </div>
                  <span className="font-body font-semibold text-[11px] tracking-[0.08em] text-[#A5B4C4] text-center leading-tight">{stage.label}</span>
                </div>

                {/* Arrow between stages */}
                {i < stages.length - 1 && (
                  <motion.div variants={fadeUp} className="mx-2 flex items-center">
                    <div className="w-8 h-px bg-[#3D4F5E]" />
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#3D4F5E]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical flow */}
          <motion.div variants={stagger} className="md:hidden max-w-xs mx-auto space-y-0">
            {stages.map((stage, i) => (
              <motion.div key={stage.label} variants={fadeUp} className="flex items-center gap-4">
                {/* Stage node */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full border border-[#1C2A38] bg-[#0F1923] flex items-center justify-center">
                    {stage.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="font-body font-semibold text-xs text-[#A5B4C4]">{stage.label}</span>
                </div>

                {/* Arrow down */}
                {i < stages.length - 1 && (
                  <div className="absolute ml-5 mt-12">
                    <div className="w-px h-4 bg-[#3D4F5E]" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-body text-[11px] text-[#3D4F5E] mt-8"
        >
          Capabilities marked as designed to support are planned features, not yet confirmed specifications.
        </motion.p>
      </Container>
    </Section>
  );
}
