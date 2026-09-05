'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger, staggerFast } from '@/lib/animations';
import {
  Landmark,
  Cpu,
  Smartphone,
  Store,
  Users,
} from 'lucide-react';

const valueChainNodes = [
  {
    icon: <Landmark size={18} className="text-[var(--accent)]" />,
    label: 'BANK',
    caption: 'Owns the merchant relationship.',
  },
  {
    icon: <Cpu size={18} className="text-[var(--accent)]" />,
    label: 'HERE OPEN TECHNOLOGY',
    caption: 'Device + platform ecosystem.',
  },
  {
    icon: <Smartphone size={18} className="text-[var(--accent)]" />,
    label: 'SMART MERCHANT DEVICE',
    caption: 'A branded, connected device.',
  },
  {
    icon: <Store size={18} className="text-[var(--accent)]" />,
    label: 'MERCHANT',
    caption: 'Payment, visibility and communication.',
  },
  {
    icon: <Users size={18} className="text-[var(--accent)]" />,
    label: 'CUSTOMER',
    caption: 'A better local business experience.',
  },
];

const benefits = [
  {
    title: 'BANK-BRANDED MERCHANT EXPERIENCE',
    caption: 'The device can be designed around the bank\'s brand.',
  },
  {
    title: 'STRONGER MERCHANT ENGAGEMENT',
    caption: 'A device that does more alongside the merchant.',
  },
  {
    title: 'MORE MERCHANT TOUCHPOINTS',
    caption: 'A physical presence in the merchant ecosystem.',
  },
  {
    title: 'BEYOND PAYMENT CONFIRMATION',
    caption: 'Designed to go further than a soundbox.',
  },
  {
    title: 'CONNECTED MERCHANT SERVICES',
    caption: 'Visibility, communication and monitoring opportunities.',
  },
  {
    title: 'BUSINESS COMMUNICATION',
    caption: 'Opportunities for merchants to reach customers.',
  },
  {
    title: 'DEVICE ECOSYSTEM MANAGEMENT',
    caption: 'A platform view of the device network.',
  },
  {
    title: 'FUTURE-READY INFRASTRUCTURE',
    caption: 'Designed to add new services and capabilities over time.',
  },
];

export function BankOpportunitySection() {
  return (
    <Section id="banks" className="bg-[var(--section-2)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FOR BANKS"
          title="THE NEXT OPPORTUNITY:"
          titleAccent="THE MERCHANT DEVICE."
          description="The payment soundbox proved that a small device can become a powerful merchant touchpoint. Here Open takes the opportunity further — into a connected business-device ecosystem a bank could potentially brand and deploy."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[640px] text-center font-body text-[0.95rem] leading-relaxed text-[var(--ink-muted)] mb-16 lg:mb-20"
        >
          Banks and financial institutions already have deep relationships with merchants. The merchant
          device can become more than a payment confirmation device. Here Open can provide the
          technology for a broader connected merchant device and platform ecosystem.
        </motion.p>

        {/* Value chain visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="max-w-5xl mx-auto mb-20 lg:mb-24"
        >
          <div className="hidden md:flex items-start justify-between gap-4">
            {valueChainNodes.map((node, i) => (
              <motion.div key={node.label} variants={fadeUp} className="flex flex-col items-center flex-1 max-w-[160px]">
                <div className="w-14 h-14 rounded-full border border-[var(--border)] bg-[var(--section)] flex items-center justify-center mb-4">
                  {node.icon}
                </div>
                <p className="font-display font-bold text-[11px] tracking-[0.1em] text-[var(--ink)] text-center leading-tight">
                  {node.label}
                </p>
                <p className="mt-1.5 font-body text-[11px] text-[var(--ink-muted)] text-center leading-snug">
                  {node.caption}
                </p>
                {i < valueChainNodes.length - 1 && (
                  <div className="hidden lg:block absolute" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Connecting lines (desktop only) */}
          <div className="hidden lg:flex items-center justify-center -mt-[128px] mb-[128px] px-[8%]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-1 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-[var(--a00)] via-[var(--a40)] to-[var(--a00)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0 shadow-[0_0_6px_var(--a80)]" />
              </div>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden space-y-3">
            {valueChainNodes.map((node, i) => (
              <motion.div key={node.label} variants={fadeUp} className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--section)] px-5 py-4">
                <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0">
                  {node.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-[11px] tracking-[0.1em] text-[var(--ink)] leading-tight">{node.label}</p>
                  <p className="mt-0.5 font-body text-[11px] text-[var(--ink-muted)] leading-snug">{node.caption}</p>
                </div>
                {i < valueChainNodes.length - 1 && (
                  <div className="ml-auto flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v10M4 9l3 3 3-3" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--section)] px-5 py-4"
              >
                <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0 shadow-[0_0_6px_var(--a80)]" />
                <div>
                  <p className="font-display font-bold text-[12px] tracking-[0.08em] text-[var(--ink)] leading-tight">
                    {b.title}
                  </p>
                  <p className="mt-1 font-body text-[12px] text-[var(--ink-muted)] leading-snug">
                    {b.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="mt-12 text-center font-body text-[11px] text-[var(--ink-dim)]">
          These capabilities are potential and subject to integration and configuration.
        </p>
      </Container>
    </Section>
  );
}
