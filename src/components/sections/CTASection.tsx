import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-volentis-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          
          <p className="text-lg text-white/80 mb-8">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/demo" variant="white" size="lg">
              {t('button')}
            </Button>
            <Button 
              href="/try/hr" 
              variant="outline-light" 
              size="lg"
            >
              {t('secondaryButton')}
            </Button>
          </div>

          {/* Quick Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('trust1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('trust2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('trust3')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
