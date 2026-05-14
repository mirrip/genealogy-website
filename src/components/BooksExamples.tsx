'use client';

import Link from 'next/link';
import styles from './BooksExamples.module.css';

const books = [
  {
    title: 'Родословная книга «Дворянский род»',
    description: 'Кожаный переплёт, 240 страниц, золотое тиснение',
    image: '📕',
  },
  {
    title: 'Семейная хроника «Купеческий род»',
    description: 'Твёрдый переплёт, 180 страниц, цветные фотографии',
    image: '📗',
  },
  {
    title: 'Родословная «Крестьянский род»',
    description: 'Современный дизайн, 120 страниц, архивные копии',
    image: '📘',
  },
];

export default function BooksExamples() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Примеры</span>
          <h2 className={styles.title}>Родословные книги</h2>
          <p className={styles.subtitle}>
            Каждая книга создаётся индивидуально, с учётом ваших пожеланий и истории семьи
          </p>
        </div>

        <div className={styles.grid}>
          {books.map((book, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <span className={styles.cardEmoji}>{book.image}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{book.title}</h3>
                <p className={styles.cardDescription}>{book.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.action}>
          <Link href="/cases" className={styles.allLink}>
            Посмотреть все примеры →
          </Link>
        </div>
      </div>
    </section>
  );
}