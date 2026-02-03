import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import UseCaseCards from '@/components/sections/UseCaseCards';
import SocialProof from '@/components/sections/SocialProof';
import PlatformStory from '@/components/sections/PlatformStory';
import Features from '@/components/sections/Features';
import DeploymentOptions from '@/components/sections/DeploymentOptions';
import TrustBadges from '@/components/sections/TrustBadges';
import FeaturedArticles from '@/components/sections/FeaturedArticles';
import CTASection from '@/components/sections/CTASection';

interface PageProps {
  params: Promise<{ locale: string }>;
}

const baseUrl = 'https://www.volentis.ai';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Volentis.ai - European AI with Trust at the Core',
    nl: 'Volentis.ai - Europese AI met Vertrouwen als Kern',
    de: 'Volentis.ai - Europäische KI mit Vertrauen im Kern',
    fr: 'Volentis.ai - IA Européenne avec la Confiance au Cœur',
  };
  
  const descriptions: Record<string, string> = {
    en: 'Enterprise AI you can trust — no hallucinations, no data leaks, no compliance risks. GDPR compliant, EU AI Act ready. Specialized AI agents for HR, Legal, Compliance, IT, and Finance.',
    nl: "Enterprise AI die je kunt vertrouwen — geen hallucinaties, geen datalekken, geen compliance-risico's. GDPR compliant, EU AI Act ready. Gespecialiseerde AI-agents voor HR, Legal, Compliance, IT en Finance.",
    de: 'Enterprise-KI, der Sie vertrauen können — keine Halluzinationen, keine Datenlecks, keine Compliance-Risiken. DSGVO-konform, EU AI Act ready. Spezialisierte KI-Agenten für HR, Legal, Compliance, IT und Finance.',
    fr: "IA d'entreprise de confiance — pas d'hallucinations, pas de fuites de données, pas de risques de conformité. Conforme au RGPD, prêt pour l'EU AI Act. Agents IA spécialisés pour RH, Juridique, Conformité, IT et Finance.",
  };
  
  const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;
  
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': baseUrl,
        'nl': `${baseUrl}/nl`,
        'de': `${baseUrl}/de`,
        'fr': `${baseUrl}/fr`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: canonicalUrl,
      type: 'website',
    },
  };
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
      <FeaturedArticles />
      <CTASection />
    </>
  );
}
