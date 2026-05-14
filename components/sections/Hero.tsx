import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Родословные книги и генеалогические исследования семьи
          </h1>
          <p className={styles.heroSubtitle}>
            Восстанавливаем историю рода, создаём семейные книги и архивные исследования
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn btn-primary">
              Получить консультацию
            </Link>
            <Link href="/cases" className="btn btn-secondary">
              Посмотреть примеры
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}