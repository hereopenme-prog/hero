'use client';

import { motion } from 'framer-motion';
import { Eye, ShieldCheck, MessageSquare, Store, Network, Users } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const pillars = [
  {
    icon: <Eye size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Real-Time Visibility',
    desc: 'Customers know the exact OPEN or CLOSED status of your shop — live, from their phone.',
  },
  {
    icon: <ShieldCheck size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Smart Security',
    desc: 'Security, fire and smoke monitoring activate the moment your shop closes, with instant alerts.',
  },
  {
    icon: <MessageSquare size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Customer Connection',
    desc: 'Owners communicate offers, updates and announcements directly to the customers who follow them.',
  },
];

const flow = [
  { icon: <Store size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Business', sub: 'Your shop, your status' },
  { icon: <Network size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'HERE OPEN', sub: 'The connected platform', center: true },
  { icon: <Users size={22} className="text-[#00D084]" strokeWidth={1.5} />, label: 'Customer', sub: 'Real-time clarity' },
];

export function SolutionSection() {
  return (
    <Section id="solution" className="bg-[#0A0F14]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="The Solution"
          title="MEET HERE OPEN."
          description="One IoT-powered platform that gives every physical shop real-time truth — for owners and customers alike."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: flow visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="relative"
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D084]/0 via-[#00D084]/40 to-[#00D084]/0 hidden lg:block" />
            <div className="space-y-5">
              {flow.map((n, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className={`relative rounded-2xl p-6 border ${
                    n.center
                      ? 'border-[#00D08450] bg-[#00D0840D] shadow-[0_0_40px_#00D08412]'
                      : 'border-[#1C2A38] bg-[#0F1923]'
                  }`}
                >
                  {n.center && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D084] px-3 py-0.5 font-body text-[10px] font-bold text-[#080C10] tracking-wider">
                      CORE
                    </span>
                  )}
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ background: '#00D0841A', borderRadius: 12, padding: 10, width: 46, height: 46 }}
                    >
                      {n.icon}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-[1rem] text-[#E8EDF2]">{n.label}</p>
                      <p className="font-body text-[0.85rem] text-[#6B7C8E]">{n.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-5"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={scaleIn}
                className="group rounded-2xl bg-[#0F1923] border border-[#1C2A38] p-7 flex gap-5 transition-colors duration-200 hover:border-[#00D08440]"
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ background: '#00D0841A', borderRadius: 12, padding: 10, width: 46, height: 46 }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[1rem] text-[#E8EDF2] mb-1.5">{p.title}</h3>
                  <p className="font-body text-[0.9rem] text-[#8A9BAE] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-3 rounded-xl border border-[#1C2A38] bg-[#0F1923] px-5 py-4"
            >
              <span className="status-dot-pulse inline-block w-2 h-2 rounded-full bg-[#00D084] mt-1.5 flex-shrink-0" />
              <p className="font-body text-[0.8rem] text-[#8A9BAE] leading-relaxed">
                Three pillars. One device. From a single tap in the owner app to every customer's screen — in real time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}