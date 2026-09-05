'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, scaleIn } from '@/lib/animations';

const metrics = [
  { label: 'SHOP STATUS', value: '● OPEN', valueClass: 'text-[#00D084]' },
  { label: 'DEVICE', value: '● CONNECTED', valueClass: 'text-[#00D084]' },
  { label: 'PAYMENTS', value: '₹24,850', valueClass: 'text-[#E8EDF2]' },
  { label: 'CUSTOMERS', value: '128', valueClass: 'text-[#E8EDF2]' },
  { label: 'OFFERS', value: '3 ACTIVE', valueClass: 'text-[#E8EDF2]' },
  { label: 'ALERTS', value: '1', valueClass: 'text-[#E8EDF2]' },
];

export function BusinessDashboardSection() {
  return (
    <Section id="dashboard" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,208,132,0.05)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Dashboard"
          title="YOUR BUSINESS. YOUR DASHBOARD."
          description="A clear view of everything happening in your business — in real time."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10 max-w-2xl mx-auto"
        >
          {/* Dashboard card */}
          <motion.div
            variants={scaleIn}
            className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] overflow-hidden shadow-[0_0_60px_rgba(0,208,132,0.06)]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C2A38] bg-[#080C10]">
              <div className="flex items-center gap-2.5">
                <span className="font-display font-bold text-sm tracking-[0.12em] text-[#E8EDF2]">HERE OPEN</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="status-dot-pulse w-2 h-2 rounded-full bg-[#00D084]" />
                <span className="font-body text-[11px] font-semibold text-[#00D084]">Live</span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#1C2A38]">
              {metrics.map((m) => (
                <div key={m.label} className="bg-[#0F1923] px-6 py-5">
                  <p className="font-body text-[10px] uppercase tracking-[0.14em] text-[#8A9BAE] mb-2">{m.label}</p>
                  <p className={`font-display font-bold text-lg ${m.valueClass}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <p className="text-center font-body text-[11px] text-[#3D4F5E] mt-4">Demo data — shown for illustration</p>
        </motion.div>
      </Container>
    </Section>
  );
}
