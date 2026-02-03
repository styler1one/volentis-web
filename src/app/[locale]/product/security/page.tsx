import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productPages.security' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function SecurityPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'productPages.security' });

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

      {/* Compliance Badges */}
      <section className="py-8 bg-white border-b border-border-gray/20">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-bg-light rounded-xl">
              <span className="text-2xl">🇪🇺</span>
              <span className="font-medium text-volentis-navy">{t('badges.euHosted')}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-bg-light rounded-xl">
              <span className="text-2xl">🛡️</span>
              <span className="font-medium text-volentis-navy">{t('badges.gdpr')}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-bg-light rounded-xl">
              <span className="text-2xl">🤖</span>
              <span className="font-medium text-volentis-navy">{t('badges.euAiAct')}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-bg-light rounded-xl">
              <span className="text-2xl">🔐</span>
              <span className="font-medium text-volentis-navy">{t('badges.encryption')}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-volentis-cyan/10 border-2 border-volentis-cyan rounded-xl">
              <span className="text-2xl">🚫</span>
              <span className="font-medium text-volentis-navy">{t('badges.noTraining')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* No Training on Customer Data - PROMINENT */}
      <section className="section-padding bg-volentis-navy text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔒</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('noTraining.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t('noTraining.description')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3 text-left p-4 bg-white/5 rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-white/90">{t('noTraining.points.1')}</span>
              </div>
              <div className="flex items-start gap-3 text-left p-4 bg-white/5 rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-white/90">{t('noTraining.points.2')}</span>
              </div>
              <div className="flex items-start gap-3 text-left p-4 bg-white/5 rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-white/90">{t('noTraining.points.3')}</span>
              </div>
              <div className="flex items-start gap-3 text-left p-4 bg-white/5 rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-white/90">{t('noTraining.points.4')}</span>
              </div>
            </div>

            <p className="text-xl font-bold text-volentis-cyan">
              {t('noTraining.highlight')}
            </p>
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-6">
                {t('gdpr.title')}
              </h2>
              <p className="text-text-body mb-8">
                {t('gdpr.description')}
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-bg-light rounded-xl">
                  <h3 className="font-bold text-volentis-navy mb-2">{t('gdpr.dataProcessor.title')}</h3>
                  <p className="text-sm text-text-body">{t('gdpr.dataProcessor.description')}</p>
                </div>
                <div className="p-4 bg-bg-light rounded-xl">
                  <h3 className="font-bold text-volentis-navy mb-2">{t('gdpr.dpa.title')}</h3>
                  <p className="text-sm text-text-body">{t('gdpr.dpa.description')}</p>
                </div>
                <div className="p-4 bg-bg-light rounded-xl">
                  <h3 className="font-bold text-volentis-navy mb-2">{t('gdpr.dataSubjectRights.title')}</h3>
                  <p className="text-sm text-text-body">{t('gdpr.dataSubjectRights.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-volentis-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">{t('gdpr.keyCommitments.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-volentis-cyan">✓</span>
                  <span>{t('gdpr.keyCommitments.1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-volentis-cyan">✓</span>
                  <span>{t('gdpr.keyCommitments.2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-volentis-cyan">✓</span>
                  <span>{t('gdpr.keyCommitments.3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-volentis-cyan">✓</span>
                  <span>{t('gdpr.keyCommitments.4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-volentis-cyan">✓</span>
                  <span>{t('gdpr.keyCommitments.5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EU AI Act */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-6">
                {t('euAiAct.title')}
              </h2>
              <p className="text-text-body mb-8">
                {t('euAiAct.description')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <span className="text-3xl">📋</span>
                  <div>
                    <h3 className="font-bold text-volentis-navy">{t('euAiAct.transparency.title')}</h3>
                    <p className="text-sm text-text-body">{t('euAiAct.transparency.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <span className="text-3xl">🏷️</span>
                  <div>
                    <h3 className="font-bold text-volentis-navy">{t('euAiAct.disclosure.title')}</h3>
                    <p className="text-sm text-text-body">{t('euAiAct.disclosure.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <span className="text-3xl">👤</span>
                  <div>
                    <h3 className="font-bold text-volentis-navy">{t('euAiAct.humanOversight.title')}</h3>
                    <p className="text-sm text-text-body">{t('euAiAct.humanOversight.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="bg-white rounded-2xl shadow-card p-8">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-2 bg-accent-success/10 text-accent-success font-bold rounded-full">
                    {t('euAiAct.classification.badge')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-volentis-navy text-center mb-4">
                  {t('euAiAct.classification.title')}
                </h3>
                <p className="text-text-body text-center mb-6">
                  {t('euAiAct.classification.description')}
                </p>
                <div className="p-4 bg-bg-light rounded-lg">
                  <p className="text-sm text-text-body">
                    <strong>{t('euAiAct.classification.article')}:</strong> {t('euAiAct.classification.articleDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Security */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-12">
            {t('technical.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('technical.encryption.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('technical.encryption.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('technical.encryption.benefit')}
              </p>
            </div>

            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('technical.authentication.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('technical.authentication.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('technical.authentication.benefit')}
              </p>
            </div>

            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('technical.rbac.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('technical.rbac.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('technical.rbac.benefit')}
              </p>
            </div>

            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('technical.auditLogging.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('technical.auditLogging.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('technical.auditLogging.benefit')}
              </p>
            </div>

            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('technical.tenantIsolation.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('technical.tenantIsolation.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('technical.tenantIsolation.benefit')}
              </p>
            </div>

            <div className="card group hover:border-volentis-cyan/30 transition-all">
              <div className="w-14 h-14 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('technical.byok.title')}</h3>
              <p className="text-text-body text-sm mb-3">{t('technical.byok.description')}</p>
              <p className="text-sm text-accent-success font-medium flex items-start gap-2">
                <span className="text-accent-success mt-0.5">→</span>
                {t('technical.byok.benefit')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Safeguards */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-4">
            {t('safeguards.title')}
          </h2>
          <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
            {t('safeguards.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
              <span className="text-3xl">🚫</span>
              <div>
                <h3 className="font-bold text-volentis-navy mb-2">{t('safeguards.items.noAutomatedDecisions.title')}</h3>
                <p className="text-sm text-text-body">{t('safeguards.items.noAutomatedDecisions.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
              <span className="text-3xl">🔒</span>
              <div>
                <h3 className="font-bold text-volentis-navy mb-2">{t('safeguards.items.specialCategoryData.title')}</h3>
                <p className="text-sm text-text-body">{t('safeguards.items.specialCategoryData.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
              <span className="text-3xl">👁️</span>
              <div>
                <h3 className="font-bold text-volentis-navy mb-2">{t('safeguards.items.humanInLoop.title')}</h3>
                <p className="text-sm text-text-body">{t('safeguards.items.humanInLoop.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
              <span className="text-3xl">⚖️</span>
              <div>
                <h3 className="font-bold text-volentis-navy mb-2">{t('safeguards.items.professionalAdvice.title')}</h3>
                <p className="text-sm text-text-body">{t('safeguards.items.professionalAdvice.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
            {t('certifications.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6 bg-bg-light rounded-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                🔄 {t('certifications.iso27001.status')}
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('certifications.iso27001.title')}</h3>
              <p className="text-sm text-text-body">{t('certifications.iso27001.description')}</p>
            </div>
            <div className="text-center p-6 bg-bg-light rounded-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-success/20 text-accent-success rounded-full text-sm font-medium mb-4">
                ✓ {t('certifications.gdprArticle28.status')}
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('certifications.gdprArticle28.title')}</h3>
              <p className="text-sm text-text-body">{t('certifications.gdprArticle28.description')}</p>
            </div>
            <div className="text-center p-6 bg-bg-light rounded-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-success/20 text-accent-success rounded-full text-sm font-medium mb-4">
                ✓ {t('certifications.euAiActArticle52.status')}
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('certifications.euAiActArticle52.title')}</h3>
              <p className="text-sm text-text-body">{t('certifications.euAiActArticle52.description')}</p>
            </div>
          </div>

          {/* Security Assurance - Pentest & Contact */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔍</span>
                <h3 className="font-bold text-volentis-navy">{t('securityAssurance.pentest.title')}</h3>
              </div>
              <p className="text-sm text-text-body">{t('securityAssurance.pentest.description')}</p>
            </div>
            <div className="p-6 bg-bg-light rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📧</span>
                <h3 className="font-bold text-volentis-navy">{t('securityAssurance.contact.title')}</h3>
              </div>
              <p className="text-sm text-text-body mb-2">{t('securityAssurance.contact.description')}</p>
              <a 
                href="mailto:security@volentis.ai" 
                className="text-volentis-cyan font-medium hover:underline"
              >
                {t('securityAssurance.contact.email')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Documentation Request - Mid-page CTA for DPOs */}
      <section className="py-12 bg-volentis-cyan/5 border-y border-volentis-cyan/10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-volentis-navy mb-1">
                {t('docRequest.title')}
              </h3>
              <p className="text-text-body mb-2">
                {t('docRequest.description')}
              </p>
              <p className="text-xs text-text-muted">
                {t('docRequest.includes')}
              </p>
            </div>
            <Button href="/contact" variant="secondary" size="md">
              {t('docRequest.button')}
            </Button>
          </div>
        </div>
      </section>

      {/* Sector-Specific Compliance */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-4">
            {t('sectorCompliance.title')}
          </h2>
          <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
            {t('sectorCompliance.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏦</span>
                <h3 className="font-bold text-volentis-navy">{t('sectorCompliance.sectors.financial.title')}</h3>
              </div>
              <p className="text-xs text-volentis-cyan font-medium mb-2">{t('sectorCompliance.sectors.financial.regulations')}</p>
              <p className="text-sm text-text-body">{t('sectorCompliance.sectors.financial.description')}</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏥</span>
                <h3 className="font-bold text-volentis-navy">{t('sectorCompliance.sectors.healthcare.title')}</h3>
              </div>
              <p className="text-xs text-volentis-cyan font-medium mb-2">{t('sectorCompliance.sectors.healthcare.regulations')}</p>
              <p className="text-sm text-text-body">{t('sectorCompliance.sectors.healthcare.description')}</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏛️</span>
                <h3 className="font-bold text-volentis-navy">{t('sectorCompliance.sectors.government.title')}</h3>
              </div>
              <p className="text-xs text-volentis-cyan font-medium mb-2">{t('sectorCompliance.sectors.government.regulations')}</p>
              <p className="text-sm text-text-body">{t('sectorCompliance.sectors.government.description')}</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌍</span>
                <h3 className="font-bold text-volentis-navy">{t('sectorCompliance.sectors.crossBorder.title')}</h3>
              </div>
              <p className="text-xs text-volentis-cyan font-medium mb-2">{t('sectorCompliance.sectors.crossBorder.regulations')}</p>
              <p className="text-sm text-text-body">{t('sectorCompliance.sectors.crossBorder.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-4">
            {t('technicalSpecs.title')}
          </h2>
          <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
            {t('technicalSpecs.description')}
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Session Management */}
            <div className="bg-bg-light rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold text-volentis-navy">{t('technicalSpecs.items.sessionManagement.label')}</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-text-muted font-mono mb-2">{t('technicalSpecs.items.sessionManagement.value')}</p>
                  <p className="text-sm text-accent-success flex items-center gap-2">
                    <span>→</span> {t('technicalSpecs.items.sessionManagement.plainEnglish')}
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-bg-light rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold text-volentis-navy">{t('technicalSpecs.items.dataRetention.label')}</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-text-muted font-mono mb-2">{t('technicalSpecs.items.dataRetention.value')}</p>
                  <p className="text-sm text-accent-success flex items-center gap-2">
                    <span>→</span> {t('technicalSpecs.items.dataRetention.plainEnglish')}
                  </p>
                </div>
              </div>
            </div>

            {/* SharePoint Sync */}
            <div className="bg-bg-light rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold text-volentis-navy">{t('technicalSpecs.items.sharepointSync.label')}</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-text-muted font-mono mb-2">{t('technicalSpecs.items.sharepointSync.value')}</p>
                  <p className="text-sm text-accent-success flex items-center gap-2">
                    <span>→</span> {t('technicalSpecs.items.sharepointSync.plainEnglish')}
                  </p>
                </div>
              </div>
            </div>

            {/* Encryption Standards */}
            <div className="bg-bg-light rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold text-volentis-navy">{t('technicalSpecs.items.encryptionStandards.label')}</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-text-muted font-mono mb-2">{t('technicalSpecs.items.encryptionStandards.value')}</p>
                  <p className="text-sm text-accent-success flex items-center gap-2">
                    <span>→</span> {t('technicalSpecs.items.encryptionStandards.plainEnglish')}
                  </p>
                </div>
              </div>
            </div>

            {/* API Security */}
            <div className="bg-bg-light rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3">
                  <h4 className="font-bold text-volentis-navy">{t('technicalSpecs.items.apiSecurity.label')}</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-text-muted font-mono mb-2">{t('technicalSpecs.items.apiSecurity.value')}</p>
                  <p className="text-sm text-accent-success flex items-center gap-2">
                    <span>→</span> {t('technicalSpecs.items.apiSecurity.plainEnglish')}
                  </p>
                </div>
              </div>
            </div>

            {/* Browser Support */}
            <div className="mt-8 p-6 bg-bg-light rounded-xl">
              <h3 className="font-bold text-volentis-navy mb-4">{t('technicalSpecs.browserSupport.title')}</h3>
              <p className="text-sm text-text-body mb-4">{t('technicalSpecs.browserSupport.description')}</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">{t('technicalSpecs.browserSupport.browsers.chrome')}</span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">{t('technicalSpecs.browserSupport.browsers.firefox')}</span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">{t('technicalSpecs.browserSupport.browsers.safari')}</span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">{t('technicalSpecs.browserSupport.browsers.edge')}</span>
              </div>
              <p className="text-xs text-text-muted mt-4">{t('technicalSpecs.browserSupport.requirements')}</p>
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
            <Button href="/contact" variant="white" size="lg">
              {t('cta.button')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
