'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const featureImages = {
  documents: (
    <div className="bg-gradient-to-br from-bg-light-blue to-white rounded-2xl p-8 shadow-card">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-volentis-cyan/10 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-volentis-navy">HR Policy Handbook.pdf</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-volentis-cyan/10 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-volentis-navy">Employment Contract Template.docx</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-volentis-cyan/10 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-volentis-navy">GDPR Compliance Guide.pdf</span>
        </div>
      </div>
    </div>
  ),
  sources: (
    <div className="bg-gradient-to-br from-bg-light-blue to-white rounded-2xl p-8 shadow-card">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-border-gray/10">
        <p className="text-sm text-text-dark mb-3">
          Employees in Germany are entitled to parental leave...
        </p>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Source: HR Policy Handbook, Section 4.2</span>
        </div>
        <div className="mt-2 flex gap-2">
          <span className="px-2 py-0.5 bg-accent-success/10 text-accent-success rounded-full text-xs">High Confidence</span>
          <span className="px-2 py-0.5 bg-bg-light text-text-muted rounded-full text-xs">Page 23</span>
        </div>
      </div>
    </div>
  ),
  search: (
    <div className="bg-gradient-to-br from-bg-light-blue to-white rounded-2xl p-8 shadow-card">
      <div className="bg-white rounded-xl shadow-sm border border-border-gray/10">
        <div className="p-4 border-b border-border-gray/10">
          <div className="flex items-center gap-3 bg-bg-light rounded-lg px-4 py-2">
            <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm text-text-body">maternity benefits Germany</span>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-accent-success">✓</span>
            <span className="text-text-dark">Semantic understanding</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-accent-success">✓</span>
            <span className="text-text-dark">Cross-document search</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-accent-success">✓</span>
            <span className="text-text-dark">Multi-language support</span>
          </div>
        </div>
      </div>
    </div>
  ),
  collaboration: (
    <div className="bg-gradient-to-br from-bg-light-blue to-white rounded-2xl p-8 shadow-card">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-volentis-cyan text-white flex items-center justify-center text-sm font-medium">JD</div>
          <div className="flex-1 bg-white rounded-lg p-3 shadow-sm border border-border-gray/10">
            <p className="text-sm text-text-dark">Shared this thread with the team</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-success text-white flex items-center justify-center text-sm font-medium">AS</div>
          <div className="flex-1 bg-white rounded-lg p-3 shadow-sm border border-border-gray/10">
            <p className="text-sm text-text-dark">Added a comment to the conversation</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>3 team members have access</span>
        </div>
      </div>
    </div>
  ),
};

type FeatureKey = 'documents' | 'sources' | 'search' | 'collaboration';

export default function Features() {
  const t = useTranslations('features');

  const features: FeatureKey[] = ['documents', 'sources', 'search', 'collaboration'];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy">
            {t('sectionTitle')}
          </h2>
        </div>

        {/* Features with alternating layout */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-volentis-navy">
                  {t(`items.${feature}.title`)}
                </h3>
                <p className="text-lg text-text-body">
                  {t(`items.${feature}.description`)}
                </p>
                {/* Benefit callout */}
                <div className="p-4 bg-bg-light-blue rounded-xl border-l-4 border-volentis-cyan">
                  <p className="text-sm text-volentis-navy font-medium">
                    {t(`items.${feature}.benefit`)}
                  </p>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-volentis-cyan font-medium hover:gap-3 transition-all duration-200"
                >
                  {t('tryIt')}
                </Link>
              </div>

              {/* Image/Visual */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                {featureImages[feature]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
