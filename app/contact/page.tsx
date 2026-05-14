import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Контакты | Генеалогия',
  description: 'Связаться с нами: телефон, email, форма обратной связи',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="container">
            <div className="page-breadcrumb">
              <Link href="/">Главная</Link>
              <span>→</span>
              <span>Контакты</span>
            </div>
            <h1 className="page-title">Контакты</h1>
            <p className="section-subtitle">
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </section>
        
        <section className="content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Телефон</h3>
                <p><a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
                <p className="contact-note">Пн-Пт: 10:00 - 19:00</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p><a href="mailto:info@genealogy.example.com">info@genealogy.example.com</a></p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Адрес</h3>
                <p>Москва, Россия</p>
                <p className="contact-note">По предварительной записи</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Отправить сообщение</h2>
              <form className="form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Имя</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Ваше имя" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Телефон</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+7 (___) ___-__-__" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Сообщение</label>
                  <textarea id="message" name="message" className="form-textarea" placeholder="Расскажите о вашем проекте..." rows={5}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style>{`
        .contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 60px; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
        .contact-card { background: white; border-radius: var(--border-radius); padding: 32px; text-align: center; border: 1px solid rgba(212, 175, 55, 0.15); }
        .contact-icon { font-size: 40px; margin-bottom: 16px; }
        .contact-card h3 { font-size: 20px; font-family: 'Cormorant Garamond', serif; color: var(--primary-brown); margin-bottom: 12px; }
        .contact-card p { color: var(--text-light); margin-bottom: 8px; }
        .contact-card a { color: var(--gold-accent); }
        .contact-note { font-size: 13px; opacity: 0.7; }
        .contact-form { background: white; border-radius: var(--border-radius); padding: 40px; border: 1px solid rgba(212, 175, 55, 0.15); }
        .contact-form h2 { font-size: 28px; margin-bottom: 24px; font-family: 'Cormorant Garamond', serif; color: var(--primary-brown); text-align: center; }
        .form-group { margin-bottom: 20px; }
        .form-label { display: block; font-weight: 500; margin-bottom: 8px; color: var(--primary-brown); }
        .form-input, .form-textarea { width: 100%; padding: 14px 16px; border: 2px solid rgba(212, 175, 55, 0.3); border-radius: 8px; font-size: 15px; font-family: inherit; transition: var(--transition); background: white; }
        .form-input:focus, .form-textarea:focus { outline: none; border-color: var(--gold-accent); box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2); }
        .form-textarea { min-height: 150px; resize: vertical; }
      `}</style>
    </>
  )
}