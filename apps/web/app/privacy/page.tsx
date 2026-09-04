import { Metadata } from 'next';
import { Container } from '../components/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy - HERE OPEN',
  description: 'Privacy policy for HERE OPEN platform.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-surface-0 relative noise">
      <section className="section">
        <Container>
          <div className="max-w-content mx-auto">
            <h1 className="font-display font-extrabold text-white text-display-lg tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-[13px] text-muted mb-8">Last updated: January 2024</p>

            <section className="section">
              <h2 className="text-display-sm font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-body-md text-muted-light leading-relaxed">
                We collect information you provide directly, such as your name, email, phone number,
                and shop details when you register for HERE OPEN.
              </p>
            </section>

            <section className="section">
              <h2 className="text-display-sm font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-body-md text-muted-light leading-relaxed">
                We use your information to provide and improve our services, send notifications,
                and communicate with you about your account.
              </p>
            </section>

            <section className="section">
              <h2 className="text-display-sm font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="text-body-md text-muted-light leading-relaxed">
                We do not sell your personal information. We may share data with service providers
                who assist in operating our platform.
              </p>
            </section>

            <section className="section">
              <h2 className="text-display-sm font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-body-md text-muted-light leading-relaxed">
                We implement appropriate security measures to protect your personal information
                against unauthorized access or disclosure.
              </p>
            </section>

            <section className="section">
              <h2 className="text-display-sm font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-body-md text-muted-light leading-relaxed">
                You can access, update, or delete your personal information through your account
                settings or by contacting us.
              </p>
            </section>

            <section className="section">
              <h2 className="text-display-sm font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-body-md text-muted-light leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <span className="text-neon bg-neon/10 px-1 rounded">privacy@hereopen.in</span>.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
