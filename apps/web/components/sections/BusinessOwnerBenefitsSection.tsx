'use client';

import { motion } from 'framer-motion';
import { Power, Eye, Send, Shield, Cpu, BarChart3 } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { stagger } from '@/lib/animations';
import type { Variants } from 'framer-motion';

const benefits = [
  {
    num: '01',
    title: 'ONE-TAP OPEN/CLOSED CONTROL',
    desc: 'Keep your shop status live with a single tap.',
    icon: <Power size={16} />,
  },
  {
    num: '02',
    title: 'REAL-TIME BUSINESS VISIBILITY',
    desc: 'Customers see your shop and its status in real time.',
    icon: <Eye size={16} />,
  },
  {
    num: '03',
    title: 'CUSTOMER CONNECTION',
    desc: 'Share offers, announcements and updates directly.',
    icon: <Send size={16} />,
  },
  {
    num: '04',
    title: 'SAFETY & SECURITY',
    desc: 'Designed to support configured fire, smoke, temperature and break-in monitoring.',
    icon: <Shield size={16} />,
  },
  {
    num: '05',
    title: 'DEVICE STATUS',
    desc: 'See the health of the device and its connection.',
    icon: <Cpu size={16} />,
  },
  {
    num: '06',
    title: 'BUSINESS INSIGHTS',
    desc: 'Platform insights designed to support better business awareness.',
    icon: <BarChart3 size={16} />,
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function BusinessOwnerBenefitsSection() {
  return (
    <Section id="businesses" className="bg-[var(--section-2)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.04)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FOR BUSINESS OWNERS"
          title="YOUR BUSINESS."
          titleAccent="ALWAYS CONNECTED."
          description="One device that keeps your shop visible, your customers informed and your space monitored."
        />

        {/* Desktop: side-by-side */}
        <div className="hidden lg:flex items-start gap-14 max-w-5xl mx-auto">
          {/* Left: DeviceVisual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 pt-4"
          >
            <DeviceVisual size="lg" showNotif amount="₹1,250" notifLabel="PAYMENT RECEIVED" online />
          </motion.div>

          {/* Right: benefit list */}
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="flex flex-col gap-6"
            >
              {benefits.map((b) => (
                <motion.div key={b.num} variants={itemVariants} className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--a14)] text-[var(--accent)]">
                    {b.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-display font-bold text-[0.6rem] tracking-[0.16em] text-[var(--accent)]">{b.num}</span>
                      <h4 className="font-display font-bold text-[0.85rem] tracking-wide text-[var(--ink)] leading-snug">
                        {b.title}
                      </h4>
                    </div>
                    <p className="mt-1 font-body text-[0.82rem] text-[var(--ink-muted)] leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile: device above, then list */}
        <div className="lg:hidden mx-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-10"
          >
            <DeviceVisual size="md" showNotif amount="₹1,250" notifLabel="PAYMENT RECEIVED" online />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="flex flex-col gap-5"
          >
            {benefits.map((b) => (
              <motion.div key={b.num} variants={itemVariants} className="flex items-start gap-3.5">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--a14)] text-[var(--accent)]">
                  {b.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-[0.55rem] tracking-[0.16em] text-[var(--accent)]">{b.num}</span>
                    <h4 className="font-display font-bold text-[0.78rem] tracking-wide text-[var(--ink)] leading-snug">
                      {b.title}
                    </h4>
                  </div>
                  <p className="mt-1 font-body text-[0.78rem] text-[var(--ink-muted)] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center font-body text-[0.7rem] text-[var(--ink-dim)] leading-relaxed"
        >
          Sensor-based features are designed to support specific configurations and are future-ready.
        </motion.p>
      </Container>
    </Section>
  );
}
