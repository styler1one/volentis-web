import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getAlternates } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.terms' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getAlternates('/terms', locale),
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'legal.terms' });

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

            {/* Definitions */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.definitions.title')}</h2>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li><strong>&quot;{t('sections.definitions.items.platform.term')}&quot;</strong>: {t('sections.definitions.items.platform.definition')}</li>
                <li><strong>&quot;{t('sections.definitions.items.services.term')}&quot;</strong>: {t('sections.definitions.items.services.definition')}</li>
                <li><strong>&quot;{t('sections.definitions.items.user.term')}&quot;</strong>: {t('sections.definitions.items.user.definition')}</li>
                <li><strong>&quot;{t('sections.definitions.items.content.term')}&quot;</strong>: {t('sections.definitions.items.content.definition')}</li>
              </ul>
            </section>

            {/* Acceptance */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.acceptance.title')}</h2>
              <p className="text-text-body">{t('sections.acceptance.description')}</p>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.services.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.services.description')}</p>
              <p className="text-text-body">{t('sections.services.disclaimer')}</p>
            </section>

            {/* User Obligations */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.obligations.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.obligations.description')}</p>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li>{t('sections.obligations.items.1')}</li>
                <li>{t('sections.obligations.items.2')}</li>
                <li>{t('sections.obligations.items.3')}</li>
                <li>{t('sections.obligations.items.4')}</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.ip.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.ip.volentis')}</p>
              <p className="text-text-body">{t('sections.ip.customer')}</p>
            </section>

            {/* Data Protection */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.dataProtection.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.dataProtection.description')}</p>
              <ul className="list-disc pl-6 text-text-body space-y-2">
                <li>{t('sections.dataProtection.items.1')}</li>
                <li>{t('sections.dataProtection.items.2')}</li>
                <li>{t('sections.dataProtection.items.3')}</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.liability.title')}</h2>
              <p className="text-text-body mb-4">{t('sections.liability.description')}</p>
              <p className="text-text-body">{t('sections.liability.exclusions')}</p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.termination.title')}</h2>
              <p className="text-text-body">{t('sections.termination.description')}</p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-volentis-navy mb-4">{t('sections.law.title')}</h2>
              <p className="text-text-body">{t('sections.law.description')}</p>
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
                <p className="font-semibold text-volentis-navy">Volentis B.V.</p>
                <p className="text-text-body">info@volentis.ai</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
