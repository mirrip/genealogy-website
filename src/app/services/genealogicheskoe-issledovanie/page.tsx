import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Генеалогическое исследование | Профессиональная генеалогия | Семейное Наследие',
  description: 'Профессиональное генеалогическое исследование вашего рода. Работаем с архивами, церковными записями и историческими документами.',
  keywords: ['генеалогическое исследование', 'поиск предков', 'история рода', 'архивные поиски', 'генеалогия'],
};

export default function GenealogicheskoeIssledovaniePage() {
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
            }}>Генеалогическое исследование</h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              Полное исследование вашего рода с поиском документов, восстановлением связей и созданием подробной родословной.
            </p>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 500,
                  marginBottom: '1rem',
                }}>Что мы делаем</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Поиск в государственных архивах',
                    'Работа с церковными книгами',
                    'Анализ ревизских сказок',
                    'Поиск материалов ЗАГС',
                    'Исследование военных архивов',
                    'Восстановление связей между поколениями',
                    'Проверка и верификация данных',
                    'Составление подробного отчёта',
                  ].map((item, i) => (
                    <li key={i} style={{
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--color-border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}>
                      <span style={{ color: 'var(--color-accent)' }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                aspectRatio: '4/5',
                background: 'var(--color-bg-card)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <span style={{ fontSize: '5rem', opacity: 0.3 }}>🔍</span>
              </div>
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
            }}>Типы исследований</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { title: 'Базовое', desc: '3-5 поколений, основные документы' },
                { title: 'Расширенное', desc: 'До 10 поколений, полный архивный поиск' },
                { title: 'Полное', desc: 'Максимум информации, все источники' },
              ].map((option, i) => (
                <div key={i} style={{
                  padding: '2rem',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                  }}>{option.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{option.desc}</p>
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
            }}>Заказать исследование</h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
            }}>
              Свяжитесь с нами для обсуждения деталей вашего исследования
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