import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'О нас | Генеалогия',
  description: 'О компании: профессиональные генеалоги, опыт работы с 2010 года, сотни восстановленных семей',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-breadcrumb">
              <Link href="/">Главная</Link>
              <span>→</span>
              <span>О нас</span>
            </div>
            <h1 className="page-title">О нас</h1>
          </div>
        </section>
        
        <section className="content">
          <div className="container">
            <h2>Кто мы</h2>
            <p>
              Мы — команда профессиональных генеалогов с многолетним опытом работы. 
              С 2010 года мы помогаем семьям узнать историю своих предков, 
              восстановить утраченные связи и создать семейные книги.
            </p>
            
            <h2>Наша команда</h2>
            <p>
              В нашей команде работают историки, архивисты и исследователи с опытом 
              работы в государственных и частных архивах России. Мы знаем, 
              где искать информацию и как правильно интерпретировать найденные документы.
            </p>
            
            <h2>Наш опыт</h2>
            <ul>
              <li>Более 500 успешных исследований</li>
              <li>Опыт работы с архивами XVIII-XX веков</li>
              <li>Сотни созданных родословных книг</li>
              <li>Работа с архивами по всей России</li>
            </ul>
            
            <h2>Принципы работы</h2>
            <ul>
              <li>Качество важнее скорости</li>
              <li>Ни один документ не остаётся непроверенным</li>
              <li>Полная конфиденциальность данных</li>
              <li>Индивидуальный подход к каждому клиенту</li>
            </ul>
            
            <h2>Почему выбирают нас</h2>
            <p>
              Мы не просто ищем документы — мы восстанавливаем истории. Каждая семья 
              уникальна, и мы находим время, чтобы понять именно вашу историю. 
              Результат нашей работы — это не просто набор фактов, а настоящая 
              семейная история, которую можно передать детям и внукам.
            </p>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Готовы узнать свою историю?</h2>
            <p className="cta-subtitle">
              Свяжитесь с нами для бесплатной консультации
            </p>
            <Link href="/contact" className="btn btn-primary">
              Получить консультацию
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .content { max-width: 800px; margin: 0 auto; padding: 60px 16px; }
        .content h2 { font-size: 32px; margin-top: 48px; margin-bottom: 24px; font-family: 'Cormorant Garamond', serif; color: var(--primary-brown); }
        .content p { color: var(--text-light); line-height: 1.8; font-size: 16px; margin-bottom: 24px; }
        .content ul { margin-bottom: 24px; padding-left: 24px; color: var(--text-light); }
        .content li { margin-bottom: 12px; line-height: 1.7; font-size: 16px; }
        .cta-section { background: var(--primary-brown); padding: 80px 0; text-align: center; }
        .cta-title { color: var(--light-beige); font-size: 36px; margin-bottom: 16px; font-family: 'Cormorant Garamond', serif; }
        .cta-subtitle { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 32px; }
      `}</style>
    </>
  )
}