import { BlogPostMeta } from '@/lib/blog';
import { Locale } from '@/i18n/config';
import BlogCard from './BlogCard';
import { useTranslations } from 'next-intl';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
  locale: Locale;
}

export default function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  const t = useTranslations('blog');

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-border-gray/30">
      <h2 className="text-2xl font-bold text-volentis-navy mb-8">
        {t('relatedPosts')}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} locale={locale} />
        ))}
      </div>
    </section>
  );
}
