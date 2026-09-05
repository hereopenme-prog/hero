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
  MessageCircle,
  ShieldAlert,
  Lock,
  BarChart3,
} from 'lucide-react';

const spokes = [
  { label: 'PAYMENTS', icon: <CreditCard size={16} className="text-[#00D084]" />, angle: -90 },
  { label: 'SHOP STATUS', icon: <Eye size={16} className="text-[#00D084]" />, angle: -30 },
  { label: 'CUSTOMER VISIBILITY', icon: <Users size={16} className="text-[#00D084]" />, angle: 30 },
  { label: 'BUSINESS COMMUNICATION', icon: <MessageCircle size={16} className="text-[#00D084]" />, angle: 90 },
  { label: 'SAFETY', icon: <ShieldAlert size={16} className="text-[#00D084]" />, angle: 150 },
  { label: 'SECURITY', icon: <Lock size={16} className="text-[#00D084]" />, angle: 210 },
  { label: 'ANALYTICS', icon: <BarChart3 size={16} className="text-[#00D084]" />, angle: 270 },
];

export function EcosystemSection() {
  return (
    <Section id="ecosystem" className="bg-[#080C10]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Ecosystem"
          title="THE HERE OPEN ECOSYSTEM"
          description="A connected platform designed to support every aspect of your business."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10"
        >
          {/* Desktop radial layout */}
          <div className="hidden md:flex relative mx-auto w-[520px] h-[520px] items-center justify-center">
            {/* Center hub */}
            <div className="absolute z-10 w-28 h-28 rounded-full border-2 border-[#00D084] bg-[#0F1923] flex items-center justify-center shadow-[0_0_40px_rgba(0,208,132,0.15)]">
              <span className="font-display font-bold text-xs tracking-[0.12em] text-[#00D084] text-center leading-tight">HERE<br />OPEN</span>
            </div>

            {/* Spokes */}
            {spokes.map((spoke) => {
              const radius = 210;
              const rad = (spoke.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <div key={spoke.label} className="absolute" style={{ left: '50%', top: '50%' }}>
                  {/* Connecting line */}
                  <svg
                    className="absolute"
                    style={{
                      left: -1,
                      top: -1,
                      width: 2,
                      height: radius,
                      transformOrigin: 'top center',
                      transform: `rotate(${spoke.angle + 90}deg)`,
                    }}
                  >
                    <line x1="1" y1="0" x2="1" y2={radius} stroke="#3D4F5E" strokeWidth="1" strokeDasharray="4 3" />
                  </svg>

                  {/* Spoke node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute flex flex-col items-center gap-2"
                    style={{
                      transform: `translate(${x - 60}px, ${y - 20}px)`,
                      width: 120,
                    }}
                  >
                    <div className="w-10 h-10 rounded-full border border-[#1C2A38] bg-[#0F1923] flex items-center justify-center">
                      {spoke.icon}
                    </div>
                    <span className="font-body font-semibold text-[10px] tracking-[0.1em] text-[#A5B4C4] text-center">{spoke.label}</span>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Mobile stacked layout */}
          <motion.div variants={stagger} className="md:hidden max-w-sm mx-auto space-y-3">
            {spokes.map((spoke) => (
              <motion.div
                key={spoke.label}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-xl border border-[#1C2A38] bg-[#0F1923] px-5 py-4"
              >
                <div className="w-9 h-9 rounded-full border border-[#1C2A38] bg-[#080C10] flex items-center justify-center flex-shrink-0">
                  {spoke.icon}
                </div>
                <span className="font-body font-semibold text-xs text-[#A5B4C4]">{spoke.label}</span>
                <span className="ml-auto status-dot-pulse w-1.5 h-1.5 rounded-full bg-[#00D084]" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
