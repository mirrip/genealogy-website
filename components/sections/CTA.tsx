import Link from 'next/link'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2 className={styles.title}>Готовы узнать историю своего рода?</h2>
        <p className={styles.subtitle}>
          Получите бесплатную консультацию и узнайте, что мы можем сделать для вас
        </p>
        <div className={styles.buttons}>
          <Link href="/contact" className={styles.btnPrimary}>
            Получить консультацию
          </Link>
          <Link href="/cases" className={styles.btnSecondary}>
            Посмотреть примеры
          </Link>
        </div>
      </div>
    </section>
  )
}