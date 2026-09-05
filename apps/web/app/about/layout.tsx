import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about HERE OPEN — from the problem we are solving to our mission, values, founder, and roadmap. IoT for real-time shop visibility and 24/7 safety.',
  alternates: {
    canonical: 'https://hereopen.in/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}