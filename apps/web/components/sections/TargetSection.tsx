'use client';

import { motion } from 'framer-motion';
import {
  ShoppingBasket,
  UtensilsCrossed,
  CookingPot,
  Pill,
  Scissors,
  Armchair,
  Ruler,
  Wrench,
  ShoppingBag,
  Briefcase,
  Building2,
  Store,
  Hand,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const businesses = [
  { icon: <ShoppingBasket size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'KIRANA' },
  { icon: <UtensilsCrossed size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'RESTAURANTS' },
  { icon: <CookingPot size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'TIFFIN' },
  { icon: <Pill size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'MEDICAL STORES' },
  { icon: <Scissors size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'SALONS' },
  { icon: <Armchair size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'BARBERS' },
  { icon: <Ruler size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'TAILORING' },
  { icon: <Wrench size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'REPAIR SHOPS' },
  { icon: <Store size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'GENERAL SHOPS' },
  { icon: <ShoppingBag size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'RETAIL STORES' },
  { icon: <Briefcase size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'SERVICE BUSINESSES' },
  { icon: <Building2 size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'SMALL OFFICES' },
  { icon: <Hand size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'STREET BUSINESSES' },
];

export function TargetSection() {
  return (
    <Section id="target" className="bg-[var(--bg)]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="TARGET BUSINESSES"
          title="BUILT FOR EVERYDAY BUSINESSES."
          description="Any physical shop or office that runs on daily footfall can benefit from live status, smart alerts and direct customer connection."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto"
        >
          {businesses.map((b) => (
            <motion.div
              key={b.label}
              variants={scaleIn}
              className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--section)] px-4 py-4 transition-colors duration-200 hover:border-[var(--a40)]"
            >
              <div
                className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{ background: 'var(--a1A)', borderRadius: 8, padding: 8, width: 36, height: 36 }}
              >
                {b.icon}
              </div>
              <p className="font-display font-semibold text-[0.8rem] tracking-wide leading-snug text-[var(--ink)]">
                {b.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
