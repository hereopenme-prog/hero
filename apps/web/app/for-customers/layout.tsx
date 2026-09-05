import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Customers',
  description: 'Know before you go. No more wasted trips. Real-time shop status in your pocket — HERE OPEN for customers.',
};

export default function ForCustomersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}