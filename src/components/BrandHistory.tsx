'use client';

import styles from './BrandHistory.module.css';

export default function BrandHistory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>История</span>
          <h2 className={styles.title}>Память поколений</h2>
          <p className={styles.text}>
            Каждая семья — это уникальная история, которая началась задолго до нас. 
            Наши предки создавали семьи, строили дома, переживали радости и трудности, 
            и всё это — чтобы передать нам свою любовь и мудрость.
          </p>
          <p className={styles.text}>
            Мы верим, что знать свою историю — значит понимать, кто мы есть. 
            Родословная книга — это не просто список имён. Это мост между прошлым и будущим, 
            который соединяет нас с теми, кто создал нашу семью.
          </p>
          <p className={styles.text}>
            Уже 15 лет мы помогаем семьям восстановить утерянные связи, найти предков 
            и создать настоящие семейные реликвии. Каждая книга, которую мы создаём, 
            становится хранителем памяти для будущих поколений.
          </p>
        </div>
        <div className={styles.visual}>
          <div className={styles.frame}>
            <span className={styles.emoji}>🏛️</span>
          </div>
          <div className={styles.glow}></div>
        </div>
      </div>
    </section>
  );
}