import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { MobileStickyBar } from '@/components/ui/MobileStickyBar';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { BackToTop } from '@/components/ui/BackToTop';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'HERE OPEN — Real-Time Shop Visibility & 24/7 Safety',
    template: '%s | HERE OPEN',
  },
  description:
    'IoT + Mobile platform for real-time shop OPEN/CLOSED visibility and 24/7 safety monitoring. One tap. Know every shop status instantly.',
  keywords: ['IoT', 'shop status', 'real-time', 'safety', 'monitoring', 'business', 'India', 'smart city'],
  openGraph: {
    title: 'HERE OPEN — Real-Time Shop Visibility & 24/7 Safety',
    description: 'IoT + Mobile platform for real-time shop visibility and 24/7 safety monitoring.',
    url: 'https://hereopen.in',
    siteName: 'HERE OPEN',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HERE OPEN — Real-Time Shop Visibility & 24/7 Safety',
    description: 'IoT + Mobile platform for real-time shop visibility and 24/7 safety monitoring.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <ScrollProgress />
        <Navbar />
        <div className="pt-[72px] lg:pt-[80px]">
          {children}
        </div>
        <Footer />
        <MobileStickyBar />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  );
}
