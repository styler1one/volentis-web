import { useTranslations } from 'next-intl';

export default function DeploymentOptions() {
  const t = useTranslations('deployment');

  const options = ['multiTenant', 'singleTenant', 'customerManaged'] as const;

  const optionIcons = {
    multiTenant: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    singleTenant: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    customerManaged: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  };

  return (
    <section className="section-padding bg-bg-light">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-lg text-text-body">
            {t('sectionSubtitle')}
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option) => (
            <div 
              key={option}
              className={`bg-white rounded-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover ${
                option === 'customerManaged' ? 'relative overflow-hidden' : ''
              }`}
            >
              {/* Coming Soon Badge */}
              {option === 'customerManaged' && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-volentis-navy/10 text-volentis-navy text-xs font-medium rounded-full">
                    {t(`options.${option}.badge`)}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-volentis-cyan mb-6">
                {optionIcons[option]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-volentis-navy mb-2">
                {t(`options.${option}.title`)}
              </h3>

              {/* Description */}
              <p className="text-text-body mb-6">
                {t(`options.${option}.description`)}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {(t.raw(`options.${option}.features`) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-text-body">
                    <svg className="w-5 h-5 text-accent-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
