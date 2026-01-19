'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface LandingHeaderProps {
  ctaText?: string;
  ctaHref?: string;
}

export default function LandingHeader({ ctaText, ctaHref = '#cta' }: LandingHeaderProps) {
  const t = useTranslations('landingHR');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/volentis_logo.png"
              alt="Volentis.ai"
              width={160}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* CTA Button */}
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-volentis-cyan text-white text-sm font-semibold rounded-lg hover:bg-volentis-cyan-hover transition-all shadow-sm hover:shadow-md"
          >
            {ctaText || t('hero.cta')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
