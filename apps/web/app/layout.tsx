import type { Metadata } from 'next';
import ReferenceHeader from './components/ref/Header';
import ReferenceFooter from './components/ref/Footer';
import './globals.css';
import './reference.css';

export const metadata: Metadata = {
  title: 'Here Open | Built for banks. Connected to local business.',
  description:
    'A bank-branded smart merchant device and platform connecting banks, merchants and customers through live shop status, communication and supported safety alerts.',
  openGraph: {
    title: 'Here Open | One device. Direct connections.',
    description: 'Here Open goes beyond payment confirmation to solve everyday merchant needs.',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Here Open | One device. Direct connections.',
    description: 'Here Open goes beyond payment confirmation to solve everyday merchant needs.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=window.localStorage.getItem('hereopen-theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.removeAttribute('data-theme');}}catch(e){document.documentElement.removeAttribute('data-theme');}})();`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ReferenceHeader />
        {children}
        <ReferenceFooter />
      </body>
    </html>
  );
}