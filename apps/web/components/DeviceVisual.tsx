'use client';

import { useState, useEffect } from 'react';
import { Shield, Bell, Wifi, Thermometer, Wind, Activity, Smartphone } from 'lucide-react';

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

const themeStyles = {
  light: {
    orb: 'bg-[radial-gradient(circle,rgba(0,255,102,0.06)_0%,transparent_60%)]',
    frame: 'float-card bg-white backdrop-blur-sm border border-neutral-200 rounded-3xl p-6 shadow-card',
    heading: 'text-black',
    id: 'text-black',
    iconBox: 'bg-green-action/10',
    statusPanel: 'bg-green-action/[0.06] border border-green-action/15 rounded-2xl p-5 mb-4',
    label: 'text-black',
    sensorTile: 'bg-neutral-50 border border-neutral-200 rounded-xl p-3.5',
    sensorLabel: 'text-black',
    sensorValue: 'text-black',
    floatChip: 'bg-white border border-neutral-200',
  },
  dark: {
    orb: 'bg-[radial-gradient(circle,rgba(0,208,132,0.08)_0%,transparent_60%)]',
    frame: 'float-card bg-[#0F1923] border border-[#1C2A38] rounded-3xl p-6 shadow-card',
    heading: 'text-[#E8EDF2]',
    id: 'text-[#6B7C8E]',
    iconBox: 'bg-[#00D084]/10 border border-[#00D084]/20',
    statusPanel: 'bg-[#00D08412] border border-[#00D08430] rounded-2xl p-5 mb-4',
    label: 'text-[#6B7C8E]',
    sensorTile: 'bg-[#080C10] border border-[#1C2A38] rounded-xl p-3.5',
    sensorLabel: 'text-[#6B7C8E]',
    sensorValue: 'text-[#E8EDF2]',
    floatChip: 'bg-[#0F1923] border border-[#1C2A38]',
  },
};

interface DeviceVisualProps {
  theme?: 'light' | 'dark';
}

export function DeviceVisual({ theme = 'light' }: DeviceVisualProps) {
  const temp = useCountUp(24);
  const s = themeStyles[theme];

  return (
    <div className="relative w-full max-w-[420px]">
      <div className={`absolute inset-0 pointer-events-none ${s.orb}`} />

      <div className={`relative ${s.frame}`}>
        {/* Device header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.iconBox}`}>
              <Wifi className={`w-4 h-4 ${theme === 'light' ? 'text-green-action' : 'text-[#00D084]'}`} />
            </div>
            <div>
              <p className={`text-[13px] font-semibold ${s.heading}`}>HERE OPEN Device</p>
              <p className={`text-[11px] ${s.id}`}>ID: HO-2026-0042</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="status-dot-pulse inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
            <span className={`text-[11px] font-semibold ${theme === 'light' ? 'text-green-action' : 'text-[#00D084]'}`}>Online</span>
          </div>
        </div>

        {/* Status panel */}
        <div className={s.statusPanel}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-[10px] uppercase tracking-widest mb-1 ${s.label}`}>Shop Status</p>
              <p className="open-glow inline-block text-4xl font-extrabold text-[#00D084] tracking-tight rounded-lg px-2">OPEN</p>
            </div>
            <div className="text-right">
              <p className={`text-[10px] uppercase tracking-widest mb-1 ${s.label}`}>Live</p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-action/10 rounded-full">
                <span className="blink-dot inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
                <span className="text-[11px] font-semibold text-[#00D084]">Connected</span>
              </span>
            </div>
          </div>
        </div>

        {/* Sensor grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <Shield className="w-3.5 h-3.5" />, label: 'Security', value: 'Active', ok: true },
            { icon: <Thermometer className="w-3.5 h-3.5" />, label: 'Temperature', value: `${temp}\u00B0C`, ok: true },
            { icon: <Wind className="w-3.5 h-3.5" />, label: 'Smoke', value: 'Normal', ok: true },
            { icon: <Activity className="w-3.5 h-3.5" />, label: 'Network', value: '4G LTE', ok: true },
          ].map((item) => (
            <div key={item.label} className={s.sensorTile}>
              <div className="flex items-center gap-1.5 mb-2">
                <span className={s.sensorLabel}>{item.icon}</span>
                <span className={`text-[10px] uppercase tracking-wider ${s.sensorLabel}`}>{item.label}</span>
              </div>
              <p className={`text-[13px] font-semibold ${s.sensorValue}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className={`float-soft absolute -top-4 -right-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-card ${s.floatChip}`}>
        <Bell className="w-4.5 h-4.5 text-[#00D084]" />
      </div>
      <div className={`float-soft absolute -bottom-4 -left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-card ${s.floatChip}`} style={{ animationDelay: '1.5s' }}>
        <Smartphone className="w-4.5 h-4.5 text-[#00D084]" />
      </div>
    </div>
  );
}