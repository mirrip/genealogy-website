'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.pattern}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Родословные книги и генеалогические исследования семьи
          </h1>
          <p className={styles.subtitle}>
            Восстанавливаем историю рода, создаём семейные книги и сохраняем наследие поколений
          </p>
          
          <div className={styles.buttons}>
            <Link href="#contact" className={styles.btnPrimary}>
              Получить консультацию
            </Link>
            <Link href="/cases" className={styles.btnSecondary}>
              Посмотреть примеры
            </Link>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>📖</span>
                <span className={styles.imageText}>Родословная книга</span>
              </div>
            </div>
            <div className={styles.imageGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}