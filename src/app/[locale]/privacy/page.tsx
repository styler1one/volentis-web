import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.privacy' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'legal.privacy' });

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
              <p className="text-text-body mb-4">{t('sections.intro.p1')}</p>
              <p className="text-text-body">{t('sections.intro.p2')}</p>
            </section>

            {/* Controller */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.controller.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.controller.description')}</p>
              <div className="bg-bg-light p-4 rounded-lg">
                <p className="font-semibold text-volentis-navy">Volentis B.V.</p>
                <p className="text-text-body">Netherlands</p>
                <p className="text-text-body">info@volentis.ai</p>
              </div>
            </section>

            {/* Data We Collect */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.dataCollected.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.dataCollected.description')}</p>
              
              <h3 className="text-lg font-semibold text-volentis-navy mb-2">{t('sections.dataCollected.website.title')}</h3>
              <ul className="list-disc pl-6 mb-4 text-text-body space-y-2">
                <li>{t('sections.dataCollected.website.items.1')}</li>
                <li>{t('sections.dataCollected.website.items.2')}</li>
                <li>{t('sections.dataCollected.website.items.3')}</li>
              </ul>

              <h3 className="text-lg font-semibold text-volentis-navy mb-2">{t('sections.dataCollected.platform.title')}</h3>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li>{t('sections.dataCollected.platform.items.1')}</li>
                <li>{t('sections.dataCollected.platform.items.2')}</li>
                <li>{t('sections.dataCollected.platform.items.3')}</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.legalBasis.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.legalBasis.description')}</p>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li><strong>{t('sections.legalBasis.items.contract.title')}:</strong> {t('sections.legalBasis.items.contract.description')}</li>
                <li><strong>{t('sections.legalBasis.items.consent.title')}:</strong> {t('sections.legalBasis.items.consent.description')}</li>
                <li><strong>{t('sections.legalBasis.items.legitimate.title')}:</strong> {t('sections.legalBasis.items.legitimate.description')}</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.retention.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.retention.description')}</p>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li>{t('sections.retention.items.1')}</li>
                <li>{t('sections.retention.items.2')}</li>
                <li>{t('sections.retention.items.3')}</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.sharing.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.sharing.description')}</p>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li>{t('sections.sharing.items.1')}</li>
                <li>{t('sections.sharing.items.2')}</li>
                <li>{t('sections.sharing.items.3')}</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.transfers.title')}</h2>
              <p className="text-text-body">{t('sections.transfers.description')}</p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.rights.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.rights.description')}</p>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li><strong>{t('sections.rights.items.access.title')}:</strong> {t('sections.rights.items.access.description')}</li>
                <li><strong>{t('sections.rights.items.rectification.title')}:</strong> {t('sections.rights.items.rectification.description')}</li>
                <li><strong>{t('sections.rights.items.erasure.title')}:</strong> {t('sections.rights.items.erasure.description')}</li>
                <li><strong>{t('sections.rights.items.restriction.title')}:</strong> {t('sections.rights.items.restriction.description')}</li>
                <li><strong>{t('sections.rights.items.portability.title')}:</strong> {t('sections.rights.items.portability.description')}</li>
                <li><strong>{t('sections.rights.items.objection.title')}:</strong> {t('sections.rights.items.objection.description')}</li>
              </ul>
              <p className="text-text-body mt-4">{t('sections.rights.contact')}</p>
            </section>

            {/* Security */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.security.title')}</h2>
              <p className="text-text-body">{t('sections.security.description')}</p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.contact.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.contact.description')}</p>
              <div className="bg-bg-light p-4 rounded-lg">
                <p className="text-text-body">info@volentis.ai</p>
              </div>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.changes.title')}</h2>
              <p className="text-text-body">{t('sections.changes.description')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
