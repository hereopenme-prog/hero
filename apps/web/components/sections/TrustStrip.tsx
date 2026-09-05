'use client';

import { motion } from 'framer-motion';
import { Activity, Eye, ToggleRight, Shield } from 'lucide-react';
import { Container } from '@/app/components/Container';

const items = [
  { icon: <Activity size={16} strokeWidth={1.8} />, label: '24/7', desc: 'Connected Monitoring' },
  { icon: <Eye size={16} strokeWidth={1.8} />, label: 'REAL-TIME', desc: 'Shop Status' },
  { icon: <ToggleRight size={16} strokeWidth={1.8} />, label: 'ONE TAP', desc: 'Control' },
  { icon: <Shield size={16} strokeWidth={1.8} />, label: 'SMART', desc: 'Security' },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-[#1C2A38] bg-[#0A0F14]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-8 text-center ${
                i % 2 === 1 ? 'border-l border-[#1C2A38]' : ''
              } ${i > 1 ? 'border-t lg:border-t-0 border-[#1C2A38]' : ''} ${
                i >= 2 ? 'lg:border-l lg:border-[#1C2A38]' : ''
              } ${i === 2 ? 'lg:border-l-0' : ''}`}
            >
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="text-[#00D084]">{item.icon}</span>
                <p className="font-display font-bold text-xl lg:text-2xl tracking-tight text-[#E8EDF2]">
                  {item.label}
                </p>
              </div>
              <p className="font-body text-[13px] text-[#6B7C8E]">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}