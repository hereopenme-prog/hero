'use client';

import { motion } from 'framer-motion';
import {
  ToggleRight,
  Eye,
  Flame,
  Wifi,
  ShieldAlert,
  Plug,
  WifiOff,
  Signal,
  Megaphone,
  BellRing,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const featured = [
  {
    icon: <ToggleRight size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'One-Tap Control',
    desc: 'Open the app, tap OPEN or CLOSED. The status syncs to every customer instantly.',
  },
  {
    icon: <Eye size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Real-Time OPEN/CLOSED Visibility',
    desc: 'Customers see live status the second it changes — no calls, no guesswork.',
  },
  {
    icon: <Flame size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: '24/7 Fire Protection',
    desc: 'Temperature and smoke sensing with immediate notification, even when closed.',
  },
];

const grid = [
  { icon: <Wifi size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Always Connected' },
  { icon: <ShieldAlert size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Theft / Break-In Alerts' },
  { icon: <Plug size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Plug-and-Play' },
  { icon: <WifiOff size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'No Wi-Fi Required' },
  { icon: <Signal size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'GSM Connectivity' },
  { icon: <Megaphone size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Offers & Announcements' },
  { icon: <BellRing size={18} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Customer Updates' },
];

export function FeaturesSection() {
  return (
    <Section id="features" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.05)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Features"
          title="Everything A Smart Shop Needs"
          description="One device. One app. All the visibility, security and customer connection a physical business deserves."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {featured.map((f) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              className="group relative rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-8 h-full transition-colors duration-200 hover:border-[#00D08440]"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D08450] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="flex items-center justify-center mb-6"
                style={{ background: '#00D0841A', borderRadius: 12, padding: 11, width: 48, height: 48 }}
              >
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-[1.05rem] text-[#E8EDF2] mb-2">{f.title}</h3>
              <p className="font-body text-[0.9rem] text-[#8A9BAE] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 max-w-6xl mx-auto"
        >
          {grid.map((g) => (
            <motion.div
              key={g.label}
              variants={scaleIn}
              className="flex items-center gap-2.5 rounded-xl border border-[#1C2A38] bg-[#0F1923] px-4 py-4 transition-colors duration-200 hover:border-[#00D08430]"
            >
              <span className="flex-shrink-0">{g.icon}</span>
              <span className="font-body font-medium text-[0.8rem] text-[#A5B4C4] leading-tight">{g.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}