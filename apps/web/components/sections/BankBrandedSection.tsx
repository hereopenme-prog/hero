'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { fadeUp, stagger, staggerFast } from '@/lib/animations';

const chips = [
  'PAYMENT / EVENT CONFIRMATION',
  'MERCHANT VISIBILITY',
  'COMMUNICATION',
  'SAFETY',
  'BUSINESS SERVICES',
];

export function BankBrandedSection() {
  return (
    <Section id="bank-device" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="BANK-BRANDED DEVICE"
          title="YOUR BRAND."
          titleAccent="YOUR MERCHANT DEVICE. YOUR ECOSYSTEM."
          description="The opportunity to put a bank's brand on a device the merchant uses every day — powered by Here Open technology."
        />

        {/* Device row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 mt-10"
        >
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute inset-0 -m-10 bg-[radial-gradient(circle,rgba(0,208,132,0.1)_0%,transparent_65%)] pointer-events-none" />
            <DeviceVisual
              size="md"
              brand="YOUR BANK"
              showQr
              showNotif
              amount="₹1,250"
              notifLabel="PAYMENT RECEIVED"
              online
              className="mx-auto"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute inset-0 -m-14 bg-[radial-gradient(circle,rgba(0,208,132,0.14)_0%,transparent_65%)] pointer-events-none" />
            <DeviceVisual
              size="lg"
              brand="BANK BRAND"
              showQr
              showNotif
              amount="₹1,250"
              notifLabel="PAYMENT RECEIVED"
              online
              className="mx-auto"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute inset-0 -m-10 bg-[radial-gradient(circle,rgba(0,208,132,0.1)_0%,transparent_65%)] pointer-events-none" />
            <DeviceVisual
              size="md"
              brand="YOUR BANK"
              showQr
              showNotif
              amount="₹1,250"
              notifLabel="PAYMENT RECEIVED"
              online
              className="mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Callout chips */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerFast}
          className="flex flex-wrap justify-center gap-3 mt-14 lg:mt-16"
        >
          {chips.map((chip) => (
            <motion.span
              key={chip}
              variants={fadeUp}
              className="rounded-full border border-[#1C2A38] bg-[#0F1923] px-4 py-2 font-body text-[11px] tracking-[0.06em] text-[#A5B4C4]"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center font-body text-[0.9rem] leading-relaxed text-[#8A9BAE] max-w-[560px] mx-auto"
        >
          This illustrates the opportunity — a bank-branded device powered by Here Open technology,
          developed through partnership.
        </motion.p>

        <p className="mt-8 text-center font-body text-[11px] text-[#3D4F5E]">
          Hypothetical branding shown for illustration only. No partnership is implied.
        </p>
      </Container>
    </Section>
  );
}
