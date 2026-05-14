import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FAQ | Вопросы и ответы | Семейное Наследие',
  description: 'Часто задаваемые вопросы о генеалогических исследованиях и родословных книгах.',
};

const faqs = [
  {
    question: 'Сколько времени занимает исследование?',
    answer: 'Срок зависит от объёма работы и сложности задачи. Обычно базовое исследование занимает 2-4 недели, полная родословная книга — 1-3 месяца.',
  },
  {
    question: 'Какие документы нужны для начала?',
    answer: 'Для начала достаточно информации, которую вы знаете о своей семье: ФИО родственников, известные даты, места проживания. Чем больше информации — тем лучше.',
  },
  {
    question: 'Можно ли найти предков без документов?',
    answer: 'Да, мы работаем с архивными документами, церковными записями, ревизскими сказками и другими историческими источниками. Многие клиенты начинали практически без информации.',
  },
  {
    question: 'Сколько стоит родословная книга?',
    answer: 'Стоимость зависит от объёма исследования, количества поколений, оформления книги. Мы предложим вариант под ваш бюджет после консультации.',
  },
  {
    question: 'Какие архивы вы используете?',
    answer: 'Мы работаем со всеми основными архивами РФ, церковными архивами, военными архивами и международными базами данных.',
  },
  {
    question: 'Гарантируете ли вы результат?',
    answer: 'Мы гарантируем профессиональный подход и тщательную работу с каждым источником. Результат зависит от сохранности архивных материалов.',
  },
  {
    question: 'Можно ли заказать только поиск без книги?',
    answer: 'Да, мы предлагаем различные варианты: только исследование, только архивный поиск, создание семейного древа или полная родословная книга.',
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Оплата происходит поэтапно: 50% при заключении договора, 50% после завершения работы. Возможны другие варианты обсуждения.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: 'calc(80px + 4rem) 0 4rem', background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: 'var(--color-text)', marginBottom: '1.5rem' }}>Вопросы и ответы</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>Ответы на часто задаваемые вопросы о нашей работе</p>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ padding: '1.5rem', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-md)', marginBottom: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{faq.question}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}