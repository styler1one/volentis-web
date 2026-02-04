import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Locale } from '@/i18n/config';

// Types for blog posts
export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: number;
  locale: string;
  published: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  contentHtml: string;
}

// Path to content directory
const contentDirectory = path.join(process.cwd(), 'content', 'blog');

/**
 * Calculate reading time in minutes
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Get all blog post slugs for a specific locale
 */
export function getBlogSlugs(locale: Locale): string[] {
  const localeDirectory = path.join(contentDirectory, locale);
  
  if (!fs.existsSync(localeDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(localeDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Get all blog posts for a specific locale, sorted by date
 */
export function getAllBlogPosts(locale: Locale): BlogPostMeta[] {
  const slugs = getBlogSlugs(locale);
  
  const posts = slugs
    .map((slug) => getBlogPostMeta(slug, locale))
    .filter((post): post is BlogPostMeta => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

/**
 * Get metadata for a single blog post without parsing content
 */
export function getBlogPostMeta(slug: string, locale: Locale): BlogPostMeta | null {
  const fullPath = path.join(contentDirectory, locale, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Volentis Team',
    category: data.category || 'AI',
    tags: data.tags || [],
    image: data.image || '/images/blog/default-hero.png',
    imageAlt: data.imageAlt || data.title || '',
    readingTime: calculateReadingTime(content),
    locale,
    published: data.published !== false, // Default to true if not specified
  };
}

/**
 * Get a single blog post with full content
 */
export async function getBlogPost(slug: string, locale: Locale): Promise<BlogPost | null> {
  const fullPath = path.join(contentDirectory, locale, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  let contentHtml = processedContent.toString();
  
  // Add IDs to H2 headings for TOC navigation
  let h2Index = 0;
  contentHtml = contentHtml.replace(/<h2>/g, () => {
    const id = `section-${h2Index}`;
    h2Index++;
    return `<h2 id="${id}">`;
  });
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Volentis Team',
    category: data.category || 'AI',
    tags: data.tags || [],
    image: data.image || '/images/blog/default-hero.png',
    imageAlt: data.imageAlt || data.title || '',
    readingTime: calculateReadingTime(content),
    locale,
    published: data.published !== false,
    content,
    contentHtml,
  };
}

/**
 * Get related posts based on category and tags
 */
export function getRelatedPosts(
  currentSlug: string,
  locale: Locale,
  limit: number = 3
): BlogPostMeta[] {
  const currentPost = getBlogPostMeta(currentSlug, locale);
  if (!currentPost) return [];
  
  const allPosts = getAllBlogPosts(locale);
  
  // Filter out current post and score by relevance
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      
      // Same category = +2
      if (post.category === currentPost.category) {
        score += 2;
      }
      
      // Shared tags = +1 each
      const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
      score += sharedTags.length;
      
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
  
  return scoredPosts;
}

/**
 * Get all unique categories
 */
export function getAllCategories(locale: Locale): string[] {
  const posts = getAllBlogPosts(locale);
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(locale: Locale): string[] {
  const posts = getAllBlogPosts(locale);
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags).sort();
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, locale: Locale): string {
  const date = new Date(dateString);
  
  const localeMap: Record<Locale, string> = {
    nl: 'nl-NL',
    en: 'en-US',
    de: 'de-DE',
    fr: 'fr-FR',
  };
  
  return date.toLocaleDateString(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
