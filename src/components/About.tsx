'use client';

import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <span className={styles.imageEmoji}>🏛️</span>
            </div>
          </div>
          
          <div className={styles.content}>
            <span className={styles.label}>О проекте</span>
            <h2 className={styles.title}>
              Сохраняем историю семьи для будущих поколений
            </h2>
            <p className={styles.text}>
              Мы занимаемся генеалогическими исследованиями уже более 15 лет. За это время помогли сотням семей восстановить историю рода, найти утерянные связи и создать настоящие семейные реликвии — родословные книги.
            </p>
            <p className={styles.text}>
              Наша работа — это не просто поиск имён и дат. Мы восстанавливаем судьбы людей, находим уникальные архивные документы, собираем истории и создаём книги, которые становятся семейной ценностью.
            </p>
            <Link href="/about" className={styles.link}>
              Узнать больше →
            </Link>
          </div>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}> семей исследовано</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15</span>
            <span className={styles.statLabel}> лет опыта</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10k+</span>
            <span className={styles.statLabel}> документов найдено</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>200+</span>
            <span className={styles.statLabel}> книг создано</span>
          </div>
        </div>
      </div>
    </section>
  );
}