import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Button from '@/components/ui/Button';
import { getAlternates } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productPages.integrations' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getAlternates('/product/integrations', locale),
  };
}

export default async function IntegrationsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'productPages.integrations' });

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

      {/* Why Integrations Matter */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
            {t('whyIntegrations.title')}
          </h2>
          <p className="text-text-body mb-8 max-w-2xl">
            {t('whyIntegrations.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-l-4 border-volentis-cyan">
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('whyIntegrations.benefits.noMigration.title')}</h3>
              <p className="text-text-body text-sm">{t('whyIntegrations.benefits.noMigration.description')}</p>
            </div>
            <div className="card border-l-4 border-volentis-cyan">
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('whyIntegrations.benefits.singleSignOn.title')}</h3>
              <p className="text-text-body text-sm">{t('whyIntegrations.benefits.singleSignOn.description')}</p>
            </div>
            <div className="card border-l-4 border-volentis-cyan">
              <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('whyIntegrations.benefits.whereTheyWork.title')}</h3>
              <p className="text-text-body text-sm">{t('whyIntegrations.benefits.whereTheyWork.description')}</p>
            </div>
          </div>

          {/* Not listed callout */}
          <div className="mt-10 p-6 bg-volentis-cyan/5 border border-volentis-cyan/20 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🔌</span>
              <div>
                <h3 className="font-bold text-volentis-navy">{t('whyIntegrations.notListed.title')}</h3>
                <p className="text-text-body text-sm">{t('whyIntegrations.notListed.description')}</p>
              </div>
            </div>
            <Button href="/contact" variant="secondary" size="md">
              {t('whyIntegrations.notListed.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Document Sources */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
            {t('documentSources.title')}
          </h2>
          <p className="text-text-body mb-8 max-w-2xl">
            {t('documentSources.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SharePoint */}
            <div className="card border-2 border-volentis-cyan/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#0078D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">📁</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-volentis-navy">{t('documentSources.sharepoint.title')}</h3>
                    <span className="text-xs bg-accent-success/10 text-accent-success font-medium px-2 py-1 rounded-full">
                      {t('documentSources.sharepoint.timeline')}
                    </span>
                  </div>
                  <p className="text-text-body text-sm mb-4">{t('documentSources.sharepoint.description')}</p>
                  <ul className="space-y-2 text-sm text-text-body mb-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-success">✓</span>
                      {t('documentSources.sharepoint.features.oauth')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-success">✓</span>
                      {t('documentSources.sharepoint.features.readOnly')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-success">✓</span>
                      {t('documentSources.sharepoint.features.sync')}
                    </li>
                  </ul>
                  <div className="p-3 bg-bg-light-blue rounded-lg border-l-4 border-volentis-cyan">
                    <p className="text-xs text-volentis-navy italic">{t('documentSources.sharepoint.benefit')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Upload */}
            <div className="card border-2 border-volentis-cyan/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-volentis-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">⬆️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-volentis-navy mb-2">{t('documentSources.upload.title')}</h3>
                  <p className="text-text-body text-sm mb-4">{t('documentSources.upload.description')}</p>
                  <ul className="space-y-2 text-sm text-text-body mb-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-success">✓</span>
                      {t('documentSources.upload.features.batch')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-success">✓</span>
                      {t('documentSources.upload.features.formats')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-success">✓</span>
                      {t('documentSources.upload.features.size')}
                    </li>
                  </ul>
                  <div className="p-3 bg-bg-light-blue rounded-lg border-l-4 border-volentis-cyan">
                    <p className="text-xs text-volentis-navy italic">{t('documentSources.upload.benefit')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Systems */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
                {t('hrSystems.title')}
              </h2>
              <p className="text-text-body mb-6">
                {t('hrSystems.description')}
              </p>
              <div className="p-4 bg-volentis-cyan/10 rounded-xl border-l-4 border-volentis-cyan">
                <p className="text-sm text-volentis-navy font-medium">{t('hrSystems.benefit')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-volentis-navy">A</span>
                </div>
                <p className="font-medium text-volentis-navy">AFAS</p>
                <p className="text-xs text-text-muted mt-1">{t('hrSystems.systems.afas')}</p>
              </div>
              <div className="bg-bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-volentis-navy">S</span>
                </div>
                <p className="font-medium text-volentis-navy">SAP</p>
                <p className="text-xs text-text-muted mt-1">{t('hrSystems.systems.sap')}</p>
              </div>
              <div className="bg-bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-volentis-navy">D</span>
                </div>
                <p className="font-medium text-volentis-navy">Dynamics</p>
                <p className="text-xs text-text-muted mt-1">{t('hrSystems.systems.dynamics')}</p>
              </div>
              <div className="bg-bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-volentis-navy">W</span>
                </div>
                <p className="font-medium text-volentis-navy">Workday</p>
                <p className="text-xs text-text-muted mt-1">{t('hrSystems.systems.workday')}</p>
              </div>
              <div className="bg-bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-volentis-navy">P</span>
                </div>
                <p className="font-medium text-volentis-navy">Personio</p>
                <p className="text-xs text-text-muted mt-1">{t('hrSystems.systems.personio')}</p>
              </div>
              <div className="bg-bg-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-volentis-navy">O</span>
                </div>
                <p className="font-medium text-volentis-navy">Outlook</p>
                <p className="text-xs text-text-muted mt-1">{t('hrSystems.systems.outlook')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity & Collaboration */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Identity & Access */}
            <div>
              <h2 className="text-2xl font-bold text-volentis-navy mb-4">
                {t('identity.title')}
              </h2>
              <p className="text-text-body mb-6">{t('identity.description')}</p>
              <div className="space-y-4">
                <div className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-volentis-navy">SAML 2.0</h3>
                    <span className="text-xs text-text-muted bg-bg-light px-2 py-1 rounded">{t('identity.saml.technical')}</span>
                  </div>
                  <p className="text-sm text-text-body">{t('identity.saml.benefit')}</p>
                </div>
                <div className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-volentis-navy">OpenID Connect</h3>
                    <span className="text-xs text-text-muted bg-bg-light px-2 py-1 rounded">{t('identity.oidc.technical')}</span>
                  </div>
                  <p className="text-sm text-text-body">{t('identity.oidc.benefit')}</p>
                </div>
                <div className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-volentis-navy">Automatic User Management</h3>
                    <span className="text-xs text-text-muted bg-bg-light px-2 py-1 rounded">{t('identity.scim.technical')}</span>
                  </div>
                  <p className="text-sm text-text-body">{t('identity.scim.benefit')}</p>
                </div>
                <div className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-volentis-navy">Multi-Factor Authentication</h3>
                    <span className="text-xs text-text-muted bg-bg-light px-2 py-1 rounded">{t('identity.mfa.technical')}</span>
                  </div>
                  <p className="text-sm text-text-body">{t('identity.mfa.benefit')}</p>
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div>
              <h2 className="text-2xl font-bold text-volentis-navy mb-4">
                {t('collaboration.title')}
              </h2>
              <p className="text-text-body mb-6">{t('collaboration.description')}</p>
              <div className="space-y-4">
                <div className="card">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💬</span>
                    <h3 className="font-bold text-volentis-navy">{t('collaboration.teams.title')}</h3>
                  </div>
                  <p className="text-sm text-text-body mb-2">{t('collaboration.teams.description')}</p>
                  <p className="text-xs text-volentis-cyan font-medium">{t('collaboration.teams.benefit')}</p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💭</span>
                    <h3 className="font-bold text-volentis-navy">{t('collaboration.slack.title')}</h3>
                  </div>
                  <p className="text-sm text-text-body mb-2">{t('collaboration.slack.description')}</p>
                  <p className="text-xs text-volentis-cyan font-medium">{t('collaboration.slack.benefit')}</p>
                </div>
                <div className="card">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📧</span>
                    <h3 className="font-bold text-volentis-navy">{t('collaboration.email.title')}</h3>
                  </div>
                  <p className="text-sm text-text-body mb-2">{t('collaboration.email.description')}</p>
                  <p className="text-xs text-volentis-cyan font-medium">{t('collaboration.email.benefit')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API & Extensibility */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-6">
                {t('api.title')}
              </h2>
              <p className="text-text-body mb-4">
                {t('api.description')}
              </p>
              <p className="text-sm text-text-muted italic mb-8">
                {t('api.useCases')}
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-volentis-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('api.features.rest')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-volentis-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('api.features.oauth')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-volentis-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('api.features.webhooks')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-volentis-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body">{t('api.features.docs')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-volentis-navy rounded-2xl p-8 text-white font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="overflow-x-auto">
{`curl -X POST \\
  https://api.volentis.ai/v1/query \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "What is our remote work policy?",
    "workspace_id": "hr-policies",
    "include_sources": true
  }'`}
              </pre>
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
