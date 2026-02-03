import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.cookies' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function CookiesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'legal.cookies' });

  return (
    <div className="bg-white">
      <div className="section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
            {t('title')}
          </h1>
          <p className="text-text-muted mb-8">{t('lastUpdated')}</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.intro.title')}</h2>
              <p className="text-text-body">{t('sections.intro.description')}</p>
            </section>

            {/* What are cookies */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.whatAreCookies.title')}</h2>
              <p className="text-text-body">{t('sections.whatAreCookies.description')}</p>
            </section>

            {/* Types of cookies */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.types.title')}</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-volentis-navy mb-2">{t('sections.types.necessary.title')}</h3>
                <p className="text-text-body mb-2">{t('sections.types.necessary.description')}</p>
                <div className="bg-bg-light p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border-gray/30">
                        <th className="text-left py-2 font-semibold">{t('sections.types.tableHeaders.name')}</th>
                        <th className="text-left py-2 font-semibold">{t('sections.types.tableHeaders.purpose')}</th>
                        <th className="text-left py-2 font-semibold">{t('sections.types.tableHeaders.duration')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-body">
                      <tr className="border-b border-border-gray/20">
                        <td className="py-2">session_id</td>
                        <td className="py-2">{t('sections.types.necessary.cookies.session')}</td>
                        <td className="py-2">{t('sections.types.durations.session')}</td>
                      </tr>
                      <tr>
                        <td className="py-2">locale</td>
                        <td className="py-2">{t('sections.types.necessary.cookies.locale')}</td>
                        <td className="py-2">{t('sections.types.durations.year')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-volentis-navy mb-2">{t('sections.types.analytics.title')}</h3>
                <p className="text-text-body mb-2">{t('sections.types.analytics.description')}</p>
                <div className="bg-bg-light p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border-gray/30">
                        <th className="text-left py-2 font-semibold">{t('sections.types.tableHeaders.name')}</th>
                        <th className="text-left py-2 font-semibold">{t('sections.types.tableHeaders.purpose')}</th>
                        <th className="text-left py-2 font-semibold">{t('sections.types.tableHeaders.duration')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-body">
                      <tr className="border-b border-border-gray/20">
                        <td className="py-2">_ga</td>
                        <td className="py-2">{t('sections.types.analytics.cookies.ga')}</td>
                        <td className="py-2">{t('sections.types.durations.twoYears')}</td>
                      </tr>
                      <tr>
                        <td className="py-2">_ga_*</td>
                        <td className="py-2">{t('sections.types.analytics.cookies.gaSession')}</td>
                        <td className="py-2">{t('sections.types.durations.twoYears')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-text-muted mt-2">{t('sections.types.analytics.consentNote')}</p>
              </div>
            </section>

            {/* Managing cookies */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.managing.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.managing.description')}</p>
              <p className="text-text-body">{t('sections.managing.browserSettings')}</p>
            </section>

            {/* Third party */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.thirdParty.title')}</h2>
              <p className="text-text-body">{t('sections.thirdParty.description')}</p>
            </section>

            {/* Changes */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.changes.title')}</h2>
              <p className="text-text-body">{t('sections.changes.description')}</p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.contact.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.contact.description')}</p>
              <div className="bg-bg-light p-4 rounded-lg">
                <p className="text-text-body">info@volentis.ai</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
