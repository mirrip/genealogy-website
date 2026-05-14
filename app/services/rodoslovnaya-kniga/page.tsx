import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Родословная книга | Услуги',
  description: 'Заказать родословную книгу: профессиональное оформление, генеалогическое древо, печать',
}

export default function RodoslovnayaKnigaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-breadcrumb">
              <Link href="/">Главная</Link>
              <span>→</span>
              <Link href="/services">Услуги</Link>
              <span>→</span>
              <span>Родословная книга</span>
            </div>
            <h1 className="page-title">Родословная книга</h1>
            <p className="page-subtitle">
              Профессионально оформленное издание с генеалогическим древом и историей вашего рода
            </p>
          </div>
        </section>
        
        <section className="content">
          <div className="container">
            <h2>Что входит в родословную книгу</h2>
            <ul>
              <li>Полное генеалогическое древо рода</li>
              <li>Биографии всех известных предков</li>
              <li>Исторический контекст эпох</li>
              <li>Архивные документы и фотографии</li>
              <li>Родословные схемы и диаграммы</li>
              <li>Профессиональное оформление и печать</li>
            </ul>
            
            <h2>Процесс работы</h2>
            <ol>
              <li>Консультация и сбор первичной информации</li>
              <li>Генеалогическое исследование в архивах</li>
              <li>Составление родословной</li>
              <li>Оформление книги</li>
              <li>Печать и переплёт</li>
              <li>Передача готового экземпляра</li>
            </ol>
            
            <h2>Стоимость</h2>
            <p className="price">от 50 000 ₽</p>
            <p className="note">Точная стоимость зависит от объёма исследования и сложности оформления</p>
            
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">
                Заказать родословную книгу
              </Link>
            </div>
          </div>
        </section>
        
        <section className="faq-section">
          <div className="container">
            <h2>Частые вопросы</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Сколько времени занимает создание книги?</h3>
                <p>Срок зависит от объёма исследования. Обычно от 1 до 3 месяцев.</p>
              </div>
              <div className="faq-item">
                <h3>Какие документы нужны для начала?</h3>
                <p>Достаточно той информации, которую вы знаете о своей семье.</p>
              </div>
              <div className="faq-item">
                <h3>Можно ли заказать только оформление?</h3>
                <p>Да, мы предлагаем услугу оформления уже готового материала.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .page-subtitle {
          font-size: 20px;
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto;
        }
        .content {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 16px;
        }
        .content h2 {
          font-size: 32px;
          margin-top: 48px;
          margin-bottom: 24px;
          font-family: 'Cormorant Garamond', serif;
          color: var(--primary-brown);
        }
        .content ul, .content ol {
          margin-bottom: 24px;
          padding-left: 24px;
          color: var(--text-light);
        }
        .content li {
          margin-bottom: 12px;
          line-height: 1.7;
          font-size: 16px;
        }
        .content ol {
          counter-reset: item;
        }
        .content ol li {
          display: block;
        }
        .content ol li:before {
          content: counter(item) ") ";
          counter-increment: item;
          font-weight: 600;
          color: var(--primary-brown);
        }
        .price {
          font-size: 32px;
          font-weight: 700;
          color: var(--gold-accent);
          margin-bottom: 12px;
        }
        .note {
          color: var(--text-light);
          font-size: 14px;
        }
        .cta-buttons {
          margin-top: 40px;
        }
        .faq-section {
          padding: 80px 0;
          background: white;
        }
        .faq-section h2 {
          font-size: 32px;
          text-align: center;
          margin-bottom: 40px;
          font-family: 'Cormorant Garamond', serif;
          color: var(--primary-brown);
        }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          background: var(--light-beige);
          border-radius: var(--border-radius);
          padding: 24px;
          margin-bottom: 16px;
        }
        .faq-item h3 {
          font-size: 18px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          color: var(--primary-brown);
          margin-bottom: 12px;
        }
        .faq-item p {
          color: var(--text-light);
          line-height: 1.7;
        }
      `}</style>
    </>
  )
}