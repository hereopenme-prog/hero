'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { fadeUp, stagger } from '@/lib/animations';

const leftCallouts = [
  { label: 'OPEN / CLOSED STATUS', caption: 'One tap to signal the shop state.' },
  { label: 'PAYMENT / EVENT AUDIO', caption: 'Audio for supported payment and event confirmations.' },
  { label: 'BUSINESS COMMUNICATION', caption: 'Offers, announcements and updates.' },
];

const rightCallouts = [
  { label: 'CUSTOMER VISIBILITY', caption: 'Makes the business visible to customers.' },
  { label: 'CONNECTIVITY', caption: 'Stays connected to the platform.' },
  { label: 'SAFETY & MONITORING', caption: 'Designed to support configured sensing capabilities.' },
  { label: 'DEVICE HEALTH', caption: 'Connection and status signals.' },
];

const mobileCallouts = [
  { label: 'OPEN / CLOSED STATUS', caption: 'One tap to signal the shop state.' },
  { label: 'PAYMENT / EVENT AUDIO', caption: 'Audio for supported payment and event confirmations.' },
  { label: 'BUSINESS COMMUNICATION', caption: 'Offers, announcements and updates.' },
  { label: 'CUSTOMER VISIBILITY', caption: 'Makes the business visible to customers.' },
  { label: 'CONNECTIVITY', caption: 'Stays connected to the platform.' },
  { label: 'SAFETY & MONITORING', caption: 'Designed to support configured sensing capabilities.' },
  { label: 'DEVICE HEALTH', caption: 'Connection and status signals.' },
];

function CalloutLabel({
  label,
  caption,
  side,
}: {
  label: string;
  caption: string;
  side: 'left' | 'right';
}) {
  const isLeft = side === 'left';
  return (
    <motion.div
      variants={fadeUp}
      className={`flex items-start gap-3 ${isLeft ? 'flex-row-reverse text-right' : ''}`}
    >
      <div className="flex flex-col items-center pt-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--a80)]" />
        <span className="w-px h-6 bg-[var(--ink-dim)]" />
      </div>
      <div className={`max-w-[170px] ${isLeft ? 'text-right' : ''}`}>
        <p className="font-display text-[11px] font-bold tracking-[0.12em] text-[var(--ink)] leading-tight">
          {label}
        </p>
        <p className="font-body text-[10px] text-[var(--ink-muted)] mt-0.5 leading-snug">{caption}</p>
      </div>
    </motion.div>
  );
}

export function DeviceShowcaseSection() {
  return (
    <Section id="device" className="bg-[var(--bg)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE DEVICE"
          title="ONE DEVICE."
          titleAccent="A CONNECTED BUSINESS."
          description="The physical interface between the business and the Here Open platform."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-10 max-w-5xl mx-auto"
        >
          {/* Desktop: device with floating annotation labels */}
          <div className="hidden lg:flex items-start justify-center gap-10">
            {/* Left callouts */}
            <motion.div variants={stagger} className="flex flex-col gap-8 pt-16 w-[210px] items-end">
              {leftCallouts.map((c) => (
                <CalloutLabel key={c.label} label={c.label} caption={c.caption} side="left" />
              ))}
            </motion.div>

            {/* Center device */}
            <motion.div variants={fadeUp} className="flex-shrink-0 relative">
              <div className="absolute inset-0 -m-16 bg-[radial-gradient(circle,rgba(0,208,132,0.12)_0%,transparent_65%)] pointer-events-none" />
              <DeviceVisual
                size="xl"
                showNotif
                amount="₹1,250"
                notifLabel="PAYMENT RECEIVED"
                showQr
                online
                className="mx-auto"
              />
            </motion.div>

            {/* Right callouts */}
            <motion.div variants={stagger} className="flex flex-col gap-7 pt-12 w-[210px]">
              {rightCallouts.map((c) => (
                <CalloutLabel key={c.label} label={c.label} caption={c.caption} side="right" />
              ))}
            </motion.div>
          </div>

          {/* Mobile: device + 2-col chip grid */}
          <div className="lg:hidden flex flex-col items-center">
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute inset-0 -m-12 bg-[radial-gradient(circle,rgba(0,208,132,0.12)_0%,transparent_65%)] pointer-events-none" />
              <DeviceVisual
                size="xl"
                showNotif
                amount="₹1,250"
                notifLabel="PAYMENT RECEIVED"
                showQr
                online
                className="mx-auto"
              />
            </motion.div>

            <motion.div variants={stagger} className="mt-10 grid grid-cols-2 gap-3 w-full max-w-md">
              {mobileCallouts.map((c) => (
                <motion.div
                  key={c.label}
                  variants={fadeUp}
                  className="rounded-xl border border-[var(--border)] bg-[var(--section)] px-3.5 py-3"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                    <p className="font-display text-[10px] font-bold tracking-[0.1em] text-[var(--ink)]">
                      {c.label}
                    </p>
                  </div>
                  <p className="font-body text-[10px] text-[var(--ink-muted)] mt-1 leading-snug">{c.caption}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-center font-body text-[11px] text-[var(--ink-dim)]">
            Final specifications and on-device capabilities are under development and subject to
            configuration.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
