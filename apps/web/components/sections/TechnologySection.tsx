'use client';

import { motion } from 'framer-motion';
import { Store, Cpu, Signal, Cloud, Globe, Users } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const nodes = [
  {
    label: 'SHOP',
    sub: 'The physical space.',
    icon: <Store size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
  },
  {
    label: 'HERE OPEN DEVICE',
    sub: 'Installed in the shop.',
    icon: <Cpu size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
  },
  {
    label: 'NETWORK / CONNECTIVITY',
    sub: 'Stays connected.',
    icon: <Signal size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
  },
  {
    label: 'HERE OPEN PLATFORM',
    sub: 'Real-time intelligence.',
    icon: <Cloud size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
  },
  {
    label: 'CUSTOMER-FACING EXPERIENCE',
    sub: 'Visible to customers.',
    icon: <Globe size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
  },
  {
    label: 'CUSTOMERS',
    sub: 'Know before they go.',
    icon: <Users size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
  },
];

export function TechnologySection() {
  return (
    <Section id="technology" className="bg-[var(--section-2)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="TECHNOLOGY"
          title="A SIGNAL FROM SHOP"
          titleAccent="TO CUSTOMER."
          description="How a single status change travels across the Here Open network."
        />

        {/* Desktop: horizontal pipeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="hidden md:block relative max-w-6xl mx-auto"
        >
          {/* Connector line with subtle pulse */}
          <div className="absolute top-[40px] left-[9%] right-[9%] h-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--a30)] to-transparent" />
            <motion.div
              className="absolute top-0 h-px w-24 bg-[var(--accent)]"
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {nodes.map((n) => (
              <motion.div key={n.label} variants={scaleIn} className="text-center">
                <div className="relative mx-auto w-16 h-16 mb-4 rounded-full bg-[var(--section)] border border-[var(--a40)] flex items-center justify-center shadow-[0_0_28px_var(--a14)]">
                  {n.icon}
                </div>
                <p className="font-display font-bold text-[0.72rem] tracking-widest text-[var(--ink)]">
                  {n.label}
                </p>
                <p className="mt-1 font-body text-[0.7rem] text-[var(--ink-dim)]">{n.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile: vertical pipeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="md:hidden max-w-xs mx-auto"
        >
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-[31px] top-4 bottom-4 w-px bg-[var(--border)]" />

            {nodes.map((n) => (
              <motion.div
                key={n.label}
                variants={scaleIn}
                className="relative flex items-center gap-4 pb-5 last:pb-0"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-[var(--section)] border border-[var(--a40)] flex items-center justify-center flex-shrink-0 shadow-[0_0_24px_var(--a14)]">
                  {n.icon}
                </div>
                <div>
                  <p className="font-display font-bold text-[0.75rem] tracking-widest text-[var(--ink)]">
                    {n.label}
                  </p>
                  <p className="mt-0.5 font-body text-[0.75rem] text-[var(--ink-dim)]">{n.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Caption */}
        <p className="mt-10 text-center font-body text-[0.75rem] text-[var(--ink-dim)]">
          From the owner&apos;s tap to the customer&apos;s view — through a connected, web-first platform.
        </p>
      </Container>
    </Section>
  );
}
