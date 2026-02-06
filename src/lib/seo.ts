const baseUrl = 'https://www.volentis.ai';

/**
 * Returns canonical URL and hreflang alternates for a page path.
 * Use in generateMetadata to fix "Crawled - currently not indexed" for multi-language pages.
 */
export function getAlternates(path: string, locale: string) {
  const canonicalUrl =
    locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
  const languages: Record<string, string> = {
    en: `${baseUrl}${path}`,
    nl: `${baseUrl}/nl${path}`,
    de: `${baseUrl}/de${path}`,
    fr: `${baseUrl}/fr${path}`,
    'x-default': `${baseUrl}${path}`,
  };
  return {
    canonical: canonicalUrl,
    languages,
  };
}

export { baseUrl };
