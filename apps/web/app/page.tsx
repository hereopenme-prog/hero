import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { HeroSection } from '@/components/sections/HeroSection';
import { MoreThanPaymentsSection } from '@/components/sections/MoreThanPaymentsSection';
import { CoreCapabilitiesSection } from '@/components/sections/CoreCapabilitiesSection';
import { PaymentExperienceSection } from '@/components/sections/PaymentExperienceSection';
import { ShopStatusSection } from '@/components/sections/ShopStatusSection';
import { CustomerExperienceSection } from '@/components/sections/CustomerExperienceSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { SmartAlertsSection } from '@/components/sections/SmartAlertsSection';
import { BusinessCommunicationSection } from '@/components/sections/BusinessCommunicationSection';
import { BusinessOwnerBenefitsSection } from '@/components/sections/BusinessOwnerBenefitsSection';
import { CustomerBenefitsSection } from '@/components/sections/CustomerBenefitsSection';
import { DeviceShowcaseSection } from '@/components/sections/DeviceShowcaseSection';
import { SoftwarePlatformSection } from '@/components/sections/SoftwarePlatformSection';
import { BusinessDashboardSection } from '@/components/sections/BusinessDashboardSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { WhyHereOpenSection } from '@/components/sections/WhyHereOpenSection';
import { TargetSection } from '@/components/sections/TargetSection';
import { FutureReadySection } from '@/components/sections/FutureReadySection';
import { MarketSection } from '@/components/sections/MarketSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { SecurityTrustSection } from '@/components/sections/SecurityTrustSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'HERE OPEN — Smart Business Device for Payments, Visibility & Connectivity',
  description:
    'HERE OPEN is a smart business device that brings payment notifications, shop visibility, customer connectivity and configurable smart features together in one connected device.',
};

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <AnnouncementBar />
      <main id="main" className="relative min-h-screen bg-surface-base text-[#E8EDF2] overflow-x-hidden">
        <HeroSection />
        <MoreThanPaymentsSection />
        <CoreCapabilitiesSection />
        <PaymentExperienceSection />
        <ShopStatusSection />
        <CustomerExperienceSection />
        <HowItWorksSection />
        <SecuritySection />
        <SmartAlertsSection />
        <BusinessCommunicationSection />
        <BusinessOwnerBenefitsSection />
        <CustomerBenefitsSection />
        <DeviceShowcaseSection />
        <SoftwarePlatformSection />
        <BusinessDashboardSection />
        <EcosystemSection />
        <WhyHereOpenSection />
        <TargetSection />
        <FutureReadySection />
        <MarketSection />
        <RoadmapSection />
        <SecurityTrustSection />
        <CTASection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}