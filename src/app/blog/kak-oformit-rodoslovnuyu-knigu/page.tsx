import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как оформить родословную книгу | Семейное Наследие',
  description: 'Рекомендации по оформлению и созданию роскошной родословной книги.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>10 декабря 2023</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Как оформить родословную книгу</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Родословная книга — это не просто список имён, а настоящее произведение искусства.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Структура книги</h2>
              <p style={{ marginBottom: '1.5rem' }}>Хорошая книга включает: титульный лист, предисловие, родословную схему, биографии, архивные документы, фотографии.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Оформление</h2>
              <p style={{ marginBottom: '1.5rem' }}>Выбирайте качественные материалы: натуральная кожа для переплёта, плотная бумага, золотое тиснение.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Профессиональная помощь</h2>
              <p style={{ marginBottom: '1.5rem' }}>Мы создаём роскошные родословные книги с индивидуальным дизайном.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}