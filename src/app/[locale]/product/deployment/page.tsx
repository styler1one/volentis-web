import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productPages.deployment' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function DeploymentPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'productPages.deployment' });

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

      {/* How to Choose */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4 text-center">
            {t('whyChoiceMatters.title')}
          </h2>
          <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
            {t('whyChoiceMatters.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card border-l-4 border-volentis-cyan">
              <h3 className="font-bold text-volentis-navy mb-2">{t('whyChoiceMatters.quick.title')}</h3>
              <p className="text-text-body text-sm">{t('whyChoiceMatters.quick.answer')}</p>
            </div>
            <div className="card border-l-4 border-volentis-cyan">
              <h3 className="font-bold text-volentis-navy mb-2">{t('whyChoiceMatters.control.title')}</h3>
              <p className="text-text-body text-sm">{t('whyChoiceMatters.control.answer')}</p>
            </div>
            <div className="card border-l-4 border-volentis-cyan">
              <h3 className="font-bold text-volentis-navy mb-2">{t('whyChoiceMatters.compliance.title')}</h3>
              <p className="text-text-body text-sm">{t('whyChoiceMatters.compliance.answer')}</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-bg-light rounded-2xl p-6 mb-16 overflow-x-auto">
            <h3 className="font-bold text-volentis-navy mb-4 text-center">{t('comparisonTable.title')}</h3>
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-left text-sm text-text-muted">
                  <th className="pb-3 font-medium">{t('comparisonTable.headers.option')}</th>
                  <th className="pb-3 font-medium">{t('comparisonTable.headers.timeline')}</th>
                  <th className="pb-3 font-medium">{t('comparisonTable.headers.control')}</th>
                  <th className="pb-3 font-medium">{t('comparisonTable.headers.bestFor')}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-border-gray/20">
                  <td className="py-3 font-medium text-volentis-navy">{t('options.multiTenant.title')}</td>
                  <td className="py-3 text-accent-success font-medium">{t('comparisonTable.rows.multiTenant.timeline')}</td>
                  <td className="py-3 text-text-body">{t('comparisonTable.rows.multiTenant.control')}</td>
                  <td className="py-3 text-text-body">{t('comparisonTable.rows.multiTenant.bestFor')}</td>
                </tr>
                <tr className="border-t border-border-gray/20">
                  <td className="py-3 font-medium text-volentis-navy">{t('options.singleTenant.title')}</td>
                  <td className="py-3 text-text-body">{t('comparisonTable.rows.singleTenant.timeline')}</td>
                  <td className="py-3 text-volentis-cyan font-medium">{t('comparisonTable.rows.singleTenant.control')}</td>
                  <td className="py-3 text-text-body">{t('comparisonTable.rows.singleTenant.bestFor')}</td>
                </tr>
                <tr className="border-t border-border-gray/20">
                  <td className="py-3 font-medium text-text-muted">{t('options.customerManaged.title')}</td>
                  <td className="py-3 text-text-muted">{t('comparisonTable.rows.customerManaged.timeline')}</td>
                  <td className="py-3 text-text-muted">{t('comparisonTable.rows.customerManaged.control')}</td>
                  <td className="py-3 text-text-muted">{t('comparisonTable.rows.customerManaged.bestFor')}</td>
                </tr>
              </tbody>
            </table>
            <p className="text-center text-sm text-text-muted mt-4">{t('comparisonTable.notSure')}</p>
          </div>

          {/* Deployment Options */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Multi-Tenant SaaS */}
            <div className="card border-2 border-volentis-cyan relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-volentis-cyan text-white text-xs font-semibold rounded-full">
                {t('options.multiTenant.badge')}
              </span>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('options.multiTenant.title')}</h3>
                <p className="text-text-body text-sm mb-4">{t('options.multiTenant.description')}</p>
                <p className="text-xs text-volentis-cyan font-medium mb-6">{t('options.multiTenant.forYouIf')}</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span className="text-sm text-text-body">{t('options.multiTenant.features.1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span className="text-sm text-text-body">{t('options.multiTenant.features.2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span className="text-sm text-text-body">{t('options.multiTenant.features.3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span className="text-sm text-text-body">{t('options.multiTenant.features.4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span className="text-sm text-text-body">{t('options.multiTenant.features.5')}</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-border-gray/20 space-y-2">
                  <p className="text-xs text-volentis-navy font-medium">{t('options.multiTenant.timeline')}</p>
                  <p className="text-xs text-text-muted italic">{t('options.multiTenant.tradeoff')}</p>
                </div>
              </div>
            </div>

            {/* Single-Tenant SaaS */}
            <div className="card border-2 border-border-gray/30">
              <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('options.singleTenant.title')}</h3>
              <p className="text-text-body text-sm mb-4">{t('options.singleTenant.description')}</p>
              <p className="text-xs text-volentis-cyan font-medium mb-6">{t('options.singleTenant.forYouIf')}</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">✓</span>
                  <span className="text-sm text-text-body">{t('options.singleTenant.features.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">✓</span>
                  <span className="text-sm text-text-body">{t('options.singleTenant.features.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">✓</span>
                  <span className="text-sm text-text-body">{t('options.singleTenant.features.3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">✓</span>
                  <span className="text-sm text-text-body">{t('options.singleTenant.features.4')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">✓</span>
                  <span className="text-sm text-text-body">{t('options.singleTenant.features.5')}</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-border-gray/20 space-y-2">
                <p className="text-xs text-volentis-navy font-medium">{t('options.singleTenant.timeline')}</p>
                <p className="text-xs text-text-muted italic">{t('options.singleTenant.tradeoff')}</p>
              </div>
            </div>

            {/* Customer-Managed */}
            <div className="card border-2 border-border-gray/30 relative opacity-90">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-volentis-navy text-white text-xs font-semibold rounded-full">
                {t('options.customerManaged.badge')}
              </span>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('options.customerManaged.title')}</h3>
                <p className="text-text-body text-sm mb-4">{t('options.customerManaged.description')}</p>
                <p className="text-xs text-volentis-cyan font-medium mb-6">{t('options.customerManaged.forYouIf')}</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-text-muted">○</span>
                    <span className="text-sm text-text-body">{t('options.customerManaged.features.1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-muted">○</span>
                    <span className="text-sm text-text-body">{t('options.customerManaged.features.2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-muted">○</span>
                    <span className="text-sm text-text-body">{t('options.customerManaged.features.3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-muted">○</span>
                    <span className="text-sm text-text-body">{t('options.customerManaged.features.4')}</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-border-gray/20 space-y-2">
                  <p className="text-xs text-volentis-navy font-medium">{t('options.customerManaged.timeline')}</p>
                  <p className="text-xs text-text-muted italic">{t('options.customerManaged.tradeoff')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Residency */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
              {t('dataResidency.title')}
            </h2>
            <p className="text-text-body">
              {t('dataResidency.description')}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="bg-white rounded-2xl p-8 mb-12">
            <h3 className="font-bold text-volentis-navy mb-6 text-center">{t('dataResidency.whyItMatters.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <span className="text-3xl mb-3 block">📋</span>
                <p className="text-sm text-text-body">{t('dataResidency.whyItMatters.points.1')}</p>
              </div>
              <div className="text-center p-4">
                <span className="text-3xl mb-3 block">🛡️</span>
                <p className="text-sm text-text-body">{t('dataResidency.whyItMatters.points.2')}</p>
              </div>
              <div className="text-center p-4">
                <span className="text-3xl mb-3 block">✅</span>
                <p className="text-sm text-text-body">{t('dataResidency.whyItMatters.points.3')}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card">
                <span className="text-3xl">🇩🇪</span>
                <div>
                  <h3 className="font-bold text-volentis-navy">{t('dataResidency.germany.title')}</h3>
                  <p className="text-sm text-text-body">{t('dataResidency.germany.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card">
                <span className="text-3xl">🇳🇱</span>
                <div>
                  <h3 className="font-bold text-volentis-navy">{t('dataResidency.netherlands.title')}</h3>
                  <p className="text-sm text-text-body">{t('dataResidency.netherlands.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-volentis-navy rounded-2xl p-8 text-white">
              <h3 className="font-bold mb-6">{t('dataResidency.guarantees.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">{t('dataResidency.guarantees.1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">{t('dataResidency.guarantees.2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">{t('dataResidency.guarantees.3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">{t('dataResidency.guarantees.4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4">
              {t('implementation.title')}
            </h2>
            <p className="text-text-body">{t('implementation.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-volentis-navy mb-2 text-center">{t('implementation.steps.1.title')}</h3>
              <p className="text-sm text-text-body text-center mb-3">{t('implementation.steps.1.description')}</p>
              <p className="text-xs text-volentis-cyan font-medium text-center">{t('implementation.steps.1.outcome')}</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-volentis-navy mb-2 text-center">{t('implementation.steps.2.title')}</h3>
              <p className="text-sm text-text-body text-center mb-3">{t('implementation.steps.2.description')}</p>
              <p className="text-xs text-volentis-cyan font-medium text-center">{t('implementation.steps.2.outcome')}</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-volentis-navy mb-2 text-center">{t('implementation.steps.3.title')}</h3>
              <p className="text-sm text-text-body text-center mb-3">{t('implementation.steps.3.description')}</p>
              <p className="text-xs text-volentis-cyan font-medium text-center">{t('implementation.steps.3.outcome')}</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-volentis-navy mb-2 text-center">{t('implementation.steps.4.title')}</h3>
              <p className="text-sm text-text-body text-center mb-3">{t('implementation.steps.4.description')}</p>
              <p className="text-xs text-volentis-cyan font-medium text-center">{t('implementation.steps.4.outcome')}</p>
            </div>
          </div>

          {/* Ongoing Support */}
          <div className="mt-16 bg-bg-light rounded-2xl p-8">
            <h3 className="font-bold text-volentis-navy mb-4 text-center">{t('support.title')}</h3>
            <p className="text-text-body text-center mb-8">{t('support.description')}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-sm text-text-body">{t('support.items.1')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-sm text-text-body">{t('support.items.2')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-sm text-text-body">{t('support.items.3')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <span className="text-volentis-cyan">✓</span>
                <span className="text-sm text-text-body">{t('support.items.4')}</span>
              </div>
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
