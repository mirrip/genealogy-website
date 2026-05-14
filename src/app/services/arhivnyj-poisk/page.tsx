import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Архивный поиск | Поиск в архивах | Семейное Наследие',
  description: 'Профессиональный поиск документов в государственных и частных архивах России и зарубежья.',
  keywords: ['архивный поиск', 'поиск документов', 'архивы', 'исторические документы', 'архивные справки'],
};

export default function ArhivnyjPoiskPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          padding: 'calc(80px + 4rem) 0 4rem',
          background: 'var(--color-bg-secondary)',
        }}>
          <div className="container">
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-accent)',
              marginBottom: '1rem',
            }}>Услуга</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 500,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              maxWidth: '700px',
            }}>Архивный поиск</h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              Находим уникальные документы о ваших предках в архивах России и других стран.
            </p>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 500,
              marginBottom: '2rem',
              textAlign: 'center',
            }}>Где мы ищем</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {[
                'Государственные архивы РФ',
                'Церковные архивы',
                'Военные архивы',
                'Архивы ЗАГС',
                'Частные коллекции',
                'Зарубежные архивы',
                'Исторические общества',
                'Библиотечные фонды',
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>📁</span>
                  <span style={{ fontSize: '0.9375rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 500,
              textAlign: 'center',
              marginBottom: '3rem',
            }}>Какие документы мы находим</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { title: 'Метрические записи', desc: 'Рождения, смерти, браки' },
                { title: 'Ревизские сказки', desc: 'Переписи населения' },
                { title: 'Исповедные ведомости', desc: 'Церковные списки' },
                { title: 'Военные документы', desc: 'Призывы, награды' },
                { title: 'Земельные документы', desc: 'Владения, сделки' },
                { title: 'Документы сословий', desc: 'Дворянские грамоты' },
              ].map((doc, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                  }}>{doc.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 500,
              marginBottom: '1rem',
            }}>Заказать архивный поиск</h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
            }}>
              Оставьте заявку, и мы начнём поиск документов
            </p>
            <a href="mailto:info@familyheritage.ru" className="btn btn-primary">
              Оставить заявку
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}