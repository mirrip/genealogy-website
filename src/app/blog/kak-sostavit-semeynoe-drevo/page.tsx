import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как составить семейное древо | Семейное Наследие',
  description: 'Практические советы по созданию визуальной родословной схемы для своей семьи.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>5 января 2024</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Как составить семейное древо</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Семейное древо — это визуальное представление родословной. Рассказываем, как создать его самостоятельно.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Выбор формата</h2>
              <p style={{ marginBottom: '1.5rem' }}>Древо можно нарисовать от руки, создать в Excel или использовать специальные программы. Для больших семей подойдут цифровые форматы.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Основные правила</h2>
              <p style={{ marginBottom: '1rem' }}>При составлении древа:</p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                <li>Начинайте с себя и двигайтесь вверх</li>
                <li>Используйте стандартные обозначения</li>
                <li>Добавляйте даты жизни каждого человека</li>
                <li>Указывайте источники информации</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}