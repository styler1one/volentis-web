'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const CONSENT_KEY = 'volentis-cookie-consent';

export type ConsentType = 'all' | 'necessary' | null;

export function getCookieConsent(): ConsentType {
  if (typeof window === 'undefined') return null;
  const consent = localStorage.getItem(CONSENT_KEY);
  if (consent === 'all' || consent === 'necessary') return consent;
  return null;
}

export default function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay for smoother UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-hide on scroll
  useEffect(() => {
    if (!isVisible) return;

    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide when scrolled down more than 100px
      if (currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleConsent = (type: 'all' | 'necessary') => {
    localStorage.setItem(CONSENT_KEY, type);
    localStorage.setItem('volentis-cookie-consent-date', new Date().toISOString());
    
    // Trigger custom event for GA to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: type }));
    
    // Hide immediately
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${
        isHidden ? 'translate-y-[calc(100%+2rem)] opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-lg border border-border-gray/20 rounded-xl shadow-lg shadow-volentis-navy/10 p-3 max-w-xs">
        <p className="text-xs text-text-body leading-relaxed mb-3">
          {t('message')}{' '}
          <Link 
            href="/cookies" 
            className="text-volentis-cyan hover:underline"
          >
            {t('learnMore')}
          </Link>
        </p>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleConsent('necessary')}
            className="flex-1 px-3 py-1.5 text-xs font-medium text-text-muted hover:text-volentis-navy border border-border-gray/30 rounded-lg hover:border-volentis-navy/30 transition-colors"
          >
            {t('necessary')}
          </button>
          <button
            onClick={() => handleConsent('all')}
            className="flex-1 px-3 py-1.5 text-xs font-medium text-white bg-volentis-cyan hover:bg-volentis-cyan-hover rounded-lg transition-all"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
