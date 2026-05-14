import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <h4>О нас</h4>
            <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 20 }}>
              Профессиональные генеалогические исследования и создание родословных книг. Восстанавливаем историю вашего рода с 2010 года.
            </p>
          </div>
          
          <div>
            <h4>Услуги</h4>
            <Link href="/services/rodoslovnaya-kniga" className={styles.footerLink}>
              Родословная книга
            </Link>
            <Link href="/services/genealogicheskoe-issledovanie" className={styles.footerLink}>
              Генеалогическое исследование
            </Link>
            <Link href="/services/arhivnyj-poisk" className={styles.footerLink}>
              Архивный поиск
            </Link>
            <Link href="/services/family-tree" className={styles.footerLink}>
              Семейное древо
            </Link>
          </div>
          
          <div>
            <h4>Информация</h4>
            <Link href="/blog" className={styles.footerLink}>
              Блог
            </Link>
            <Link href="/cases" className={styles.footerLink}>
              Кейсы
            </Link>
            <Link href="/about" className={styles.footerLink}>
              О нас
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              Контакты
            </Link>
          </div>
          
          <div>
            <h4>Контакты</h4>
            <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 16 }}>
              Москва, Россия<br />
              info@genealogy.example.com<br />
              +7 (495) 123-45-67
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>✦</a>
              <a href="#" className={styles.socialIcon}>✦</a>
              <a href="#" className={styles.socialIcon}>✦</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Генеалогия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}