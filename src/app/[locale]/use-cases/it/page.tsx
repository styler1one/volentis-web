import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import UseCaseTemplate from '@/components/templates/UseCaseTemplate';
import { getAlternates } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.it' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getAlternates('/use-cases/it', locale),
  };
}

export default async function ITUseCasePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'useCases.it' });

  const metrics = [
    { value: '50-60%', label: t('metrics.ticketDeflection') },
    { value: '40%', label: t('metrics.resolutionTime') },
    { value: '35%', label: t('metrics.costReduction') },
    { value: '+25%', label: t('metrics.satisfaction') },
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

  const itIcon = (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <UseCaseTemplate
      useCase="it"
      icon={itIcon}
      metrics={metrics}
      exampleQuestions={exampleQuestions}
      capabilities={capabilities}
      hasCategories={true}
      hasTargetAudience={true}
      hasIntegrations={true}
      hasSafeguards={true}
      categoryKeys={['access', 'connectivity', 'software', 'hardware', 'security', 'procedures']}
      integrationKeys={['itsm', 'knowledge', 'sharepoint', 'teams', 'ad', 'upload']}
      targetAudienceKeys={['ticketVolume', 'teamSize', 'documentation', 'challenge']}
      safeguardKeys={['noSystemChanges', 'escalation', 'security', 'auditTrail']}
    />
  );
}
