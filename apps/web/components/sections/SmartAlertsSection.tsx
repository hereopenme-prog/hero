'use client';

import { motion } from 'framer-motion';
import { Cpu, AlertTriangle, ShieldAlert, WifiOff, CreditCard, Thermometer } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const alerts = [
  { label: 'TEMPERATURE HIGH', color: '#FFD166', bg: '#FFD16620', border: '#FFD16640', icon: <Thermometer size={12} />, pos: 'left-[5%] top-[8%] sm:left-[2%] sm:top-[12%]' },
  { label: 'UNUSUAL EVENT', color: '#FFD166', bg: '#FFD16620', border: '#FFD16640', icon: <AlertTriangle size={12} />, pos: 'right-[2%] top-[5%] sm:right-[0%] sm:top-[10%]' },
  { label: 'DEVICE OFFLINE', color: '#FF6B6B', bg: '#FF6B6B20', border: '#FF6B6B40', icon: <WifiOff size={12} />, pos: 'left-[0%] bottom-[28%] sm:left-[-2%] sm:bottom-[32%]' },
  { label: 'SECURITY EVENT', color: '#FFD166', bg: '#FFD16620', border: '#FFD16640', icon: <ShieldAlert size={12} />, pos: 'right-[-2%] bottom-[30%] sm:right-[-4%] sm:bottom-[34%]' },
  { label: 'PAYMENT RECEIVED', color: 'var(--accent)', bg: 'var(--a20)', border: 'var(--a40)', icon: <CreditCard size={12} />, pos: 'left-[10%] bottom-[4%] sm:left-[6%] sm:bottom-[2%]' },
];

export function SmartAlertsSection() {
  return (
    <Section id="smart-alerts" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.04)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="SMART ALERTS"
          title="KNOW WHEN SOMETHING NEEDS YOUR ATTENTION."
        />

        <div className="relative mx-auto mt-4 max-w-xl" style={{ minHeight: 420 }}>
          {/* Central device */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--a50)] bg-[var(--section)] shadow-[0_0_40px_rgba(0,208,132,0.25)]">
                <Cpu size={32} className="text-[var(--accent)]" />
              </div>
              <span className="mt-2.5 font-body text-[0.55rem] font-bold tracking-[0.2em] text-[var(--accent)]">HERE OPEN</span>
            </div>
          </motion.div>

          {/* Floating alert labels */}
          {alerts.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute z-20 ${a.pos}`}
            >
              <div
                className="flex items-center gap-2 rounded-full px-3.5 py-1.5 border backdrop-blur-sm"
                style={{ borderColor: a.border, backgroundColor: a.bg }}
              >
                <span style={{ color: a.color }}>{a.icon}</span>
                <span className="font-body text-[0.6rem] font-bold tracking-[0.18em]" style={{ color: a.color }}>
                  {a.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Connecting lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="50" y1="46" x2="18" y2="18" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="50" y1="46" x2="82" y2="16" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="50" y1="46" x2="12" y2="68" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="50" y1="46" x2="88" y2="66" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="50" y1="46" x2="22" y2="92" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="2 2" />
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center font-body text-[0.95rem] text-[var(--ink-muted)] leading-relaxed max-w-lg mx-auto"
        >
          Examples of possible alerts from configured sensors and supported features.
        </motion.p>
      </Container>
    </Section>
  );
}
