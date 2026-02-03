import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { getAllBlogPosts, formatDate } from '@/lib/blog';
import { Locale } from '@/i18n/config';

export default function FeaturedArticles() {
  const t = useTranslations('featuredArticles');
  const locale = useLocale() as Locale;
  
  // Get up to 3 latest published articles
  const articles = getAllBlogPosts(locale).slice(0, 3);
  
  // If no articles, don't render the section
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-bg-light">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-volentis-cyan/10 border border-volentis-cyan/20 mb-4">
            <svg className="w-5 h-5 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-volentis-cyan text-sm font-medium">{t('badge')}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
            {t('title')}
          </h2>
          
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.slug}
              className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <Link href={`/blog/${article.slug}`} className="block relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-volentis-cyan rounded-full">
                    {article.category}
                  </span>
                </div>
              </Link>
              
              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                  <time dateTime={article.date}>
                    {formatDate(article.date, locale)}
                  </time>
                  <span className="text-border-gray">•</span>
                  <span>{article.readingTime} min</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-volentis-navy mb-3 group-hover:text-volentis-cyan transition-colors line-clamp-2">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                
                {/* Description */}
                <p className="text-text-body text-sm line-clamp-2 mb-4">
                  {article.description}
                </p>
                
                {/* Read More */}
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-volentis-cyan hover:text-volentis-navy transition-colors"
                >
                  <span>{t('readMore')}</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-volentis-navy/20 text-volentis-navy font-semibold rounded-xl hover:border-volentis-cyan hover:text-volentis-cyan transition-all duration-300"
          >
            <span>{t('viewAll')}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
