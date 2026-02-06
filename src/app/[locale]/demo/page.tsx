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
  const t = await getTranslations({ locale, namespace: 'demo' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getAlternates('/demo', locale),
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'demo' });

  const expectationItems = [
    { key: 'duration', icon: '⏱️' },
    { key: 'personalized', icon: '👤' },
    { key: 'live', icon: '▶️' },
    { key: 'questions', icon: '💬' },
  ];

  const faqItems = ['salesPitch', 'prepare', 'technical', 'next'];

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
            <p className="text-xl text-text-body">
              {t('subheadline')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: What to Expect */}
            <div>
              <h2 className="text-2xl font-bold text-volentis-navy mb-8">
                {t('whatToExpect.title')}
              </h2>

              <div className="space-y-6">
                {expectationItems.map((item) => (
                  <div key={item.key} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-volentis-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-volentis-navy mb-1">
                        {t(`whatToExpect.items.${item.key}.title`)}
                      </h3>
                      <p className="text-text-body text-sm">
                        {t(`whatToExpect.items.${item.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-10 p-6 bg-bg-light rounded-xl">
                <p className="text-sm text-text-muted mb-4">{t('socialProof.title')}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-volentis-cyan">{t('socialProof.stats.demos')}</p>
                    <p className="text-xs text-text-muted">{t('socialProof.stats.demosLabel')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-volentis-cyan">{t('socialProof.stats.countries')}</p>
                    <p className="text-xs text-text-muted">{t('socialProof.stats.countriesLabel')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-volentis-cyan">{t('socialProof.stats.satisfaction')}</p>
                    <p className="text-xs text-text-muted">{t('socialProof.stats.satisfactionLabel')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Widget */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl shadow-card border border-border-gray/20 overflow-hidden">
                <div className="p-6 border-b border-border-gray/20">
                  <h2 className="text-xl font-bold text-volentis-navy mb-2">
                    {t('booking.title')}
                  </h2>
                  <p className="text-sm text-text-body">
                    {t('booking.description')}
                  </p>
                </div>

                {/* Microsoft Bookings Link */}
                <div className="p-6 text-center">
                  <div className="bg-bg-light rounded-xl p-8 mb-6">
                    <div className="w-16 h-16 bg-volentis-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-text-body mb-6">
                      {t('booking.instructions')}
                    </p>
                    <a 
                      href="https://outlook.office.com/bookwithme/user/e24fb78dcb5249b0ad5bdb243afdf606@bestpractice.consulting/meetingtype/zZR0QjjmwEKPKHbKSh0MdA2?anonymous&ep=mlink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-volentis-cyan text-white text-lg font-semibold rounded-xl shadow-lg shadow-volentis-cyan/25 hover:shadow-xl hover:shadow-volentis-cyan/30 hover:bg-volentis-cyan-hover hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {t('booking.button')}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-xs text-text-muted">
                    {t('booking.fallback.description')}{' '}
                    <a href="mailto:info@volentis.ai" className="text-volentis-cyan hover:underline">
                      info@volentis.ai
                    </a>
                  </p>
                </div>

                {/* Trust badges */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      No credit card
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      No commitment
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      30 min max
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-volentis-navy text-center mb-12">
            {t('faq.title')}
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <details key={item} className="group bg-white rounded-xl shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-volentis-navy">
                    {t(`faq.items.${item}.question`)}
                  </span>
                  <svg 
                    className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-text-body">
                    {t(`faq.items.${item}.answer`)}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-12 bg-volentis-cyan/5 border-t border-volentis-cyan/10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-volentis-navy mb-1">
                {t('alternativeCta.title')}
              </h3>
              <p className="text-text-body">
                {t('alternativeCta.description')}
              </p>
            </div>
            <Button href="/try/hr" variant="secondary" size="md">
              {t('alternativeCta.button')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
