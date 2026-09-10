'use client';

import { motion } from 'framer-motion';
import { Landmark, Cpu, Smartphone, Store, Users, type LucideIcon } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animations';

const stakeholders: { icon: LucideIcon; label: string; caption: string; tint: string }[] = [
  { icon: Landmark, label: 'Bank', caption: 'Owns the merchant relationship.', tint: 'var(--deck-p1)' },
  { icon: Cpu, label: 'Here Open Technology', caption: 'Device + platform ecosystem.', tint: 'var(--deck-p2)' },
  { icon: Smartphone, label: 'Smart Merchant Device', caption: 'A branded, connected device.', tint: 'var(--deck-p3)' },
  { icon: Store, label: 'Merchant', caption: 'Payment, visibility and communication.', tint: 'var(--deck-p1)' },
  { icon: Users, label: 'Customer', caption: 'A better local business experience.', tint: 'var(--deck-p2)' },
];

const capabilities = [
  { title: 'Bank-branded merchant experience', caption: "The device can be designed around the bank's brand." },
  { title: 'Stronger merchant engagement', caption: 'A device that does more alongside the merchant.' },
  { title: 'More merchant touchpoints', caption: 'A physical presence in the merchant ecosystem.' },
  { title: 'Beyond payment confirmation', caption: 'Designed to go further than a soundbox.' },
  { title: 'Connected merchant services', caption: 'Visibility, communication and monitoring opportunities.' },
  { title: 'Business communication', caption: 'Opportunities for merchants to reach customers.' },
  { title: 'Device ecosystem management', caption: 'A platform view of the device network.' },
  { title: 'Future-ready infrastructure', caption: 'Designed to add new services and capabilities over time.' },
];

export function BankOpportunitySection() {
  return (
    <section
      id="banks"
      aria-label="The next opportunity: the merchant device"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--deck-bg)] py-[60px] lg:py-[104px]"
    >
      {/* Almost-invisible ambient tints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -top-44 h-[440px] w-[440px] rounded-full bg-[var(--deck-glow-green)] opacity-[0.05] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-[480px] w-[480px] rounded-full bg-[var(--deck-glow-blue)] opacity-[0.05] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[340px] w-[340px] rounded-full bg-[var(--deck-glow-purple)] opacity-[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">
        {/* ── 1. MAIN INTRODUCTION ─────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 font-body text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ background: 'var(--deck-p1)', borderColor: 'var(--deck-hover)', color: 'var(--deck-accent)' }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--deck-accent)]" />
              For Banks
            </span>
          </div>

          <h2 className="mx-auto mt-8 max-w-[900px] text-center font-display font-bold uppercase leading-[1.12] tracking-[-0.02em] text-[var(--deck-ink)] text-[1.9rem] sm:leading-[1.08] sm:text-[2.35rem] lg:text-[2.9rem] xl:text-[3.4rem]">
            The Next Opportunity:
            <br />
            <span style={{ color: 'var(--deck-accent)' }}>The Merchant Device.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-center font-body text-[15px] leading-[1.7] text-[var(--deck-muted)] sm:text-base lg:text-[17px]">
            The payment soundbox proved that a small device can become a powerful merchant touchpoint.
            Here Open takes the opportunity further — into a connected business-device ecosystem a bank
            could potentially brand and deploy.
          </p>

          <p className="mx-auto mt-6 max-w-[780px] text-center font-body text-[15px] leading-[1.7] text-[var(--deck-muted)] sm:text-base lg:text-[17px]">
            Banks and financial institutions already have deep relationships with merchants. The merchant
            device can become more than a payment confirmation device. Here Open can provide the
            technology for a broader connected merchant device and platform ecosystem.
          </p>
        </motion.div>

        {/* ── 2. ECOSYSTEM / STAKEHOLDER FLOW ─────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto mt-16 max-w-[1120px] lg:mt-24"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[9%] right-[9%] top-[28px] hidden h-px bg-gradient-to-r from-[var(--deck-connector-soft)] via-[var(--deck-connector)] to-[var(--deck-connector-soft)] lg:block"
            />
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
              {stakeholders.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div
                    aria-hidden="true"
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border transition-transform duration-200 group-hover:scale-[1.04]"
                    style={{ backgroundColor: s.tint, borderColor: 'var(--deck-border)' }}
                  >
                    <s.icon size={22} strokeWidth={1.5} className="text-[var(--deck-accent)]" />
                  </div>
                  <h3 className="mt-4 font-display text-[12px] font-bold leading-tight tracking-[0.08em] uppercase text-[var(--deck-ink)] lg:text-[13px]">
                    {s.label}
                  </h3>
                  <p className="mt-2 max-w-[160px] font-body text-[12px] leading-relaxed text-[var(--deck-muted)]">
                    {s.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── 3. BENEFIT / CAPABILITY GRID ────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mx-auto mt-16 max-w-[1180px] lg:mt-24"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {capabilities.map((c) => (
              <motion.article
                key={c.title}
                variants={fadeUp}
                className="group flex items-start gap-4 rounded-[20px] border bg-[var(--deck-card)] p-7 shadow-[0_1px_2px_rgba(20,40,30,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--deck-hover)] hover:shadow-[0_18px_36px_-18px_rgba(16,32,24,0.28)] lg:p-8"
                style={{ borderColor: 'var(--deck-border)' }}
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--deck-accent)]"
                />
                <div className="min-w-0">
                  <h3 className="font-display text-[12px] font-bold leading-snug tracking-[0.08em] uppercase text-[var(--deck-ink)]">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 font-body text-[14px] leading-relaxed text-[var(--deck-muted)]">
                    {c.caption}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* ── 4. FOOTNOTE ─────────────────────────────────── */}
        <p className="mt-12 text-center font-body text-[11px] leading-relaxed text-[var(--deck-faint)]">
          These capabilities are potential and subject to integration and configuration.
        </p>
      </div>
    </section>
  );
}