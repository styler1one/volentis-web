import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import UseCaseTemplate from '@/components/templates/UseCaseTemplate';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.hr' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function HRUseCasePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'useCases.hr' });
  const common = await getTranslations({ locale, namespace: 'useCases.common' });

  const metrics = [
    { value: '50-70%', label: t('metrics.ticketReduction') },
    { value: '24/7', label: t('metrics.availability') },
    { value: '+30%', label: t('metrics.satisfaction') },
    { value: '50%', label: t('metrics.onboarding') },
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

  const hrIcon = (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  return (
    <UseCaseTemplate
      useCase="hr"
      icon={hrIcon}
      metrics={metrics}
      exampleQuestions={exampleQuestions}
      capabilities={capabilities}
      hasCategories={true}
      hasTargetAudience={true}
      hasIntegrations={true}
      hasSafeguards={true}
      categoryKeys={['policy', 'onboarding', 'benefits', 'performance', 'relations', 'recruitment', 'compensation', 'dataProtection']}
      integrationKeys={['afas', 'successfactors', 'workday', 'personio', 'dynamics', 'outlook']}
      targetAudienceKeys={['size', 'structure', 'documents', 'challenge']}
      safeguardKeys={['noDecisions', 'humanReview', 'specialData', 'auditTrail']}
    />
  );
}
