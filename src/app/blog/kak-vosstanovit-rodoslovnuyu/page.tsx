import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как восстановить родословную | Семейное Наследие',
  description: 'Основные этапы работы над восстановлением истории семьи и документирования найденной информации.',
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <article style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>10 января 2024</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 500,
              color: 'var(--color-text)',
              marginBottom: '2rem',
              lineHeight: 1.2,
            }}>Как восстановить родословную</h1>
            
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Восстановление родословной — это систематическая работа, которая требует терпения и методичности. Рассказываем об основных этапах.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>Этап 1: Сбор информации</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Начните с опроса старших родственников. Записывайте всё, что они помнят: имена, даты, места, фотографии. Эта информация бесценна и часто недоступна в архивах.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>Этап 2: Поиск документов</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Ищите документы в семье: свидетельства о рождении, смерти, браке, паспорта, военные билеты, фотографии. Затем расширяйте поиск в архивах и онлайн-базах.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>Этап 3: Систематизация</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Создайте таблицу или используйте специальные программы для документирования каждой найденной информации. Укажите источник каждого факта для возможности проверки.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>Этап 4: Создание родословной книги</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Когда информация собрана, можно создать полноценную родословную книгу. Это может быть простая схема или роскошное издание с фотографиями и документами.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}