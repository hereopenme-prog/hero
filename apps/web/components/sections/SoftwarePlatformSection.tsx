'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Users,
  Store,
  Megaphone,
  Bell,
  Shield,
  BarChart3,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger, slideLeft, slideRight } from '@/lib/animations';

const connectionSteps = [
  { label: 'BUSINESS', sub: 'The physical shop or merchant.' },
  { label: 'HERE OPEN DEVICE', sub: 'Installed in the business.' },
  { label: 'HERE OPEN PLATFORM', sub: 'Intelligence and management layer.' },
  { label: 'CUSTOMER', sub: 'Reaches the customer in real time.' },
];

const capabilities = [
  { icon: Smartphone, label: 'DEVICE MANAGEMENT', desc: 'Provision, monitor and manage devices.' },
  { icon: Users, label: 'BUSINESS MANAGEMENT', desc: 'Onboard and manage business profiles.' },
  { icon: Store, label: 'SHOP STATUS', desc: 'OPEN / CLOSED visibility in real time.' },
  { icon: Bell, label: 'ALERTS', desc: 'Configured alert delivery for supported events.' },
  { icon: Megaphone, label: 'COMMUNICATION', desc: 'Offers and announcements.' },
  { icon: Shield, label: 'SAFETY & SECURITY', desc: 'Designed to support configured monitoring.' },
  { icon: BarChart3, label: 'ANALYTICS', desc: 'Platform-level insights where supported.' },
];

export function SoftwarePlatformSection() {
  return (
    <Section id="platform" className="bg-[#0A0F14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE PLATFORM"
          title="ONE PLATFORM."
          titleAccent="AN ENTIRE CONNECTED BUSINESS NETWORK."
          description="The intelligence and management layer behind the physical devices."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16"
        >
          {/* Left: Vertical connection story */}
          <motion.div variants={slideLeft} className="w-full lg:w-[300px] flex-shrink-0">
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#1C2A38]" />

              <div className="flex flex-col gap-0">
                {connectionSteps.map((step) => (
                  <div key={step.label} className="relative flex items-center">
                    <span className="relative z-10 w-[15px] h-[15px] rounded-full border-2 border-[#1C2A38] bg-[#0F1923] flex items-center justify-center flex-shrink-0">
                      <span className="w-[7px] h-[7px] rounded-full bg-[#00D084]" />
                    </span>
                    <div className="ml-4 flex-1 rounded-lg border border-[#1C2A38] bg-[#0F1923] px-4 py-3">
                      <p className="font-display text-[11px] font-bold tracking-[0.1em] text-[#E8EDF2] leading-tight">
                        {step.label}
                      </p>
                      <p className="font-body text-[10px] text-[#8A9BAE] mt-0.5 leading-snug">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 ml-7 font-body text-[11px] text-[#8A9BAE] leading-snug">
                Banks and financial institutions can also connect as partners and platform operators.
              </p>
            </div>
          </motion.div>

          {/* Right: Platform capabilities */}
          <motion.div variants={slideRight} className="flex-1 w-full">
            <h3 className="font-display text-xs font-bold tracking-[0.14em] text-[#8A9BAE] mb-5 uppercase">
              Platform Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="flex items-start gap-3 rounded-xl border border-[#1C2A38] bg-[#0F1923] px-4 py-3.5"
                >
                  <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-[#00D08414] border border-[#00D08430]">
                    <cap.icon size={13} className="text-[#00D084]" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[11px] font-bold tracking-[0.1em] text-[#E8EDF2] leading-tight">
                      {cap.label}
                    </p>
                    <p className="font-body text-[10px] text-[#8A9BAE] mt-0.5 leading-snug">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 font-body text-[11px] text-[#3D4F5E]">
              Capabilities are designed to be configurable depending on integration.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
