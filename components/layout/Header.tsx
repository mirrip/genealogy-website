import Link from 'next/link'
import styles from './Header.module.css'

const navLinks = [
  { href: '/services', label: 'Услуги' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/blog', label: 'Блог' },
  { href: '/about', label: 'О нас' },
  { href: '/contact', label: 'Контакты' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>✦</span>
            <span>Генеалогия</span>
          </Link>
          
          <nav className={styles.nav}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
          
          <Link href="/contact" className="btn btn-primary">
            Получить консультацию
          </Link>
        </div>
      </div>
    </header>
  )
}