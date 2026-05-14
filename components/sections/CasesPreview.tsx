import Link from 'next/link'
import styles from './CasesPreview.module.css'

const cases = [
  {
    href: '/cases/romanov-family',
    title: 'История семьи Романовых',
    description: 'Восстановление родословной за 150 лет',
  },
  {
    href: '/cases/kuznetsov-family',
    title: 'Кузнецовы: три поколения',
    description: 'Генеалогическое исследование XVIII века',
  },
  {
    href: '/cases/sokolov-family',
    title: 'Семья Соколовых',
    description: 'Архивные находки военных лет',
  },
]

export default function CasesPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Кейсы</h2>
        <p className={styles.sectionSubtitle}>
          Реальные истории семей, которые мы помогли восстановить
        </p>
        
        <div className={styles.grid}>
          {cases.map(caseItem => (
            <Link key={caseItem.href} href={caseItem.href} className={styles.card}>
              <div className={styles.image}>
                <span>📜</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{caseItem.title}</h3>
                <p className={styles.description}>{caseItem.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles.viewAll}>
          <Link href="/cases" className="btn btn-secondary">
            Все кейсы
          </Link>
        </div>
      </div>
    </section>
  )
}