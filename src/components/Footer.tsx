'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <span className={styles.logoText}>Семейное Наследие</span>
            </Link>
            <p className={styles.tagline}>
              Профессиональные генеалогические исследования и создание родословных книг. Сохраняем историю вашего рода.
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.title}>Услуги</h4>
            <Link href="/services/rodoslovnaya-kniga" className={styles.link}>Родословная книга</Link>
            <Link href="/services/genealogicheskoe-issledovanie" className={styles.link}>Генеалогическое исследование</Link>
            <Link href="/services/arhivnyj-poisk" className={styles.link}>Архивный поиск</Link>
            <Link href="/services/family-tree" className={styles.link}>Семейное древо</Link>
          </div>

          <div className={styles.links}>
            <h4 className={styles.title}>Информация</h4>
            <Link href="/blog" className={styles.link}>Блог</Link>
            <Link href="/cases" className={styles.link}>Кейсы</Link>
            <Link href="/faq" className={styles.link}>Вопросы</Link>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.title}>Связаться</h4>
            <p className={styles.contactText}>
              Готовы начать исследование вашего рода? Оставьте заявку, и мы свяжемся с вами.
            </p>
            <Link href="mailto:info@familyheritage.ru" className={styles.email}>
              info@familyheritage.ru
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2024 Семейное Наследие. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}