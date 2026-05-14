'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>Семейное Наследие</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/services/rodoslovnaya-kniga" className={styles.navLink}>Родословная книга</Link>
          <Link href="/services/genealogicheskoe-issledovanie" className={styles.navLink}>Исследование</Link>
          <Link href="/services/arhivnyj-poisk" className={styles.navLink}>Архивный поиск</Link>
          <Link href="/services/family-tree" className={styles.navLink}>Семейное древо</Link>
          <Link href="/blog" className={styles.navLink}>Блог</Link>
          <Link href="/cases" className={styles.navLink}>Кейсы</Link>
        </nav>

        <Link href="#contact" className={styles.cta}>
          Связаться
        </Link>

        <button 
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu toggle"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}