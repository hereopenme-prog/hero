'use client';

import { motion } from 'framer-motion';
import {
  ShoppingBasket,
  UtensilsCrossed,
  Pill,
  Scissors,
  Ruler,
  Wrench,
  ShoppingBag,
  Building2,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const businesses = [
  { icon: <ShoppingBasket size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Kirana & Grocery' },
  { icon: <UtensilsCrossed size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Restaurants & Cafés' },
  { icon: <Pill size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Medical Stores' },
  { icon: <Scissors size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Salons & Parlours' },
  { icon: <Ruler size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Tailors & Laundry' },
  { icon: <Wrench size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Repair Shops' },
  { icon: <ShoppingBag size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Retail Shops' },
  { icon: <Building2 size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Small Offices' },
];

export function TargetSection() {
  return (
    <Section id="target" className="bg-[#0A0F14]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Who It's For"
          title="Built For India's Local Businesses"
          description="Any physical shop that runs on daily footfall can benefit from live status, smart alerts and direct customer connection."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {businesses.map((b) => (
            <motion.div
              key={b.label}
              variants={scaleIn}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[#1C2A38] bg-[#0F1923] px-4 py-8 text-center transition-colors duration-200 hover:border-[#00D08440]"
            >
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{ background: '#00D0841A', borderRadius: 12, padding: 12, width: 48, height: 48 }}
              >
                {b.icon}
              </div>
              <p className="font-display font-semibold text-[0.9rem] leading-snug text-[#E8EDF2]">{b.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}