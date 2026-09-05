'use client';

import { motion } from 'framer-motion';
import { Lock, ShieldCheck, AlertTriangle, Bell, ChevronDown } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const timeline = [
  {
    icon: <Lock size={16} className="text-[#8A9BAE]" strokeWidth={1.8} />,
    title: 'Shop Closed',
    desc: 'Owner taps CLOSED. Shop status updates everywhere.',
    tone: 'text-[#E8EDF2]',
    border: 'border-[#1C2A38]',
  },
  {
    icon: <ShieldCheck size={16} className="text-[#00D084]" strokeWidth={1.8} />,
    title: 'Security Monitoring Active',
    desc: 'Fire, smoke, motion and door sensors go live automatically.',
    tone: 'text-[#00D084]',
    border: 'border-[#00D08440]',
  },
  {
    icon: <AlertTriangle size={16} className="text-[#FFD166]" strokeWidth={1.8} />,
    title: 'Security Event Detected',
    desc: 'An abnormal reading is detected — motion or heat anomaly.',
    tone: 'text-[#FFD166]',
    border: 'border-[#FFD16640]',
  },
  {
    icon: <Bell size={16} className="text-[#FF6B6B]" strokeWidth={1.8} />,
    title: 'Instant Alert',
    desc: 'Push notification + SMS reaches the registered owner immediately.',
    tone: 'text-[#FF6B6B]',
    border: 'border-[#FF444440]',
  },
];

export function SecuritySection() {
  return (
    <Section id="security" className="bg-surface-base">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionHeading
            eyebrow="Smart Security"
            title="The Shop Closes. The Watch Begins."
            description="HERE OPEN monitors security-related events when the shop is closed — and wakes the owner the moment something needs attention."
            align="left"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Motion Detection', sub: 'After-hours intrusion alerts' },
              { label: 'Door & Window Sensors', sub: 'Open/close event tracking' },
              { label: 'Vibration Alerts', sub: 'Break-in attempts detected' },
              { label: 'SMS + Push Alerts', sub: 'Delivered within seconds' },
            ].map((f) => (
              <div key={f.label} className="rounded-xl border border-[#1C2A38] bg-[#0F1923] p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                  <p className="font-display font-semibold text-[0.9rem] text-[#E8EDF2]">{f.label}</p>
                </div>
                <p className="font-body text-[0.8rem] text-[#6B7C8E]">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event timeline card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="relative rounded-3xl border border-[#1C2A38] bg-[#0F1923] p-7 lg:p-9"
        >
          <div className="flex items-center justify-between mb-8">
            <p className="font-display font-semibold text-[0.85rem] text-[#E8EDF2] tracking-wide">SECURITY EVENT LOG</p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00D08440] bg-[#00D08414] px-3 py-1 font-body text-[10px] font-semibold text-[#00D084] tracking-wider">
              <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
              MONITORING
            </span>
          </div>

          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#1C2A38]" />
            <div className="space-y-7">
              {timeline.map((t, i) => (
                <motion.div key={t.title} variants={scaleIn} className="relative flex items-start gap-4">
                  <div className={`relative z-10 w-[22px] h-[22px] rounded-full border bg-[#080C10] ${t.border} flex items-center justify-center flex-shrink-0`}>
                    {t.icon}
                  </div>
                  <div className="pt-0.5">
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 }}
                      className={`font-display font-semibold text-[0.95rem] ${t.tone}`}
                    >
                      {t.title}
                    </motion.p>
                    <p className="mt-1 font-body text-[0.82rem] text-[#6B7C8E] leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3">
            <ChevronDown size={14} className="text-[#00D084]" />
            <p className="font-body text-[0.75rem] text-[#6B7C8E]">Simulated event sequence — shown for demonstration</p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}