'use client';

import Link from 'next/link';
import styles from './ServicesPreview.module.css';

const services = [
  {
    icon: '📖',
    title: 'Родословная книга',
    description: 'Создаём роскошные книги с полной историей рода, фотографиями и архивными документами.',
    link: '/services/rodoslovnaya-kniga',
  },
  {
    icon: '🔍',
    title: 'Генеалогическое исследование',
    description: 'Полное исследование рода по архивам, церковным записям и историческим документам.',
    link: '/services/genealogicheskoe-issledovanie',
  },
  {
    icon: '📁',
    title: 'Архивный поиск',
    description: 'Поиск документов в государственных и частных архивах России и зарубежья.',
    link: '/services/arhivnyj-poisk',
  },
  {
    icon: '🌳',
    title: 'Семейное древо',
    description: 'Визуальное представление родословной в виде красивого дерева или схемы.',
    link: '/services/family-tree',
  },
];

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Услуги</span>
          <h2 className={styles.title}>Наши услуги</h2>
          <p className={styles.subtitle}>
            Комплексные решения для тех, кто хочет узнать и сохранить историю своей семьи
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link key={index} href={service.link} className={styles.card}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <span className={styles.cardLink}>Подробнее →</span>
            </Link>
          ))}
        </div>

        <div className={styles.action}>
          <Link href="/services" className={styles.allLink}>
            Все услуги →
          </Link>
        </div>
      </div>
    </section>
  );
}