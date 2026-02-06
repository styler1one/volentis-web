import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import UseCaseTemplate from '@/components/templates/UseCaseTemplate';
import { getAlternates } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.finance' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getAlternates('/use-cases/finance', locale),
  };
}

export default async function FinanceUseCasePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'useCases.finance' });

  const metrics = [
    { value: '60%', label: t('metrics.proceduralErrors') },
    { value: '40%', label: t('metrics.processingTime') },
    { value: '70%', label: t('metrics.complianceDeviations') },
    { value: '85%+', label: t('metrics.firstTimeRight') },
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

  const financeIcon = (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <UseCaseTemplate
      useCase="finance"
      icon={financeIcon}
      metrics={metrics}
      exampleQuestions={exampleQuestions}
      capabilities={capabilities}
      hasCategories={true}
      hasTargetAudience={true}
      hasIntegrations={true}
      hasSafeguards={true}
      categoryKeys={['procurement', 'expenses', 'approvals', 'budgets', 'invoices', 'policies']}
      integrationKeys={['erp', 'expense', 'p2p', 'sharepoint', 'teams', 'upload']}
      targetAudienceKeys={['complexity', 'volume', 'documentation', 'challenge']}
      safeguardKeys={['noApprovals', 'verification', 'policyChanges', 'auditTrail']}
    />
  );
}
