'use client';

import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'Мы всегда хотели узнать больше о нашем роде, но не знали с чего начать. Спасибо команде Семейное Наследие — они нашли информацию о наших предках до VIII колена! Книга получилась невероятной.',
    author: 'Анна К.',
    role: 'Москва',
  },
  {
    text: 'Долго искали специалистов по генеалогии. Здесь всё сделали профессионально: нашли документы, восстановили связи, создали красивое древо. Рекомендую всем.',
    author: 'Сергей П.',
    role: 'Санкт-Петербург',
  },
  {
    text: 'Хотели сделать подарок родителям на юбилей — родословную книгу. Результат превзошёл все ожидания. Теперь это главная семейная реликвия.',
    author: 'Марина В.',
    role: 'Казань',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Отзывы</span>
          <h2 className={styles.title}>Отзывы клиентов</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <span className={styles.authorName}>{testimonial.author}</span>
                <span className={styles.authorRole}>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}