# Handover: Cookie Consent + Google Analytics Implementatie

Dit document bevat alle informatie om dezelfde cookie consent implementatie te maken op een andere Next.js website.

---

## 📋 Wat je krijgt

1. **Minimale cookie banner** - linksonder, verdwijnt bij scrollen
2. **Google Analytics 4** - laadt alleen NA consent
3. **Vercel Analytics** - basis pageviews (optioneel)
4. **Cookie policy pagina** - bijgewerkt met juiste cookies
5. **Meertalig** - NL, EN, DE, FR

---

## 🚀 Instructie voor Cursor

Kopieer onderstaande prompt en pas de waarden aan:

```
Implementeer cookie consent en Google Analytics voor deze website.

## Vereisten:
1. Cookie consent banner (klein, linksonder, verdwijnt bij scroll >100px)
2. Google Analytics 4 die ALLEEN laadt na consent
3. Vercel Analytics (optioneel, cookieloos)
4. Meertalige ondersteuning

## Google Analytics Measurement ID:
G-XXXXXXXXXX (vervang met jouw ID)

## Technische details:
- Consent opslaan in localStorage (key: 'SITENAAM-cookie-consent')
- Geen externe cookie libraries
- Glassmorphism design, past bij site
- Keuzes: "Accepteren" (all) / "Alleen noodzakelijk" (necessary)

## Bestanden te maken:
1. src/components/ui/CookieConsent.tsx
2. src/components/analytics/GoogleAnalytics.tsx
3. Translations toevoegen aan messages files

## Cookie banner gedrag:
- Verschijnt na 1 seconde delay
- Verdwijnt bij scroll >100px, komt terug bij scroll naar top
- Na keuze: opslaan in localStorage, banner verdwijnt permanent
- Custom event 'cookieConsentChange' dispatchen voor GA

## Layout integratie:
- GoogleAnalytics component BUITEN NextIntlClientProvider (geen translations nodig)
- CookieConsent component BINNEN NextIntlClientProvider (voor translations)

## Cookie policy pagina updaten:
- _ga cookie: "onderscheidt unieke bezoekers" - 2 jaar
- _ga_* cookie: "behoudt sessie status" - 2 jaar
- Consent note toevoegen: "alleen na toestemming"

Kwaliteit boven snelheid. Geen fake of hardcoded data.
```

---

## 📁 Referentie Bestanden

### CookieConsent.tsx

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const CONSENT_KEY = 'SITENAAM-cookie-consent'; // ← AANPASSEN

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
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const handleScroll = () => {
      setIsHidden(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleConsent = (type: 'all' | 'necessary') => {
    localStorage.setItem(CONSENT_KEY, type);
    localStorage.setItem(CONSENT_KEY + '-date', new Date().toISOString());
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: type }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${
      isHidden ? 'translate-y-[calc(100%+2rem)] opacity-0' : 'translate-y-0 opacity-100'
    }`}>
      <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-3 max-w-xs">
        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          {t('message')}{' '}
          <Link href="/cookies" className="text-blue-600 hover:underline">
            {t('learnMore')}
          </Link>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleConsent('necessary')}
            className="flex-1 px-3 py-1.5 text-xs font-medium text-gray-500 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            {t('necessary')}
          </button>
          <button
            onClick={() => handleConsent('all')}
            className="flex-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
```

### GoogleAnalytics.tsx

```typescript
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getCookieConsent, type ConsentType } from '@/components/ui/CookieConsent';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // ← AANPASSEN

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentType>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setConsent(getCookieConsent());

    const handleConsentChange = (event: CustomEvent<ConsentType>) => {
      setConsent(event.detail);
    };

    window.addEventListener('cookieConsentChange', handleConsentChange as EventListener);
    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange as EventListener);
    };
  }, []);

  if (!isClient || consent !== 'all') return null;

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
```

### Translations (voeg toe aan messages)

```json
{
  "cookieConsent": {
    "message": "We gebruiken cookies om je ervaring te verbeteren en sitegebruik te analyseren.",
    "accept": "Accepteren",
    "necessary": "Alleen noodzakelijk",
    "learnMore": "Meer info"
  }
}
```

### Layout.tsx integratie

```tsx
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import CookieConsent from '@/components/ui/CookieConsent';
import { Analytics } from '@vercel/analytics/next'; // optioneel

// In de body:
<body>
  <GoogleAnalytics />
  <Analytics /> {/* optioneel - Vercel Analytics */}
  <NextIntlClientProvider messages={messages}>
    {/* ... rest van de app ... */}
    <CookieConsent />
  </NextIntlClientProvider>
</body>
```

---

## 📦 Dependencies

```bash
npm i @vercel/analytics  # optioneel
```

---

## ✅ Checklist

- [ ] Google Analytics property aanmaken
- [ ] Measurement ID invullen (G-XXXXXXXXXX)
- [ ] CONSENT_KEY aanpassen naar sitenaam
- [ ] Translations toevoegen (alle talen)
- [ ] Components in layout.tsx
- [ ] Cookie policy pagina updaten
- [ ] Testen: banner verschijnt, verdwijnt bij scroll
- [ ] Testen: GA laadt alleen na "Accepteren"

---

## 🎨 Styling aanpassen

De banner gebruikt Tailwind classes. Pas aan voor je eigen kleuren:
- `bg-blue-600` → primary button kleur
- `text-blue-600` → link kleur
- `border-gray-200` → border kleur

---

*Gemaakt voor Volentis.ai - Januari 2026*
