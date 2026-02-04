import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ArticleCTA() {
  const t = useTranslations('blog');

  return (
    <section className="my-16 p-8 md:p-12 bg-gradient-to-br from-volentis-navy to-navy-dark rounded-2xl text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-volentis-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-success/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
          <svg className="w-5 h-5 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-white/90 text-sm font-medium">{t('ctaBadge')}</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t('ctaTitle')}
        </h3>
        
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          {t('ctaDescription')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/demo"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-volentis-cyan text-white font-semibold rounded-xl hover:bg-volentis-cyan-hover transition-all shadow-lg shadow-volentis-cyan/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            {t('ctaButton')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="/use-cases/hr"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}
