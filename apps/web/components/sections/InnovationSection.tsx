'use client';

import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Radar, Cpu, Users, MousePointerClick } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

const pillars = [
  {
    icon: <Activity size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Real-Time Intelligence',
    caption: 'Status and events, updated in real time.',
  },
  {
    icon: <ShieldCheck size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Smart Security',
    caption: 'Designed to support configured monitoring and alerts.',
  },
  {
    icon: <Radar size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Multi-Sensor Integration',
    caption: 'Designed to support multiple sensing capabilities over time.',
  },
  {
    icon: <Cpu size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Low-Cost IoT Hardware',
    caption: 'Designed around accessible, practical hardware.',
  },
  {
    icon: <Users size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Customer Connectivity',
    caption: 'Businesses and customers, connected.',
  },
  {
    icon: <MousePointerClick size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Plug-and-Play Onboarding',
    caption: 'Designed to be simple to set up.',
  },
];

export function InnovationSection() {
  return (
    <Section id="innovation" className="bg-[var(--bg)]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="INNOVATION"
          title="WHY HERE OPEN?"
          titleAccent="BUILT FOR THE PHYSICAL WORLD OF BUSINESS."
          description="The approach behind the connected business ecosystem."
        />

        <div className="mx-auto flex flex-col gap-12 max-w-4xl">
          {pillars.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
                className={`flex flex-col sm:flex-row items-start gap-5 sm:gap-8 border-b border-[var(--border)] pb-10 ${
                  reversed ? 'sm:flex-row-reverse text-left' : 'text-left'
                }`}
              >
                <motion.div
                  variants={fadeUp}
                  className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-[var(--a20)]"
                  style={{ background: 'var(--a0A)', width: 56, height: 56 }}
                >
                  {p.icon}
                </motion.div>

                <div className={`sm:${reversed ? 'text-right' : 'text-left'} flex-1`}>
                  <motion.h3
                    variants={fadeUp}
                    className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[var(--ink)]"
                  >
                    {p.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    className="mt-2 font-body text-[0.95rem] text-[var(--ink-muted)] leading-relaxed"
                  >
                    {p.caption}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center font-display font-bold text-[1.4rem] lg:text-[1.8rem] tracking-tight text-[var(--ink)]"
        >
          One device, designed to become a{' '}
          <span className="text-[var(--accent)]">connected business infrastructure.</span>
        </motion.p>
      </Container>
    </Section>
  );
}
