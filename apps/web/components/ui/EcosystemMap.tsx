'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Users, Eye, MessageCircle, ShieldCheck, Activity, Tag, BarChart3 } from 'lucide-react';
import { ConnectionLine } from '@/components/ui/ConnectionLine';
import { fadeUp, stagger } from '@/lib/animations';

const nodes = [
  { title: 'BUSINESS', desc: 'Shops and merchants connect.', icon: <Store size={18} strokeWidth={1.75} /> },
  { title: 'CUSTOMERS', desc: 'People reach the business in real time.', icon: <Users size={18} strokeWidth={1.75} /> },
  { title: 'VISIBILITY', desc: 'Status and offers become live.', icon: <Eye size={18} strokeWidth={1.75} /> },
  { title: 'COMMUNICATION', desc: 'Announcements reach the right audience.', icon: <MessageCircle size={18} strokeWidth={1.75} /> },
  { title: 'SAFETY', desc: 'Designed to support configured safety.', icon: <ShieldCheck size={18} strokeWidth={1.75} /> },
  { title: 'MONITORING', desc: 'Watch over the business after hours.', icon: <Activity size={18} strokeWidth={1.75} /> },
  { title: 'OFFERS', desc: 'Deals and updates, published instantly.', icon: <Tag size={18} strokeWidth={1.75} /> },
  { title: 'ANALYTICS', desc: 'Insights from across the ecosystem.', icon: <BarChart3 size={18} strokeWidth={1.75} /> },
];

// Desktop 896x680 stage — node card centers (w-44=176, h-[104px])
const centers = [
  { x: 448, y: 84 },
  { x: 774, y: 152 },
  { x: 812, y: 340 },
  { x: 774, y: 528 },
  { x: 448, y: 596 },
  { x: 122, y: 528 },
  { x: 84, y: 340 },
  { x: 122, y: 152 },
];

const positions = centers.map((c) => ({ left: c.x - 88, top: c.y - 52 }));

const HUB = { x: 448, y: 340 };

export function EcosystemMap() {
  const [active, setActive] = useState<number | null>(null);

  const setActiveSafe = (i: number | null) => {
    if (navigator.maxTouchPoints > 0 && i !== null) {
      setActive((prev) => (prev === i ? null : i));
      return;
    }
    setActive(i);
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Desktop radial map */}
      <div className="relative hidden h-[680px] w-full lg:block">
        {/* Ring guides */}
        {[300, 420].map((d) => (
          <div
            key={d}
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            style={{ width: d, height: d }}
          />
        ))}

        {/* Connection lines */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          width="896"
          height="680"
          viewBox="0 0 896 680"
          fill="none"
          preserveAspectRatio="none"
        >
          {centers.map((c, i) => (
            <ConnectionLine
              key={i}
              from={HUB}
              to={c}
              active={active === i}
              dimmed={active !== null && active !== i}
            />
          ))}
        </svg>

        {/* Hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full text-center"
            style={{
              background: 'radial-gradient(circle at 50% 40%, #10181A 0%, #0A0F11 60%, #050708 100%)',
              border: '1px solid rgba(69,245,154,0.22)',
              boxShadow:
                '0 0 0 1px rgba(0,0,0,0.6), 0 0 70px -12px rgba(69,245,154,0.35), inset 0 0 40px rgba(69,245,154,0.05)',
            }}
          >
            <span aria-hidden className="absolute inset-4 rounded-full border border-[#45F59A]/10" />
            <span aria-hidden className="absolute inset-8 rounded-full border border-[#45F59A]/10" />
            <span className="font-display text-[1.35rem] font-bold tracking-[0.2em] text-[#E8EDF2]">HERE</span>
            <span className="mt-0.5 font-display text-[1.6rem] font-bold tracking-[0.2em] text-[#45F59A]">
              OPEN
            </span>
            <span className="mt-2 max-w-[130px] font-body text-[10px] font-semibold leading-relaxed tracking-[0.16em] text-[#8A9BAE]">
              CONNECTED BUSINESS PLATFORM
            </span>
          </motion.div>
        </div>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <div
            key={node.title}
            className={`absolute w-44 transition-opacity duration-300 ${
              active !== null && active !== i ? 'opacity-40' : 'opacity-100'
            }`}
            style={{ left: positions[i].left, top: positions[i].top }}
          >
            <div
              role="button"
              tabIndex={0}
              aria-pressed={active === i}
              onMouseEnter={() => setActiveSafe(i)}
              onMouseLeave={() => setActiveSafe(null)}
              onFocus={() => setActiveSafe(i)}
              onBlur={() => setActiveSafe(null)}
              onClick={() => setActiveSafe(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSafe(i);
                }
              }}
              className={`flex h-[104px] flex-col justify-between rounded-2xl border p-4 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#45F59A]/50 ${
                active === i
                  ? 'scale-[1.04] border-[#45F59A]/45 bg-[#45F59A]/10 shadow-[0_0_30px_-6px_rgba(69,245,154,0.4)]'
                  : 'border-white/[0.07] bg-white/[0.03] hover:border-[#45F59A]/25'
              }`}
              style={{ backdropFilter: 'blur(4px)' }}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-300 ${
                    active === i
                      ? 'border-[#45F59A]/40 bg-[#45F59A]/15 text-[#45F59A]'
                      : 'border-[#45F59A]/15 bg-[#45F59A]/8 text-[#45F59A]'
                  }`}
                >
                  {node.icon}
                </span>
                <span className={`h-1.5 w-1.5 rounded-full ${active === i ? 'bg-[#45F59A] animate-pulse' : 'bg-white/15'}`} />
              </div>
              <div>
                <p className="font-display text-[12.5px] font-bold tracking-tight text-[#E8EDF2] leading-tight">
                  {node.title}
                </p>
                <p className="mt-0.5 font-body text-[12px] text-[#8A9BAE] leading-snug">{node.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / tablet stack */}
      <div className="lg:hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="relative mx-auto flex h-[180px] w-[180px] flex-col items-center justify-center rounded-full text-center"
          style={{
            background: 'radial-gradient(circle at 50% 40%, #10181A 0%, #0A0F11 60%, #050708 100%)',
            border: '1px solid rgba(69,245,154,0.22)',
            boxShadow: '0 0 50px -12px rgba(69,245,154,0.35)',
          }}
        >
          <span className="font-display text-[1.2rem] font-bold tracking-[0.2em] text-[#E8EDF2]">HERE</span>
          <span className="mt-0.5 font-display text-[1.4rem] font-bold tracking-[0.2em] text-[#45F59A]">OPEN</span>
          <span className="mt-2 font-body text-[9px] font-semibold tracking-[0.16em] text-[#8A9BAE]">
            CONNECTED BUSINESS PLATFORM
          </span>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-sm">
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="space-y-3.5"
          >
            {nodes.map((node) => (
              <motion.div key={node.title} variants={fadeUp} className="relative flex items-center gap-4">
                <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#45F59A]/25 bg-[#0B1012] text-[#45F59A]">
                  {node.icon}
                </span>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5">
                  <p className="font-display text-[13px] font-bold tracking-tight text-[#E8EDF2] leading-tight">
                    {node.title}
                  </p>
                  <p className="mt-0.5 font-body text-[12px] text-[#8A9BAE] leading-snug">{node.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}