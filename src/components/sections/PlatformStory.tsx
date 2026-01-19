import { useTranslations } from 'next-intl';

export default function PlatformStory() {
  const t = useTranslations('platform');

  const benefits = [
    {
      key: 'knowledgeBase',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      key: 'auditTrail',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      key: 'compliance',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-volentis-navy/10 text-volentis-navy text-sm font-semibold rounded-full mb-4">
                {t('label')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
                {t('title')}
              </h2>
              <p className="text-lg text-text-body">
                {t('description')}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.key} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-volentis-cyan/10 rounded-xl flex items-center justify-center text-volentis-cyan">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-volentis-navy mb-1">
                      {t(`benefits.${benefit.key}.title`)}
                    </h3>
                    <p className="text-text-body text-sm">
                      {t(`benefits.${benefit.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scale message */}
            <div className="p-6 bg-bg-light-blue rounded-xl border border-volentis-cyan/20">
              <p className="text-volentis-navy font-medium">
                {t('scaleMessage')}
              </p>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-volentis-navy to-navy-dark rounded-2xl p-8 text-white">
              {/* Platform diagram */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">{t('diagram.title')}</h3>
                <p className="text-white/80 text-sm">{t('diagram.subtitle')}</p>
              </div>

              {/* Documents layer */}
              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-3">{t('diagram.documents')}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">HR Policies</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Contracts</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Procedures</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Compliance</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <svg className="w-6 h-6 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* RAG Engine */}
              <div className="bg-volentis-cyan/30 rounded-xl p-4 mb-4 border border-volentis-cyan">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-2">{t('diagram.engine')}</p>
                <p className="font-bold">Volentis.ai RAG Engine</p>
                <p className="text-xs text-white/70 mt-1">{t('diagram.engineDesc')}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <svg className="w-6 h-6 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Agents layer */}
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-3">{t('diagram.agents')}</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-white/10 rounded-lg">
                    <span className="text-lg">👥</span>
                    <p className="text-xs mt-1">HR</p>
                  </div>
                  <div className="text-center p-2 bg-white/10 rounded-lg">
                    <span className="text-lg">⚖️</span>
                    <p className="text-xs mt-1">Legal</p>
                  </div>
                  <div className="text-center p-2 bg-white/10 rounded-lg">
                    <span className="text-lg">🛡️</span>
                    <p className="text-xs mt-1">Compliance</p>
                  </div>
                  <div className="text-center p-2 bg-white/10 rounded-lg">
                    <span className="text-lg">💻</span>
                    <p className="text-xs mt-1">IT</p>
                  </div>
                  <div className="text-center p-2 bg-white/10 rounded-lg">
                    <span className="text-lg">💰</span>
                    <p className="text-xs mt-1">Finance</p>
                  </div>
                  <div className="text-center p-2 bg-white/10 rounded-lg">
                    <span className="text-lg">🌍</span>
                    <p className="text-xs mt-1">Int'l</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
