import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Что можно найти в архивах | Семейное Наследие',
  description: 'Обзор документов и информации, которую можно найти в государственных и церковных архивах.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>1 декабря 2023</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Что можно найти в архивах</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Архивы хранят огромное количество информации о предках. Узнайте, что можно найти.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Метрические записи</h2>
              <p style={{ marginBottom: '1.5rem' }}>Рождения, смерти, браки с конца XVIII века. Содержат имена, даты, места.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Ревизские сказки</h2>
              <p style={{ marginBottom: '1.5rem' }}>Переписи населения XVIII-XIX веков. Указывают состав семьи, возраст, сословие.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Документы сословий</h2>
              <p style={{ marginBottom: '1.5rem' }}>Дворянские грамоты, купеческие гильдии, мещанские книги.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}