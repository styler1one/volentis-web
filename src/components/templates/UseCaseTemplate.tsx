'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Button from '@/components/ui/Button';

interface Metric {
  value: string;
  label: string;
}

interface ExampleQuestion {
  question: string;
  answer: string;
}

interface Category {
  title: string;
  description: string;
  examples: string[];
}

interface Integration {
  name: string;
  description: string;
}

interface Safeguard {
  title: string;
  description: string;
}

interface UseCaseTemplateProps {
  useCase: 'hr' | 'legal' | 'compliance' | 'it' | 'finance' | 'international';
  icon: React.ReactNode;
  metrics: Metric[];
  exampleQuestions: ExampleQuestion[];
  capabilities: string[];
  hasTargetAudience?: boolean;
  hasIntegrations?: boolean;
  hasSafeguards?: boolean;
  hasCategories?: boolean;
  categoryKeys?: string[];
  integrationKeys?: string[];
  targetAudienceKeys?: string[];
  safeguardKeys?: string[];
}

export default function UseCaseTemplate({
  useCase,
  icon,
  metrics,
  exampleQuestions,
  capabilities,
  hasTargetAudience = false,
  hasIntegrations = false,
  hasSafeguards = false,
  hasCategories = false,
  categoryKeys = [],
  integrationKeys = [],
  targetAudienceKeys = ['size', 'structure', 'documents', 'challenge'],
  safeguardKeys = ['noDecisions', 'humanReview', 'specialData', 'auditTrail'],
}: UseCaseTemplateProps) {
  const t = useTranslations(`useCases.${useCase}`);
  const common = useTranslations('useCases.common');

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative">
          <div className="py-16 md:py-24 lg:py-32">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-text-muted">
                <li>
                  <Link href="/" className="hover:text-volentis-cyan transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/#agents" className="hover:text-volentis-cyan transition-colors">
                    AI Agents
                  </Link>
                </li>
                <li>/</li>
                <li className="text-volentis-navy font-medium">{t('title')}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                {/* Icon & Badge */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center text-volentis-cyan">
                    {icon}
                  </div>
                  <span className="px-4 py-1 bg-volentis-navy/5 border border-volentis-navy/10 rounded-full text-sm font-medium text-volentis-navy">
                    {t('badge')}
                  </span>
                </div>

                {/* Headline - Problem focused */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy tracking-tight leading-tight">
                    {t('headline')}
                  </h1>
                  <p className="text-xl text-text-body">
                    {t('subheadline')}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-white/80 rounded-xl border border-border-gray/20">
                      <p className="text-2xl md:text-3xl font-bold text-volentis-cyan">{metric.value}</p>
                      <p className="text-sm text-text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/demo" size="lg">
                    {common('bookDemo')}
                  </Button>
                  <Button href={`/try/${useCase}`} variant="secondary" size="lg">
                    {common('seeHowItWorks')}
                  </Button>
                </div>
              </div>

              {/* Right: Visual - Problem Illustration */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-card p-8 space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-text-muted uppercase tracking-wider mb-2">{common('theProblem')}</p>
                    <p className="text-lg font-semibold text-volentis-navy">{t('problemStatement')}</p>
                  </div>
                  
                  {/* Pain points */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <span className="text-red-500">⚠️</span>
                        <p className="text-sm text-red-800">{t(`painPoints.${i}`)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Solution teaser */}
                  <div className="p-4 bg-accent-success/10 rounded-lg border border-accent-success/20">
                    <div className="flex items-center gap-3">
                      <span className="text-accent-success text-2xl">✓</span>
                      <p className="text-sm text-accent-success font-medium">{t('solutionTeaser')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
              {common('howItWorks')}
            </h2>
            <p className="text-lg text-text-body">
              {t('howItWorksDescription')}
            </p>
          </div>

          {/* Example Questions */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {exampleQuestions.map((item, index) => (
              <div key={index} className="bg-bg-light rounded-2xl p-6 space-y-4">
                {/* Question */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-volentis-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">👤</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted mb-1">{common('employee')}</p>
                    <p className="text-volentis-navy font-medium">{item.question}</p>
                  </div>
                </div>

                {/* Answer */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-volentis-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🤖</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted mb-1">Volentis.ai</p>
                    <p className="text-text-body">{item.answer}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-accent-success/10 text-accent-success text-xs rounded-full">
                        {common('highConfidence')}
                      </span>
                      <span className="text-xs text-text-muted">{common('sourceVerified')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - What employees can ask about */}
      {hasCategories && categoryKeys.length > 0 && (
        <section className="section-padding bg-bg-light">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
                {t('categories.title')}
              </h2>
              <p className="text-lg text-text-body">
                {t('categories.description')}
              </p>
            </div>

            <div className={`grid md:grid-cols-2 ${categoryKeys.length > 6 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {categoryKeys.map((category) => (
                <div key={category} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow">
                  <h3 className="text-lg font-bold text-volentis-navy mb-2">
                    {t(`categories.items.${category}.title`)}
                  </h3>
                  <p className="text-sm text-text-body mb-4">
                    {t(`categories.items.${category}.description`)}
                  </p>
                  <div className="space-y-2">
                    {[0, 1, 2].map((i) => (
                      <p key={i} className="text-xs text-text-muted italic">
                        &ldquo;{t(`categories.items.${category}.examples.${i}`)}&rdquo;
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Target Audience Section */}
      {hasTargetAudience && (
        <section className="section-padding bg-white">
          <div className="section-container">
            {/* Coverage Note for International */}
            {useCase === 'international' && (
              <div className="mb-8 p-4 bg-volentis-cyan/5 border border-volentis-cyan/20 rounded-lg text-center">
                <p className="text-volentis-navy font-medium">
                  🌍 {t('coverageNote')}
                </p>
              </div>
            )}

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
                  {t('targetAudience.title')}
                </h2>
                <p className="text-lg text-text-body mb-8">
                  {t('targetAudience.description')}
                </p>

                <div className="space-y-4">
                  {targetAudienceKeys.map((item) => (
                    <div key={item} className="flex items-start gap-4 p-4 bg-bg-light rounded-xl">
                      <div className="w-2 h-2 bg-volentis-cyan rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-text-muted">{t(`targetAudience.items.${item}.label`)}</p>
                        <p className="font-semibold text-volentis-navy">{t(`targetAudience.items.${item}.value`)}</p>
                        <p className="text-sm text-text-body">{t(`targetAudience.items.${item}.description`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-volentis-navy/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-volentis-navy mb-6">
                  {t('targetAudience.roles.title')}
                </h3>
                <div className="space-y-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-volentis-cyan/10 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-volentis-navy">{t(`targetAudience.roles.items.${i}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Integrations Section */}
      {hasIntegrations && integrationKeys.length > 0 && (
        <section className="section-padding bg-bg-light">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
                {t('integrations.title')}
              </h2>
              <p className="text-lg text-text-body">
                {t('integrations.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {integrationKeys.map((integration) => (
                <div key={integration} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-volentis-navy mb-2">
                    {t(`integrations.items.${integration}.name`)}
                  </h3>
                  <p className="text-sm text-text-body">
                    {t(`integrations.items.${integration}.description`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Integration note */}
            <p className="text-center text-text-muted text-sm mb-12">
              💡 {common('integrationNote')}
            </p>

            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-volentis-navy mb-4 text-center">
                {t('integrations.documentSources.title')}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="px-4 py-2 bg-bg-light rounded-full text-sm text-text-body">
                    {t(`integrations.documentSources.items.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Capabilities Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-6">
                {t('capabilitiesTitle')}
              </h2>
              <p className="text-lg text-text-body mb-8">
                {t('capabilitiesDescription')}
              </p>

              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-volentis-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-text-body">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual: Results Card */}
            <div className="bg-bg-light rounded-2xl shadow-card p-8">
              <h3 className="text-xl font-bold text-volentis-navy mb-6">{common('expectedResults')}</h3>
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-2xl font-bold text-volentis-cyan">{metric.value}</span>
                    </div>
                    <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-volentis-cyan to-accent-success rounded-full"
                        style={{ width: `${70 + index * 10}%` }}
                      />
                    </div>
                    <div className="w-32">
                      <span className="text-sm text-text-body">{metric.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguards Section - Responsible AI */}
      {hasSafeguards && safeguardKeys.length > 0 && (
        <section className="section-padding bg-bg-light">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
                {t('safeguards.title')}
              </h2>
              <p className="text-lg text-text-body">
                {t('safeguards.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {safeguardKeys.map((safeguard) => (
                <div key={safeguard} className="bg-white rounded-xl p-6 shadow-sm border border-border-gray/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-volentis-navy mb-2">
                        {t(`safeguards.items.${safeguard}.title`)}
                      </h3>
                      <p className="text-sm text-text-body">
                        {t(`safeguards.items.${safeguard}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm text-text-muted italic bg-white rounded-lg p-4 border border-border-gray/20">
                {t('safeguards.disclaimer')}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
              {common('whyTrust')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* No Hallucinations */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{common('noHallucinations')}</h3>
              <p className="text-text-body text-sm">{common('noHallucinationsDesc')}</p>
            </div>

            {/* Source Attribution */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{common('sourceAttribution')}</h3>
              <p className="text-text-body text-sm">{common('sourceAttributionDesc')}</p>
            </div>

            {/* Compliance */}
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{common('compliance')}</h3>
              <p className="text-text-body text-sm">{common('complianceDesc')}</p>
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
            {/* Trusted by line */}
            <p className="text-white/60 text-sm mb-4">{common('trustedBy')}</p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-white/80 mb-4">
              {t('ctaDescription')}
            </p>
            
            {/* Why Volentis - compact differentiator */}
            <p className="text-sm text-volentis-cyan/90 mb-8 max-w-xl mx-auto">
              {t('ctaWhyVolentis')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" variant="white" size="lg">
                {common('bookDemo')}
              </Button>
              <Button
                href={`/try/${useCase}`}
                variant="outline-light"
                size="lg"
              >
                {common('seeHowItWorks')}
              </Button>
            </div>

            {/* Quick trust indicators with timeline */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2 text-volentis-cyan font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('ctaTimeline')}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {common('noCreditCard')}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {common('euDataResidency')}
              </span>
            </div>

            {/* What happens next - reduces uncertainty */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/80 font-medium mb-4">{common('whatHappensNext')}</p>
              <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-volentis-cyan/20 rounded-full flex items-center justify-center text-volentis-cyan text-xs font-bold">1</span>
                  {common('demoStep1')}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-volentis-cyan/20 rounded-full flex items-center justify-center text-volentis-cyan text-xs font-bold">2</span>
                  {common('demoStep2')}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-volentis-cyan/20 rounded-full flex items-center justify-center text-volentis-cyan text-xs font-bold">3</span>
                  {common('demoStep3')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Use Cases */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
              {common('exploreOtherAgents')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['hr', 'legal', 'compliance', 'it', 'finance', 'international']
              .filter((uc) => uc !== useCase)
              .slice(0, 3)
              .map((uc) => (
                <Link
                  key={uc}
                  href={`/use-cases/${uc}`}
                  className="group card hover:shadow-card-hover transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-volentis-navy mb-2 group-hover:text-volentis-cyan transition-colors">
                    {common(`agents.${uc}`)}
                  </h3>
                  <p className="text-sm text-text-body mb-4">{common(`agentDescriptions.${uc}`)}</p>
                  <span className="inline-flex items-center gap-2 text-volentis-cyan font-medium text-sm group-hover:gap-3 transition-all">
                    {common('learnMore')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
