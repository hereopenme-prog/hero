import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the HERE OPEN team. Questions, demos, and partnerships — we respond within 24 hours.',
  alternates: {
    canonical: 'https://hereopen.in/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}