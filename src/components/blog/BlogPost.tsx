import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { BlogPost as BlogPostType, formatDate } from '@/lib/blog';
import { Locale } from '@/i18n/config';
import ShareButtons from './ShareButtons';

interface BlogPostProps {
  post: BlogPostType;
  locale: Locale;
}

export default function BlogPost({ post, locale }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <header className="mb-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-volentis-cyan transition-colors">
                Home
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/blog" className="hover:text-volentis-cyan transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-volentis-navy font-medium truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </nav>
        
        {/* Category */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-volentis-cyan rounded-full">
            {post.category}
          </span>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-6 leading-tight">
          {post.title}
        </h1>
        
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-text-body mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-volentis-cyan to-accent-success flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="font-medium text-volentis-navy">{post.author}</p>
              <p className="text-sm text-text-muted">
                {formatDate(post.date, locale)}
              </p>
            </div>
          </div>
          
          <span className="text-border-gray hidden sm:block">|</span>
          
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{post.readingTime} min leestijd</span>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-card">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </header>
      
      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none
          prose-headings:text-volentis-navy prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-text-body prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-volentis-cyan prose-a:no-underline hover:prose-a:underline
          prose-strong:text-volentis-navy prose-strong:font-semibold
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-text-body prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-volentis-cyan 
          prose-blockquote:bg-bg-light-blue prose-blockquote:py-4 prose-blockquote:px-6 
          prose-blockquote:rounded-r-lg prose-blockquote:not-italic
          prose-blockquote:text-volentis-navy
          prose-code:bg-bg-light prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-code:text-volentis-navy prose-code:font-mono prose-code:text-sm
          prose-pre:bg-navy-dark prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6
          prose-img:rounded-xl prose-img:shadow-card
          prose-table:border-collapse prose-table:w-full
          prose-th:bg-bg-light prose-th:text-volentis-navy prose-th:font-semibold prose-th:p-3 prose-th:text-left
          prose-td:border prose-td:border-border-gray/30 prose-td:p-3
        "
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      
      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border-gray/30">
          <h3 className="text-sm font-semibold text-text-muted mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-sm text-volentis-navy bg-bg-light-blue rounded-full hover:bg-volentis-cyan hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Share Section */}
      <ShareButtons slug={post.slug} title={post.title} />
    </article>
  );
}
