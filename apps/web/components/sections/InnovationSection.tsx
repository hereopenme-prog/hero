'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, CircuitBoard, Users } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const pillars = [
  {
    icon: <Zap size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Real-Time Intelligence',
    desc: 'Live status and event processing that keeps businesses visible the instant they change.',
  },
  {
    icon: <ShieldCheck size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Smart Security',
    desc: 'Automated monitoring and instant alerting designed for shops without Wi-Fi or staff.',
  },
  {
    icon: <CircuitBoard size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Low-Cost IoT Architecture',
    desc: 'GSM-powered hardware engineered to be affordable for small neighbourhood businesses.',
  },
  {
    icon: <Users size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Customer Connectivity Platform',
    desc: 'Turning a tap into a shared reality between shop owners and their local customers.',
  },
];

export function InnovationSection() {
  return (
    <Section id="innovation" className="bg-surface-base">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Innovation"
          title="Four Pillars, One Mission"
          description="HERE OPEN is engineered around four ideas that no single existing solution combines."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={scaleIn}
              className="relative rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-7 h-full overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D08450] to-transparent" />
              <div
                className="flex items-center justify-center mb-6"
                style={{ background: '#00D0841A', borderRadius: 12, padding: 11, width: 48, height: 48 }}
              >
                {p.icon}
              </div>
              <h3 className="font-display font-semibold text-[1rem] text-[#E8EDF2] mb-2">{p.title}</h3>
              <p className="font-body text-[0.85rem] text-[#8A9BAE] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}