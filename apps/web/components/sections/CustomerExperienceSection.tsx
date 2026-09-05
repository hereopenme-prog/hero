'use client';

import { motion } from 'framer-motion';
import { Search, Navigation, Tag } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const messages = [
  'No guessing.',
  'No unnecessary trip.',
  'Better visibility.',
];

export function CustomerExperienceSection() {
  return (
    <Section id="customer-experience" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="CUSTOMER EXPERIENCE"
          title="YOUR CUSTOMERS KNOW BEFORE THEY GO."
          description="A clean, real-time platform experience — not a mobile app. Customers discover shops and their status from any device."
        />

        {/* Shop profile card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-md"
        >
          <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5 rounded-full px-3 py-1 bg-[#00D08420] border border-[#00D08440]">
                <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                <span className="font-body font-semibold text-[0.65rem] tracking-wider text-[#00D084]">
                  HERE OPEN
                </span>
              </div>
              <span className="font-body text-[0.6rem] tracking-wider text-[#3D4F5E]">PLATFORM</span>
            </div>

            {/* Store name */}
            <p className="font-display font-bold text-[1.15rem] text-[#E8EDF2] mb-2">
              SHARMA GENERAL STORE
            </p>

            {/* Status */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00D084] px-3 py-1 font-display font-bold text-[0.65rem] tracking-widest text-[#080C10] shadow-[0_0_16px_#00D08450]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#080C10]" />
                OPEN
              </span>
              <span className="font-body text-[0.78rem] text-[#00D084]">Open Now</span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#00D084] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#080C10]">
                <Tag size={10} /> 10% OFF
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#00D08414] border border-[#00D08440] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#00D084]">
                NEW ARRIVALS
              </span>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <span className="flex items-center justify-center gap-2 rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3 font-body font-semibold text-[0.78rem] text-[#E8EDF2] hover:border-[#00D08440] transition-colors">
                <Search size={13} className="text-[#00D084]" /> View Shop
              </span>
              <span className="flex items-center justify-center gap-2 rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3 font-body font-semibold text-[0.78rem] text-[#E8EDF2] hover:border-[#00D08440] transition-colors">
                <Navigation size={13} className="text-[#00D084]" /> Directions
              </span>
            </div>
          </div>
        </motion.div>

        {/* Three messages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          {messages.map((msg, i) => (
            <motion.div
              key={msg}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
              <span className="font-display font-semibold text-[0.95rem] text-[#E8EDF2]">{msg}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
