'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  Layers,
  Scale,
  UserPlus,
  HeartHandshake,
  PiggyBank,
  Network,
  Link2,
  Database,
  Timer,
  Megaphone,
  ShieldAlert,
  Clock,
  MapPin,
  Siren,
  Landmark,
  Store,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/app/components/Container';
import { fadeUp, stagger } from '@/lib/animations';

/* ── Scoped light palette (Problem section only) ─────────────────────── */
const C = {
  card: '#FFFFFF',
  hair: '#E8EBF0',
  hairStrong: '#D4DAE2',
  ink: '#191D26',
  ink2: '#3C4450',
  muted: '#6E7787',
  faint: '#97A1AF',
  accent: '#0E9F6E',
  accentSoft: 'rgba(14,159,110,0.08)',
  accentBorder: 'rgba(14,159,110,0.22)',
  shadow: '0 1px 2px rgba(15,23,42,0.04), 0 10px 30px rgba(15,23,42,0.06)',
  shadowHover: '0 2px 4px rgba(15,23,42,0.05), 0 16px 40px rgba(15,23,42,0.10)',
};

const softCardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const iconMove: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
};

/* ── Shared pieces ────────────────────────────────────────────────────── */

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span
    className="inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]"
    style={{ color: C.accent }}
  >
    <span className="inline-block h-px w-8" style={{ backgroundColor: 'currentColor', opacity: 0.35 }} />
    {children}
  </span>
);

const DimensionHeader = ({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    variants={stagger}
  >
    <motion.div variants={fadeUp}>
      <Eyebrow>{eyebrow}</Eyebrow>
    </motion.div>
    <motion.h3
      variants={fadeUp}
      className="mt-6 font-display font-bold leading-[1.1] tracking-[-0.02em] text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem]"
      style={{ color: C.ink }}
    >
      {title}
    </motion.h3>
    <motion.p
      variants={fadeUp}
      className="mt-6 max-w-2xl font-body text-[15.5px] leading-relaxed lg:text-base"
      style={{ color: C.muted }}
    >
      {body}
    </motion.p>
  </motion.div>
);

const NodeCard = ({
  num,
  name,
  Icon,
  index,
}: {
  num: string;
  name: string;
  Icon: LucideIcon;
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    className="group flex flex-col items-center rounded-2xl border bg-white px-6 py-9 text-center transition-all duration-300 hover:-translate-y-1"
    style={{ borderColor: C.hair, boxShadow: C.shadow, color: C.ink }}
  >
    <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: C.faint }}>
      {num}
    </span>
    <div
      className="mt-5 flex h-16 w-16 items-center justify-center rounded-full border"
      style={{ borderColor: C.accentBorder, backgroundColor: C.accentSoft }}
    >
      <Icon size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-105" style={{ color: C.accent }} />
    </div>
    <h4 className="mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em]" style={{ color: C.ink }}>
      {name}
    </h4>
  </motion.article>
);

/* ── Data ─────────────────────────────────────────────────────────────── */

const sides = [
  { num: '01', name: 'BANKS', Icon: Landmark },
  { num: '02', name: 'MERCHANTS', Icon: Store },
  { num: '03', name: 'CUSTOMERS', Icon: Users },
];

const bankChallenges: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Layers,
    title: 'Limited differentiation',
    desc: 'Similar soundboxes give merchants few reasons to choose one bank over another.',
  },
  {
    icon: Scale,
    title: 'Underused bank strengths',
    desc: 'Banking capabilities do not always translate into daily merchant value.',
  },
  {
    icon: UserPlus,
    title: 'Missed merchant acquisition',
    desc: 'A weak device proposition can limit new merchant relationships.',
  },
  {
    icon: HeartHandshake,
    title: 'Weak merchant retention',
    desc: 'Limited everyday value makes the relationship easier to replace.',
  },
  {
    icon: PiggyBank,
    title: 'CASA relationship risk',
    desc: 'Losing the merchant touchpoint can weaken deposit relationships.',
  },
  {
    icon: Network,
    title: 'Loan distribution',
    desc: 'Intermediated loan distribution can increase acquisition costs.',
  },
  {
    icon: Link2,
    title: 'Weaker direct relationships',
    desc: "Third-party channels can distance banks from the merchant's daily business.",
  },
  {
    icon: Database,
    title: 'Limited lending context',
    desc: 'Fragmented business information can limit the context for credit assessment.',
  },
];

const merchantConcerns: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Timer,
    title: 'TRUST LOSS & MISSED FOOTFALL',
    desc: 'Uncertain opening times can disappoint customers and erode trust. Shops lose potential visits when people cannot tell whether they are open.',
  },
  {
    icon: Megaphone,
    title: 'LOW VISIBILITY & MISSED UPDATES',
    desc: 'Without a current digital presence, nearby businesses remain hard to find. Time-sensitive offers and announcements may not reach the right customers.',
  },
  {
    icon: ShieldAlert,
    title: 'THEFT AND FIRE WORRIES',
    desc: 'Intrusion, fire and smoke hazards can go unnoticed without suitable monitoring, detection, alerts and a way to respond.',
  },
];

const customerConcerns: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Clock,
    title: 'NO REAL-TIME CERTAINTY',
    desc: 'Opening hours do not confirm whether a shop is open right now. A trip to a closed shop can waste time, fuel and effort.',
  },
  {
    icon: MapPin,
    title: 'LIMITED DISCOVERY & MISSED OFFERS',
    desc: 'Finding a nearby business that is open and ready to serve can be difficult. Useful offers and announcements may never reach interested customers.',
  },
  {
    icon: Siren,
    title: 'UNCERTAINTY IN URGENT MOMENTS',
    desc: 'Urgent needs are harder to meet when open nearby shops are difficult to identify.',
  },
];

/* ── Section ──────────────────────────────────────────────────────────── */

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-[#F7F8FA] !py-28 lg:!py-44">
      <Container>
        <div className="mx-auto max-w-[1080px]">
          {/* ── Section introduction ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <Eyebrow>THE CHALLENGE IN LOCAL COMMERCE</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-8 font-display font-bold leading-[1.05] tracking-[-0.03em] text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem]"
              style={{ color: C.ink }}
            >
              Three sides.
              <span className="block text-[2.1rem] sm:text-[2.7rem] lg:text-[3.3rem]" style={{ color: C.accent }}>
                One costly disconnect.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
            >
              {[
                { audience: 'Banks', rest: 'lose everyday relevance.' },
                { audience: 'Merchants', rest: 'lose visibility.' },
                { audience: 'Customers', rest: 'lose certainty.' },
              ].map((line) => (
                <div key={line.audience} className="flex items-start justify-center gap-3">
                  <span
                    className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: C.accent }}
                  />
                  <p className="font-display text-lg font-medium leading-snug lg:text-xl" style={{ color: C.ink2 }}>
                    <span className="font-bold" style={{ color: C.accent }}>
                      {line.audience}
                    </span>{' '}
                    {line.rest}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Three sides / DISCONNECTED ── */}
          <div className="mt-24 lg:mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
              {sides.map((side, i) => (
                <div key={side.num} className="contents">
                  <NodeCard num={side.num} name={side.name} Icon={side.Icon} index={i} />
                  {i < sides.length - 1 && (
                    <>
                      {/* Desktop vertical divider */}
                      <div
                        className="hidden lg:flex flex-col items-center self-stretch px-3"
                        aria-hidden="true"
                      >
                        <div className="w-px flex-1 border-l border-dashed" style={{ borderColor: C.hairStrong }} />
                        <span
                          className="my-3 font-mono text-[10px] uppercase tracking-[0.24em]"
                          style={{ color: C.faint }}
                        >
                          DISCONNECTED
                        </span>
                        <div className="w-px flex-1 border-l border-dashed" style={{ borderColor: C.hairStrong }} />
                      </div>
                      {/* Mobile horizontal divider */}
                      <div className="lg:hidden flex items-center gap-3 py-1" aria-hidden="true">
                        <div className="h-px flex-1 border-t border-dashed" style={{ borderColor: C.hairStrong }} />
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.24em]"
                          style={{ color: C.faint }}
                        >
                          DISCONNECTED
                        </span>
                        <div className="h-px flex-1 border-t border-dashed" style={{ borderColor: C.hairStrong }} />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── DIMENSION 01 / BANKS ── */}
          <motion.div variants={stagger} className="mt-24 lg:mt-36">
            <DimensionHeader
              eyebrow="DIMENSION 01 / BANKS"
              title="Information blindness."
              body="Banks have trust, reach and financial strength. The challenge is turning that advantage into a direct, everyday merchant relationship."
            />

            <div className="mb-6 flex items-center gap-4">
              <span
                className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: C.muted }}
              >
                8 CONNECTED CHALLENGES
              </span>
              <span className="h-px flex-1" style={{ backgroundColor: C.hair }} />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5"
            >
              {bankChallenges.map((b, i) => (
                <motion.article
                  key={b.title}
                  variants={softCardVariants}
                  className="group rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: C.hair, boxShadow: C.shadow }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `${C.shadowHover}, 0 0 0 1px ${C.accentBorder}`)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = C.shadow)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="mt-0.5 font-mono text-[11px] tracking-[0.18em]" style={{ color: C.faint }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: C.accentSoft }}
                    >
                      <b.icon size={18} strokeWidth={1.6} style={{ color: C.accent }} />
                    </div>
                  </div>
                  <h4 className="mt-5 font-display text-[15.5px] font-semibold leading-snug tracking-tight" style={{ color: C.ink }}>
                    {b.title}
                  </h4>
                  <p className="mt-2.5 font-body text-[13.5px] leading-relaxed" style={{ color: C.muted }}>
                    {b.desc}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          {/* ── DIMENSION 02 / MERCHANTS ── */}
          <div className="mt-24 lg:mt-36">
            <DimensionHeader
              eyebrow="DIMENSION 02 / MERCHANTS"
              title="Relationship breakdown."
              body="Shops need visibility, customer connection and confidence after hours."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
            >
              {merchantConcerns.map((item) => (
                <motion.article
                  key={item.title}
                  variants={softCardVariants}
                  className="group flex flex-col rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 lg:p-8"
                  style={{ borderColor: C.hair, boxShadow: C.shadow }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `${C.shadowHover}, 0 0 0 1px ${C.accentBorder}`)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = C.shadow)}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={iconMove}
                    className="flex items-center justify-center rounded-full border"
                    style={{ width: 52, height: 52, borderColor: C.accentBorder, backgroundColor: C.accentSoft }}
                  >
                    <item.icon size={22} strokeWidth={1.5} style={{ color: C.accent }} />
                  </motion.div>
                  <h4
                    className="mt-6 font-display text-[12.5px] font-bold uppercase leading-snug tracking-[0.13em]"
                    style={{ color: C.ink }}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-3.5 font-body text-[14px] leading-relaxed" style={{ color: C.muted }}>
                    {item.desc}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* ── DIMENSION 03 / CUSTOMERS ── */}
          <div className="mt-24 lg:mt-36">
            <DimensionHeader
              eyebrow="DIMENSION 03 / CUSTOMERS"
              title="Trust erosion."
              body="People need certainty, convenient discovery and useful local information."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
            >
              {customerConcerns.map((item) => (
                <motion.article
                  key={item.title}
                  variants={softCardVariants}
                  className="group flex flex-col rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 lg:p-8"
                  style={{ borderColor: C.hair, boxShadow: C.shadow }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `${C.shadowHover}, 0 0 0 1px ${C.accentBorder}`)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = C.shadow)}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={iconMove}
                    className="flex items-center justify-center rounded-full border"
                    style={{ width: 52, height: 52, borderColor: C.accentBorder, backgroundColor: C.accentSoft }}
                  >
                    <item.icon size={22} strokeWidth={1.5} style={{ color: C.accent }} />
                  </motion.div>
                  <h4
                    className="mt-6 font-display text-[12.5px] font-bold uppercase leading-snug tracking-[0.13em]"
                    style={{ color: C.ink }}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-3.5 font-body text-[14px] leading-relaxed" style={{ color: C.muted }}>
                    {item.desc}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}