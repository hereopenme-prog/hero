'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Package, Settings, Link2, Zap, Wifi } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    num: 1,
    icon: <Package size={18} className="text-[#080C10]" strokeWidth={2} />,
    title: 'GET YOUR HERE OPEN DEVICE',
    desc: 'Business receives the device.',
  },
  {
    num: 2,
    icon: <Settings size={18} className="text-[#080C10]" strokeWidth={2} />,
    title: 'SET IT UP',
    desc: 'Place and connect the device according to the provided setup instructions.',
  },
  {
    num: 3,
    icon: <Link2 size={18} className="text-[#080C10]" strokeWidth={2} />,
    title: 'CONNECT YOUR BUSINESS',
    desc: "The device is linked to the business's Here Open account/system.",
  },
  {
    num: 4,
    icon: <Zap size={18} className="text-[#080C10]" strokeWidth={2} />,
    title: 'RUN YOUR BUSINESS',
    desc: 'Receive supported payment notifications and manage supported business features.',
  },
  {
    num: 5,
    icon: <Wifi size={18} className="text-[#080C10]" strokeWidth={2} />,
    title: 'STAY CONNECTED',
    desc: 'Customers can see supported shop information and the business can receive configured alerts.',
  },
];

export function HowItWorksSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 50%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section id="how-it-works" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="HOW HERE OPEN WORKS"
          description="Simple for the business. Clear for the customer."
        />

        <div ref={timelineRef} className="relative mx-auto max-w-2xl">
          {/* Background line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#1C2A38]" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-[#00D084] to-[#00D08480]"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00D084] shadow-[0_0_20px_#00D08440]">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-display font-bold text-[0.85rem] tracking-wide text-[#E8EDF2] mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-[0.85rem] text-[#8A9BAE] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
