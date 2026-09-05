'use client';

import { motion } from 'framer-motion';
import { Thermometer, Wind, Flame, Gauge, Cpu } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const readings = [
  {
    icon: <Thermometer size={18} className="text-[#00D084]" strokeWidth={1.5} />,
    metric: 'Temperature',
    value: '24\u00B0C',
    status: 'Normal Range',
    tone: 'text-[#00D084]',
  },
  {
    icon: <Wind size={18} className="text-[#00D084]" strokeWidth={1.5} />,
    metric: 'Smoke',
    value: 'Normal',
    status: 'No Detection',
    tone: 'text-[#00D084]',
  },
  {
    icon: <Flame size={18} className="text-[#00D084]" strokeWidth={1.5} />,
    metric: 'Fire',
    value: 'No Risk',
    status: 'All Clear',
    tone: 'text-[#00D084]',
  },
  {
    icon: <Gauge size={18} className="text-[#00D084]" strokeWidth={1.5} />,
    metric: 'Sensor Status',
    value: 'All Active',
    status: '6/6 Online',
    tone: 'text-[#00D084]',
  },
  {
    icon: <Cpu size={18} className="text-[#00D084]" strokeWidth={1.5} />,
    metric: 'Device Health',
    value: 'Healthy',
    status: 'GSM Connected',
    tone: 'text-[#00D084]',
  },
];

export function FireSafetySection() {
  return (
    <Section id="fire-safety" className="bg-[#0A0F14]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Fire & Safety"
          title="Caught Early. Handled Fast."
          description="Temperature, smoke and fire sensors run around the clock — a single abnormal reading triggers an instant alert to the owner."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
        >
          {readings.map((r, i) => (
            <motion.div
              key={r.metric}
              variants={scaleIn}
              className="relative rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 h-full overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D08440] to-transparent" />
              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00D0841A', borderRadius: 10, padding: 9, width: 38, height: 38 }}
                >
                  {r.icon}
                </div>
                <span className="status-dot-pulse inline-block w-2 h-2 rounded-full bg-[#00D084]" />
              </div>
              <p className="font-body text-[0.7rem] text-[#6B7C8E] uppercase tracking-wider mb-1">{r.metric}</p>
              <p className={`font-display font-bold text-[1.1rem] leading-tight ${r.tone}`}>{r.value}</p>
              <p className="mt-1 font-body text-[0.72rem] text-[#3D4F5E]">{r.status}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center font-body text-[0.78rem] text-[#3D4F5E]"
        >
          Sensor readings shown are simulated demo data. Live IoT telemetry will appear here once hardware integrations are active.
        </motion.p>
      </Container>
    </Section>
  );
}