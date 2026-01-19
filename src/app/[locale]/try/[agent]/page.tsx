'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import InteractiveDemo from '@/components/ui/InteractiveDemo';

type AgentType = 'hr' | 'legal' | 'compliance' | 'it' | 'finance' | 'international';

const agentConfig: Record<AgentType, { icon: string; color: string; department: string }> = {
  hr: { icon: '👥', color: 'volentis-cyan', department: 'HR' },
  legal: { icon: '⚖️', color: 'volentis-cyan', department: 'Legal' },
  compliance: { icon: '🛡️', color: 'volentis-cyan', department: 'Compliance' },
  it: { icon: '💻', color: 'volentis-cyan', department: 'IT' },
  finance: { icon: '💰', color: 'volentis-cyan', department: 'Finance' },
  international: { icon: '🌍', color: 'volentis-cyan', department: 'International' },
};

const agentNames: Record<AgentType, string> = {
  hr: 'HR Agent',
  legal: 'Legal Agent',
  compliance: 'Compliance Agent',
  it: 'IT Agent',
  finance: 'Finance Agent',
  international: 'International Agent',
};

const otherAgents: Record<AgentType, AgentType[]> = {
  hr: ['legal', 'compliance', 'it'],
  legal: ['hr', 'compliance', 'finance'],
  compliance: ['legal', 'hr', 'it'],
  it: ['hr', 'finance', 'compliance'],
  finance: ['hr', 'legal', 'it'],
  international: ['hr', 'legal', 'compliance'],
};

export default function TryAgentPage() {
  const params = useParams();
  const agent = (params.agent as AgentType) || 'hr';
  const t = useTranslations('tryAgent');
  const useCaseT = useTranslations(`useCases.${agent}`);
  const commonT = useTranslations('useCases.common');
  
  const config = agentConfig[agent] || agentConfig.hr;
  const agentName = agentNames[agent] || 'HR Agent';

  // Get metrics for this agent
  const metrics = [
    { value: t(`results.${agent}.metric1.value`), label: t(`results.${agent}.metric1.label`) },
    { value: t(`results.${agent}.metric2.value`), label: t(`results.${agent}.metric2.label`) },
    { value: t(`results.${agent}.metric3.value`), label: t(`results.${agent}.metric3.label`) },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-volentis-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/use-cases/${agent}`} className="hover:text-volentis-cyan transition-colors">
                  {agentName}
                </Link>
              </li>
              <li>/</li>
              <li className="text-volentis-navy font-medium">{t('badge')}</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">{config.icon}</span>
              </div>
              <span className="px-4 py-1 bg-volentis-cyan/10 text-volentis-cyan text-sm font-semibold rounded-full">
                {t('badge')}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('headline', { agent: agentName })}
            </h1>
            <p className="text-xl text-text-body">
              {t('subheadline')}
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4 text-center">
              {t('video.title')}
            </h2>
            <p className="text-text-body text-center mb-8">
              {t('video.description', { agent: agentName })}
            </p>

            {/* Video Placeholder */}
            <div className="aspect-video bg-volentis-navy rounded-2xl overflow-hidden relative group cursor-pointer">
              {/* Placeholder content - replace with actual video embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm">{t('video.comingSoon')}</p>
                <p className="text-white/50 text-xs mt-2 max-w-md text-center px-4">
                  {t('video.comingSoonDescription')}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-lg">{config.icon}</span>
                <span className="text-white text-sm font-medium">{agentName}</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white/80 text-sm">{t('video.duration')}</span>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-bg-light rounded-xl">
                <span className="text-2xl">📄</span>
                <div>
                  <p className="font-medium text-volentis-navy text-sm">Source Citations</p>
                  <p className="text-xs text-text-muted">Every answer is verified</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-bg-light rounded-xl">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="font-medium text-volentis-navy text-sm">GDPR Compliant</p>
                  <p className="text-xs text-text-muted">EU data only</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-bg-light rounded-xl">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-medium text-volentis-navy text-sm">Instant Answers</p>
                  <p className="text-xs text-text-muted">24/7 availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-4 text-center">
              {t('interactiveDemo.title')}
            </h2>
            <p className="text-text-body text-center mb-8">
              {t('interactiveDemo.description', { department: config.department })}
            </p>

            {/* Interactive Demo Component */}
            <InteractiveDemo agent={agent} />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-12 text-center">
            {t('results.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-8 bg-bg-light rounded-2xl">
                <p className="text-4xl font-bold text-volentis-cyan mb-2">{metric.value}</p>
                <p className="text-text-body">{metric.label}</p>
              </div>
            ))}
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
              <Button href="/demo" variant="white" size="lg">
                {t('cta.primary')}
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                {t('cta.secondary')}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {commonT('liveInWeeks')}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {commonT('euDataResidency')}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {commonT('noTrainingOnData')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Agents Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-volentis-navy text-center mb-4">
            {t('otherAgents.title')}
          </h2>
          <p className="text-text-body text-center mb-8">
            {t('otherAgents.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherAgents[agent].map((otherAgent) => {
              const otherConfig = agentConfig[otherAgent];
              const otherName = agentNames[otherAgent];
              return (
                <Link
                  key={otherAgent}
                  href={`/try/${otherAgent}`}
                  className="group p-6 bg-bg-light rounded-xl hover:bg-volentis-cyan/5 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{otherConfig.icon}</span>
                    <h3 className="font-bold text-volentis-navy group-hover:text-volentis-cyan transition-colors">
                      {otherName}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted mb-3">
                    {commonT(`agentDescriptions.${otherAgent}`)}
                  </p>
                  <span className="text-sm text-volentis-cyan font-medium group-hover:underline">
                    Try it →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
