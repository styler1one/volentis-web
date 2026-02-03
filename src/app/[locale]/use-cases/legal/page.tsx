import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import UseCaseTemplate from '@/components/templates/UseCaseTemplate';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.legal' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function LegalUseCasePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'useCases.legal' });

  const metrics = [
    { value: '70%', label: t('metrics.fasterReview') },
    { value: '50%', label: t('metrics.dueDiligence') },
    { value: '90%', label: t('metrics.clauseAccuracy') },
    { value: '30%', label: t('metrics.legalCosts') },
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

  const legalIcon = (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );

  return (
    <UseCaseTemplate
      useCase="legal"
      icon={legalIcon}
      metrics={metrics}
      exampleQuestions={exampleQuestions}
      capabilities={capabilities}
      hasCategories={true}
      hasTargetAudience={true}
      hasIntegrations={true}
      hasSafeguards={true}
      categoryKeys={['contractAnalysis', 'regulatory', 'policyDev', 'dueDiligence', 'litigation', 'compliance']}
      integrationKeys={['sharepoint', 'teams', 'onedrive', 'email', 'clm', 'upload']}
      targetAudienceKeys={['volume', 'complexity', 'frequency', 'challenge']}
      safeguardKeys={['noAdvice', 'privilege', 'humanReview', 'auditTrail']}
    />
  );
}
