import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { BlogPost, formatDate } from '@/lib/blog';
import { Locale } from '@/i18n/config';
import ShareButtons from './ShareButtons';

interface ArticleHeroProps {
  post: BlogPost;
  locale: Locale;
}

export default function ArticleHero({ post, locale }: ArticleHeroProps) {
  return (
    <section className="relative">
      {/* Full-width Hero Image with Overlay */}
      <div className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-volentis-navy/90 via-volentis-navy/50 to-transparent" />
        
        {/* Reading Time Badge */}
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white text-sm font-medium">{post.readingTime} min</span>
          </div>
        </div>
        
        {/* Content on Hero */}
        <div className="absolute inset-x-0 bottom-0 pb-12">
          <div className="section-container">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>
            
            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 text-sm font-semibold text-volentis-navy bg-volentis-cyan rounded-full">
                {post.category}
              </span>
              {post.tags.slice(0, 2).map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>
            
            {/* Author & Date Row */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-volentis-cyan to-accent-success flex items-center justify-center ring-2 ring-white/30">
                    <span className="text-white font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-sm text-white/70">
                      {formatDate(post.date, locale)}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Share Buttons on Hero */}
              <div className="flex items-center gap-2">
                <span className="text-white/70 text-sm mr-2 hidden sm:inline">Delen:</span>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.volentis.ai/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.volentis.ai/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Share on X"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
