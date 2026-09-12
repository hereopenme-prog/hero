'use client';

import { motion } from 'framer-motion';
import { Check, Search, Home, Bookmark, User, Activity, MapPin } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { PhoneFrame } from '@/components/ui/AppPhone';
import { fadeIn, fadeUp, scaleIn, stagger } from '@/lib/animations';

export function PublicAppSection() {
  return (
    <Section id="customers" className="bg-[var(--bg-soft)]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ── Phone ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="relative order-1 flex justify-center lg:order-2 lg:justify-end"
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
                  { id: 'search', icon: Search, label: 'Search' },
                  { id: 'saved', icon: Bookmark, label: 'Saved' },
                  { id: 'profile', icon: User, label: 'Profile' },
                ]}
              >
                {/* App header */}
                <div className="flex items-center justify-between px-1 pt-1">
                  <span className="font-display text-[15px] font-bold text-[#E8EDF2]">Nearby</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                    <Search size={14} className="text-[#8A9BAE]" />
                  </span>
                </div>

                {/* Shop card */}
                <div className="mt-5 rounded-3xl border border-white/5 bg-[#0E1517] px-4 py-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#45F59A]"
                      style={{ boxShadow: '0 0 24px rgba(69,245,154,0.35)' }}
                    >
                      <Check size={20} strokeWidth={2.5} className="text-[#03301C]" />
                    </span>
                    <div>
                      <span className="block font-display text-[17px] font-bold text-[#E8EDF2]">
                        Shop is open
                      </span>
                      <span className="mt-0.5 flex items-center gap-1 font-body text-[11px] text-[#8A9BAE]">
                        <MapPin size={11} className="text-[#45F59A]" />
                        Live from the smart merchant device
                      </span>
                    </div>
                  </div>

                  {/* Confidence */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A9BAE]">
                        Confidence score
                      </span>
                      <span className="font-display text-[13px] font-bold text-[#E8EDF2]">92%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#1FA86A] to-[#45F59A]" />
                    </div>
                  </div>

                  {/* Motion */}
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                      <Activity size={14} className="text-[#45F59A]" />
                    </span>
                    <span className="font-body text-[12px] text-[#C7D2DC]">
                      Motion 2 minutes ago
                    </span>
                  </div>
                </div>
              </PhoneFrame>

              {/* Label */}
              <p className="mt-5 text-center font-body text-[12px] text-[var(--ink-dim)]">
                Illustrative app screens
              </p>
            </motion.div>
          </motion.div>

          {/* ── Copy ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="order-2 lg:order-1"
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
                PUBLIC APP
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-7 font-display font-bold text-[2rem] leading-[1.08] tracking-[-0.025em] text-[var(--ink)] sm:text-[2.4rem] lg:text-[2.9rem]"
            >
              Shop is open.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[500px] font-body text-lg leading-relaxed text-[var(--ink-muted)]"
            >
              Instant open/closed status to the public — with a confidence score and recent motion,
              so the status is believable at a glance.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {['Shop is open', 'Confidence score', 'Motion 2 minutes ago'].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-4 py-2 font-body text-[13px] font-medium"
                  style={{ backgroundColor: 'var(--panel-2)', borderColor: 'var(--glass-2)', color: 'var(--ink-2)' }}
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}