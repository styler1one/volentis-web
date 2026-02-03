import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { locales } from '@/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import CookieConsent from '@/components/ui/CookieConsent';
import '@/styles/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const baseUrl = 'https://www.volentis.ai';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Volentis.ai - European AI with Trust at the Core',
    template: '%s | Volentis.ai',
  },
  description: 'Enterprise AI you can trust — no hallucinations, no data leaks, no compliance risks. GDPR compliant, EU AI Act ready. Specialized AI agents for HR, Legal, Compliance, IT, and Finance.',
  keywords: [
    'enterprise AI',
    'AI assistant',
    'HR AI',
    'legal AI',
    'compliance AI',
    'GDPR compliant AI',
    'EU AI Act',
    'European AI',
    'RAG',
    'knowledge management',
    'document AI',
    'no hallucinations',
    'Volentis',
  ],
  authors: [{ name: 'Volentis B.V.' }],
  creator: 'Volentis B.V.',
  publisher: 'Volentis B.V.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/volentis_logo.png', type: 'image/png' },
    ],
    apple: '/volentis_logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['nl_NL', 'de_DE', 'fr_FR'],
    url: baseUrl,
    siteName: 'Volentis.ai',
    title: 'Volentis.ai - European AI with Trust at the Core',
    description: 'Enterprise AI you can trust — no hallucinations, no data leaks, no compliance risks. GDPR compliant, EU AI Act ready.',
    images: [
      {
        url: '/volentis_logo.png',
        width: 1200,
        height: 630,
        alt: 'Volentis.ai - European AI with Trust at the Core',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volentis.ai - European AI with Trust at the Core',
    description: 'Enterprise AI you can trust — no hallucinations, no data leaks, no compliance risks. GDPR compliant, EU AI Act ready.',
    images: ['/volentis_logo.png'],
    creator: '@volentis_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'DGq-CuAhILpvEHizZPV7sE786uAHE23ozTtcr2qza-Y',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={outfit.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans">
        <GoogleAnalytics />
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
