'use client';

import { motion } from 'framer-motion';
import { ToggleRight, Eye, Megaphone, ShieldCheck, Lock, CreditCard, BarChart3, Network, ChevronRight } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger } from '@/lib/animations';

const evolution = [
  {
    icon: ToggleRight,
    label: 'OPEN / CLOSED',
    caption: 'The one-tap status signal.',
  },
  {
    icon: Eye,
    label: 'CUSTOMER VISIBILITY',
    caption: 'Customers see the business in real time.',
  },
  {
    icon: Megaphone,
    label: 'BUSINESS COMMUNICATION',
    caption: 'Updates and offers, shared directly.',
  },
  {
    icon: ShieldCheck,
    label: 'SAFETY',
    caption: 'Fire, smoke and temperature can be monitored.',
  },
  {
    icon: Lock,
    label: 'SECURITY',
    caption: 'Designed to help secure the premises.',
  },
  {
    icon: CreditCard,
    label: 'PAYMENTS / EVENTS',
    caption: 'Future-ready for transactions and moments.',
  },
  {
    icon: BarChart3,
    label: 'BUSINESS INTELLIGENCE',
    caption: 'Insights into a connected business.',
  },
  {
    icon: Network,
    label: 'CONNECTED MERCHANT ECOSYSTEM',
    caption: "An entire network of connected businesses.",
  },
];

export function MoreThanStatusSection() {
  return (
    <Section id="more-than-status" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,208,132,0.05)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="MORE THAN OPEN / CLOSED"
          title="MORE THAN A STATUS."
          titleAccent="A CONNECTED BUSINESS TOUCHPOINT."
          description="The OPEN / CLOSED signal is just the start. The device is designed to carry a business into a connected ecosystem."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="relative mx-auto mt-6 max-w-[1200px]"
        >
          {/* Desktop: horizontal flow with chevrons */}
          <div className="hidden lg:flex flex-col gap-10">
            <div className="grid grid-cols-8 gap-0 items-start">
              {evolution.map((node, i) => (
                <motion.div
                  key={node.label}
                  variants={{ hidden: {}, visible: {} }}
                  className="relative flex flex-col items-center text-center px-1"
                >
                  <div className="relative flex items-center justify-center h-14 w-14 rounded-full border border-[#00D08430] bg-[#0F1923]">
                    <node.icon size={20} className="text-[#00D084]" strokeWidth={1.5} />
                  </div>
                  <div className="mt-4 flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00D084]" aria-hidden="true" />
                      <div className="h-px w-4 bg-[#00D08440]" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-[0.72rem] tracking-[0.08em] text-[#E8EDF2] leading-tight text-center">
                      {node.label}
                    </h3>
                    <p className="font-body text-[0.65rem] text-[#8A9BAE] leading-snug text-center max-w-[100px]">
                      {node.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connector line with dots */}
            <div className="relative -mt-2" aria-hidden="true">
              <div className="absolute inset-x-[4%] top-1/2 h-px bg-[#00D08425]" />
              <div className="relative flex justify-between">
                {evolution.map((n) => (
                  <span key={n.label} className="inline-block h-2 w-2 rounded-full bg-[#00D084] relative -top-[7px] -translate-y-1/2" />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical stacked flow with chevrons */}
          <div className="lg:hidden flex flex-col items-center max-w-xs mx-auto gap-0">
            {evolution.map((node, i) => (
              <motion.div
                key={node.label}
                variants={{ hidden: {}, visible: {} }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-full border border-[#00D08430] bg-[#0F1923]">
                  <node.icon size={20} className="text-[#00D084]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display font-bold text-[0.85rem] tracking-[0.06em] text-[#E8EDF2] text-center">
                  {node.label}
                </h3>
                <p className="mt-1 max-w-[200px] font-body text-[0.8rem] text-[#8A9BAE] leading-snug text-center">
                  {node.caption}
                </p>
                {i < evolution.length - 1 && (
                  <div className="my-5 flex flex-col items-center text-[#00D08460]" aria-hidden="true">
                    <div className="h-5 w-px bg-[#00D08430]" />
                    <ChevronRight size={14} className="rotate-90 -mt-1" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-[680px] text-center font-display font-semibold text-[1.05rem] lg:text-[1.15rem] text-[#E8EDF2] tracking-tight"
        >
          From a one-tap signal to an entire connected business infrastructure.
        </motion.p>
      </Container>
    </Section>
  );
}
