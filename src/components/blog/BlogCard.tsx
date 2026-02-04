import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { BlogPostMeta, formatDate } from '@/lib/blog';
import { Locale } from '@/i18n/config';

interface BlogCardProps {
  post: BlogPostMeta;
  locale: Locale;
  featured?: boolean;
}

export default function BlogCard({ post, locale, featured = false }: BlogCardProps) {
  return (
    <article 
      className={`group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
      }`}
    >
      {/* Image */}
      <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden">
        <div className={`relative ${featured ? 'h-64 md:h-full' : 'h-48'}`}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-volentis-cyan rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      {/* Content */}
      <div className={`p-6 ${featured ? 'flex flex-col justify-center' : ''}`}>
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
          <time dateTime={post.date}>
            {formatDate(post.date, locale)}
          </time>
          <span className="text-border-gray">•</span>
          <span>{post.readingTime} min</span>
        </div>
        
        {/* Title */}
        <h2 className={`font-bold text-volentis-navy mb-3 group-hover:text-volentis-cyan transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        {/* Description */}
        <p className={`text-text-body mb-4 ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
          {post.description}
        </p>
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs text-volentis-navy bg-bg-light-blue rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Read More Link */}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-volentis-cyan hover:text-volentis-navy transition-colors"
        >
          <span>Lees meer</span>
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
  );
}
