'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.title}>Вопросы и ответы</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className={styles.question}>
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}