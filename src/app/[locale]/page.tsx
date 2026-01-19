import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import UseCaseCards from '@/components/sections/UseCaseCards';
import SocialProof from '@/components/sections/SocialProof';
import PlatformStory from '@/components/sections/PlatformStory';
import Features from '@/components/sections/Features';
import DeploymentOptions from '@/components/sections/DeploymentOptions';
import TrustBadges from '@/components/sections/TrustBadges';
import CTASection from '@/components/sections/CTASection';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <UseCaseCards />
      <SocialProof />
      <PlatformStory />
      <Features />
      <DeploymentOptions />
      <TrustBadges />
      <CTASection />
    </>
  );
}
