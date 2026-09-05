'use client';

import { MessageCircle } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/faq/FaqAccordion';

const faqItems = [
  {
    question: 'What is Here Open?',
    answer:
      'Here Open is a connected smart business device and platform that brings real-time visibility, communication and configurable monitoring to local businesses.',
  },
  {
    question: 'How do businesses use it?',
    answer:
      "Businesses can signal OPEN / CLOSED, share offers and announcements, and stay connected to customers through the platform.",
  },
  {
    question: "How do customers see a shop's status?",
    answer:
      "Through the customer-facing Here Open web experience — no app download needed.",
  },
  {
    question: 'Does the device need Wi-Fi?',
    answer:
      'Here Open is designed with flexible connectivity options; final connectivity depends on configuration.',
  },
  {
    question: 'What happens after hours?',
    answer:
      'Where configured, monitoring and alerting can operate after the shop closes, designed to notify the owner for supported events.',
  },
  {
    question: 'Is my business data secure?',
    answer:
      'Here Open is designed around secure device identity, authenticated access and controlled communication.',
  },
  {
    question: 'Can banks and partners use Here Open?',
    answer:
      'Yes — the technology is designed as an opportunity for banks and financial institutions to build a branded merchant device ecosystem through partnership. Contact contact@hereopen.me to explore.',
  },
];

export function FaqSection() {
  return (
    <Section id="faq" className="bg-[var(--section-2)]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered."
          description="Everything you need to know about Here Open."
        />

        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqItems} />
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/919060038229"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--a50)] bg-[var(--a10)] px-5 py-2.5 font-body font-medium text-[0.85rem] text-[var(--accent)] transition-colors duration-200 hover:bg-[var(--a1A)]"
            >
              <MessageCircle size={16} />
              Still have questions? WhatsApp +91 9060038229
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
