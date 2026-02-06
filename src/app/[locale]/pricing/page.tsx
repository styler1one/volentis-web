import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Button from '@/components/ui/Button';
import { getAlternates } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricing' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getAlternates('/pricing', locale),
  };
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'pricing' });

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-6">
              {t('headline')}
            </h1>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('subheadline')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-6">
              {t('philosophy.title')}
            </h2>
            <p className="text-text-body text-lg mb-8">
              {t('philosophy.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-bg-light rounded-xl">
                <span className="text-3xl mb-4 block">📊</span>
                <h3 className="font-bold text-volentis-navy mb-2">{t('philosophy.factors.users.title')}</h3>
                <p className="text-sm text-text-body">{t('philosophy.factors.users.description')}</p>
              </div>
              <div className="p-6 bg-bg-light rounded-xl">
                <span className="text-3xl mb-4 block">📄</span>
                <h3 className="font-bold text-volentis-navy mb-2">{t('philosophy.factors.documents.title')}</h3>
                <p className="text-sm text-text-body">{t('philosophy.factors.documents.description')}</p>
              </div>
              <div className="p-6 bg-bg-light rounded-xl">
                <span className="text-3xl mb-4 block">🔧</span>
                <h3 className="font-bold text-volentis-navy mb-2">{t('philosophy.factors.deployment.title')}</h3>
                <p className="text-sm text-text-body">{t('philosophy.factors.deployment.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options as Pricing Tiers */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-4">
            {t('tiers.title')}
          </h2>
          <p className="text-text-body text-center max-w-2xl mx-auto mb-12">
            {t('tiers.subtitle')}
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter / Multi-tenant */}
            <div className="bg-white rounded-2xl shadow-card p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('tiers.starter.title')}</h3>
                <p className="text-text-body text-sm">{t('tiers.starter.description')}</p>
              </div>

              <div className="mb-6">
                <p className="text-text-muted text-sm">{t('tiers.starter.priceLabel')}</p>
                <p className="text-3xl font-bold text-volentis-navy">{t('tiers.starter.price')}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.starter.features.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.starter.features.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.starter.features.3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.starter.features.4')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.starter.features.5')}</span>
                </li>
              </ul>

              <Button href="/contact" className="w-full justify-center">
                {t('tiers.starter.cta')}
              </Button>
            </div>

            {/* Professional / Single-tenant */}
            <div className="bg-white rounded-2xl shadow-card-hover p-8 flex flex-col relative border-2 border-volentis-cyan">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-volentis-cyan text-white text-xs font-semibold rounded-full">
                {t('tiers.professional.badge')}
              </span>
              
              <div className="mb-6 pt-2">
                <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('tiers.professional.title')}</h3>
                <p className="text-text-body text-sm">{t('tiers.professional.description')}</p>
              </div>

              <div className="mb-6">
                <p className="text-text-muted text-sm">{t('tiers.professional.priceLabel')}</p>
                <p className="text-3xl font-bold text-volentis-navy">{t('tiers.professional.price')}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.professional.features.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.professional.features.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.professional.features.3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.professional.features.4')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.professional.features.5')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.professional.features.6')}</span>
                </li>
              </ul>

              <Button href="/contact" className="w-full justify-center">
                {t('tiers.professional.cta')}
              </Button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-2xl shadow-card p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('tiers.enterprise.title')}</h3>
                <p className="text-text-body text-sm">{t('tiers.enterprise.description')}</p>
              </div>

              <div className="mb-6">
                <p className="text-text-muted text-sm">{t('tiers.enterprise.priceLabel')}</p>
                <p className="text-3xl font-bold text-volentis-navy">{t('tiers.enterprise.price')}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.enterprise.features.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.enterprise.features.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.enterprise.features.3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.enterprise.features.4')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.enterprise.features.5')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success mt-0.5">✓</span>
                  <span className="text-sm text-text-body">{t('tiers.enterprise.features.6')}</span>
                </li>
              </ul>

              <Button href="/contact" variant="secondary" className="w-full justify-center">
                {t('tiers.enterprise.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-12">
            {t('included.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('included.items.implementation.title')}</h3>
              <p className="text-sm text-text-body">{t('included.items.implementation.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('included.items.support.title')}</h3>
              <p className="text-sm text-text-body">{t('included.items.support.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('included.items.updates.title')}</h3>
              <p className="text-sm text-text-body">{t('included.items.updates.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-bold text-volentis-navy mb-2">{t('included.items.compliance.title')}</h3>
              <p className="text-sm text-text-body">{t('included.items.compliance.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy text-center mb-12">
            {t('faq.title')}
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-volentis-navy mb-2">{t('faq.questions.1.question')}</h3>
              <p className="text-text-body">{t('faq.questions.1.answer')}</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-volentis-navy mb-2">{t('faq.questions.2.question')}</h3>
              <p className="text-text-body">{t('faq.questions.2.answer')}</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-volentis-navy mb-2">{t('faq.questions.3.question')}</h3>
              <p className="text-text-body">{t('faq.questions.3.answer')}</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-volentis-navy mb-2">{t('faq.questions.4.question')}</h3>
              <p className="text-text-body">{t('faq.questions.4.answer')}</p>
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
                {t('cta.primary')}
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-volentis-navy transition-colors"
              >
                {t('cta.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
