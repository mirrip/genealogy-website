import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как восстановить историю рода | Семейное Наследие',
  description: 'Методы генеалогического исследования и документирования истории семьи.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>15 декабря 2023</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Как восстановить историю рода</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Восстановление истории рода требует систематического подхода. Рассказываем о методах.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Методы исследования</h2>
              <p style={{ marginBottom: '1.5rem' }}>Используйте комбинированный подход: опрос родственников + архивные документы + онлайн-базы.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Документирование</h2>
              <p style={{ marginBottom: '1.5rem' }}>Ведите записи каждого источника. Используйте генеалогическое ПО для систематизации данных.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Создание истории</h2>
              <p style={{ marginBottom: '1.5rem' }}>Собрав информацию, создайте полную историю рода с биографиями и историческим контекстом.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}