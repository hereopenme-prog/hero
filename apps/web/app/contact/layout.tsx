import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - HERE OPEN',
  description: 'Get in touch with the HERE OPEN team. Questions, demos, and partnerships — we respond within 24 hours.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}