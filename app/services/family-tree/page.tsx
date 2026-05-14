import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Семейное древо | Услуги',
  description: 'Создание семейного древа: визуальное представление родословной в современном дизайне',
}

export default function FamilyTreePage() {
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
              <span>Семейное древо</span>
            </div>
            <h1 className="page-title">Семейное древо</h1>
            <p className="page-subtitle">
              Визуальное представление родословной в современном дизайне
            </p>
          </div>
        </section>
        
        <section className="content">
          <h2>Форматы семейного древа</h2>
          <ul>
            <li>Печатный плакат (A1, A0)</li>
            <li>Книга-раскладка</li>
            <li>Цифровой файл (PDF, AI)</li>
            <li>Интерактивное древо</li>
          </ul>
          
          <h2>Стили оформления</h2>
          <ul>
            <li>Классический стиль</li>
            <li>Современный минимализм</li>
            <li>Ретро-стиль</li>
            <li>Индивидуальный дизайн</li>
          </ul>
          
          <h2>Что включено</h2>
          <ul>
            <li>Генеалогическое древо</li>
            <li>Имена и даты</li>
            <li>Фотографии (при наличии)</li>
            <li>Цифровой мастер-файл</li>
          </ul>
          
          <h2>Стоимость</h2>
          <p className="price">от 20 000 ₽</p>
          <p className="note">Зависит от количества человек и сложности оформления</p>
          
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary">
              Заказать семейное древо
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .page-subtitle { font-size: 20px; color: var(--text-light); max-width: 600px; margin: 0 auto; }
        .content { max-width: 800px; margin: 0 auto; padding: 60px 16px; }
        .content h2 { font-size: 32px; margin-top: 48px; margin-bottom: 24px; font-family: 'Cormorant Garamond', serif; color: var(--primary-brown); }
        .content ul { margin-bottom: 24px; padding-left: 24px; color: var(--text-light); }
        .content li { margin-bottom: 12px; line-height: 1.7; font-size: 16px; }
        .price { font-size: 32px; font-weight: 700; color: var(--gold-accent); margin-bottom: 12px; }
        .note { color: var(--text-light); font-size: 14px; }
        .cta-buttons { margin-top: 40px; }
      `}</style>
    </>
  )
}