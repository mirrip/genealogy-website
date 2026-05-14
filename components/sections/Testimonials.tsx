import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: 'Благодаря команде мы узнали историю нашей семьи, которая была практически забыта. Родословная книга стала настоящим семейным сокровищем.',
    author: 'Анна К., Москва',
  },
  {
    text: 'Профессиональный подход и внимание к деталям. Нашли документы, которые считались утерянными. Рекомендую!',
    author: 'Сергей П., Санкт-Петербург',
  },
  {
    text: 'Заказали семейное древо в подарок бабушке. Она плакала от счастья, увидев всех предков.',
    author: 'Мария И., Екатеринбург',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Отзывы клиентов</h2>
        <p className={styles.sectionSubtitle}>
          Что говорят о нашей работе
        </p>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>{testimonial.text}</p>
              <p className={styles.author}>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}