import Link from 'next/link'
import styles from './AboutPreview.module.css'

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>О нас</h2>
          <p className={styles.text}>
            Мы занимаемся генеалогическими исследованиями с 2010 года. Наша команда 
            включает профессиональных историков, архивистов и исследователей с опытом 
            работы в государственных и частных архивах.
          </p>
          <p className={styles.text}>
            За годы работы мы помогли сотням семей узнать историю своих предков, 
            восстановить утраченные связи и создать семейные книги, которые передаются 
            из поколения в поколение.
          </p>
          <Link href="/about" className={styles.link}>
            Узнать больше о нас →
          </Link>
        </div>
      </div>
    </section>
  )
}