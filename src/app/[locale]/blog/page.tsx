import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getAllBlogPosts } from '@/lib/blog';
import { Locale } from '@/i18n/config';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import CTASection from '@/components/sections/CTASection';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  
  const baseUrl = 'https://www.volentis.ai';
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      type: 'website',
      url: `${baseUrl}/${locale}/blog`,
      siteName: 'Volentis.ai',
      images: [
        {
          url: `${baseUrl}/images/blog/og-blog.png`,
          width: 1200,
          height: 630,
          alt: t('metaTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      description: t('metaDescription'),
      images: [`${baseUrl}/images/blog/og-blog.png`],
    },
    alternates: {
      canonical: `${baseUrl}/blog`,
      languages: {
        'nl': `${baseUrl}/nl/blog`,
        'en': `${baseUrl}/blog`,
        'de': `${baseUrl}/de/blog`,
        'fr': `${baseUrl}/fr/blog`,
      },
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const posts = getAllBlogPosts(locale as Locale);
  const t = await getTranslations({ locale, namespace: 'blog' });
  
  // Separate featured post (first one) from the rest
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);
  
  return (
    <>
      <BlogHero />
      
      <section className="section-padding bg-bg-light">
        <div className="section-container">
          {posts.length === 0 ? (
            // Empty state
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-bg-light-blue flex items-center justify-center">
                <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-volentis-navy mb-4">
                {t('emptyTitle')}
              </h2>
              <p className="text-text-body max-w-md mx-auto">
                {t('emptyDescription')}
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <h2 className="text-sm font-semibold text-volentis-cyan uppercase tracking-wider mb-6">
                    {t('featured')}
                  </h2>
                  <BlogCard 
                    post={featuredPost} 
                    locale={locale as Locale} 
                    featured 
                  />
                </div>
              )}
              
              {/* All Posts */}
              {remainingPosts.length > 0 && (
                <div>
                  <h2 className="text-sm font-semibold text-volentis-cyan uppercase tracking-wider mb-6">
                    {t('allPosts')}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remainingPosts.map((post) => (
                      <BlogCard 
                        key={post.slug} 
                        post={post} 
                        locale={locale as Locale} 
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
