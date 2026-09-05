'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';
import {
  Landmark,
  Plus,
  Cpu,
  Smartphone,
  Network,
  Smile,
} from 'lucide-react';

const partnerNodes = [
  {
    icon: <Landmark size={20} className="text-[#00D084]" />,
    label: 'BANK',
    caption: 'Owns and manages the merchant relationship.',
  },
  {
    icon: <Cpu size={20} className="text-[#00D084]" />,
    label: 'HERE OPEN',
    caption: 'Technology, platform and device ecosystem.',
  },
  {
    icon: <Smartphone size={20} className="text-[#00D084]" />,
    label: 'SMART MERCHANT DEVICE',
    caption: 'The branded connected device.',
  },
  {
    icon: <Network size={20} className="text-[#00D084]" />,
    label: 'MERCHANT NETWORK',
    caption: 'Deployed across the bank\'s ecosystem.',
  },
  {
    icon: <Smile size={20} className="text-[#00D084]" />,
    label: 'CUSTOMER EXPERIENCE',
    caption: 'A better, connected local experience.',
  },
];

const reasons = [
  {
    index: '01',
    title: 'MERCHANT RELATIONSHIP',
    caption: 'A device is a daily physical touchpoint with merchants.',
  },
  {
    index: '02',
    title: 'BRAND PRESENCE',
    caption: 'The bank\'s brand, on the merchant\'s counter.',
  },
  {
    index: '03',
    title: 'BEYOND PAYMENTS',
    caption: 'Useful services that go further than confirmation.',
  },
  {
    index: '04',
    title: 'CONNECTED MERCHANT SERVICES',
    caption: 'Visibility, communication and monitoring opportunities.',
  },
  {
    index: '05',
    title: 'FUTURE ECOSYSTEM',
    caption: 'Designed for services that don\'t exist yet.',
  },
];

export function BankPartnershipSection() {
  return (
    <Section id="bank-partnership" className="bg-[#0A0F14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE PARTNERSHIP"
          title="A PLATFORM"
          titleAccent="BANKS CAN BUILD ON."
          description="A conceptual partnership model — Here Open provides the technology and device ecosystem."
        />

        {/* Partnership architecture visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="max-w-5xl mx-auto mb-20 lg:mb-24"
        >
          <div className="hidden md:flex items-start justify-between gap-3">
            {partnerNodes.map((node, i) => (
              <motion.div key={node.label} variants={fadeUp} className="flex flex-col items-center flex-1 max-w-[160px]">
                <div className="w-14 h-14 rounded-full border border-[#1C2A38] bg-[#0F1923] flex items-center justify-center mb-4">
                  {node.icon}
                </div>
                <p className="font-display font-bold text-[11px] tracking-[0.1em] text-[#E8EDF2] text-center leading-tight">
                  {node.label}
                </p>
                <p className="mt-1.5 font-body text-[11px] text-[#8A9BAE] text-center leading-snug">
                  {node.caption}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Plus sign between Bank and Here Open (desktop) */}
          <div className="hidden lg:flex items-center justify-center -mt-[152px] mb-[152px] px-[8%]">
            <div className="flex-1 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-[#00D084]/0 via-[#00D084]/40 to-[#00D084]/0" />
            </div>
            <div className="mx-3 w-8 h-8 rounded-full border border-[#00D08440] bg-[#00D08414] flex items-center justify-center flex-shrink-0">
              <Plus size={14} className="text-[#00D084]" strokeWidth={2} />
            </div>
            <div className="flex-1 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-[#00D084]/0 via-[#00D084]/40 to-[#00D084]/0" />
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden space-y-3">
            {partnerNodes.map((node, i) => (
              <motion.div key={node.label} variants={fadeUp} className="flex items-center gap-4 rounded-xl border border-[#1C2A38] bg-[#0F1923] px-5 py-4">
                <div className="w-10 h-10 rounded-full border border-[#1C2A38] bg-[#080C10] flex items-center justify-center flex-shrink-0">
                  {node.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-[11px] tracking-[0.1em] text-[#E8EDF2] leading-tight">{node.label}</p>
                  <p className="mt-0.5 font-body text-[11px] text-[#8A9BAE] leading-snug">{node.caption}</p>
                </div>
                {i < partnerNodes.length - 1 && (
                  <div className="ml-auto flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v10M4 9l3 3 3-3" stroke="#00D084" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why section heading */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-[1.25rem] lg:text-[1.6rem] tracking-[-0.02em] text-[#E8EDF2] text-center mb-12"
        >
          WHY SHOULD A BANK OWN THE MERCHANT DEVICE EXPERIENCE?
        </motion.h3>

        {/* Numbered statement rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.index}
              variants={fadeUp}
              className="flex items-start gap-6 py-6 border-b border-[#1C2A38] last:border-b-0"
            >
              <span className="font-display font-extrabold text-[1.5rem] lg:text-[1.8rem] text-[#00D084] leading-none flex-shrink-0 w-12">
                {r.index}
              </span>
              <div>
                <p className="font-display font-bold text-[0.95rem] lg:text-[1.05rem] tracking-tight text-[#E8EDF2] leading-tight">
                  {r.title}
                </p>
                <p className="mt-1.5 font-body text-[0.85rem] text-[#8A9BAE] leading-relaxed">
                  {r.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
