'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger, scaleIn } from '@/lib/animations';
import {
  ShoppingBag,
  MonitorSmartphone,
  CreditCard,
  Bell,
  Users,
  AlertTriangle,
  BarChart3,
} from 'lucide-react';

const platformItems = [
  { icon: <ShoppingBag size={14} className="text-[#00D084]" />, label: 'SHOP STATUS' },
  { icon: <MonitorSmartphone size={14} className="text-[#00D084]" />, label: 'DEVICE MANAGEMENT' },
  { icon: <CreditCard size={14} className="text-[#00D084]" />, label: 'PAYMENT EVENTS' },
  { icon: <Bell size={14} className="text-[#00D084]" />, label: 'BUSINESS UPDATES' },
  { icon: <Users size={14} className="text-[#00D084]" />, label: 'CUSTOMER VISIBILITY' },
  { icon: <AlertTriangle size={14} className="text-[#00D084]" />, label: 'ALERTS' },
  { icon: <BarChart3 size={14} className="text-[#00D084]" />, label: 'ANALYTICS' },
];

export function SoftwarePlatformSection() {
  return (
    <Section id="software" className="bg-[#080C10]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Software"
          title="THE DEVICE IS ONLY THE BEGINNING."
          description="The physical device connects to the Here Open software platform."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 max-w-4xl mx-auto"
        >
          {/* Left: Device */}
          <motion.div variants={scaleIn} className="flex-shrink-0">
            <div className="w-20 h-28 rounded-2xl border border-[#1C2A38] bg-[#0F1923] flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-1 rounded-full bg-[#1C2A38]" />
              <div className="status-dot-pulse w-2.5 h-2.5 rounded-full bg-[#00D084]" />
              <span className="font-display text-[8px] font-bold tracking-[0.15em] text-[#E8EDF2]">HERE OPEN</span>
              <div className="w-6 h-6 rounded-full border border-[#1C2A38] bg-[#080C10] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#3D4F5E]" />
              </div>
            </div>
          </motion.div>

          {/* Center: Connection line */}
          <motion.div
            variants={fadeUp}
            className="hidden lg:flex flex-col items-center justify-center w-24"
          >
            <div className="h-px w-full bg-gradient-to-r from-[#00D08460] via-[#00D084] to-[#00D08460]" />
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-1"
            >
              <div className="w-2 h-2 rounded-full bg-[#00D084] shadow-[0_0_8px_#00D084]" />
            </motion.div>
          </motion.div>

          {/* Mobile connection line */}
          <motion.div variants={fadeUp} className="lg:hidden w-px h-8 bg-gradient-to-b from-[#00D08460] via-[#00D084] to-[#00D08460]" />

          {/* Right: Platform interface */}
          <motion.div variants={scaleIn} className="flex-shrink-0 w-full max-w-sm">
            <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1C2A38] bg-[#080C10]">
                <div className="status-dot-pulse w-2 h-2 rounded-full bg-[#00D084]" />
                <span className="font-display font-semibold text-xs tracking-[0.12em] text-[#E8EDF2]">HERE OPEN PLATFORM</span>
              </div>

              {/* Items */}
              <div className="divide-y divide-[#1C2A38]">
                {platformItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 px-5 py-3">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="font-body font-medium text-xs text-[#A5B4C4]">{item.label}</span>
                    <span className="ml-auto status-dot-pulse w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
