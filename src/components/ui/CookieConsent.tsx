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
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay for smoother UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'necessary') => {
    localStorage.setItem(CONSENT_KEY, type);
    localStorage.setItem('volentis-cookie-consent-date', new Date().toISOString());
    
    // Trigger custom event for GA to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: type }));
    
    // Animate out
    setIsLeaving(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isLeaving ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg border border-border-gray/20 rounded-2xl shadow-xl shadow-volentis-navy/10 p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {t('message')}{' '}
                <Link 
                  href="/cookies" 
                  className="text-volentis-cyan hover:underline font-medium"
                >
                  {t('learnMore')}
                </Link>
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => handleConsent('necessary')}
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-volentis-navy border border-border-gray/30 rounded-lg hover:border-volentis-navy/30 transition-colors"
              >
                {t('necessary')}
              </button>
              <button
                onClick={() => handleConsent('all')}
                className="px-5 py-2 text-sm font-medium text-white bg-volentis-cyan hover:bg-volentis-cyan-hover rounded-lg shadow-sm hover:shadow transition-all"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
