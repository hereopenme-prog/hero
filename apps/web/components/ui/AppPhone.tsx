'use client';

import type { ReactNode } from 'react';
import { Signal, Wifi, BatteryFull, type LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

interface PhoneFrameProps {
  children: ReactNode;
  tabs: Tab[];
  className?: string;
  activeColor?: string;
}

export function PhoneFrame({ children, tabs, className = '', activeColor = '#45F59A' }: PhoneFrameProps) {
  return (
    <div className={`relative w-[290px] select-none ${className}`}>
      {/* Bezel */}
      <div
        className="relative rounded-[3rem] border border-white/10 p-2.5"
        style={{
          background: 'linear-gradient(180deg, #161D22 0%, #0A0F13 60%, #06090C 100%)',
          boxShadow:
            '0 0 0 1px rgba(0,0,0,0.5), 0 40px 90px -30px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        {/* Side buttons */}
        <span className="absolute -left-[2.5px] top-28 h-16 w-[3px] rounded-full bg-white/10" />
        <span className="absolute -left-[2.5px] top-40 h-8 w-[3px] rounded-full bg-white/10" />
        <span className="absolute -right-[2.5px] top-32 h-14 w-[3px] rounded-full bg-white/10" />

        {/* Screen */}
        <div
          className="relative overflow-hidden rounded-[2.4rem] bg-[#0B1012]"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)' }}
        >
          {/* Notch */}
          <div className="absolute left-1/2 top-2.5 z-20 h-[18px] w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-7 pt-4 pb-2">
            <span className="font-body text-[11px] font-semibold text-[#E8EDF2]">9:41</span>
            <div className="flex items-center gap-1.5 text-[#8A9BAE]">
              <Signal size={11} strokeWidth={2.5} />
              <Wifi size={11} strokeWidth={2.5} />
              <BatteryFull size={13} strokeWidth={2} />
            </div>
          </div>

          {/* Screen content */}
          <div className="px-4 pb-5 pt-3">{children}</div>

          {/* Tabs */}
          <div className="flex items-center justify-around border-t border-white/5 bg-black/20 px-2 py-2.5">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="flex flex-col items-center gap-1"
                role="tab"
                aria-label={tab.label}
                aria-selected={tab.active}
              >
                <tab.icon
                  size={16}
                  strokeWidth={tab.active ? 2.2 : 1.8}
                  style={{ color: tab.active ? activeColor : '#5C6B7A' }}
                />
                <span
                  className="font-body text-[9px] font-medium tracking-wide"
                  style={{ color: tab.active ? activeColor : '#5C6B7A' }}
                >
                  {tab.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}