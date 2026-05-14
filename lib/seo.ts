import { Metadata } from 'next'

// Site configuration
export const siteConfig = {
  name: 'Генеалогия | Родословные книги',
  description: 'Профессиональные генеалогические исследования, создание родословных книг и архивные поиски. Восстанавливаем историю вашего рода.',
  url: 'https://genealogy.example.com',
  ogImage: '/images/og-image.jpg',
}

// Default SEO metadata
export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: '%s | Генеалогия',
    },
    description: siteConfig.description,
    keywords: [
      'генеалогия',
      'родословная',
      'родословная книга',
      'генеалогическое исследование',
      'архивный поиск',
      'семейная история',
      'поиск предков',
    ],
    authors: [{ name: 'Генеалогия' }],
    creator: 'Генеалогия',
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Blog article metadata
export function getArticleMetadata(
  title: string,
  description: string,
  slug: string,
  publishedTime: string,
  updatedTime?: string
): Metadata {
  return {
    title: `${title} | Блог`,
    description,
    openGraph: {
      type: 'article',
      publishedTime,
      authors: ['Генеалогия'],
      title,
      description,
      url: `${siteConfig.url}/blog/${slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

// Service page metadata
export function getServiceMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: `${title} | Услуги`,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
    },
  }
}

// Case page metadata
export function getCaseMetadata(
  title: string,
  description: string,
  slug: string
): Metadata {
  return {
    title: `${title} | Кейсы`,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${siteConfig.url}/cases/${slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

// JSON-LD schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.ogImage,
  description: siteConfig.description,
  sameAs: [],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  image: siteConfig.ogImage,
  url: siteConfig.url,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RU',
  },
}

export const faqSchema = (faq: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  faqSection: faq.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})