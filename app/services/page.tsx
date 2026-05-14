import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Услуги | Генеалогия',
  description: 'Профессиональные генеалогические услуги: родословные книги, архивные исследования, поиск предков',
}

const services = [
  {
    href: '/services/rodoslovnaya-kniga',
    icon: '📖',
    title: 'Родословная книга',
    description: 'Профессионально оформленная книга с генеалогическим древом и историей рода. Включает полное исследование, оформление и печать.',
    price: 'от 50 000 ₽',
  },
  {
    href: '/services/genealogicheskoe-issledovanie',
    icon: '🔍',
    title: 'Генеалогическое исследование',
    description: 'Полное исследование происхождения семьи по архивным документам. Работаем с государственными и частными архивами.',
    price: 'от 30 000 ₽',
  },
  {
    href: '/services/arhivnyj-poisk',
    icon: '📁',
    title: 'Архивный поиск',
    description: 'Поиск документов в государственных и частных архивах России. Метрические книги, ревизии, военные записи.',
    price: 'от 15 000 ₽',
  },
  {
    href: '/services/family-tree',
    icon: '🌳',
    title: 'Семейное древо',
    description: 'Визуальное представление родословной в современном дизайне. Печатные и цифровые форматы.',
    price: 'от 20 000 ₽',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-breadcrumb">
              <Link href="/">Главная</Link>
              <span>→</span>
              <span>Услуги</span>
            </div>
            <h1 className="page-title">Услуги</h1>
            <p className="section-subtitle">
              Профессиональные генеалогические услуги для сохранения семейной истории
            </p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className="services-grid">
              {services.map(service => (
                <Link key={service.href} href={service.href} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  <p className="service-price">{service.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Нужна консультация?</h2>
            <p className="cta-subtitle">
              Свяжитесь с нами, и мы поможем подобрать услугу под ваши задачи
            </p>
            <Link href="/contact" className="btn btn-primary">
              Получить консультацию
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        .service-card {
          background: white;
          border-radius: var(--border-radius);
          padding: 40px 32px;
          text-align: center;
          border: 1px solid rgba(212, 175, 55, 0.15);
          transition: var(--transition);
          display: block;
          text-decoration: none;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .service-icon {
          font-size: 56px;
          margin-bottom: 24px;
        }
        .service-title {
          font-size: 24px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          color: var(--primary-brown);
          margin-bottom: 16px;
        }
        .service-description {
          color: var(--text-light);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .service-price {
          color: var(--gold-accent);
          font-size: 18px;
          font-weight: 600;
        }
        .cta-section {
          background: var(--primary-brown);
          padding: 80px 0;
          text-align: center;
        }
        .cta-title {
          color: var(--light-beige);
          font-size: 36px;
          margin-bottom: 16px;
          font-family: 'Cormorant Garamond', serif;
        }
        .cta-subtitle {
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          margin-bottom: 32px;
        }
      `}</style>
    </>
  )
}