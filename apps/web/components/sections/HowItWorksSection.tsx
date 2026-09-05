'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { stagger } from '@/lib/animations';
import type { Variants } from 'framer-motion';
import { PowerOff, Lock, Eye, ShieldAlert, Bell } from 'lucide-react';

const openSteps = [
  { num: '01', title: 'BUSINESS OPENS', caption: 'Owner taps OPEN.' },
  { num: '02', title: 'THE DEVICE RESPONDS', caption: 'The Here Open device changes its state.' },
  { num: '03', title: 'THE PLATFORM UPDATES', caption: 'The status is synchronized in real time.' },
  { num: '04', title: 'CUSTOMERS KNOW', caption: 'Customers can see that the business is OPEN.' },
  {
    num: '05',
    title: 'BUSINESS STAYS CONNECTED',
    caption: 'Offers, announcements, safety and other supported features can operate through the ecosystem.',
  },
];

const closedSteps = [
  { icon: <PowerOff size={14} />, title: 'OWNER TAPS CLOSED', caption: 'The owner taps CLOSED on the device.' },
  { icon: <Lock size={14} />, title: 'BUSINESS BECOMES CLOSED', caption: 'The business status switches to CLOSED across the platform.' },
  { icon: <Eye size={14} />, title: 'CUSTOMER SEES CLOSED', caption: 'Customers see the business as CLOSED in real time.' },
  { icon: <ShieldAlert size={14} />, title: 'MONITORING / SAFETY ACTIVATE', caption: 'Monitoring and safety features activate where configured.' },
  { icon: <Bell size={14} />, title: 'ALERTS CAN BE GENERATED', caption: 'Alerts can be generated for supported events.' },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-[#0A0F14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="ONE TAP."
          titleAccent="THE WHOLE STORY."
          description="From opening the shop to knowing what happens after it closes — Here Open keeps the business, the device and the customer in sync."
        />

        {/* ====== PART A — THE OPEN EXPERIENCE ====== */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <span className="font-display font-bold text-[1.1rem] lg:text-[1.4rem] tracking-tight text-[#E8EDF2]">
              THE OPEN EXPERIENCE
            </span>
          </motion.div>

          {/* Desktop: horizontal 5-step */}
          <div className="hidden lg:block relative mx-auto max-w-5xl">
            <div className="absolute top-[22px] left-[5%] right-[5%] h-px bg-[#1C2A38] pointer-events-none" />
            <div className="absolute top-[22px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#00D08430] to-transparent pointer-events-none" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="grid grid-cols-5 gap-6"
            >
              {openSteps.map((step) => (
                <motion.div key={step.num} variants={itemVariants} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full border border-[#00D08440] bg-[#0A0F14] mb-4">
                    <span className="font-display font-bold text-sm text-[#00D084]">{step.num}</span>
                  </div>
                  <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00D084] shadow-[0_0_10px_#00D084] z-20" />
                  <h4 className="font-display font-bold text-[0.72rem] tracking-wide text-[#E8EDF2] leading-snug mt-2">
                    {step.title}
                  </h4>
                  <p className="mt-2 font-body text-[0.75rem] text-[#8A9BAE] leading-relaxed">{step.caption}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile: vertical 5-step */}
          <div className="lg:hidden mx-auto max-w-md relative">
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-[#1C2A38]" />
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#00D08430] to-transparent" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {openSteps.map((step) => (
                <motion.div key={step.num} variants={itemVariants} className="relative flex gap-6 pb-8 last:pb-0">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-[#00D08440] bg-[#0A0F14]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D084] shadow-[0_0_12px_#00D084]" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-[0.6rem] tracking-[0.16em] text-[#00D084]">{step.num}</span>
                      <h4 className="font-display font-bold text-[0.85rem] tracking-wide text-[#E8EDF2] leading-snug">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-1 font-body text-[0.78rem] text-[#8A9BAE] leading-relaxed">{step.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ====== PART B — THE CLOSED EXPERIENCE ====== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <span className="font-display font-bold text-[1.1rem] lg:text-[1.4rem] tracking-tight text-[#E8EDF2]">
              THE CLOSED EXPERIENCE
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left: vertical timeline */}
            <div className="flex-1 mx-auto lg:mx-0 max-w-xl relative">
              <div className="absolute left-[17px] top-2 bottom-2 w-px bg-[#1C2A38]" />
              <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-[#3D4F5E60] via-[#00D08430] to-[#3D4F5E60]" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                {closedSteps.map((step) => (
                  <motion.div key={step.title} variants={itemVariants} className="relative flex gap-6 pb-8 last:pb-0">
                    <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-[#3D4F5E] bg-[#0A0F14] text-[#A5B4C4]">
                      {step.icon}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-display font-bold text-[0.85rem] tracking-wide text-[#E8EDF2] leading-snug">
                        {step.title}
                      </h4>
                      <p className="mt-1 font-body text-[0.78rem] text-[#8A9BAE] leading-relaxed">{step.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: DeviceVisual with closed overlay */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 mx-auto lg:mx-0 relative"
            >
              <div className="relative opacity-70">
                <DeviceVisual size="md" online={false} />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#3D4F5E] bg-[#0A0F14]/90 px-4 py-2 shadow-[0_0_24px_rgba(0,0,0,0.5)]">
                    <span className="w-2 h-2 rounded-full bg-[#3D4F5E]" />
                    <span className="font-display font-bold text-xs tracking-[0.18em] text-[#8A9BAE]">CLOSED</span>
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center font-body text-[0.7rem] text-[#3D4F5E] leading-relaxed max-w-[280px]">
                Monitoring and alerting are designed to be configurable and supported depending on configuration.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
