import { Metadata } from 'next';
import { Container } from '../components/Container';

export const metadata: Metadata = {
  title: 'Terms of Service - HERE OPEN',
  description: 'Terms of service for HERE OPEN platform.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      <section className="section">
        <Container>
          <div className="max-w-content mx-auto">
            <h1 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight">
              Terms of Service
            </h1>
            <p className="text-[13px] text-neutral-500 mb-8">Last updated: January 2024</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-display-sm font-bold text-green-forest mb-4">1. Acceptance of Terms</h2>
                <p className="text-body-md text-neutral-500 leading-relaxed">
                  By accessing or using HERE OPEN, you agree to be bound by these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-display-sm font-bold text-green-forest mb-4">2. Use of Services</h2>
                <p className="text-body-md text-neutral-500 leading-relaxed">
                  You may use our services only for lawful purposes and in accordance with these Terms.
                  You are responsible for maintaining the security of your account.
                </p>
              </div>

              <div>
                <h2 className="text-display-sm font-bold text-green-forest mb-4">3. Account Registration</h2>
                <p className="text-body-md text-neutral-500 leading-relaxed">
                  You must provide accurate and complete information when creating an account.
                  You are responsible for all activity under your account.
                </p>
              </div>

              <div>
                <h2 className="text-display-sm font-bold text-green-forest mb-4">4. Intellectual Property</h2>
                <p className="text-body-md text-neutral-500 leading-relaxed">
                  All content and materials on HERE OPEN are owned by us and protected by
                  intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-display-sm font-bold text-green-forest mb-4">5. Limitation of Liability</h2>
                <p className="text-body-md text-neutral-500 leading-relaxed">
                  HERE OPEN is provided &quot;as is&quot; without warranties. We are not liable for any
                  damages arising from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-display-sm font-bold text-green-forest mb-4">6. Termination</h2>
                <p className="text-body-md text-neutral-500 leading-relaxed">
                  We may terminate or suspend your account at any time for violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-display-sm font-bold text-green-forest mb-4">7. Contact</h2>
                <p className="text-body-md text-neutral-500 leading-relaxed">
                  For questions about these Terms, contact us at{' '}
                  <span className="text-green-action bg-green-action/10 px-1.5 py-0.5 rounded">legal@hereopen.in</span>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
