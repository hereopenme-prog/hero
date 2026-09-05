import { Metadata } from 'next';
import { Smartphone, Play, CheckCircle } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Download App - HERE OPEN',
  description: 'Download the HERE OPEN mobile app for iOS and Android.',
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      {/* Hero */}
      <section className="section">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <div className="w-20 h-20 bg-green-action rounded-2xl flex items-center justify-center shadow-green mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-bg" />
            </div>
            <h1 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-6">
              Download HERE OPEN
            </h1>
            <p className="text-body-lg text-neutral-500 mb-8">
              Available on iOS and Android. Start discovering local shops today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="card-static px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
              >
                <Smartphone className="w-6 h-6 text-green-action mr-3" />
                <div className="text-left">
                  <p className="text-xs text-neutral-500">Download on the</p>
                  <p className="text-lg text-black">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="card-static px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
              >
                <Play className="w-6 h-6 text-green-action mr-3" />
                <div className="text-left">
                  <p className="text-xs text-neutral-500">Get it on</p>
                  <p className="text-lg text-black">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="App Features"
            description="Everything you need to discover and connect with local shops."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Real-time shop status',
              'Nearby shop discovery',
              'Push notifications',
              'Follow favorite shops',
              'Exclusive offers',
              'Shop announcements',
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-action flex-shrink-0" />
                <span className="text-body-lg text-neutral-500">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* QR Code placeholder */}
      <section className="section">
        <Container>
          <div className="text-center">
            <SectionHeader
              eyebrow="Quick Access"
              title="Scan to Download"
              description="Scan the QR code with your phone camera"
            />
            <div className="w-48 h-48 card-static rounded-2xl mx-auto flex items-center justify-center">
              <p className="text-neutral-500 text-sm">QR Code</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
