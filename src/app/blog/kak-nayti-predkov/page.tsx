import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Как найти предков: пошаговое руководство | Семейное Наследие',
  description: 'Подробное руководство по самостоятельному поиску предков с использованием архивов и онлайн-баз данных.',
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
            }}>15 января 2024</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 500,
              color: 'var(--color-text)',
              marginBottom: '2rem',
              lineHeight: 1.2,
            }}>Как найти предков: пошаговое руководство</h1>
            
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Поиск предков — это увлекательное путешествие в прошлое, которое может занять много времени, но приносит невероятные результаты. В этом руководстве мы расскажем, с чего начать и какие ресурсы использовать.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>С чего начать</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Начните с того, что вам уже известно. Запишите всё, что знаете о своей семье: имена, даты рождения, места проживания. Эта информация станет отправной точкой для исследования.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>Онлайн-ресурсы</h2>
              <p style={{ marginBottom: '1rem' }}>
                Сегодня многие архивы оцифровали свои коллекции. Вот основные ресурсы:
              </p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                <li>FamilySearch.org — крупнейшая бесплатная база генеалогических записей</li>
                <li>Госархивы РФ — оцифрованные фонды государственных архивов</li>
                <li>Ancestry.com — платная база с миллионами записей</li>
              </ul>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>Работа с архивами</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Если онлайн-ресурсов недостаточно, обращайтесь в архивы лично или направляйте запросы. Государственные архивы хранят метрические книги, ревизские сказки, документы учебных заведений и многое другое.
              </p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}>Советы</h2>
              <p style={{ marginBottom: '1rem' }}>
                Несколько советов для успешного поиска:
              </p>
              <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                <li>Начинайте с недавних поколений и двигайтесь назад</li>
                <li>Документируйте источники каждой найденной информации</li>
                <li>Проверяйте данные из нескольких источников</li>
                <li>Не бойтесь обращаться за помощью к профессионалам</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}