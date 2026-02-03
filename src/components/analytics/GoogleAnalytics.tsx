'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getCookieConsent, type ConsentType } from '@/components/ui/CookieConsent';

const GA_MEASUREMENT_ID = 'G-Y8Z2LKBF9Q';

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentType>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check initial consent
    setConsent(getCookieConsent());

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent<ConsentType>) => {
      setConsent(event.detail);
    };

    window.addEventListener('cookieConsentChange', handleConsentChange as EventListener);
    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange as EventListener);
    };
  }, []);

  // Only render on client and only if consent is 'all'
  if (!isClient || consent !== 'all') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
