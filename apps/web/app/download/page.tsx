import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/Container';
import { WaitlistForm } from '../../components/waitlist/WaitlistForm';

export const metadata: Metadata = {
  title: 'Get Early Access - HERE OPEN',
  description: 'HERE OPEN is launching city by city. Register for early access and get priority onboarding when we go live in your area.',
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      <Container>
        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </Container>

      <section className="py-16">
        <Container>
          <div className="max-w-[480px] mx-auto text-center mb-10">
            <h1 className="font-display font-extrabold text-4xl text-green-forest tracking-tight leading-tight">
              HERE OPEN is Coming Soon
            </h1>
            <p className="mt-4 text-body-md text-neutral-500 leading-relaxed">
              We&apos;re launching city by city. Be the first in your area.
            </p>
          </div>

          <div className="max-w-[480px] mx-auto">
            <WaitlistForm />
          </div>
        </Container>
      </section>
    </main>
  );
}