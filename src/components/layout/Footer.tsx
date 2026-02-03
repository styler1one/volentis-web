'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="gradient-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/volentis_logo.png"
              alt="Volentis.ai"
              width={140}
              height={35}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-accent-light text-sm italic">
              {t('tagline')}
            </p>
            
            {/* Address */}
            <div className="text-sm text-gray-300 space-y-1">
              <p>Baron de Coubertinlaan 6</p>
              <p>2719 EL Zoetermeer</p>
              <p>{t('country')}</p>
            </div>
            
            {/* Contact */}
            <div className="text-sm text-gray-300 space-y-2">
              <a href="tel:+31103220675" className="flex items-center gap-2 hover:text-volentis-cyan transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +31 10 322 0675
              </a>
              <a href="mailto:info@volentis.ai" className="flex items-center gap-2 hover:text-volentis-cyan transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@volentis.ai
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/volentis-ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-volentis-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('product')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/product/features" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('features')}
                </Link>
              </li>
              <li>
                <Link href="/product/integrations" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('integrations')}
                </Link>
              </li>
              <li>
                <Link href="/product/deployment" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('deployment')}
                </Link>
              </li>
              <li>
                <Link href="/product/security" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('security')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{nav('useCases')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/use-cases/hr" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('hr')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/legal" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('legal')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/compliance" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('compliance')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/it" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('it')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/finance" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('finance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('resources')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('blog')}
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-in-hr-gids" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('hrGuide')}
                </Link>
              </li>
              <li>
                <Link href="/blog/eu-ai-act-gids" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('euAiActGuide')}
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('bookDemo')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('cookies')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:info@volentis.ai" className="text-gray-300 hover:text-volentis-cyan transition-colors text-sm">
                info@volentis.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
