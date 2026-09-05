'use client';

import { motion } from 'framer-motion';
import { Store, Cpu, Signal, Cloud, Smartphone, Users } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const nodes = [
  { label: 'SHOP', sub: 'The physical space', icon: <Store size={22} className="text-[#00D084]" strokeWidth={1.5} /> },
  { label: 'IOT DEVICE', sub: 'Installed in the shop', icon: <Cpu size={22} className="text-[#00D084]" strokeWidth={1.5} /> },
  { label: 'NETWORK / GSM', sub: 'Always connected', icon: <Signal size={22} className="text-[#00D084]" strokeWidth={1.5} /> },
  { label: 'CLOUD', sub: 'Real-time platform', icon: <Cloud size={22} className="text-[#00D084]" strokeWidth={1.5} /> },
  { label: 'MOBILE APP', sub: 'Instant status updates', icon: <Smartphone size={22} className="text-[#00D084]" strokeWidth={1.5} /> },
  { label: 'CUSTOMERS', sub: 'Know before they go', icon: <Users size={22} className="text-[#00D084]" strokeWidth={1.5} /> },
];

export function TechnologySection() {
  return (
    <Section id="technology" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Technology"
          title="A Signal From Shop To Customer."
          description="Every tap travels through a resilient, low-cost IoT pipeline — GSM-powered, offline-safe and always reachable."
        />

        {/* Desktop flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="hidden md:block relative max-w-6xl mx-auto"
        >
          {/* Connector line with moving pulse */}
          <div className="absolute top-[58px] left-[9%] right-[9%] h-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D08430] to-transparent" />
            <motion.div
              className="absolute top-0 h-px w-24 bg-[#00D084]"
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {nodes.map((n) => (
              <motion.div key={n.label} variants={scaleIn} className="text-center">
                <div className="relative mx-auto w-16 h-16 mb-4 rounded-2xl bg-[#0F1923] border border-[#00D08440] flex items-center justify-center shadow-[0_0_28px_#00D08414]">
                  {n.icon}
                  <span className="absolute inset-0 rounded-2xl border border-[#00D084] opacity-0" />
                </div>
                <p className="font-display font-bold text-[0.72rem] tracking-widest text-[#E8EDF2]">{n.label}</p>
                <p className="mt-1 font-body text-[0.7rem] text-[#6B7C8E]">{n.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="md:hidden max-w-xs mx-auto"
        >
          <div className="absolute left-[31px] top-4 bottom-4 w-px bg-[#1C2A38]" />
          {nodes.map((n) => (
            <motion.div key={n.label} variants={scaleIn} className="relative flex items-center gap-4 pb-5 last:pb-0">
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#0F1923] border border-[#00D08440] flex items-center justify-center flex-shrink-0 shadow-[0_0_24px_#00D08414]">
                {n.icon}
              </div>
              <div>
                <p className="font-display font-bold text-[0.75rem] tracking-widest text-[#E8EDF2]">{n.label}</p>
                <p className="mt-0.5 font-body text-[0.75rem] text-[#6B7C8E]">{n.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center font-body text-[0.75rem] text-[#3D4F5E]">
          Order of operations — from the owner&apos;s tap to the customer&apos;s screen.
        </p>
      </Container>
    </Section>
  );
}