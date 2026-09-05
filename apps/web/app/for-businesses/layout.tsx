import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Business Owners',
  description: 'Real-time visibility, 24/7 safety, and direct customer connection — all in one device. HERE OPEN for business owners.',
};

export default function ForBusinessesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}