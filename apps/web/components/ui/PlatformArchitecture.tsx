'use client';

import { motion } from 'framer-motion';
import { Store, Radio, Eye, Users, ArrowDown } from 'lucide-react';
import { HereOpenDevice } from '@/components/ui/HereOpenDevice';
import { ConnectionLine } from '@/components/ui/ConnectionLine';
import { fadeUp, stagger } from '@/lib/animations';

const nodes = [
  {
    num: '01',
    icon: <Store size={18} strokeWidth={1.75} />,
    title: 'PHYSICAL SHOP',
    desc: 'The business as it exists today.',
  },
  {
    num: '02',
    icon: <Radio size={18} strokeWidth={1.75} />,
    title: 'CONNECTED SHOP',
    desc: 'The HERE OPEN device connects the physical location.',
  },
  {
    num: '03',
    icon: <Eye size={18} strokeWidth={1.75} />,
    title: 'VISIBLE BUSINESS',
    desc: 'Status, offers and updates become visible in real time.',
  },
  {
    num: '04',
    icon: <Users size={18} strokeWidth={1.75} />,
    title: 'CONNECTED CUSTOMER',
    desc: 'Customers know what is available before they arrive.',
  },
];

const desktopPos = [
  { left: 'left-[24px]', top: 'top-[96px]' },
  { left: 'left-[632px]', top: 'top-[96px]' },
  { left: 'left-[24px]', top: 'top-[384px]' },
  { left: 'left-[632px]', top: 'top-[384px]' },
];

const lineAnchors = [
  { from: { x: 144, y: 171 }, to: { x: 448, y: 310 } },
  { from: { x: 752, y: 171 }, to: { x: 448, y: 310 } },
  { from: { x: 144, y: 459 }, to: { x: 448, y: 310 } },
  { from: { x: 752, y: 459 }, to: { x: 448, y: 310 } },
];

function NodeCard({
  node,
  className = '',
}: {
  node: (typeof nodes)[number];
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-[18px] backdrop-blur-sm transition-colors duration-300 hover:border-[#45F59A]/30 ${className}`}
    >
      <span
        aria-hidden
        className="absolute -right-1 -top-3 font-display text-[3.25rem] font-bold leading-none text-white/[0.04]"
      >
        {node.num}
      </span>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center rounded-lg border border-[#45F59A]/20 bg-[#45F59A]/10 w-9 h-9 text-[#45F59A] transition-transform duration-300 group-hover:scale-105">
            {node.icon}
          </span>
          <span className="font-body text-[11px] font-semibold tracking-[0.2em] text-white/25">
            {node.num}
          </span>
        </div>
        <div className="mt-4">
          <p className="font-display text-[15px] font-bold tracking-tight text-[#E8EDF2] leading-tight">
            {node.title}
          </p>
          <p className="mt-1 font-body text-[13px] text-[#8A9BAE] leading-snug">{node.desc}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-[18px] bottom-0 h-px bg-gradient-to-r from-transparent via-[#45F59A]/0 to-transparent transition-all duration-300 group-hover:via-[#45F59A]/50" />
    </motion.div>
  );
}

export function PlatformArchitecture() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Desktop: architectural map */}
      <div className="hidden lg:block relative h-[620px] w-full">
        {/* Radial glow behind device */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(69,245,154,0.1) 0%, transparent 55%)' }}
        />

        {/* Connection lines */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          width="896"
          height="620"
          viewBox="0 0 896 620"
          fill="none"
          preserveAspectRatio="none"
        >
          {lineAnchors.map((l, i) => (
            <ConnectionLine key={i} from={l.from} to={l.to} />
          ))}
        </svg>

        {/* Node cards */}
        {nodes.map((node, i) => (
          <div key={node.title} className={`absolute w-[240px] ${desktopPos[i].left} ${desktopPos[i].top}`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <NodeCard node={node} />
            </motion.div>
          </div>
        ))}

        {/* Center device */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <HereOpenDevice size="lg" status="open" />
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <div className="lg:hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(69,245,154,0.12) 0%, transparent 60%)' }}
            />
            <HereOpenDevice size="md" status="open" />
          </div>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-sm">
          <div
            aria-hidden
            className="absolute left-[15px] -top-4 bottom-28 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="space-y-4"
          >
            {nodes.map((node, i) => (
              <motion.div key={node.title} variants={fadeUp} className="relative">
                {i < nodes.length - 1 && (
                  <div className="absolute -bottom-5 left-[13px] z-10 text-[#45F59A]">
                    <ArrowDown size={13} />
                  </div>
                )}
                <NodeCard node={node} className="w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}