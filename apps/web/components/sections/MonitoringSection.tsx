'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { useInView } from 'framer-motion';
import {
  Store,
  Shield,
  Flame,
  Wind,
  Thermometer,
  Cpu,
  Wifi,
  Bell,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

function useMonitorCount(target: number, active: boolean, from: number, duration = 1200) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(from + Math.round((target - from) * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, from, duration]);
  return value;
}

export function MonitoringSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { once: true, amount: 0.3 });
  const temp = useMonitorCount(24, inView, 18, 1200);

  const monitors: { icon: ReactNode; label: string; value: ReactNode }[] = [
    {
      icon: <Store size={14} className="text-[#00D084]" strokeWidth={1.5} />,
      label: 'Shop Status',
      value: (
        <span className="flex items-center gap-2">
          <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          <span className="font-semibold text-[#00D084]">OPEN</span>
        </span>
      ),
    },
    {
      icon: <Shield size={14} className="text-[#00D084]" strokeWidth={1.5} />,
      label: 'Security',
      value: (
        <span className="flex items-center gap-2">
          <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          Active
        </span>
      ),
    },
    {
      icon: <Flame size={14} className="text-[#00D084]" strokeWidth={1.5} />,
      label: 'Fire',
      value: (
        <span className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          No Risk
        </span>
      ),
    },
    {
      icon: <Wind size={14} className="text-[#00D084]" strokeWidth={1.5} />,
      label: 'Smoke',
      value: (
        <span className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          Normal
        </span>
      ),
    },
    {
      icon: <Thermometer size={14} className="text-[#00D084]" strokeWidth={1.5} />,
      label: 'Temperature',
      value: <>{`${temp}\u00B0C`}</>,
    },
    {
      icon: <Cpu size={14} className="text-[#00D084]" strokeWidth={1.5} />,
      label: 'Device Health',
      value: (
        <span className="flex items-center gap-2">
          <Wifi className="w-3.5 h-3.5 text-[#00D084]" />
          Healthy
        </span>
      ),
    },
  ];

  return (
    <Section id="monitoring" className="bg-[#0A0F14]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="24/7 Monitoring"
          title="YOUR SHOP. ALWAYS CONNECTED."
          description="When your shop is closed, HERE OPEN keeps watching. Continuous security and safety monitoring with instant alerts."
        />

        <div className="relative overflow-hidden rounded-3xl border border-[#1C2A38] bg-[#0F1923] max-w-4xl mx-auto p-6 lg:p-8">
          <span className="scan-line" />

          {/* Panel header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#FF4444]" />
              <span className="w-2 h-2 rounded-full bg-[#FFD166]" />
              <span className="w-2 h-2 rounded-full bg-[#00D084]" />
              <h3 className="ml-3 font-display font-semibold text-[0.85rem] text-[#E8EDF2] tracking-wide">
                Shop Monitor — LIVE DASHBOARD
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1C2A38] bg-[#080C10] px-3 py-1 font-body text-[10px] font-semibold text-[#6B7C8E] tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
              SIMULATED DATA
            </span>
          </div>

          <div ref={panelRef} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {monitors.map((m, i) => (
              <div
                key={m.label}
                className="rounded-xl border border-[#1C2A38] bg-[#080C10] p-4"
                style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(12px)', transition: `opacity 0.45s ease ${i * 0.06}s, transform 0.45s ease ${i * 0.06}s` }}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="flex items-center">{m.icon}</span>
                  <span className="font-body text-[10px] text-[#6B7C8E] uppercase tracking-wider">{m.label}</span>
                </div>
                <div className="font-display font-semibold text-[14px] text-[#E8EDF2]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: <Shield className="w-4 h-4" />, label: 'Continuous Monitoring' },
            { icon: <Wifi className="w-4 h-4" />, label: 'GSM Connectivity' },
            { icon: <Flame className="w-4 h-4" />, label: 'Fire & Smoke Sensing' },
            { icon: <Bell className="w-4 h-4" />, label: 'Push + SMS Alerts' },
          ].map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-2 rounded-full border border-[#1C2A38] bg-[#0F1923] px-4 py-2 font-body text-xs text-[#A5B4C4]"
            >
              <span className="text-[#00D084]">{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}