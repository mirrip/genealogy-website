import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Кейсы | Истории семей | Семейное Наследие',
  description: 'Реальные примеры генеалогических исследований и созданных родословных книг.',
};

const cases = [
  {
    title: 'Родословная семьи Ивановых',
    description: 'Восстановили историю рода от XVIII века до наших дней. Нашли 7 поколений, более 200 имени.',
    category: 'Родословная книга',
    image: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Поиск предков',
    description: 'Нашли документы о прадедах в архивах трёх поколений. Восстановили утерянные связи.',
    category: 'Архивный поиск',
    image: '📜',
  },
  {
    title: 'Семейное древо Романовых',
    description: 'Создали интерактивное древо с 500+ именами. Работа велась 4 месяца.',
    category: 'Семейное древо',
    image: '🌳',
  },
  {
    title: 'Дворянский род',
    description: 'Обнаружили документы о дворянском происхождении. Восстановили родословную грамоту.',
    category: 'Генеалогия',
    image: '🏛️',
  },
  {
    title: 'Купеческая династия',
    description: 'Нашли документы о купеческом роде XIX века. Восстановили бизнес историю.',
    category: 'Архивный поиск',
    image: '💼',
  },
  {
    title: 'Военная история',
    description: 'Восстановили боевой путь предка. Нашли награды и документы о службе.',
    category: 'Генеалогия',
    image: '🎖️',
  },
];

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '1.5rem' }}>Истории семей</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>Реальные примеры наших исследований и созданных книг</p>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {cases.map((caseItem, index) => (
                <div key={index} style={{ background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '3rem' }}>{caseItem.image}</span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{caseItem.category}</span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{caseItem.title}</h2>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{caseItem.description}</p>
                  </div>
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