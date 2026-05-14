import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как искать предков по фамилии | Семейное Наследие',
  description: 'Эффективные методы поиска предков по фамилии в архивах и онлайн-базах.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>5 декабря 2023</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Как искать предков по фамилии</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Поиск по фамилии — один из самых распространённых методов генеалогии.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Особенности фамилий</h2>
              <p style={{ marginBottom: '1.5rem' }}>Учитывайте, что фамилии могли меняться, были похожие варианты написания. Проверяйте все варианты.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Где искать</h2>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                <li>Метрические книги</li>
                <li>Ревизские сказки</li>
                <li>Исповедные ведомости</li>
                <li>Базы данных</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}