'use client';

import { motion } from 'framer-motion';
import { Volume2, Eye, ToggleRight, MessageSquare, ShieldCheck, Brain } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { fadeUp, stagger } from '@/lib/animations';

const benefits = [
  {
    icon: <Volume2 size={16} className="text-[var(--accent)]" />,
    title: 'Payment / Event Confirmation',
    caption: 'Hear supported payment and event confirmations.',
  },
  {
    icon: <Eye size={16} className="text-[var(--accent)]" />,
    title: 'Business Visibility',
    caption: 'Your shop, visible in real time.',
  },
  {
    icon: <ToggleRight size={16} className="text-[var(--accent)]" />,
    title: 'Open / Closed Status',
    caption: 'One tap signals your status to customers.',
  },
  {
    icon: <MessageSquare size={16} className="text-[var(--accent)]" />,
    title: 'Customer Connection',
    caption: 'Share offers and announcements.',
  },
  {
    icon: <ShieldCheck size={16} className="text-[var(--accent)]" />,
    title: 'Safety & Security',
    caption: 'Designed to support configured monitoring.',
  },
  {
    icon: <Brain size={16} className="text-[var(--accent)]" />,
    title: 'Device Intelligence',
    caption: 'Insights and future services, designed to grow with the business.',
  },
];

export function MerchantValueSection() {
  return (
    <Section id="merchant-value" className="bg-[var(--bg)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.03)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FOR MERCHANTS"
          title="MORE VALUE FROM"
          titleAccent="THE DEVICE ON YOUR COUNTER."
          description="More than a payment confirmation — a device designed to carry the whole business."
        />

        <div className="max-w-6xl mx-auto mt-14 lg:mt-16">
          {/* Desktop & Tablet: side-by-side */}
          <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — DeviceVisual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex justify-center"
            >
              <DeviceVisual
                size="lg"
                showNotif
                amount="₹1,250"
                notifLabel="PAYMENT RECEIVED"
                showQr
              />
            </motion.div>

            {/* Right — 6 benefit rows */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="flex flex-col gap-5"
            >
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--section)] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm lg:text-base text-[var(--ink)] tracking-tight">
                      {b.title}
                    </span>
                    <span className="font-body text-sm text-[var(--ink-muted)] leading-relaxed mt-0.5">
                      {b.caption}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile: stacked — device above, benefits below */}
          <div className="md:hidden flex flex-col gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex justify-center"
            >
              <DeviceVisual
                size="md"
                showNotif
                amount="₹1,250"
                notifLabel="PAYMENT RECEIVED"
                showQr
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="flex flex-col gap-5"
            >
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--section)] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm text-[var(--ink)] tracking-tight">
                      {b.title}
                    </span>
                    <span className="font-body text-sm text-[var(--ink-muted)] leading-relaxed mt-0.5">
                      {b.caption}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 font-body text-xs text-[var(--ink-dim)] text-center tracking-wide">
            Future services are planned and subject to configuration.
          </p>
        </div>
      </Container>
    </Section>
  );
}
