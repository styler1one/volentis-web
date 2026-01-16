import { useTranslations } from 'next-intl';

export default function TrustBadges() {
  const t = useTranslations('trust');

  const badges = [
    { key: 'euHosted', icon: '🇪🇺' },
    { key: 'gdpr', icon: '🛡️' },
    { key: 'euAiAct', icon: '✅' },
    { key: 'encryption', icon: '🔒' },
  ];

  const integrations = [
    { name: 'SharePoint', logo: '/integrations/sharepoint.svg' },
    { name: 'Microsoft Teams', logo: '/integrations/teams.svg' },
    { name: 'Slack', logo: '/integrations/slack.svg' },
    { name: 'AFAS', logo: '/integrations/afas.svg' },
    { name: 'SAP', logo: '/integrations/sap.svg' },
    { name: 'Workday', logo: '/integrations/workday.svg' },
    { name: 'Personio', logo: '/integrations/personio.svg' },
    { name: 'Dynamics 365', logo: '/integrations/dynamics.svg' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-8">
            {t('sectionTitle')}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <div 
                key={badge.key}
                className="inline-flex items-center gap-3 px-6 py-4 bg-bg-light rounded-card border border-border-gray/20"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-medium text-volentis-navy">{t(`badges.${badge.key}`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-volentis-navy mb-2">
            {t('integrations.title')}
          </h3>
          <p className="text-text-body mb-8">
            {t('integrations.description')}
          </p>

          {/* Integration Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {integrations.map((integration) => (
              <div 
                key={integration.name}
                className="w-full h-16 flex items-center justify-center p-4 bg-bg-light rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                title={integration.name}
              >
                {/* Placeholder for integration logos - using text for now */}
                <span className="text-sm font-medium text-text-muted text-center">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
