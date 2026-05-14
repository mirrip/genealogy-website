import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Кейсы | Генеалогия',
  description: 'Примеры генеалогических исследований и восстановленных историй семей',
}

const cases = [
  {
    slug: 'romanov-family',
    title: 'История семьи Романовых',
    description: 'Восстановление родословной за 150 лет',
    icon: '📜',
  },
  {
    slug: 'kuznetsov-family',
    title: 'Кузнецовы: три поколения',
    description: 'Генеалогическое исследование XVIII века',
    icon: '📖',
  },
  {
    slug: 'sokolov-family',
    title: 'Семья Соколовых',
    description: 'Архивные находки военных лет',
    icon: '🎖️',
  },
  {
    slug: 'petrov-family',
    title: 'Династия Петровых',
    description: 'Купеческое сословие XIX века',
    icon: '💼',
  },
  {
    slug: 'smirnov-family',
    title: 'Смирновы из деревни',
    description: 'Сельская родословная',
    icon: '🌾',
  },
  {
    slug: 'ivanov-family',
    title: 'Род Ивановых',
    description: 'Военная история семьи',
    icon: '⚔️',
  },
]

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-breadcrumb">
              <Link href="/">Главная</Link>
              <span>→</span>
              <span>Кейсы</span>
            </div>
            <h1 className="page-title">Кейсы</h1>
            <p className="section-subtitle">
              Реальные истории семей, которые мы помогли восстановить
            </p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className="cases-grid">
              {cases.map(caseItem => (
                <Link key={caseItem.slug} href={`/cases/${caseItem.slug}`} className="case-card">
                  <div className="case-image">
                    <span>{caseItem.icon}</span>
                  </div>
                  <div className="case-content">
                    <h2 className="case-title">{caseItem.title}</h2>
                    <p className="case-description">{caseItem.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .cases-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .cases-grid { grid-template-columns: 1fr; }
        }
        .case-card {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.15);
          transition: var(--transition);
          display: block;
          text-decoration: none;
        }
        .case-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .case-image {
          height: 200px;
          background: var(--secondary-brown);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--light-beige);
          font-size: 56px;
          opacity: 0.6;
        }
        .case-content {
          padding: 24px;
        }
        .case-title {
          font-size: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          color: var(--primary-brown);
          margin-bottom: 8px;
        }
        .case-description {
          color: var(--text-light);
          font-size: 14px;
        }
      `}</style>
    </>
  )
}