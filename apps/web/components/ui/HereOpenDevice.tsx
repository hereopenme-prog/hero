'use client';

import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';

type DeviceSize = 'sm' | 'md' | 'lg' | 'xl';

interface HereOpenDeviceProps {
  size?: DeviceSize;
  status?: 'open' | 'closed';
  float?: boolean;
  showRealtime?: boolean;
  scan?: boolean;
  className?: string;
}

const sizeMap: Record<DeviceSize, { w: string; h: string; radius: string; pad: string; brand: string; status: string; live: string; gutter: string }> = {
  sm: {
    w: 'w-40', h: 'h-[16rem]', radius: 'rounded-[20px]', pad: 'px-4 pb-5 pt-10',
    brand: 'text-[1.15rem]', status: 'text-[10px]', live: 'text-[9px]', gutter: 'gap-4',
  },
  md: {
    w: 'w-48', h: 'h-[19rem]', radius: 'rounded-[24px]', pad: 'px-5 pb-6 pt-11',
    brand: 'text-[1.35rem]', status: 'text-[11px]', live: 'text-[10px]', gutter: 'gap-5',
  },
  lg: {
    w: 'w-64', h: 'h-[21rem]', radius: 'rounded-[28px]', pad: 'px-6 pb-7 pt-12',
    brand: 'text-[1.7rem]', status: 'text-xs', live: 'text-[11px]', gutter: 'gap-6',
  },
  xl: {
    w: 'w-72', h: 'h-[24rem]', radius: 'rounded-[30px]', pad: 'px-7 pb-8 pt-14',
    brand: 'text-[2rem]', status: 'text-sm', live: 'text-xs', gutter: 'gap-7',
  },
};

export function HereOpenDevice({
  size = 'lg',
  status = 'open',
  float = true,
  showRealtime = true,
  scan = true,
  className = '',
}: HereOpenDeviceProps) {
  const s = sizeMap[size];
  const open = status === 'open';
  const stateHex = open ? '#45F59A' : '#FF6B6B';

  const device = (
    <div
      className={`relative ${s.w} ${s.h} ${s.radius} ${className} select-none`}
      style={{
        background: 'linear-gradient(180deg, #0F1517 0%, #0A0E10 55%, #07090B 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow:
          '0 0 0 1px rgba(0,0,0,0.6), 0 40px 90px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Speaker grille */}
      <div className="absolute inset-x-0 top-0 flex flex-col items-center gap-1 pt-4">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="h-[2px] rounded-full"
            style={{
              width: 44 - i * 4,
              background: 'rgba(255,255,255,0.09)',
              boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.4)',
            }}
          />
        ))}
      </div>

      {/* Top bezel line + status LED */}
      <div className="absolute inset-x-0 top-14 flex items-center justify-between px-5">
        <span className="w-px h-3 bg-white/5" />
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: stateHex,
            boxShadow: `0 0 10px ${stateHex}80`,
          }}
        />
        <span className="w-px h-3 bg-white/5" />
      </div>

      {/* Screen */}
      <div className={`flex ${s.pad} ${s.gutter} h-full flex-col items-center justify-between text-center`}>
        {/* Brand wordmark */}
        <div className="mt-2">
          <span className={`block font-display font-bold tracking-[0.18em] text-[#E8EDF2] ${s.brand} leading-none`}>
            HERE
          </span>
          <span
            className={`mt-1 block font-display font-bold tracking-[0.18em] leading-none ${s.brand}`}
            style={{ color: stateHex, textShadow: open ? `0 0 24px ${stateHex}30` : 'none' }}
          >
            {open ? 'OPEN' : 'CLOSED'}
          </span>
        </div>

        {/* Status row */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
          style={{
            background: open ? 'rgba(69,245,154,0.08)' : 'rgba(255,107,107,0.08)',
            border: `1px solid ${open ? 'rgba(69,245,154,0.28)' : 'rgba(255,107,107,0.28)'}`,
          }}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${open ? 'animate-pulse' : ''}`}
            style={{ background: open ? '#45F59A' : '#FF6B6B90', boxShadow: open ? '0 0 8px #45F59A' : 'none' }}
          />
          <span
            className="font-body font-semibold tracking-[0.14em]"
            style={{ color: open ? '#45F59A' : '#FFB3B3' }}
          >
            {open ? 'SHOP OPEN' : 'INACTIVE'}
          </span>
        </div>

        {/* LIVE CONNECTED */}
        <div className="flex items-center gap-1.5">
          <Wifi size={12} className="text-[#C7D2DC]" strokeWidth={2} />
          <span className={`font-body font-semibold tracking-[0.24em] text-[#C7D2DC] ${s.live}`}>
            LIVE · CONNECTED
          </span>
        </div>
      </div>

      {/* Scan line */}
      {scan && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-[14%] right-[14%] h-[2px] rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(69,245,154,0.35), transparent)' }}
          initial={{ top: '14%', opacity: 0 }}
          animate={{ top: ['14%', '82%'], opacity: [0, 0.8, 0.15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
        />
      )}

      {/* Bottom accent line */}
      <div
        className="absolute inset-x-8 bottom-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${stateHex}${open ? '55' : '44'}, transparent)` }}
      />

      {/* Realtime pill */}
      {showRealtime && (
        <div
          className="absolute -bottom-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1"
          style={{
            background: '#0B1012',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          }}
        >
          <span className="h-1 w-1 rounded-full bg-[#45F59A] animate-pulse" />
          <span className="font-body text-[9px] font-semibold tracking-[0.18em] text-[#8A9BAE]">
            REAL-TIME STATUS
          </span>
        </div>
      )}
    </div>
  );

  if (!float) return device;

  return (
    <motion.div
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {device}
    </motion.div>
  );
}