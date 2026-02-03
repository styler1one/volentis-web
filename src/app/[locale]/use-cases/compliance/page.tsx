import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import UseCaseTemplate from '@/components/templates/UseCaseTemplate';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.compliance' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ComplianceUseCasePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'useCases.compliance' });

  const metrics = [
    { value: '60%', label: t('metrics.auditPrep') },
    { value: '80%', label: t('metrics.gapIdentification') },
    { value: '70%', label: t('metrics.researchTime') },
    { value: '↓', label: t('metrics.fineRisk') },
  ];

  const exampleQuestions = [
    {
      question: t('examples.1.question'),
      answer: t('examples.1.answer'),
    },
    {
      question: t('examples.2.question'),
      answer: t('examples.2.answer'),
    },
    {
      question: t('examples.3.question'),
      answer: t('examples.3.answer'),
    },
    {
      question: t('examples.4.question'),
      answer: t('examples.4.answer'),
    },
  ];

  const capabilities = [
    t('capabilities.1'),
    t('capabilities.2'),
    t('capabilities.3'),
    t('capabilities.4'),
    t('capabilities.5'),
    t('capabilities.6'),
    t('capabilities.7'),
    t('capabilities.8'),
  ];

  const complianceIcon = (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  return (
    <UseCaseTemplate
      useCase="compliance"
      icon={complianceIcon}
      metrics={metrics}
      exampleQuestions={exampleQuestions}
      capabilities={capabilities}
      hasCategories={true}
      hasTargetAudience={true}
      hasIntegrations={true}
      hasSafeguards={true}
      categoryKeys={['gdpr', 'euAiAct', 'sector', 'audit', 'policy', 'risk']}
      integrationKeys={['sharepoint', 'grc', 'audit', 'regulatory', 'teams', 'upload']}
      targetAudienceKeys={['regulation', 'audits', 'documentation', 'challenge']}
      safeguardKeys={['noAdvice', 'regulatory', 'humanReview', 'auditTrail']}
    />
  );
}
