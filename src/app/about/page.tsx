import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'О нас | Семейное Наследие',
  description: 'О компании Семейное Наследие. Профессиональные генеалогические исследования с 15-летним опытом.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '1.5rem', maxWidth: '700px' }}>О компании</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', lineHeight: 1.7 }}>
              Мы занимаемся генеалогическими исследованиями уже более 15 лет. Помогли сотням семей восстановить историю рода.
            </p>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500, marginBottom: '1rem' }}>Наша миссия</h2>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Мы верим, что каждый человек должен знать свою историю. История семьи — это часть большой истории страны. Сохраняя память о предках, мы сохраняем себя.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                  Наша работа — это не просто поиск имён и дат. Мы восстанавливаем судьбы людей, находим уникальные архивные документы и создаём книги, которые становятся семейной ценностью.
                </p>
              </div>
              <div style={{ aspectRatio: '1', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
                <span style={{ fontSize: '6rem', opacity: 0.3 }}>🏛️</span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 500, textAlign: 'center', marginBottom: '3rem' }}>Наши принципы</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { title: 'Качество', desc: 'Работаем с каждым документом тщательно, проверяем данные из нескольких источников.' },
                { title: 'Конфиденциальность', desc: 'Гарантируем полную конфиденциальность всей полученной информации.' },
                { title: 'Индивидуальный подход', desc: 'Каждый проект уникален. Учитываем все пожелания клиента.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '2rem', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}