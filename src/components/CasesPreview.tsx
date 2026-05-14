'use client';

import Link from 'next/link';
import styles from './CasesPreview.module.css';

const cases = [
  {
    title: 'Родословная семьи Ивановых',
    category: 'Родословная книга',
    description: 'Восстановили историю рода от XVIII века до наших дней',
    emoji: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Поиск предков',
    category: 'Архивный поиск',
    description: 'Нашли документы о прадедах в архивах трёх поколений',
    emoji: '📜',
  },
  {
    title: 'Семейное древо Романовых',
    category: 'Семейное древо',
    description: 'Создали интерактивное древо с 500+ именами',
    emoji: '🌳',
  },
];

export default function CasesPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Кейсы</span>
          <h2 className={styles.title}>Истории семей</h2>
          <p className={styles.subtitle}>
            Реальные примеры наших исследований и созданных книг
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((caseItem, index) => (
            <Link key={index} href="/cases" className={styles.card}>
              <div className={styles.cardImage}>
                <span className={styles.cardEmoji}>{caseItem.emoji}</span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{caseItem.category}</span>
                <h3 className={styles.cardTitle}>{caseItem.title}</h3>
                <p className={styles.cardDescription}>{caseItem.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.action}>
          <Link href="/cases" className={styles.allLink}>
            Все кейсы →
          </Link>
        </div>
      </div>
    </section>
  );
}