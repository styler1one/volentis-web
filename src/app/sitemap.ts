import { MetadataRoute } from 'next';

const baseUrl = 'https://www.volentis.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'nl', 'de', 'fr'];
  const lastModified = new Date();

  // Main pages
  const mainPages = [
    '',
    '/demo',
    '/contact',
    '/pricing',
    '/privacy',
    '/terms',
    '/cookies',
  ];

  // Product pages
  const productPages = [
    '/product/features',
    '/product/integrations',
    '/product/deployment',
    '/product/security',
  ];

  // Use case / Agent pages
  const useCasePages = [
    '/use-cases/hr',
    '/use-cases/legal',
    '/use-cases/compliance',
    '/use-cases/it',
    '/use-cases/finance',
    '/use-cases/international',
  ];

  // Try agent pages
  const tryPages = [
    '/try/hr',
    '/try/legal',
    '/try/compliance',
    '/try/it',
    '/try/finance',
    '/try/international',
  ];

  // Landing pages
  const landingPages = [
    '/landing/hr-agent',
  ];

  const allPages = [
    ...mainPages,
    ...productPages,
    ...useCasePages,
    ...tryPages,
    ...landingPages,
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each page in each locale
  allPages.forEach((page) => {
    locales.forEach((locale) => {
      const url = locale === 'en' 
        ? `${baseUrl}${page}` 
        : `${baseUrl}/${locale}${page}`;
      
      // Determine priority based on page type
      let priority = 0.5;
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

      if (page === '') {
        priority = 1.0;
        changeFrequency = 'daily';
      } else if (page === '/demo' || page === '/contact') {
        priority = 0.9;
        changeFrequency = 'weekly';
      } else if (page.startsWith('/product/') || page.startsWith('/use-cases/')) {
        priority = 0.8;
        changeFrequency = 'weekly';
      } else if (page.startsWith('/landing/')) {
        priority = 0.85;
        changeFrequency = 'weekly';
      } else if (page.startsWith('/try/')) {
        priority = 0.7;
        changeFrequency = 'monthly';
      } else if (page === '/pricing') {
        priority = 0.8;
        changeFrequency = 'monthly';
      }

      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency,
        priority,
      });
    });
  });

  return sitemapEntries;
}
