import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Где искать семейные архивы | Семейное Наследие',
  description: 'Обзор основных источников для поиска архивных документов о предках.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>28 декабря 2023</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '2rem', lineHeight: 1.2 }}>Где искать семейные архивы</h1>
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>Архивы — главный источник информации о предках. Рассказываем, где искать документы.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Государственные архивы РФ</h2>
              <p style={{ marginBottom: '1.5rem' }}>Госархивы хранят метрические книги, ревизские сказки, документы учебных заведений. Основные: GARF, RGADA, RGANI.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Церковные архивы</h2>
              <p style={{ marginBottom: '1.5rem' }}>Метрические книги православных приходов, исповедные ведомости доступны в архивах РПЦ и госархивах.</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '2rem', marginBottom: '1rem' }}>Онлайн-ресурсы</h2>
              <p style={{ marginBottom: '1.5rem' }}>FamilySearch.org, Госархивы РФ и региональные архивы имеют оцифрованные коллекции.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}