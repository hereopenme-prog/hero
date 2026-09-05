'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ShopStatusSection() {
  return (
    <Section id="shop-status" className="bg-[#0A0F14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="REAL-TIME STATUS"
          title="OPEN YOUR SHOP."
          titleAccent="MAKE IT VISIBLE."
          description="One tap from the business owner. Instantly visible to every nearby customer."
        />

        {/* Three-part flow */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-center">
            {/* Part 1: Business owner */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 md:rounded-r-none md:border-r-0"
            >
              <p className="font-display font-bold text-[0.65rem] tracking-[0.2em] text-[#6B7C8E] mb-4">
                BUSINESS OWNER
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00D08414] border border-[#00D08420]">
                  <Smartphone size={18} className="text-[#00D084]" />
                </div>
                <div>
                  <p className="font-display font-semibold text-[0.82rem] text-[#E8EDF2]">Here Open Device</p>
                  <p className="font-body text-[0.68rem] text-[#6B7C8E]">ID: HO-2026-0042</p>
                </div>
              </div>
              <div className="rounded-xl border border-[#00D08430] bg-[#00D08412] p-4">
                <p className="font-body text-[0.6rem] uppercase tracking-widest text-[#6B7C8E] mb-1">
                  SHOP STATUS
                </p>
                <p className="font-display font-extrabold text-2xl text-[#00D084] tracking-tight">OPEN</p>
              </div>
            </motion.div>

            {/* Part 2: Connection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center py-4 md:py-0 md:px-6"
            >
              <div className="hidden md:flex flex-col items-center">
                <span className="font-display font-bold text-[0.7rem] tracking-[0.2em] text-[#00D084] mb-3">
                  HERE OPEN
                </span>
                <div className="flex items-center gap-2">
                  <span className="block w-10 h-px bg-gradient-to-r from-[#00D08460] to-[#00D084]" />
                  <ArrowRight size={16} className="text-[#00D084]" />
                  <span className="block w-10 h-px bg-gradient-to-r from-[#00D084] to-[#00D08460]" />
                </div>
                <span className="mt-3 font-body text-[0.68rem] text-[#A5B4C4]">Live Status</span>
              </div>
              <div className="md:hidden flex items-center gap-3">
                <span className="block w-12 h-px bg-gradient-to-r from-[#00D08460] to-[#00D084]" />
                <ArrowRight size={16} className="text-[#00D084]" />
                <span className="block w-12 h-px bg-gradient-to-r from-[#00D084] to-[#00D08460]" />
              </div>
            </motion.div>

            {/* Part 3: Customer view */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 md:rounded-l-none md:border-l-0"
            >
              <p className="font-display font-bold text-[0.65rem] tracking-[0.2em] text-[#6B7C8E] mb-4">
                CUSTOMER VIEW
              </p>
              <p className="font-display font-bold text-[1.05rem] text-[#E8EDF2] mb-2">
                SHARMA GENERAL STORE
              </p>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00D084] px-3 py-1 font-display font-bold text-[0.65rem] tracking-widest text-[#080C10] shadow-[0_0_16px_#00D08450]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#080C10]" />
                  OPEN
                </span>
                <span className="font-body text-[0.75rem] text-[#00D084]">Open Now</span>
              </div>
              <p className="font-body text-[0.72rem] text-[#6B7C8E]">
                Customers see real-time shop status instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
