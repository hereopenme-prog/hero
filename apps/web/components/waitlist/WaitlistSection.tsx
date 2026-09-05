'use client'
import { CheckCircle } from 'lucide-react'
import { Container } from '@/app/components/Container'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { slideLeft, slideRight } from '@/lib/animations'
import { WaitlistForm } from './WaitlistForm'

const benefits = [
  'Priority onboarding when HERE OPEN launches',
  'Free setup support for early registrations',
  'Locked-in early adopter pricing',
]

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #0F1923 0%, #080C10 100%)',
        borderTop: '1px solid #00D08430',
        borderBottom: '1px solid #00D08430',
      }}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <AnimatedSection variant={slideLeft} delay={0.1}>
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-[#00D08420] border border-[#00D08440]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D084] animate-blink" />
              <span className="font-body font-semibold text-xs text-[#00D084] tracking-wide">
                Early Access &mdash; Limited Spots
              </span>
            </div>
            <h2 className="mt-6 font-display font-bold text-[1.6rem] lg:text-[2.2rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
              Be First. Get Priority Onboarding.
            </h2>
            <p className="mt-4 font-body text-[0.95rem] text-[#6B7C8E] leading-[1.7]">
              HERE OPEN is launching city by city. Register now and get priority access when we go live in your area &mdash; plus free setup support.
            </p>
            <ul className="mt-7 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-[#00D084] flex-shrink-0" />
                  <span className="font-body font-medium text-[0.875rem] text-[#E8EDF2]">{b}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right column */}
          <AnimatedSection variant={slideRight} delay={0.2}>
            <WaitlistForm />
          </AnimatedSection>
        </div>

        {/* Counter row */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <p className="font-body text-[0.85rem] text-[#6B7C8E]">
            Join 247+ business owners already registered
          </p>
          <div className="flex items-center justify-center mt-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-full bg-[#1C2A38] border-2 border-[#080C10] -ml-2 first:ml-0"
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}