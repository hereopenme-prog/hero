'use client';

import { motion } from 'framer-motion';
import { Bell, Cpu, Home, History, Settings } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { PhoneFrame } from '@/components/ui/AppPhone';
import { fadeIn, fadeUp, scaleIn, stagger } from '@/lib/animations';

const appPoints = [
  { label: 'Shop status', value: 'OPEN' },
  { label: 'Shop actions', value: 'Open shop · Close shop' },
  { label: 'App navigation', value: 'Home · Activity · Settings' },
];

export function MerchantAppSection() {
  return (
    <Section id="merchants" className="bg-[var(--bg)]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ── Copy ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border bg-[var(--a20)]"
              style={{ borderColor: 'var(--a40)' }}
            >
              <span
                className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span className="font-body font-semibold text-xs tracking-wide" style={{ color: 'var(--accent)' }}>
                MERCHANT APP
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-7 font-display font-bold text-[2rem] leading-[1.08] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.4rem] lg:text-[2.9rem]"
            >
              Your shop.
              <br />
              In your hands.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[500px] font-body text-lg leading-relaxed text-[var(--ink-muted)]"
            >
              Control your connected device from one mobile app.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 space-y-3">
              {appPoints.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center gap-3 rounded-xl border px-4 py-3"
                  style={{ backgroundColor: 'var(--panel-2)', borderColor: 'var(--glass-2)' }}
                >
                  <span className="font-body text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    {p.label}
                  </span>
                  <span className="font-body text-[14px] text-[var(--ink-2)]">{p.value}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── Phone ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: 'radial-gradient(circle, var(--a2-10) 0%, transparent 60%)' }}
            />
            <motion.div variants={fadeIn} className="relative">
              <PhoneFrame
                tabs={[
                  { id: 'home', icon: Home, label: 'Home', active: true },
                  { id: 'activity', icon: History, label: 'Activity' },
                  { id: 'settings', icon: Settings, label: 'Settings' },
                ]}
              >
                {/* App header */}
                <div className="flex items-center justify-between px-1 pt-1">
                  <span className="font-display text-[15px] font-bold text-[#E8EDF2]">Shop Status</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                    <Bell size={14} className="text-[#8A9BAE]" />
                  </span>
                </div>

                {/* Status card */}
                <div className="mt-5 flex flex-col items-center rounded-3xl border border-[#45F59A]/20 bg-[#0E1517] px-4 py-7 text-center">
                  <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#8A9BAE]">
                    Shop status
                  </span>
                  <span
                    className="mt-3 font-display text-[2.6rem] font-bold leading-none tracking-tight text-[#45F59A]"
                    style={{ textShadow: '0 0 32px rgba(69,245,154,0.35)' }}
                  >
                    OPEN
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#45F59A] shadow-[0_0_8px_#45F59A]" />
                    <span className="font-body text-[11px] font-medium text-[#8A9BAE]">
                      Visible to nearby customers.
                    </span>
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <span className="flex items-center justify-center gap-1.5 rounded-xl bg-[#45F59A] py-3 font-display text-[13px] font-bold text-[#03301C] hover:brightness-110">
                    Open shop
                  </span>
                  <span className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 py-3 font-display text-[13px] font-semibold text-[#E8EDF2]">
                    Close shop
                  </span>
                </div>

                {/* Device row */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-3.5 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                    <Cpu size={15} className="text-[#C7D2DC]" />
                  </span>
                  <span className="flex-1 font-body text-[12px] font-medium text-[#C7D2DC]">
                    Smart merchant device
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#45F59A]/30 bg-[#45F59A]/10 px-2 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-[#45F59A]" />
                    <span className="font-body text-[9px] font-semibold uppercase tracking-wider text-[#45F59A]">
                      Connected
                    </span>
                  </span>
                </div>
              </PhoneFrame>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}