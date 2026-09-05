'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { fadeUp, stagger } from '@/lib/animations';

const stages = [
  {
    num: '01',
    label: 'PAYMENT DEVICE',
    caption: 'Confirmation, first.',
  },
  {
    num: '02',
    label: 'SMART DEVICE',
    caption: 'Connected and configurable.',
  },
  {
    num: '03',
    label: 'CONNECTED MERCHANT',
    caption: 'A business in the network.',
  },
  {
    num: '04',
    label: 'VISIBLE BUSINESS',
    caption: 'Open, discoverable, up to date.',
  },
  {
    num: '05',
    label: 'CONNECTED CUSTOMER',
    caption: 'People who know before they go.',
  },
  {
    num: '06',
    label: 'MERCHANT INTELLIGENCE',
    caption: 'Insights from the ecosystem.',
  },
  {
    num: '07',
    label: 'DIGITAL BUSINESS INFRASTRUCTURE',
    caption: 'The layer under physical business.',
  },
];

export function VisionSection() {
  return (
    <Section id="vision" className="bg-[#0A0F14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE BIGGER VISION"
          title="FROM A DEVICE TO"
          titleAccent="A CONNECTED BUSINESS ECOSYSTEM."
          description="The long-term Here Open vision — a device becomes digital business infrastructure."
        />

        {/* Desktop: horizontal evolution */}
        <div className="hidden lg:block max-w-6xl mx-auto mt-14 lg:mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative flex items-start justify-between"
          >
            {/* Horizontal connector line */}
            <div className="absolute top-[18px] left-[40px] right-[40px] h-[1px] bg-gradient-to-r from-[#00D08400] via-[#3D4F5E] to-[#00D08400]" />

            {stages.map((stage, i) => (
              <motion.div
                key={stage.num}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center w-[120px]"
              >
                {/* Node dot */}
                <div className="relative z-10 w-9 h-9 rounded-full border border-[#00D08460] bg-[#0F1923] flex items-center justify-center shadow-[0_0_12px_rgba(0,208,132,0.12)]">
                  <span className="font-body font-bold text-[10px] text-[#00D084] tracking-wider">
                    {stage.num}
                  </span>
                </div>

                {/* Stage label */}
                <span className="mt-4 font-display font-bold text-[11px] text-[#E8EDF2] tracking-tight leading-snug">
                  {stage.label}
                </span>

                {/* Stage caption */}
                <span className="mt-1.5 font-body text-xs text-[#8A9BAE] leading-relaxed">
                  {stage.caption}
                </span>

                {/* Small green dot on the connector */}
                <div className="absolute top-[15px] w-1.5 h-1.5 rounded-full bg-[#00D084] shadow-[0_0_6px_#00D08480]" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Device motif */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex justify-center mt-14 lg:mt-16"
        >
          <div className="relative">
            <DeviceVisual size="sm" />
            <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(0,208,132,0.06)_0%,transparent_70%)] pointer-events-none" />
          </div>
        </motion.div>

        {/* Mobile: vertical evolution */}
        <div className="lg:hidden max-w-sm mx-auto mt-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="relative flex flex-col gap-0"
          >
            {/* Vertical connector line */}
            <div className="absolute top-[18px] left-[17px] bottom-[18px] w-[1px] bg-gradient-to-b from-[#00D08400] via-[#3D4F5E] to-[#00D08400]" />

            {stages.map((stage) => (
              <motion.div
                key={stage.num}
                variants={fadeUp}
                className="relative flex items-start gap-4 py-4"
              >
                {/* Node badge */}
                <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full border border-[#00D08460] bg-[#0F1923] flex items-center justify-center shadow-[0_0_12px_rgba(208,132,0.12)]">
                  <span className="font-body font-bold text-[10px] text-[#00D084] tracking-wider">
                    {stage.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col pt-0.5">
                  <span className="font-display font-bold text-sm text-[#E8EDF2] tracking-tight leading-snug">
                    {stage.label}
                  </span>
                  <span className="font-body text-xs text-[#8A9BAE] leading-relaxed mt-0.5">
                    {stage.caption}
                  </span>
                </div>

                {/* Green dot on the connector */}
                <div className="absolute top-[21px] left-[15px] z-20 w-1.5 h-1.5 rounded-full bg-[#00D084] shadow-[0_0_6px_#00D08480]" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-14 lg:mt-16 font-body text-base lg:text-lg text-[#A5B4C4] text-center max-w-2xl mx-auto leading-relaxed"
        >
          That&apos;s the long-term Here Open vision — infrastructure for the physical world of business. The ecosystem works with zero commission on payments.
        </motion.p>

        {/* Zero commission badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#00D08430] bg-[#00D08410] px-5 py-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
            <span className="font-body text-sm text-[#00D084] tracking-wide">
              ZERO COMMISSION — PAYMENTS WITHOUT FEES
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
