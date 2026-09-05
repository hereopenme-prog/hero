'use client';

import { motion } from 'framer-motion';
import { MapPinOff, UserX, ShieldAlert, X } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const problems = [
  {
    icon: <MapPinOff size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Wasted Trips',
    desc: 'Customers reach a shop only to discover it is closed. Every wasted trip is lost trust and lost time for your customers.',
  },
  {
    icon: <UserX size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Missed Customers',
    desc: 'Businesses lose potential customers because no one can see real-time availability. Footfall leaks out silently, every single day.',
  },
  {
    icon: <ShieldAlert size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Security Concerns',
    desc: 'Owners worry about their shop when it is closed. Fire, smoke and break-in events can go undetected for hours.',
  },
];

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="The Problem"
          title="THE PROBLEM IS SIMPLE."
          titleAccent="YOUR CUSTOMERS DON'T KNOW IF YOU'RE OPEN."
          description="Customers travel to shops without knowing their current status. Owners can't see who's coming. And after hours, every shop is a blind spot."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={scaleIn}
              className="group rounded-2xl bg-[#0F1923] border border-[#1C2A38] p-8 h-full transition-colors duration-200 hover:border-[#00D08440]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00D0841A', borderRadius: 12, padding: 10, width: 46, height: 46 }}
                >
                  {p.icon}
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF444410] border border-[#FF444430] px-2.5 py-1">
                  <X size={10} className="text-[#FF6B6B]" strokeWidth={2.5} />
                  <span className="font-body text-[10px] font-semibold text-[#FF6B6B] tracking-wider">PAIN POINT</span>
                </span>
              </div>
              <h3 className="font-display font-semibold text-[1.05rem] text-[#E8EDF2] mb-2.5">{p.title}</h3>
              <p className="font-body text-[0.9rem] text-[#8A9BAE] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}