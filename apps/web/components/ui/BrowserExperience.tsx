'use client';

import type { ReactNode } from 'react';
import { Lock, Grip } from 'lucide-react';

interface BrowserExperienceProps {
  index: string;
  eyebrow: string;
  url: string;
  active?: boolean;
  children: ReactNode;
}

export function BrowserExperience({ index, eyebrow, url, active = false, children }: BrowserExperienceProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-[#0B1012] transition-[border-color,box-shadow,transform] duration-500 ${
        active
          ? 'border-[#45F59A]/40 shadow-[0_0_0_1px_rgba(69,245,154,0.15),0_30px_60px_-30px_rgba(0,0,0,0.9),0_0_60px_-10px_rgba(69,245,154,0.25)]'
          : 'border-white/[0.07] shadow-[0_24px_50px_-28px_rgba(0,0,0,0.9)]'
      }`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2.5 border-b border-white/[0.06] px-3 py-3 sm:px-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.09]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.09]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.09]" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-[420px] flex-1 items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5">
          <Lock size={11} className="text-[#45F59A]" />
          <span className="truncate font-body text-[12px] tracking-wide text-white/45">{url}</span>
        </div>
        <Grip size={13} className="hidden text-white/20 sm:block" />
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8">
        <span className="font-body text-[11px] font-bold tracking-[0.22em] text-white/30">
          {index} — {eyebrow}
        </span>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}