import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productPages.features' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function FeaturesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'productPages.features' });

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-volentis-cyan/10 text-volentis-cyan text-sm font-semibold rounded-full mb-6">
              {t('badge')}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-6">
              {t('headline')}
            </h1>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('subheadline')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-12">
            {t('coreCapabilities.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Conversational AI */}
            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('coreCapabilities.conversational.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('coreCapabilities.conversational.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('coreCapabilities.conversational.benefit')}
              </p>
            </div>

            {/* RAG Architecture */}
            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('coreCapabilities.rag.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('coreCapabilities.rag.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('coreCapabilities.rag.benefit')}
              </p>
            </div>

            {/* Source Attribution */}
            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('coreCapabilities.sources.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('coreCapabilities.sources.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('coreCapabilities.sources.benefit')}
              </p>
            </div>

            {/* Confidence Scoring */}
            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('coreCapabilities.confidence.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('coreCapabilities.confidence.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('coreCapabilities.confidence.benefit')}
              </p>
            </div>

            {/* Multi-language */}
            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('coreCapabilities.multilanguage.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('coreCapabilities.multilanguage.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('coreCapabilities.multilanguage.benefit')}
              </p>
            </div>

            {/* Audit Trail */}
            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('coreCapabilities.audit.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('coreCapabilities.audit.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('coreCapabilities.audit.benefit')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Chat - Decision Support Engine */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
              {t('beyondChat.title')}
            </h2>
            <p className="text-text-body">
              {t('beyondChat.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Agentic Workflows */}
            <div className="card border-2 border-volentis-cyan/20">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('beyondChat.agenticWorkflows.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('beyondChat.agenticWorkflows.description')}</p>
              <div className="p-3 bg-bg-light-blue rounded-lg border-l-4 border-volentis-cyan">
                <p className="text-xs text-volentis-navy italic">{t('beyondChat.agenticWorkflows.benefit')}</p>
              </div>
            </div>

            {/* Decision Support */}
            <div className="card border-2 border-volentis-cyan/20">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('beyondChat.decisionSupport.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('beyondChat.decisionSupport.description')}</p>
              <div className="p-3 bg-bg-light-blue rounded-lg border-l-4 border-volentis-cyan">
                <p className="text-xs text-volentis-navy italic">{t('beyondChat.decisionSupport.benefit')}</p>
              </div>
            </div>

            {/* Draft Generation */}
            <div className="card border-2 border-volentis-cyan/20">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('beyondChat.draftGeneration.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('beyondChat.draftGeneration.description')}</p>
              <div className="p-3 bg-bg-light-blue rounded-lg border-l-4 border-volentis-cyan">
                <p className="text-xs text-volentis-navy italic">{t('beyondChat.draftGeneration.benefit')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA - Most customers start with HR */}
      <section className="py-12 bg-volentis-cyan/5 border-y border-volentis-cyan/10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-volentis-navy mb-1">
                {t('midPageCta.title')}
              </h3>
              <p className="text-text-body">
                {t('midPageCta.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/use-cases/hr" size="md">
                {t('midPageCta.button')}
              </Button>
              <Link 
                href="/#agents" 
                className="inline-flex items-center justify-center px-4 py-2 text-volentis-cyan hover:text-volentis-cyan-hover font-medium"
              >
                {t('midPageCta.secondary')} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Document Processing Pipeline */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
              {t('documentPipeline.title')}
            </h2>
            <p className="text-text-body">
              {t('documentPipeline.description')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="flex-1 text-center p-6 bg-bg-light rounded-xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-volentis-cyan text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="font-bold text-volentis-navy mb-1">{t('documentPipeline.steps.extraction.title')}</h3>
                <p className="text-xs text-text-body">{t('documentPipeline.steps.extraction.description')}</p>
              </div>

              <svg className="w-6 h-6 text-volentis-cyan hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>

              {/* Step 2 */}
              <div className="flex-1 text-center p-6 bg-bg-light rounded-xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-volentis-cyan text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="font-bold text-volentis-navy mb-1">{t('documentPipeline.steps.classification.title')}</h3>
                <p className="text-xs text-text-body">{t('documentPipeline.steps.classification.description')}</p>
              </div>

              <svg className="w-6 h-6 text-volentis-cyan hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>

              {/* Step 3 */}
              <div className="flex-1 text-center p-6 bg-bg-light rounded-xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-volentis-cyan text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="font-bold text-volentis-navy mb-1">{t('documentPipeline.steps.metadata.title')}</h3>
                <p className="text-xs text-text-body">{t('documentPipeline.steps.metadata.description')}</p>
              </div>

              <svg className="w-6 h-6 text-volentis-cyan hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>

              {/* Step 4 */}
              <div className="flex-1 text-center p-6 bg-bg-light rounded-xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-volentis-cyan text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="font-bold text-volentis-navy mb-1">{t('documentPipeline.steps.indexing.title')}</h3>
                <p className="text-xs text-text-body">{t('documentPipeline.steps.indexing.description')}</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-success/10 text-accent-success rounded-full font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('documentPipeline.readyLabel')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Management */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-6">
                {t('knowledgeManagement.title')}
              </h2>
              <p className="text-text-body mb-8">
                {t('knowledgeManagement.description')}
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('knowledgeManagement.features.sharepoint')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('knowledgeManagement.features.autoClassification')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('knowledgeManagement.features.versionTracking')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('knowledgeManagement.features.semanticSearch')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-card p-8">
              <h3 className="font-bold text-volentis-navy mb-4">{t('knowledgeManagement.formats.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 p-3 bg-bg-light rounded-lg">
                  <span className="text-2xl">📄</span>
                  <span className="text-sm font-medium">PDF</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-bg-light rounded-lg">
                  <span className="text-2xl">📝</span>
                  <span className="text-sm font-medium">Word (.docx)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-bg-light rounded-lg">
                  <span className="text-2xl">📊</span>
                  <span className="text-sm font-medium">Excel (.xlsx)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-bg-light rounded-lg">
                  <span className="text-2xl">📽️</span>
                  <span className="text-sm font-medium">PowerPoint (.pptx)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-bg-light rounded-lg">
                  <span className="text-2xl">📃</span>
                  <span className="text-sm font-medium">Plain Text (.txt)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-bg-light rounded-lg">
                  <span className="text-2xl">📋</span>
                  <span className="text-sm font-medium">RTF</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-volentis-cyan/10 rounded-lg">
                <p className="text-sm text-volentis-navy">
                  <strong>{t('knowledgeManagement.formats.maxSize')}:</strong> 50MB {t('knowledgeManagement.formats.perFile')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administration & Governance */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
              {t('administration.title')}
            </h2>
            <p className="text-text-body">
              {t('administration.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="w-12 h-12 bg-volentis-navy/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('administration.features.adminConsole.title')}</h3>
              <p className="text-sm text-text-body">{t('administration.features.adminConsole.description')}</p>
            </div>
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="w-12 h-12 bg-volentis-navy/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('administration.features.rbac.title')}</h3>
              <p className="text-sm text-text-body">{t('administration.features.rbac.description')}</p>
            </div>
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="w-12 h-12 bg-volentis-navy/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('administration.features.contentPolicies.title')}</h3>
              <p className="text-sm text-text-body">{t('administration.features.contentPolicies.description')}</p>
            </div>
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="w-12 h-12 bg-volentis-navy/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('administration.features.complianceDashboard.title')}</h3>
              <p className="text-sm text-text-body">{t('administration.features.complianceDashboard.description')}</p>
            </div>
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="w-12 h-12 bg-volentis-navy/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('administration.features.userProvisioning.title')}</h3>
              <p className="text-sm text-text-body">{t('administration.features.userProvisioning.description')}</p>
            </div>
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="w-12 h-12 bg-volentis-navy/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🗓️</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('administration.features.retentionPolicies.title')}</h3>
              <p className="text-sm text-text-body">{t('administration.features.retentionPolicies.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
              {t('accessibility.title')}
            </h2>
            <p className="text-text-body">
              {t('accessibility.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('accessibility.mobile.title')}</h3>
              <p className="text-sm text-text-body">{t('accessibility.mobile.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('accessibility.crossDevice.title')}</h3>
              <p className="text-sm text-text-body">{t('accessibility.crossDevice.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⌨️</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('accessibility.keyboard.title')}</h3>
              <p className="text-sm text-text-body">{t('accessibility.keyboard.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🔊</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('accessibility.screenReader.title')}</h3>
              <p className="text-sm text-text-body">{t('accessibility.screenReader.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('accessibility.visual.title')}</h3>
              <p className="text-sm text-text-body">{t('accessibility.visual.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Features */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-4">
            {t('collaboration.title')}
          </h2>
          <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
            {t('collaboration.description')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-navy/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('collaboration.features.workspaces.title')}</h3>
              <p className="text-sm text-text-body">{t('collaboration.features.workspaces.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-navy/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('collaboration.features.sharing.title')}</h3>
              <p className="text-sm text-text-body">{t('collaboration.features.sharing.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-navy/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('collaboration.features.annotations.title')}</h3>
              <p className="text-sm text-text-body">{t('collaboration.features.annotations.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-navy/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📤</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('collaboration.features.export.title')}</h3>
              <p className="text-sm text-text-body">{t('collaboration.features.export.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Fit Section */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-12">
              {t('perfectFit.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="font-bold text-volentis-navy mb-1">{t('perfectFit.items.1.title')}</h3>
                  <p className="text-sm text-text-body">{t('perfectFit.items.1.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <h3 className="font-bold text-volentis-navy mb-1">{t('perfectFit.items.2.title')}</h3>
                  <p className="text-sm text-text-body">{t('perfectFit.items.2.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="font-bold text-volentis-navy mb-1">{t('perfectFit.items.3.title')}</h3>
                  <p className="text-sm text-text-body">{t('perfectFit.items.3.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="font-bold text-volentis-navy mb-1">{t('perfectFit.items.4.title')}</h3>
                  <p className="text-sm text-text-body">{t('perfectFit.items.4.description')}</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button href="/contact" size="lg">
                {t('perfectFit.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-volentis-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="white" size="lg">
                {t('cta.button')}
              </Button>
              <Link
                href="/product/integrations"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-volentis-navy transition-colors"
              >
                {t('cta.secondaryButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
