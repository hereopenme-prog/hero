import './globals.css';
import './comparisons.css';
import './brand.css';
import './vision.css';
import './solution-how.css';
import './partners.css';
import './product-motion.css';
import './ecosystem.css';
import './site-effects.css';
import './interactive-depth.css';
import './legal.css';

const description = 'A partner-branded smart merchant device and platform connecting banks and fintechs with merchants and customers through live shop status, communication and supported safety alerts.';

export const metadata = {
  metadataBase: new URL('https://www.hereopen.me'),
  title: {
    default: 'Here Open | Connection. Protection. For banks and fintechs.',
    template: '%s | Here Open'
  },
  description,
  applicationName: 'Here Open',
  authors: [{ name: 'Here Open' }],
  creator: 'Here Open',
  publisher: 'Here Open',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Here Open | One device. Direct connections.',
    description: 'Here Open goes beyond payment confirmation to solve everyday merchant needs.',
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Here Open',
    images: [{
      url: '/assets/merchant-problems-hero.png',
      width: 1774,
      height: 887,
      alt: 'Here Open smart merchant device connecting banks and fintechs with merchants and customers'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Here Open | One device. Direct connections.',
    description: 'Here Open goes beyond payment confirmation to solve everyday merchant needs.',
    images: ['/assets/merchant-problems-hero.png']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
