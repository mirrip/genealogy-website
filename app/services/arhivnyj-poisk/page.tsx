import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Архивный поиск | Услуги',
  description: 'Архивный поиск документов: метрические книги, ревизии, военные записи, архивы ЗАГС',
}

export default function ArhivnyjPoiskPage() {
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
              <span>Архивный поиск</span>
            </div>
            <h1 className="page-title">Архивный поиск</h1>
            <p className="page-subtitle">
              Поиск документов в государственных и частных архивах России
            </p>
          </div>
        </section>
        
        <section className="content">
          <h2>Что мы ищем</h2>
          <ul>
            <li>Метрические книги (рождения, браки, смерти)</li>
            <li>Ревизские сказки (переписи населения)</li>
            <li>Исповедные ведомости</li>
            <li>Воинские списки</li>
            <li>Документы ЗАГС</li>
            <li>Духовные завещания</li>
            <li>Купеческие и мещанские книги</li>
          </ul>
          
          <h2>Где мы ищем</h2>
          <ul>
            <li>Государственный архив древних актов (РГАДА)</li>
            <li>Государственный архив РФ (ГАРФ)</li>
            <li>Региональные архивы</li>
            <li>Городские и районные архивы</li>
            <li>Церковные архивы</li>
            <li>Частные коллекции</li>
          </ul>
          
          <h2>Стоимость</h2>
          <p className="price">от 15 000 ₽</p>
          <p className="note">Зависит от количества запросов и сложности поиска</p>
          
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary">
              Заказать архивный поиск
            </Link>
          </div>
        </section>
        
        <section className="faq-section">
          <div className="container">
            <h2>Частые вопросы</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Какие документы доступны онлайн?</h3>
                <p>Часть документов оцифрована, но большинство доступно только при личном обращении.</p>
              </div>
              <div className="faq-item">
                <h3>Сколько времени занимает поиск?</h3>
                <p>Обычно 1-4 недели в зависимости от архива и объёма запроса.</p>
              </div>
              <div className="faq-item">
                <h3>Что делать, если документы не найдены?</h3>
                <p>Мы предоставляем отчёт о проведённой работе независимо от результата.</p>
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
        .content ul {
          margin-bottom: 24px;
          padding-left: 24px;
          color: var(--text-light);
        }
        .content li {
          margin-bottom: 12px;
          line-height: 1.7;
          font-size: 16px;
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