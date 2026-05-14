'use client';

import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Связаться</span>
          <h2 className={styles.title}>Готовы узнать историю своей семьи?</h2>
          <p className={styles.text}>
            Оставьте заявку, и мы проведём бесплатную консультацию. Расскажем, что можно найти и как мы можем помочь.
          </p>
          
          <div className={styles.buttons}>
            <Link href="mailto:info@familyheritage.ru" className={styles.btnPrimary}>
              Оставить заявку
            </Link>
            <Link href="tel:+79000000000" className={styles.btnSecondary}>
              Позвонить
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}