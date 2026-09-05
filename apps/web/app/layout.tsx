import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { MobileStickyBar } from '@/components/ui/MobileStickyBar';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { BackToTop } from '@/components/ui/BackToTop';
import { PageTransition } from '@/components/ui/PageTransition';
import { StructuredData } from '@/components/seo/StructuredData';
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
  metadataBase: new URL('https://hereopen.in'),
  title: {
    default: 'HERE OPEN — Real-Time Shop Visibility & 24/7 Safety',
    template: '%s | HERE OPEN',
  },
  description:
    'IoT + Mobile platform for real-time shop OPEN/CLOSED visibility and 24/7 safety monitoring. One tap — know every shop status instantly. Built for India.',
  keywords: [
    'shop status app India',
    'IoT shop monitoring',
    'real-time business visibility',
    'kirana store app',
    'small business IoT',
    '24/7 shop safety',
    'live shop status',
    'HERE OPEN',
  ],
  authors: [{ name: 'HERE OPEN' }],
  creator: 'HERE OPEN',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hereopen.in',
    siteName: 'HERE OPEN',
    title: 'HERE OPEN — Real-Time Shop Visibility & 24/7 Safety',
    description: 'IoT + Mobile platform for real-time shop OPEN/CLOSED visibility. Never waste a trip again.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'HERE OPEN — Real-Time Shop Visibility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HERE OPEN — Real-Time Shop Visibility',
    description: 'Know every shop status instantly. IoT + Mobile, built for India.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://hereopen.in',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HERE OPEN',
  url: 'https://hereopen.in',
  logo: 'https://hereopen.in/logo.png',
  description: 'IoT + Mobile platform for real-time shop visibility and 24/7 safety monitoring',
  foundingDate: '2026',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['English', 'Hindi'],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HERE OPEN',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS, Android',
  description: 'Real-time shop OPEN/CLOSED visibility and 24/7 safety monitoring app',
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'INR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the HERE OPEN device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The HERE OPEN device is a compact IoT unit that connects to your shop\u2019s power supply. It monitors your shop\u2019s OPEN/CLOSED status, temperature, smoke, motion, and environment \u2014 and syncs everything to the cloud in real time over 4G GSM. No WiFi needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need internet at my shop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. The HERE OPEN device uses a built-in GSM (mobile data) connection \u2014 the same technology as your phone. As long as there is mobile network coverage at your location, the device works without any WiFi or broadband.',
      },
    },
    {
      '@type': 'Question',
      name: 'How hard is the setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Setup takes under 10 minutes. Plug in the device, download the HERE OPEN app, scan the device QR code, and your shop is live. No technician visit required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I manage more than one shop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. The HERE OPEN dashboard supports multi-location management. You can see all your shops, their live status, device health, and alerts from a single screen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the device goes offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'If the device loses connectivity, the app shows your shop as \u2018Status Unknown\u2019 and sends you an instant alert. Customers see the last-known status with a timestamp so there is no confusion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the app free for customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. The HERE OPEN customer app is free to download and use. Customers can check any connected shop\u2019s status, follow their favourite shops, and receive updates at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of safety alerts does it send?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The device monitors temperature (fire risk), smoke, motion (intrusion), and power status. Any abnormal reading triggers an instant push notification and SMS to the registered owner\u2019s number.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my shop data secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'All device data is encrypted in transit and at rest. Role-based access control means only authorised staff can change your shop status or view sensitive alerts. HERE OPEN never sells business data to third parties.',
      },
    },
    {
      '@type': 'Question',
      name: 'What businesses is this built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Any business with a physical location \u2014 kirana stores, restaurants, pharmacies, salons, repair shops, clinics, retail, and more. If customers visit your space, HERE OPEN adds value.',
      },
    },
    {
      '@type': 'Question',
      name: 'When will the app be available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'We are currently in the early-access phase. Register your interest and we will notify you when HERE OPEN launches in your area. Early registrations get priority onboarding.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <StructuredData data={organizationSchema} />
        <StructuredData data={softwareSchema} />
        <StructuredData data={faqSchema} />
        <ScrollProgress />
        <Navbar />
        <div className="pt-[72px] lg:pt-[80px]">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
        <MobileStickyBar />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  );
}
