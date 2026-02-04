'use client';

import { useState } from 'react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/ui/Button';

const languages = [
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [useCasesDropdownOpen, setUseCasesDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-gray/20">
      <nav className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/volentis_logo.png"
              alt="Volentis.ai"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 py-2 text-text-body hover:text-volentis-navy transition-colors">
                {t('product')}
                <svg className={`w-4 h-4 transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 -ml-4">
                  <div className="w-48 bg-white rounded-lg shadow-card-hover border border-border-gray/20 py-2">
                    <Link href="/product/features" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('features')}
                    </Link>
                    <Link href="/product/integrations" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('integrations')}
                    </Link>
                    <Link href="/product/deployment" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('deployment')}
                    </Link>
                    <Link href="/product/security" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('security')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setUseCasesDropdownOpen(true)}
              onMouseLeave={() => setUseCasesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 py-2 text-text-body hover:text-volentis-navy transition-colors">
                {t('useCases')}
                <svg className={`w-4 h-4 transition-transform ${useCasesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {useCasesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 -ml-4">
                  <div className="w-56 bg-white rounded-lg shadow-card-hover border border-border-gray/20 py-2">
                    <Link href="/use-cases/hr" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('hr')}
                    </Link>
                    <Link href="/use-cases/legal" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('legal')}
                    </Link>
                    <Link href="/use-cases/compliance" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('compliance')}
                    </Link>
                    <Link href="/use-cases/it" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('it')}
                    </Link>
                    <Link href="/use-cases/finance" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('finance')}
                    </Link>
                    <Link href="/use-cases/international" className="block px-4 py-2 text-text-body hover:bg-bg-light-blue hover:text-volentis-navy transition-colors">
                      {t('international')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-text-body hover:text-volentis-navy transition-colors">
              {t('pricing')}
            </Link>

            <Link href="/blog" className="text-text-body hover:text-volentis-navy transition-colors">
              {t('blog')}
            </Link>

            <Link href="/contact" className="text-text-body hover:text-volentis-navy transition-colors">
              {t('contact')}
            </Link>
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {/* Language Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-2 py-2 text-text-body hover:text-volentis-navy transition-colors rounded-lg hover:bg-bg-light">
                <span className="text-xl">{currentLang.flag}</span>
                <svg className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full right-0 pt-2">
                  <div className="w-40 bg-white rounded-lg shadow-card-hover border border-border-gray/20 py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-left transition-colors ${
                          locale === lang.code 
                            ? 'bg-bg-light-blue text-volentis-navy font-medium' 
                            : 'text-text-body hover:bg-bg-light-blue hover:text-volentis-navy'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm">{lang.label}</span>
                        {locale === lang.code && (
                          <svg className="w-4 h-4 ml-auto text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Login Button - for existing customers */}
            <a 
              href="https://app.volentis.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-body hover:text-volentis-navy transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              {t('login')}
            </a>

            <Button href="/demo">{t('bookDemo')}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-volentis-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border-gray/20">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-volentis-navy">{t('product')}</p>
                <Link href="/product/features" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('features')}
                </Link>
                <Link href="/product/integrations" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('integrations')}
                </Link>
                <Link href="/product/deployment" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('deployment')}
                </Link>
                <Link href="/product/security" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('security')}
                </Link>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-volentis-navy">{t('useCases')}</p>
                <Link href="/use-cases/hr" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('hr')}
                </Link>
                <Link href="/use-cases/legal" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('legal')}
                </Link>
                <Link href="/use-cases/compliance" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('compliance')}
                </Link>
                <Link href="/use-cases/it" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('it')}
                </Link>
                <Link href="/use-cases/finance" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('finance')}
                </Link>
                <Link href="/use-cases/international" onClick={() => setMobileMenuOpen(false)} className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('international')}
                </Link>
              </div>

              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-text-body hover:text-volentis-cyan">
                {t('pricing')}
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-text-body hover:text-volentis-cyan">
                {t('blog')}
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-text-body hover:text-volentis-cyan">
                {t('contact')}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-border-gray/20">
                <p className="text-sm font-semibold text-volentis-navy mb-2">{t('language')}</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        locale === lang.code 
                          ? 'bg-volentis-cyan text-white' 
                          : 'bg-bg-light text-text-body hover:bg-bg-light-blue'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile Login & CTA */}
              <a 
                href="https://app.volentis.ai/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-text-body border border-border-gray/30 rounded-xl hover:bg-bg-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                {t('login')}
              </a>
              
              <Button href="/demo" onClick={() => setMobileMenuOpen(false)} className="mt-2 w-full justify-center">
                {t('bookDemo')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
