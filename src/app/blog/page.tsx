import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Блог | Генеалогия и история семьи | Семейное Наследие',
  description: 'Статьи о генеалогии, поиске предков, архивных исследованиях и восстановлении истории семьи.',
  keywords: ['блог генеалогия', 'история семьи', 'поиск предков', 'архивы', 'родословная'],
};

const articles = [
  {
    slug: 'kak-nayti-predkov',
    title: 'Как найти предков: пошаговое руководство',
    excerpt: 'Подробное руководство по самостоятельному поиску предков с использованием архивов и онлайн-баз данных.',
    date: '15 января 2024',
  },
  {
    slug: 'kak-vosstanovit-rodoslovnuyu',
    title: 'Как восстановить родословную',
    excerpt: 'Основные этапы работы над восстановлением истории семьи и документирования найденной информации.',
    date: '10 января 2024',
  },
  {
    slug: 'kak-sostavit-semeynoe-drevo',
    title: 'Как составить семейное древо',
    excerpt: 'Практические советы по созданию визуальной родословной схемы для своей семьи.',
    date: '5 января 2024',
  },
  {
    slug: 'gde-iskat-semeynye-arhivy',
    title: 'Где искать семейные архивы',
    excerpt: 'Обзор основных источников для поиска архивных документов о предках.',
    date: '28 декабря 2023',
  },
  {
    slug: 'kak-uznat-istoriyu-semi',
    title: 'Как узнать историю своей семьи',
    excerpt: 'С чего начать изучение истории своей семьи и какие вопросы задавать старшим родственникам.',
    date: '20 декабря 2023',
  },
  {
    slug: 'kak-vosstanovit-istoriyu-roda',
    title: 'Как восстановить историю рода',
    excerpt: 'Методы генеалогического исследования и документирования истории семьи.',
    date: '15 декабря 2023',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          padding: 'calc(80px + 4rem) 0 4rem',
          background: 'var(--color-bg-secondary)',
        }}>
          <div className="container">
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 500,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
            }}>Блог</h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
            }}>
              Статьи о генеалогии, архивах и поиске предков
            </p>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {articles.map((article, index) => (
                <a 
                  key={index} 
                  href={`/blog/${article.slug}`}
                  style={{
                    background: 'var(--color-bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease',
                    display: 'block',
                  }}
                >
                  <div style={{
                    aspectRatio: '16/10',
                    background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '2.5rem', opacity: 0.3 }}>📜</span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}>{article.date}</span>
                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      margin: '0.5rem 0',
                      color: 'var(--color-text)',
                    }}>{article.title}</h2>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                    }}>{article.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}