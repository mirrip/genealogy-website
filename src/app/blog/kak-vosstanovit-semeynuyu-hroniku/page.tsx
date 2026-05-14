import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как восстановить семейную хронику | Семейное Наследие',
  description: 'Создание семейной хроники: объединение документов, фотографий и воспоминаний в единую историю.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>25 ноября 2023</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Как восстановить семейную хронику</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Семейная хроника — это объединение всех материалов о семье в единую историю.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Что включить</h2>
              <p style={{ marginBottom: '1.5rem' }}>Соберите всё: документы, фотографии, письма, воспоминания, предметы.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Структура хроники</h2>
              <p style={{ marginBottom: '1.5rem' }}>Организуйте по поколениям или хронологии. Добавьте исторический контекст.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Оформление</h2>
              <p style={{ marginBottom: '1.5rem' }}>Создайте печатную версию или цифровой архив для всей семьи.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}