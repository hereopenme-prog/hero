import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { BigIdeaSection } from '@/components/sections/BigIdeaSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CustomerExperienceSection } from '@/components/sections/CustomerExperienceSection';
import { BusinessOwnerBenefitsSection } from '@/components/sections/BusinessOwnerBenefitsSection';
import { DeviceShowcaseSection } from '@/components/sections/DeviceShowcaseSection';
import { MoreThanStatusSection } from '@/components/sections/MoreThanStatusSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { SmartAlertsSection } from '@/components/sections/SmartAlertsSection';
import { BusinessCommunicationSection } from '@/components/sections/BusinessCommunicationSection';
import { CustomerBenefitsSection } from '@/components/sections/CustomerBenefitsSection';
import { TargetSection } from '@/components/sections/TargetSection';
import { SoftwarePlatformSection } from '@/components/sections/SoftwarePlatformSection';
import { BusinessDashboardSection } from '@/components/sections/BusinessDashboardSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { BankOpportunitySection } from '@/components/sections/BankOpportunitySection';
import { BankBrandedSection } from '@/components/sections/BankBrandedSection';
import { BankPartnershipSection } from '@/components/sections/BankPartnershipSection';
import { MerchantValueSection } from '@/components/sections/MerchantValueSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { MarketSection } from '@/components/sections/MarketSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { InnovationSection } from '@/components/sections/InnovationSection';
import { ScalabilitySection } from '@/components/sections/ScalabilitySection';
import { SecurityTrustSection } from '@/components/sections/SecurityTrustSection';
import { CTASection } from '@/components/sections/CTASection';
import { PatentSection } from '@/components/sections/PatentSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'HERE OPEN — Connected Smart Business Ecosystem',
  description:
    'Here Open connects businesses, customers and smart devices in real time — bringing visibility, communication, safety and intelligent business connectivity to local businesses across India.',
};

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <AnnouncementBar />
      <main id="main" className="relative min-h-screen bg-surface-base text-[var(--ink)] overflow-x-hidden">
        <HeroSection />
        <ProblemSection />
        <BigIdeaSection />
        <HowItWorksSection />
        <VisionSection />
        <CustomerExperienceSection />
        <BusinessOwnerBenefitsSection />
        <DeviceShowcaseSection />
        <MoreThanStatusSection />
        <EcosystemSection />
        <SecuritySection />
        <SmartAlertsSection />
        <BusinessCommunicationSection />
        <CustomerBenefitsSection />
        <TargetSection />
        <SoftwarePlatformSection />
        <BusinessDashboardSection />
        <TechnologySection />
        <BankOpportunitySection />
        <BankBrandedSection />
        <BankPartnershipSection />
        <MerchantValueSection />
        <MarketSection />
        <RoadmapSection />
        <InnovationSection />
        <ScalabilitySection />
        <SecurityTrustSection />
        <CTASection />
        <PatentSection />
        <FaqSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}