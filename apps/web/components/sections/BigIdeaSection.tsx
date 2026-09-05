'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import { stagger } from '@/lib/animations';

const stages = [
  {
    label: 'PHYSICAL SHOP',
    caption: 'The shop as it exists today.',
  },
  {
    label: 'CONNECTED SHOP',
    caption: 'The Here Open device connects it.',
  },
  {
    label: 'VISIBLE BUSINESS',
    caption: 'Status, offers and updates, shared in real time.',
  },
  {
    label: 'CONNECTED CUSTOMER',
    caption: 'Customers know before they go.',
  },
];

export function BigIdeaSection() {
  return (
    <Section id="big-idea" className="bg-[var(--bg)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="THE BIG IDEA"
          title="WHAT IF EVERY SHOP"
          titleAccent="COULD BE CONNECTED?"
          description="Today the physical world is full of businesses that are digitally disconnected. Here Open creates a simple digital connection between businesses, devices, the platform and customers."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center font-body text-base lg:text-[1.0625rem] text-[var(--ink-2)] leading-relaxed mb-20"
        >
          A shop becomes visible in real time. The device communicates status. The platform manages the ecosystem.
          Customers get useful information. Businesses get visibility, communication and safety.
        </motion.p>

        {/* Horizontal transformation flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative"
        >
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-px bg-[var(--a30)]" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-4 relative z-10">
            {stages.map((stage, i) => {
              const isDeviceSlot = i === 1;
              return (
                <motion.div
                  key={stage.label}
                  variants={{ hidden: {}, visible: {} }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Node dot */}
                  <div className="relative z-10 flex items-center justify-center h-6 w-6 rounded-full border border-[var(--a40)] bg-[var(--bg)] mb-6">
                    <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </div>

                  {isDeviceSlot ? (
                    <div className="relative mb-6">
                      <div
                        className="absolute inset-[-60px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.12)_0%,transparent_65%)] -z-10"
                        aria-hidden="true"
                      />
                      <DeviceVisual size="md" className="relative z-10" />
                    </div>
                  ) : (
                    <div className="h-56 mb-6" aria-hidden="true" />
                  )}

                  <h3 className="font-display font-bold text-[1.05rem] lg:text-[1.15rem] tracking-tight text-[var(--ink)]">
                    {stage.label}
                  </h3>
                  <p className="mt-2 max-w-[200px] font-body text-[0.85rem] text-[var(--ink-muted)] leading-relaxed">
                    {stage.caption}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-[640px] text-center font-body text-sm text-[var(--ink-2)] leading-relaxed"
        >
          Here Open is designed to bridge that gap — turning a disconnected physical business into a connected,
          visible, real-time touchpoint.
        </motion.p>
      </Container>
    </Section>
  );
}
