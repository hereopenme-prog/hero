'use client';

import { motion } from 'framer-motion';
import { Search, Store, Tag, Navigation, Eye } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger } from '@/lib/animations';
import type { Variants } from 'framer-motion';

const screens = [
  {
    label: 'SEARCH / DISCOVER',
    icon: <Search size={13} className="text-[#00D084]" />,
    content: (
      <>
        <p className="font-display font-bold text-[1.05rem] lg:text-[1.15rem] text-[#E8EDF2] leading-snug">
          Sharma General Store
        </p>
        <p className="mt-1.5 font-body text-[0.72rem] text-[#8A9BAE]">Connaught Place, New Delhi</p>
      </>
    ),
  },
  {
    label: 'SEE STATUS',
    icon: <Eye size={13} className="text-[#00D084]" />,
    content: (
      <div className="flex items-center gap-2 mt-1">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00D084] px-3 py-1 font-display font-bold text-[0.6rem] tracking-widest text-[#0A0F14] shadow-[0_0_16px_#00D08450]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0A0F14]" />
          OPEN
        </span>
      </div>
    ),
  },
  {
    label: 'CHECK DETAILS',
    icon: <Tag size={13} className="text-[#00D084]" />,
    content: (
      <div className="flex flex-wrap gap-2 mt-1">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#00D084] px-2.5 py-1 font-body font-bold text-[0.6rem] text-[#0A0F14]">
          <Tag size={9} /> 10% OFF
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#00D08414] border border-[#00D08440] px-2.5 py-1 font-body font-bold text-[0.6rem] text-[#00D084]">
          NEW ARRIVALS
        </span>
      </div>
    ),
  },
  {
    label: 'VISIT',
    icon: <Navigation size={13} className="text-[#00D084]" />,
    content: (
      <p className="mt-1 font-body text-[0.75rem] text-[#A5B4C4] leading-relaxed">
        Business hours ┬╖ Directions ┬╖ Contact
      </p>
    ),
  },
];

const takeaways = [
  { icon: <Store size={14} />, text: 'No wasted trips' },
  { icon: <Eye size={14} />, text: 'Real-time status' },
  { icon: <Search size={14} />, text: 'Discover nearby businesses' },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function CustomerExperienceSection() {
  return (
    <Section id="customer-experience" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="CUSTOMER EXPERIENCE"
          title="KNOW BEFORE YOU GO."
          titleAccent="WEB-FIRST. NO APP NEEDED."
          description="A connected business visibility experience ΓÇö accessible to anyone, without downloading anything."
        />

        {/* Main visual: 4-screen journey */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              variants={itemVariants}
              className="rounded-xl border border-[#1C2A38] bg-[#0F1923] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-[#1C2A38] bg-[#0A0F14]">
                <span className="w-2 h-2 rounded-full bg-[#3D4F5E]" />
                <span className="w-2 h-2 rounded-full bg-[#3D4F5E]" />
                <span className="w-2 h-2 rounded-full bg-[#3D4F5E]" />
                <span className="ml-auto font-body text-[0.5rem] tracking-[0.16em] text-[#3D4F5E]">
                  HERE OPEN ┬╖ CUSTOMER EXPERIENCE
                </span>
              </div>

              <div className="px-5 py-6 flex flex-col min-h-[180px]">
                <span className="font-body text-[0.6rem] font-bold tracking-[0.2em] text-[#3D4F5E] mb-3">
                  {String(i + 1).padStart(2, '0')} ΓÇö {screen.label}
                </span>

                <div className="mt-auto">{screen.content}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Muted line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center font-body text-[0.82rem] text-[#A5B4C4] tracking-wide"
        >
          A web-first customer experience ΓÇö no downloads, no sign-up required.
        </motion.p>

        {/* Takeaway row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {takeaways.map((item) => (
            <motion.div key={item.text} variants={itemVariants} className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#00D08414] text-[#00D084]">
                {item.icon}
              </span>
              <span className="font-display font-semibold text-[0.85rem] text-[#E8EDF2]">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
