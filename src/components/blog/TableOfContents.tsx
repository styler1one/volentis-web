'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentHtml: string;
}

export default function TableOfContents({ contentHtml }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const t = useTranslations('blog');

  useEffect(() => {
    // Parse headings from HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentHtml, 'text/html');
    const h2Elements = doc.querySelectorAll('h2');
    
    const items: TOCItem[] = Array.from(h2Elements).map((heading, index) => {
      const text = heading.textContent || '';
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 50);
      return { id: `section-${index}`, text, level: 2 };
    });
    
    setHeadings(items);
  }, [contentHtml]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav className="mb-10 p-6 bg-bg-light rounded-xl border border-border-gray/20">
      <h2 className="text-sm font-semibold text-volentis-navy uppercase tracking-wider mb-4 flex items-center gap-2">
        <svg className="w-4 h-4 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        {t('jumpTo')}
      </h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={heading.id}>
            <a
              href={`#section-${index}`}
              className={`block text-sm py-1 px-3 rounded-lg transition-colors ${
                activeId === heading.id
                  ? 'bg-volentis-cyan/10 text-volentis-cyan font-medium'
                  : 'text-text-body hover:text-volentis-navy hover:bg-bg-light-blue'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
