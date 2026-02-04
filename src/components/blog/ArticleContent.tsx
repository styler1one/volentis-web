'use client';

import { BlogPost } from '@/lib/blog';
import ShareButtons from './ShareButtons';
import TableOfContents from './TableOfContents';
import ArticleCTA from './ArticleCTA';
import { useEffect, useState } from 'react';

interface ArticleContentProps {
  post: BlogPost;
}

export default function ArticleContent({ post }: ArticleContentProps) {
  const [processedHtml, setProcessedHtml] = useState(post.contentHtml);

  useEffect(() => {
    // Process blockquotes to add special styling for Key Insight, Pro Tip, etc.
    let html = post.contentHtml;
    
    // Key Insight boxes
    html = html.replace(
      /<blockquote>\s*<p>\s*<strong>Key Insight:?<\/strong>/gi,
      '<div class="insight-box insight-key"><div class="insight-icon">💡</div><div class="insight-content"><p class="insight-label">Key Insight</p><p>'
    );
    
    // Pro Tip boxes
    html = html.replace(
      /<blockquote>\s*<p>\s*<strong>Pro Tip:?<\/strong>/gi,
      '<div class="insight-box insight-tip"><div class="insight-icon">✨</div><div class="insight-content"><p class="insight-label">Pro Tip</p><p>'
    );
    
    // Bottom Line boxes
    html = html.replace(
      /<blockquote>\s*<p>\s*<strong>Bottom Line:?<\/strong>/gi,
      '<div class="insight-box insight-bottom"><div class="insight-icon">🎯</div><div class="insight-content"><p class="insight-label">Bottom Line</p><p>'
    );
    
    // Close the insight boxes (match closing blockquote after our replacements)
    html = html.replace(
      /<\/p>\s*<\/blockquote>/g,
      (match, offset) => {
        // Check if this is after an insight box
        const before = html.substring(0, offset);
        if (before.lastIndexOf('insight-box') > before.lastIndexOf('</div></div></div>')) {
          return '</p></div></div>';
        }
        return match;
      }
    );
    
    setProcessedHtml(html);
  }, [post.contentHtml]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Article Description/Lead */}
      <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-10 font-medium border-l-4 border-volentis-cyan pl-6">
        {post.description}
      </p>
      
      {/* Table of Contents */}
      <TableOfContents contentHtml={post.contentHtml} />
      
      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none
          prose-headings:text-volentis-navy prose-headings:font-bold prose-headings:scroll-mt-24
          prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border-gray/20
          prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-text-body prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-volentis-cyan prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-strong:text-volentis-navy prose-strong:font-semibold
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-text-body prose-li:mb-2 prose-li:leading-relaxed
          prose-blockquote:border-l-4 prose-blockquote:border-volentis-cyan 
          prose-blockquote:bg-bg-light-blue prose-blockquote:py-4 prose-blockquote:px-6 
          prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8
          prose-blockquote:text-volentis-navy prose-blockquote:font-medium
          prose-code:bg-bg-light prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-code:text-volentis-navy prose-code:font-mono prose-code:text-sm
          prose-pre:bg-navy-dark prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8
          prose-img:rounded-xl prose-img:shadow-card prose-img:my-8
          prose-table:border-collapse prose-table:w-full prose-table:my-8
          prose-table:rounded-xl prose-table:overflow-hidden
          prose-th:bg-volentis-navy prose-th:text-white prose-th:font-semibold prose-th:p-4 prose-th:text-left
          prose-td:border prose-td:border-border-gray/20 prose-td:p-4
          prose-tr:even:bg-bg-light
          
          [&_.insight-box]:my-8 [&_.insight-box]:p-6 [&_.insight-box]:rounded-xl [&_.insight-box]:flex [&_.insight-box]:gap-4
          [&_.insight-key]:bg-blue-50 [&_.insight-key]:border [&_.insight-key]:border-blue-200
          [&_.insight-tip]:bg-emerald-50 [&_.insight-tip]:border [&_.insight-tip]:border-emerald-200
          [&_.insight-bottom]:bg-amber-50 [&_.insight-bottom]:border [&_.insight-bottom]:border-amber-200
          [&_.insight-icon]:text-2xl [&_.insight-icon]:flex-shrink-0
          [&_.insight-content]:flex-1
          [&_.insight-label]:font-bold [&_.insight-label]:text-sm [&_.insight-label]:uppercase [&_.insight-label]:tracking-wider [&_.insight-label]:mb-2
          [&_.insight-key_.insight-label]:text-blue-700
          [&_.insight-tip_.insight-label]:text-emerald-700
          [&_.insight-bottom_.insight-label]:text-amber-700
        "
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
      
      {/* Tags Section */}
      {post.tags.length > 0 && (
        <div className="mt-14 pt-8 border-t border-border-gray/20">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 text-sm text-volentis-navy bg-bg-light-blue rounded-full hover:bg-volentis-cyan hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Share Section */}
      <ShareButtons slug={post.slug} title={post.title} />
      
      {/* CTA Section */}
      <ArticleCTA />
    </div>
  );
}
