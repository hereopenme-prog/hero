'use client';

import { MessageCircle } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/faq/FaqAccordion';

const faqItems = [
  {
    question: 'How does HERE OPEN work?',
    answer:
      'Install the HERE OPEN IoT device in your shop. Open the app, tap OPEN or CLOSED, and the status syncs to customers in real time. When closed, the device keeps monitoring for fire, smoke, motion and door events.',
  },
  {
    question: 'Does it need Wi-Fi?',
    answer:
      'No — the HERE OPEN device uses GSM (mobile network), so it works in shops with unreliable or no Wi-Fi. It remains connected through a dedicated SIM.',
  },
  {
    question: 'What happens when my shop is closed?',
    answer:
      'The device automatically switches to security mode. Fire, smoke, motion and door sensors stay active, and you are alerted instantly by push notification and SMS if something needs attention.',
  },
  {
    question: 'Can customers really see if my shop is open?',
    answer:
      'Yes. Any customer with the HERE OPEN app can see your current status, distance, offers and announcements — updated in real time from your tap.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Shop data and alerts are transmitted and stored securely on the HERE OPEN cloud. Only the registered owner can change status.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Plans start at ₹299/month with transparent pricing (GST additional). Devices are available on purchase or rental. See the pricing section above or contact us for bulk plans.',
  },
];

export function FaqSection() {
  return (
    <Section id="faq" className="bg-[#0A0F14]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered."
          description="Everything you need to know before joining HERE OPEN."
        />

        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqItems} />
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/919XXXXXXXXX"
              className="inline-flex items-center gap-2 rounded-full border border-[#00D08450] bg-[#00D08410] px-5 py-2.5 font-body font-medium text-[0.85rem] text-[#00D084] transition-colors duration-200 hover:bg-[#00D0841A]"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}