import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Case data
const casesData: Record<string, {
  title: string
  description: string
  fullDescription: string
  timeline: { year: string; event: string }[]
}> = {
  'romanov-family': {
    title: 'История семьи Романовых',
    description: 'Восстановление родословной за 150 лет',
    fullDescription: 'История одной семьи, которая начинается в середине XIX века. Клиент обратился с минимальной информацией — фамилией и воспоминаниями о дедушке. За год работы мы восстановили полную родословную.',
    timeline: [
      { year: '2023', event: 'Обращение клиента' },
      { year: '2023', event: 'Начало архивного поиска' },
      { year: '2023', event: 'Найдены метрические книги 1860-х' },
      { year: '2023', event: 'Обнаружены документы ревизии 1858 года' },
      { year: '2024', event: 'Завершение исследования' },
      { year: '2024', event: 'Создание родословной книги' },
    ],
  },
  'kuznetsov-family': {
    title: 'Кузнецовы: три поколения',
    description: 'Генеалогическое исследование XVIII века',
    fullDescription: 'Клиент хотел узнать историю своего рода до XVIII века. Мы нашли документы, подтверждающие происхождение семьи от купеческого сословия.',
    timeline: [
      { year: '2023', event: 'Старт проекта' },
      { year: '2023', event: 'Работа в РГАДА' },
      { year: '2023', event: 'Найдены документы 1780-х годов' },
      { year: '2024', event: 'Обнаружены родственные связи' },
      { year: '2024', event: 'Завершение исследования' },
    ],
  },
  'sokolov-family': {
    title: 'Семья Соколовых',
    description: 'Архивные находки военных лет',
    fullDescription: 'Поиск информации о предках — участниках Великой отечественной войны. Удалось найти не только военные документы, но и письма с фронта.',
    timeline: [
      { year: '2023', event: 'Запрос клиента' },
      { year: '2023', event: 'Поиск в военных архивах' },
      { year: '2023', event: 'Найдены сведения о наградах' },
      { year: '2024', event: 'Обнаружены письма' },
      { year: '2024', event: 'Создание книги памяти' },
    ],
  },
  'petrov-family': {
    title: 'Династия Петровых',
    description: 'Купеческое сословие XIX века',
    fullDescription: 'Восстановление истории купеческой династии XIX века с полной реконструкцией бизнеса и семейных связей.',
    timeline: [
      { year: '2023', event: 'Начало исследования' },
      { year: '2023', event: 'Работа с купеческими книгами' },
      { year: '2024', event: 'Найдены документы гильдии' },
      { year: '2024', event: 'Завершение' },
    ],
  },
  'smirnov-family': {
    title: 'Смирновы из деревни',
    description: 'Сельская родословная',
    fullDescription: 'История простой крестьянской семьи изCentralной России, которая насчитывает более 200 лет.',
    timeline: [
      { year: '2023', event: 'Старт' },
      { year: '2023', event: 'Поиск в архивах' },
      { year: '2024', event: 'Ревизские сказки' },
      { year: '2024', event: 'Завершение' },
    ],
  },
  'ivanov-family': {
    title: 'Род Ивановых',
    description: 'Военная история семьи',
    fullDescription: 'Комплексное исследование военной истории семьи от Первой мировой до наших дней.',
    timeline: [
      { year: '2023', event: 'Начало' },
      { year: '2023', event: 'Военные архивы' },
      { year: '2024', event: 'Наградные документы' },
      { year: '2024', event: 'Завершение' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(casesData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseData = casesData[slug]
  
  if (!caseData) {
    return { title: 'Кейс не найден' }
  }
  
  return {
    title: `${caseData.title} | Кейсы`,
    description: caseData.description,
  }
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseData = casesData[slug]
  
  if (!caseData) {
    return (
      <>
        <Header />
        <main>
          <section className="page-header">
            <div className="container">
              <h1 className="page-title">Кейс не найден</h1>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }
  
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-breadcrumb">
              <Link href="/">Главная</Link>
              <span>→</span>
              <Link href="/cases">Кейсы</Link>
              <span>→</span>
              <span>{caseData.title}</span>
            </div>
            <h1 className="page-title">{caseData.title}</h1>
            <p className="page-subtitle">{caseData.description}</p>
          </div>
        </section>
        
        <section className="content">
          <div className="container">
            <h2>О проекте</h2>
            <p>{caseData.fullDescription}</p>
            
            <h2>Хронология</h2>
            <div className="timeline">
              {caseData.timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-event">{item.event}</div>
                </div>
              ))}
            </div>
            
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 40 }}>
              Заказать похожее исследование
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .page-subtitle { font-size: 20px; color: var(--text-light); }
        .content { max-width: 800px; margin: 0 auto; padding: 60px 16px; }
        .content h2 { font-size: 32px; margin-top: 48px; margin-bottom: 24px; font-family: 'Cormorant Garamond', serif; color: var(--primary-brown); }
        .content p { color: var(--text-light); line-height: 1.8; font-size: 16px; margin-bottom: 24px; }
        .timeline { border-left: 3px solid var(--gold-accent); padding-left: 24px; }
        .timeline-item { position: relative; padding-bottom: 24px; }
        .timeline-item:before { content: ''; position: absolute; left: -31px; top: 4px; width: 14px; height: 14px; background: var(--gold-accent); border-radius: 50%; }
        .timeline-year { font-weight: 600; color: var(--primary-brown); margin-bottom: 4px; font-size: 16px; }
        .timeline-event { color: var(--text-light); font-size: 15px; }
      `}</style>
    </>
  )
}