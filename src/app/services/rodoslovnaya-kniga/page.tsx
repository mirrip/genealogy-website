import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Родословная книга | Профессиональная генеалогия | Семейное Наследие',
  description: 'Создание роскошных родословных книг с полной историей рода, архивными документами и фотографиями. Профессиональная генеалогия с 15-летним опытом.',
  keywords: ['родословная книга', 'создать родословную', 'книга семьи', 'семейная история', 'генеалогия'],
};

export default function RodoslovnayaKnigaPage() {
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
            }}>Родословная книга</h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              Создаём роскошные книги с полной историей вашего рода. Каждая книга — уникальное произведение, которое станет семейной реликвией.
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
                }}>Что входит в книгу</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Полная генеалогия рода ( все найденные поколения)',
                    'Архивные документы и их копии',
                    'Биографии предков',
                    'Исторический контекст эпох',
                    'Фотографии и репродукции',
                    'Родословная схема',
                    'Профессиональное оформление',
                    'Подарочный переплёт',
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
                <span style={{ fontSize: '5rem', opacity: 0.3 }}>📖</span>
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
            }}>Варианты оформления</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { title: 'Классический', desc: 'Кожаный переплёт, золотое тиснение, 240 страниц' },
                { title: 'Премиум', desc: 'Натуральная кожа, индивидуальный дизайн, 300+ страниц' },
                { title: 'Стандарт', desc: 'Твёрдый переплёт, оформление, 120 страниц' },
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
            }}>Заказать родословную книгу</h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
            }}>
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
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