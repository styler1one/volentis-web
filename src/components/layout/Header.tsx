'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

export default function Header() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [useCasesDropdownOpen, setUseCasesDropdownOpen] = useState(false);

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
              <button className="flex items-center gap-1 text-text-body hover:text-volentis-navy transition-colors">
                {t('product')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-card-hover border border-border-gray/20 py-2">
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
              )}
            </div>

            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setUseCasesDropdownOpen(true)}
              onMouseLeave={() => setUseCasesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-text-body hover:text-volentis-navy transition-colors">
                {t('useCases')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {useCasesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-card-hover border border-border-gray/20 py-2">
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
              )}
            </div>

            <Link href="/pricing" className="text-text-body hover:text-volentis-navy transition-colors">
              {t('pricing')}
            </Link>

            <Link href="/contact" className="text-text-body hover:text-volentis-navy transition-colors">
              {t('contact')}
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button href="/contact">{t('bookDemo')}</Button>
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
                <Link href="/product/features" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('features')}
                </Link>
                <Link href="/product/integrations" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('integrations')}
                </Link>
                <Link href="/product/deployment" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('deployment')}
                </Link>
                <Link href="/product/security" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('security')}
                </Link>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-volentis-navy">{t('useCases')}</p>
                <Link href="/use-cases/hr" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('hr')}
                </Link>
                <Link href="/use-cases/legal" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('legal')}
                </Link>
                <Link href="/use-cases/compliance" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('compliance')}
                </Link>
                <Link href="/use-cases/it" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('it')}
                </Link>
                <Link href="/use-cases/finance" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('finance')}
                </Link>
                <Link href="/use-cases/international" className="block pl-4 py-1 text-text-body hover:text-volentis-cyan">
                  {t('international')}
                </Link>
              </div>

              <Link href="/pricing" className="text-text-body hover:text-volentis-cyan">
                {t('pricing')}
              </Link>
              <Link href="/contact" className="text-text-body hover:text-volentis-cyan">
                {t('contact')}
              </Link>
              
              <Button href="/contact" className="mt-4 w-full justify-center">
                {t('bookDemo')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
