'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Eye,
  MessageSquare,
  Megaphone,
  ShieldCheck,
  BellRing,
  Flame,
  HeartHandshake,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const benefits = [
  { icon: <Users size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'More customer visits' },
  { icon: <Eye size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Higher visibility' },
  { icon: <MessageSquare size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Direct customer communication' },
  { icon: <Megaphone size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Offers & announcements' },
  { icon: <ShieldCheck size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: '24/7 monitoring' },
  { icon: <BellRing size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Security alerts' },
  { icon: <Flame size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Fire & smoke monitoring' },
  { icon: <HeartHandshake size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Peace of mind' },
];

const metrics = [
  { value: '2x', label: 'More visits for open, visible shops' },
  { value: '24/7', label: 'Monitoring, even after closing' },
  { value: '1 tap', label: 'From CLOSED to visible to all' },
];

export function BusinessSection() {
  return (
    <Section id="businesses" className="bg-[#0A0F14]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="For Business Owners"
          title="MORE SALES. LESS WORRY."
          description="HERE OPEN turns your shop into a real-time, always-connected business — discoverable, protected and directly connected to your customers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Benefits grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {benefits.map((b) => (
              <motion.div
                key={b.label}
                variants={scaleIn}
                className="flex items-center gap-3 rounded-xl border border-[#1C2A38] bg-[#0F1923] px-4 py-4 transition-colors duration-200 hover:border-[#00D08430]"
              >
                <span
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ background: '#00D0841A', borderRadius: 9, padding: 8, width: 32, height: 32 }}
                >
                  {b.icon}
                </span>
                <span className="font-body font-medium text-[0.85rem] text-[#A5B4C4]">{b.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Owner dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D08420_0%,transparent_65%)] pointer-events-none" />
            <div className="relative rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-display font-bold text-[0.9rem] text-[#E8EDF2]">My Shops</p>
                  <p className="font-body text-[0.7rem] text-[#6B7C8E]">Owner Dashboard</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00D08440] bg-[#00D08414] px-3 py-1 font-body text-[10px] font-semibold text-[#00D084]">
                  <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Sharma General Store', status: 'OPEN', live: true },
                  { name: 'Green Leaf Pharmacy', status: 'OPEN', live: true },
                  { name: 'First Choice Salon', status: 'CLOSED', live: false },
                ].map((shop, i) => (
                  <motion.div
                    key={shop.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                    className="flex items-center justify-between rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#00D084] shadow-[0_0_8px_#00D084]" />
                      <span className="font-body font-medium text-[0.82rem] text-[#E8EDF2]">{shop.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-display font-bold text-[0.72rem] tracking-wider ${shop.live ? 'text-[#00D084]' : 'text-[#FF6B6B]'}`}>
                        {shop.status}
                      </span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3D4F5E]" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-[#1C2A38] bg-[#080C10] px-3 py-4 text-center">
                    <p className="font-display font-bold text-[1.15rem] text-[#00D084]">{m.value}</p>
                    <p className="mt-1 font-body text-[0.65rem] text-[#6B7C8E] leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}