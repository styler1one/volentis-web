'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import ChatDemo from '@/components/ui/ChatDemo';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24 lg:py-32">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-volentis-navy tracking-tight">
                {t('title')}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-volentis-navy/80 font-medium">
                {t('subtitle')}
              </h2>
            </div>
            
            <p className="text-lg text-text-body max-w-xl mx-auto lg:mx-0">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/contact" size="lg">
                {t('cta')}
              </Button>
              <Button href="#features" variant="secondary" size="lg">
                {t('secondaryCta')}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <div className="trust-badge">
                <span>🇪🇺</span>
                <span>EU-Hosted</span>
              </div>
              <div className="trust-badge">
                <span>🛡️</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="trust-badge">
                <span>✅</span>
                <span>EU AI Act Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column - Chat Demo */}
          <div className="relative">
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
