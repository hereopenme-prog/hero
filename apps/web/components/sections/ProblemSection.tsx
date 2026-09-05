'use client';

import { motion } from 'framer-motion';
import { MapPin, Search, Tag, Store, Users, Shield, ChevronDown } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const customerProblems = [
  {
    icon: <MapPin size={18} className="text-[#00D084]" strokeWidth={1.6} />,
    num: '01',
    title: 'Wasted Trips',
    desc: 'Customers travel to shops only to discover that they are closed.',
    result: 'Wasted time, travel and effort.',
  },
  {
    icon: <Search size={18} className="text-[#00D084]" strokeWidth={1.6} />,
    num: '02',
    title: 'No Real-Time Information',
    desc: "Customers don't have a reliable way to know whether a shop is currently open.",
    result: 'Uncertainty before visiting.',
  },
  {
    icon: <Tag size={18} className="text-[#00D084]" strokeWidth={1.6} />,
    num: '03',
    title: 'Missed Offers & Updates',
    desc: 'Customers may miss offers, new arrivals and important shop updates.',
    result: 'Missed opportunities and a poorer shopping experience.',
  },
];

const businessProblems = [
  {
    icon: <Users size={18} className="text-[#00D084]" strokeWidth={1.6} />,
    num: '01',
    title: 'Lost Customers',
    desc: "Potential customers may avoid or skip a shop because they don't know whether it is open.",
    result: 'Missed visits and lost sales opportunities.',
  },
  {
    icon: <Store size={18} className="text-[#00D084]" strokeWidth={1.6} />,
    num: '02',
    title: 'No Direct Customer Visibility',
    desc: 'Business owners have limited ways to communicate their current status, offers and updates to nearby customers.',
    result: 'Customers may not know what the business has to offer.',
  },
  {
    icon: <Shield size={18} className="text-[#00D084]" strokeWidth={1.6} />,
    num: '03',
    title: 'Security Concerns',
    desc: 'When the shop is closed, owners may worry about fire, smoke, break-ins and other incidents.',
    result: 'Less peace of mind when away from the shop.',
  },
];

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading eyebrow="THE PROBLEM" title="THE PROBLEM IS SIMPLE." />

        {/* Subheading — the two sides of the problem */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center -mt-10 mb-6"
        >
          <p className="font-display font-semibold text-[1.05rem] lg:text-[1.25rem] text-[#E8EDF2] tracking-tight">
            CUSTOMERS DON&apos;T KNOW IF YOU&apos;RE OPEN.
          </p>
          <p className="font-display font-semibold text-[1.05rem] lg:text-[1.25rem] text-[#00D084] tracking-tight">
            BUSINESS OWNERS DON&apos;T KNOW WHO THEY&apos;RE LOSING.
          </p>
        </motion.div>

        <p className="mx-auto max-w-[640px] text-center font-body text-base lg:text-[1.0625rem] text-[#8A9BAE] leading-relaxed mb-16">
          Today, customers can waste time travelling to a shop only to find it closed, while business owners can lose
          potential customers simply because their real-time shop status is unknown.
        </p>

        {/* Two problem groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {/* Customers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 lg:p-8 h-full"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D08450] to-transparent" />
            <div className="flex items-center gap-3 mb-2">
              <div
                className="flex items-center justify-center"
                style={{ background: '#00D0841A', borderRadius: 10, padding: 8, width: 34, height: 34 }}
              >
                <Users size={16} className="text-[#00D084]" strokeWidth={1.6} />
              </div>
              <h3 className="font-display font-bold text-[1.05rem] tracking-tight text-[#E8EDF2]">FOR CUSTOMERS</h3>
            </div>
            <p className="mb-6 font-body text-[0.85rem] text-[#6B7C8E] leading-relaxed">
              Before visiting a shop, customers often don&apos;t know what is happening there right now.
            </p>

            <div className="space-y-4">
              {customerProblems.map((p) => (
                <motion.article
                  key={p.num}
                  variants={scaleIn}
                  className="rounded-xl border border-[#1C2A38] bg-[#080C10] p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-display font-bold text-[0.72rem] tracking-[0.2em] text-[#00D084]">{p.num}</span>
                    <div
                      className="flex items-center justify-center"
                      style={{ background: '#00D08412', borderRadius: 9, padding: 7, width: 30, height: 30 }}
                    >
                      {p.icon}
                    </div>
                  </div>
                  <h4 className="font-display font-semibold text-[0.98rem] text-[#E8EDF2] mb-1.5">{p.title}</h4>
                  <p className="font-body text-[0.85rem] text-[#8A9BAE] leading-relaxed">{p.desc}</p>
                  <p className="mt-3 flex items-center gap-2 font-body text-[0.78rem] text-[#A5B4C4]">
                    <ArrowRightMini />
                    {p.result}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Business owners */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 lg:p-8 h-full"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D08450] to-transparent" />
            <div className="flex items-center gap-3 mb-2">
              <div
                className="flex items-center justify-center"
                style={{ background: '#00D0841A', borderRadius: 10, padding: 8, width: 34, height: 34 }}
              >
                <Store size={16} className="text-[#00D084]" strokeWidth={1.6} />
              </div>
              <h3 className="font-display font-bold text-[1.05rem] tracking-tight text-[#E8EDF2]">FOR BUSINESS OWNERS</h3>
            </div>
            <p className="mb-6 font-body text-[0.85rem] text-[#6B7C8E] leading-relaxed">
              When customers don&apos;t know your shop is open, your business can lose opportunities.
            </p>

            <div className="space-y-4">
              {businessProblems.map((p) => (
                <motion.article
                  key={p.num}
                  variants={scaleIn}
                  className="rounded-xl border border-[#1C2A38] bg-[#080C10] p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-display font-bold text-[0.72rem] tracking-[0.2em] text-[#00D084]">{p.num}</span>
                    <div
                      className="flex items-center justify-center"
                      style={{ background: '#00D08412', borderRadius: 9, padding: 7, width: 30, height: 30 }}
                    >
                      {p.icon}
                    </div>
                  </div>
                  <h4 className="font-display font-semibold text-[0.98rem] text-[#E8EDF2] mb-1.5">{p.title}</h4>
                  <p className="font-body text-[0.85rem] text-[#8A9BAE] leading-relaxed">{p.desc}</p>
                  <p className="mt-3 flex items-center gap-2 font-body text-[0.78rem] text-[#A5B4C4]">
                    <ArrowRightMini />
                    {p.result}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Transition to solution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-display font-semibold text-[0.95rem] lg:text-[1.05rem] tracking-wide text-[#E8EDF2]">
            THE PROBLEM IS CLEAR.
            <span className="text-[#00D084]"> NOW, THERE&apos;S A SMARTER WAY.</span>
          </p>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-3 inline-flex text-[#00D084]"
            aria-hidden="true"
          >
            <ChevronDown size={20} />
          </motion.span>
        </motion.div>
      </Container>
    </Section>
  );
}

function ArrowRightMini() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0 text-[#00D084]" aria-hidden="true">
      <path d="M2.5 6.5h8m0 0L7 3m3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}