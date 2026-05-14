import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как узнать историю своей семьи | Семейное Наследие',
  description: 'С чего начать изучение истории своей семьи и какие вопросы задавать старшим родственникам.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>20 декабря 2023</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Как узнать историю своей семьи</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Первый шаг к изучению истории семьи — поговорить со старшими родственниками.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Что спросить</h2>
              <p style={{ marginBottom: '1rem' }}>Подготовьте вопросы заранее:</p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                <li>Как звали ваших родителей, бабушек и дедушек?</li>
                <li>Где они родились и жили?</li>
                <li>Какой была их работа?</li>
                <li>Были ли интересные истории в семье?</li>
              </ul>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Записывайте и фотографируйте</h2>
              <p style={{ marginBottom: '1.5rem' }}>Всегда записывайте разговоры и фотографируйте семейные фотографии. Старшие родственники — ценнейший источник информации.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}