export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Volentis B.V.',
    alternateName: 'Volentis.ai',
    url: 'https://www.volentis.ai',
    logo: 'https://www.volentis.ai/volentis_logo.png',
    description: 'Enterprise AI you can trust — no hallucinations, no data leaks, no compliance risks. GDPR compliant, EU AI Act ready.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Baron de Coubertinlaan 6',
      addressLocality: 'Zoetermeer',
      postalCode: '2719 EL',
      addressCountry: 'NL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-10-322-0675',
      email: 'info@volentis.ai',
      contactType: 'sales',
      areaServed: ['EU', 'NL', 'DE', 'FR', 'BE'],
      availableLanguage: ['English', 'Dutch', 'German', 'French'],
    },
    sameAs: [
      'https://www.linkedin.com/company/volentis-ai',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Enterprise AI',
      'Natural Language Processing',
      'RAG (Retrieval-Augmented Generation)',
      'GDPR Compliance',
      'EU AI Act',
      'HR Technology',
      'Legal Technology',
      'Compliance Technology',
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Volentis.ai',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    description: 'AI-powered knowledge assistant for HR, Legal, Compliance, IT, and Finance departments. Answers employee questions from your own documents with source attribution.',
    offers: {
      '@type': 'Offer',
      category: 'Enterprise Software',
    },
    featureList: [
      'AI-powered Q&A from your documents',
      'No hallucinations - RAG architecture',
      'Source attribution for every answer',
      'Multi-language support',
      'GDPR compliant',
      'EU AI Act ready',
      'Microsoft Teams integration',
      'SharePoint integration',
      'Complete audit trail',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Volentis.ai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Volentis.ai is an enterprise AI platform that provides specialized AI agents for HR, Legal, Compliance, IT, and Finance departments. It answers employee questions from your own documents with full source attribution and no hallucinations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Volentis.ai GDPR compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Volentis.ai is fully GDPR compliant. All data is hosted in EU datacenters (Germany and Netherlands), we act as a Data Processor under Article 28, and your data is never used for AI training.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Volentis.ai prevent AI hallucinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Volentis.ai uses RAG (Retrieval-Augmented Generation) architecture, which means answers come exclusively from your approved documents. If the information is not in your documents, the AI will say "I don\'t know" instead of making something up.',
        },
      },
      {
        '@type': 'Question',
        name: 'What integrations does Volentis.ai support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Volentis.ai integrates with SharePoint, Microsoft Teams, Slack, and major HR systems like SAP SuccessFactors, Workday, AFAS, and Personio. Enterprise SSO via SAML 2.0 and OpenID Connect is also supported.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
