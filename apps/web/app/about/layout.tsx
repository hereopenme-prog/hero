import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About HERE OPEN — IoT platform for real-time shop visibility and 24/7 safety monitoring.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}