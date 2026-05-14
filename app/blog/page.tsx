import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Блог | Генеалогия',
  description: 'Статьи о генеалогии, поиске предков и создании родословных книг',
}

const articles = [
  {
    slug: 'kak-nayti-predkov',
    title: 'Как найти предков: полное руководство',
    excerpt: 'Пошаговая инструкция по самостоятельному поиску родственников в архивах и онлайн-базах данных.',
    date: '2024-01-15',
    readTime: '10 мин',
  },
  {
    slug: 'kak-vosstanovit-rodoslovnuyu',
    title: 'Как восстановить родословную: советы профессионалов',
    excerpt: 'Экспертные рекомендации по эффективному восстановлению семейной истории без ошибок и упущений.',
    date: '2024-01-10',
    readTime: '8 мин',
  },
  {
    slug: 'kak-sostavit-semeynoe-drevo',
    title: 'Как составить семейное древо: инструменты и методы',
    excerpt: 'Обзор лучших программ и сервисов для создания генеалогических деревьев.',
    date: '2024-01-05',
    readTime: '7 мин',
  },
  {
    slug: 'gde-iskat-arhiv-semi',
    title: 'Где искать архивы семьи: обзор источников',
    excerpt: 'Полный список архивов и баз данных для поиска генеалогической информации.',
    date: '2023-12-28',
    readTime: '12 мин',
  },
  {
    slug: 'kak-uznat-istoriyu-roda',
    title: 'Как узнать историю своего рода',
    excerpt: 'Методы исследования семейной истории и документирования найденной информации.',
    date: '2023-12-20',
    readTime: '9 мин',
  },
  {
    slug: 'chto-mozhno-nayti-v-arhivah',
    title: 'Что можно найти в архивах: документы и записи',
    excerpt: 'Типы архивных документов, которые помогут восстановить историю семьи.',
    date: '2023-12-15',
    readTime: '11 мин',
  },
  {
    slug: 'kak-oformit-rodoslovnuyu-knigu',
    title: 'Как оформить родословную книгу: дизайн и содержание',
    excerpt: 'Рекомендации по созданию красивой и информативной семейной книги.',
    date: '2023-12-10',
    readTime: '8 мин',
  },
  {
    slug: 'kak-nayti-uchastnikov-voyny',
    title: 'Как найти участников войны в архивах',
    excerpt: 'Поиск военных документов и информации о предках-участниках войн.',
    date: '2023-12-05',
    readTime: '10 мин',
  },
  {
    slug: 'kak-iskat-predkov-po-familii',
    title: 'Как искать предков по фамилии: стратегии поиска',
    excerpt: 'Эффективные методы поиска родственников с учетом особенностей фамилий.',
    date: '2023-11-28',
    readTime: '7 мин',
  },
  {
    slug: 'kak-vosstanovit-semeynuyu-istoriyu',
    title: 'Как восстановить семейную историю',
    excerpt: 'Комплексный подход к исследованию и документированию родословной.',
    date: '2023-11-20',
    readTime: '15 мин',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-breadcrumb">
              <Link href="/">Главная</Link>
              <span>→</span>
              <span>Блог</span>
            </div>
            <h1 className="page-title">Блог</h1>
            <p className="section-subtitle">
              Статьи о генеалогии, поиске предков и создании родословных книг
            </p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className="blog-grid">
              {articles.map(article => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card">
                  <div className="blog-image">
                    <span>📖</span>
                  </div>
                  <div className="blog-content">
                    <h2 className="blog-title">{article.title}</h2>
                    <p className="blog-excerpt">{article.excerpt}</p>
                    <div className="blog-meta">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
        .page-header {
          padding: 120px 0 60px;
          text-align: center;
          background: linear-gradient(to bottom, rgba(249, 247, 242, 0.9), rgba(249, 247, 242, 0.95));
        }
        .page-title {
          font-size: 48px;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
          font-family: 'Cormorant Garamond', serif;
          color: var(--primary-brown);
        }
        .page-breadcrumb {
          display: flex;
          justify-content: center;
          gap: 12px;
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .page-breadcrumb a {
          color: var(--gold-accent);
          text-decoration: none;
        }
        .page-breadcrumb a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}