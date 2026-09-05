import Link from 'next/link';
import { Container } from './components/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { scaleIn } from '@/lib/animations';

export default function NotFound() {
  return (
    <main
      className="relative min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
      style={{ background: '#080C10' }}
    >
      {/* Dot grid + orbs — same as homepage hero */}
      <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="hero-radial absolute inset-0 pointer-events-none" />
      <div
        className="hero-orb w-[280px] h-[280px] top-[-80px] left-[-80px]"
        style={{ background: '#00D08414', animation: 'heroOrbDrift 9s ease-in-out infinite' }}
      />
      <div
        className="hero-orb w-[240px] h-[240px] bottom-[-60px] right-[-80px]"
        style={{ background: '#00B4D814', animation: 'heroOrbDrift 11s ease-in-out 1s infinite' }}
      />

      <Container className="relative z-10 py-20">
        <AnimatedSection variant={scaleIn} className="flex flex-col items-center text-center">
          <h1
            className="shimmer-text font-display font-bold leading-none"
            style={{ fontSize: 'clamp(5rem, 20vw, 8rem)', letterSpacing: '-0.04em' }}
          >
            404
          </h1>

          <div className="my-6" style={{ width: 80, height: 1, background: '#1C2A38' }} />

          <h2
            className="font-display font-bold text-[#E8EDF2]"
            style={{ fontSize: '1.8rem', letterSpacing: '-0.02em' }}
          >
            This Shop Seems Closed
          </h2>

          <p
            className="mt-4 font-body font-normal text-[1rem] text-[#6B7C8E] leading-[1.7]"
            style={{ maxWidth: 400 }}
          >
            The page you&apos;re looking for doesn&apos;t exist. Maybe it moved, or maybe the link is wrong.
          </p>

          {/* IoT device mini badge */}
          <div
            className="float-badge mt-10"
            style={{
              width: 180,
              background: '#0F1923',
              border: '1px solid #1C2A38',
              borderRadius: 12,
              padding: '16px 20px',
            }}
          >
            <p className="font-body font-medium text-[0.65rem] text-[#6B7C8E] uppercase tracking-[0.15em]">
              Shop Status
            </p>
            <div className="flex items-center justify-center gap-2.5 mt-2">
              <span className="dot-live-danger" />
              <span className="font-display font-bold text-[#FF4444]" style={{ fontSize: '1.05rem' }}>
                CLOSED
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              href="/"
              className="active:scale-[0.97] inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-display font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_#00D08440]"
              style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)', color: '#080C10' }}
            >
              Go Back Home
            </Link>
            <Link
              href="/contact"
              className="active:scale-[0.97] inline-flex items-center justify-center rounded-lg px-7 py-3.5 border border-[#1C2A38] font-body font-medium text-[15px] text-[#E8EDF2] transition-all duration-200 hover:border-[#00D084]/50 hover:bg-[#16232F] hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </main>
  );
}