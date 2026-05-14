import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Генеалогическое исследование | Услуги',
  description: 'Профессиональное генеалогическое исследование: поиск предков в архивах, восстановление родословной',
}

export default function GenealogicheskoeIssledovaniePage() {
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
              <span>Генеалогическое исследование</span>
            </div>
            <h1 className="page-title">Генеалогическое исследование</h1>
            <p className="page-subtitle">
              Полное исследование происхождения семьи по архивным документам
            </p>
          </div>
        </section>
        
        <section className="content">
          <h2>Что включено в исследование</h2>
          <ul>
            <li>Поиск в государственных архивах</li>
            <li>Работа с метрическими книгами</li>
            <li>Исследование ревизских сказок</li>
            <li>Поиск военных документов</li>
            <li>Работа с церковными записями</li>
            <li>Проверка и верификация данных</li>
            <li>Составление родословной схемы</li>
          </ul>
          
          <h2>Источники информации</h2>
          <p>Мы работаем с различными источниками:</p>
          <ul>
            <li>Российский государственный архив древних актов (РГАДА)</li>
            <li>Государственный архив Российской Федерации (ГАРФ)</li>
            <li>Региональные государственные архивы</li>
            <li>Архивы ЗАГС</li>
            <li>Церковные архивы</li>
            <li>Военные архивы</li>
          </ul>
          
          <h2>Стоимость</h2>
          <p className="price">от 30 000 ₽</p>
          <p className="note">Точная стоимость зависит от сложности и объёма исследования</p>
          
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary">
              Заказать исследование
            </Link>
          </div>
        </section>
        
        <section className="faq-section">
          <div className="container">
            <h2>Частые вопросы</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Как долго длится исследование?</h3>
                <p>Баазовое исследование занимает 2-4 недели, полное — до 2-3 месяцев.</p>
              </div>
              <div className="faq-item">
                <h3>Гарантируете ли вы результат?</h3>
                <p>Мы гарантируем качественный поиск, но результат зависит от сохранности архивов.</p>
              </div>
              <div className="faq-item">
                <h3>Можно ли начать с малого?</h3>
                <p>Да, мы предлагаем различные пакеты услуг.</p>
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
        .content ul, .content p {
          margin-bottom: 24px;
          color: var(--text-light);
          line-height: 1.8;
          font-size: 16px;
        }
        .content ul {
          padding-left: 24px;
        }
        .content li {
          margin-bottom: 12px;
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
          font-size: 15px;
        }
      `}</style>
    </>
  )
}