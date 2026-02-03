import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const baseUrl = 'https://www.volentis.ai';

// Get all published blog posts for sitemap
function getBlogPostsForSitemap(): { slug: string; locale: string; date: string }[] {
  const contentDirectory = path.join(process.cwd(), 'content', 'blog');
  const locales = ['nl', 'en', 'de', 'fr'];
  const posts: { slug: string; locale: string; date: string }[] = [];

  for (const locale of locales) {
    const localeDir = path.join(contentDirectory, locale);
    if (!fs.existsSync(localeDir)) continue;

    const files = fs.readdirSync(localeDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const fullPath = path.join(localeDir, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(content);
      
      if (data.published !== false) {
        posts.push({
          slug: file.replace(/\.md$/, ''),
          locale,
          date: data.date || new Date().toISOString(),
        });
      }
    }
  }

  return posts;
}

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

  // Add blog listing page for each locale
  locales.forEach((locale) => {
    const url = locale === 'en' 
      ? `${baseUrl}/blog` 
      : `${baseUrl}/${locale}/blog`;
    
    sitemapEntries.push({
      url,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    });
  });

  // Add all blog posts
  const blogPosts = getBlogPostsForSitemap();
  blogPosts.forEach((post) => {
    const url = post.locale === 'en'
      ? `${baseUrl}/blog/${post.slug}`
      : `${baseUrl}/${post.locale}/blog/${post.slug}`;
    
    sitemapEntries.push({
      url,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
