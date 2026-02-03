import { useTranslations } from 'next-intl';

export default function SocialProof() {
  const t = useTranslations('socialProof');

  const metrics = [
    { key: 'hrTickets', value: '50-70%', color: 'text-volentis-cyan' },
    { key: 'contractReview', value: '70%', color: 'text-accent-success' },
    { key: 'availability', value: '24/7', color: 'text-volentis-cyan' },
    { key: 'compliance', value: '100%', color: 'text-accent-success' },
  ];

  return (
    <section className="py-12 bg-volentis-navy">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t('title')}
          </h2>
          <p className="text-white/70">
            {t('subtitle')}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.key} className="text-center">
              <p className={`text-3xl md:text-4xl font-bold ${metric.color}`}>
                {metric.value}
              </p>
              <p className="text-white/80 text-sm mt-1">
                {t(`metrics.${metric.key}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 pt-10 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-2xl">🇪🇺</span>
              <span className="text-sm font-medium">{t('badges.euHosted')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm font-medium">{t('badges.gdpr')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-2xl">✅</span>
              <span className="text-sm font-medium">{t('badges.euAiAct')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-medium">{t('badges.security')}</span>
            </div>
          </div>
        </div>

        {/* Why Volentis - Competitive differentiator */}
        <div className="mt-10 pt-10 border-t border-white/10">
          <p className="text-center text-white/60 text-sm mb-6">{t('whyNotChatGPT.title')}</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 text-white/80">
              <span className="w-8 h-8 bg-volentis-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm">{t('whyNotChatGPT.points.noTraining')}</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="w-8 h-8 bg-volentis-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm">{t('whyNotChatGPT.points.euOnly')}</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="w-8 h-8 bg-volentis-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm">{t('whyNotChatGPT.points.sourceCitations')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
