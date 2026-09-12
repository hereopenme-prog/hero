'use client';

import { motion } from 'framer-motion';
import { Landmark, Cpu, Smartphone, Store, Users, type LucideIcon } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/animations';

const stakeholders: { icon: LucideIcon; label: string; caption: string }[] = [
  { icon: Landmark, label: 'BANK', caption: 'Owns the merchant relationship.' },
  { icon: Cpu, label: 'HERE OPEN TECHNOLOGY', caption: 'Device + platform ecosystem.' },
  { icon: Smartphone, label: 'SMART MERCHANT DEVICE', caption: 'A branded, connected device.' },
  { icon: Store, label: 'MERCHANT', caption: 'Payment, visibility and communication.' },
  { icon: Users, label: 'CUSTOMER', caption: 'A better local business experience.' },
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
      className="relative scroll-mt-24 bg-[var(--deck-bg)] py-[72px] lg:py-[120px]"
    >
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-6">
        {/* ── 1. HEADING + DESCRIPTIONS ───────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <h2 className="mx-auto mt-2 max-w-[920px] text-center font-display font-bold uppercase leading-[1.14] tracking-[-0.02em] text-[var(--deck-ink)] text-[1.75rem] sm:text-[2.2rem] sm:leading-[1.08] lg:text-[2.85rem] xl:text-[3.3rem]">
            The Next Opportunity:
            <br />
            <span style={{ color: 'var(--deck-teal)' }}>The Merchant Device.</span>
          </h2>

          <p className="mx-auto mt-9 max-w-[740px] text-center font-body text-[15px] leading-[1.75] text-[var(--deck-muted)] sm:text-[16px] lg:text-[17px]">
            The payment soundbox proved that a small device can become a powerful merchant touchpoint.
            Here Open takes the opportunity further — into a connected business-device ecosystem a bank
            could potentially brand and deploy.
          </p>

          {/* Large intentional whitespace between the two paragraphs */}
          <p className="mx-auto mt-16 max-w-[760px] text-center font-body text-[15px] leading-[1.75] text-[var(--deck-muted)] sm:text-[16px] lg:mt-20 lg:text-[17px]">
            Banks and financial institutions already have deep relationships with merchants. The merchant
            device can become more than a payment confirmation device. Here Open can provide the
            technology for a broader connected merchant device and platform ecosystem.
          </p>
        </motion.div>

        {/* ── 2. FIVE-PART ECOSYSTEM ROW ──────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto mt-16 max-w-[1120px] lg:mt-24"
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
            {stakeholders.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border transition-transform duration-200 group-hover:scale-[1.04] sm:h-14 sm:w-14"
                  style={{ backgroundColor: 'var(--deck-card)', borderColor: 'var(--deck-border)' }}
                >
                  <s.icon size={21} strokeWidth={1.5} className="text-[var(--deck-ink)]" />
                </div>
                <h3 className="mt-4 max-w-[170px] font-display text-[11px] font-bold leading-[1.4] tracking-[0.08em] uppercase text-[var(--deck-ink)] sm:text-[12px] lg:text-[12.5px]">
                  {s.label}
                </h3>
                <p className="mt-2 max-w-[170px] font-body text-[12px] leading-relaxed text-[var(--deck-muted)]">
                  {s.caption}
                </p>
              </motion.div>
            ))}
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
                className="group flex items-start gap-4 rounded-[20px] border bg-[var(--deck-card)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--deck-hover)] lg:p-8"
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
        <p className="mt-10 text-center font-body text-[11px] leading-relaxed text-[var(--deck-faint)]">
          These capabilities are potential and subject to integration and configuration.
        </p>
      </div>
    </section>
  );
}