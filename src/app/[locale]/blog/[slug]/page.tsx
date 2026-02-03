import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getBlogPost, getBlogSlugs, getRelatedPosts } from '@/lib/blog';
import { Locale, locales } from '@/i18n/config';
import ArticleHero from '@/components/blog/ArticleHero';
import ArticleContent from '@/components/blog/ArticleContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import CTASection from '@/components/sections/CTASection';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate static params for all blog posts in all locales
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    const slugs = getBlogSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlogPost(slug, locale as Locale);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  const baseUrl = 'https://www.volentis.ai';
  const postUrl = `${baseUrl}/${locale}/blog/${slug}`;
  const imageUrl = post.image.startsWith('http') 
    ? post.image 
    : `${baseUrl}${post.image}`;
  
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: postUrl,
      siteName: 'Volentis.ai',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: '@volentis_ai',
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
      languages: {
        'nl': `${baseUrl}/nl/blog/${slug}`,
        'en': `${baseUrl}/blog/${slug}`,
        'de': `${baseUrl}/de/blog/${slug}`,
        'fr': `${baseUrl}/fr/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const post = await getBlogPost(slug, locale as Locale);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(slug, locale as Locale, 3);
  
  const baseUrl = 'https://www.volentis.ai';
  const blogUrl = locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`;
  const postUrl = locale === 'en' ? `${baseUrl}/blog/${slug}` : `${baseUrl}/${locale}/blog/${slug}`;
  
  // JSON-LD Structured Data for the article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image.startsWith('http') 
      ? post.image 
      : `${baseUrl}${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Volentis B.V.',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/volentis_logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };
  
  // BreadcrumbList for better navigation in search results
  const breadcrumbLabels: Record<string, { home: string; blog: string }> = {
    nl: { home: 'Home', blog: 'Blog' },
    en: { home: 'Home', blog: 'Blog' },
    de: { home: 'Startseite', blog: 'Blog' },
    fr: { home: 'Accueil', blog: 'Blog' },
  };
  
  const labels = breadcrumbLabels[locale] || breadcrumbLabels.en;
  const homeUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;
  
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: labels.home,
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: labels.blog,
        item: blogUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };
  
  return (
    <>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      {/* Full-width Hero */}
      <ArticleHero post={post} locale={locale as Locale} />
      
      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="section-container">
          <ArticleContent post={post} />
          
          {/* Related Posts */}
          <div className="mt-16">
            <RelatedPosts posts={relatedPosts} locale={locale as Locale} />
          </div>
        </div>
      </article>
      
      <CTASection />
    </>
  );
}
