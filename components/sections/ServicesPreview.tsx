import Link from 'next/link'
import styles from './ServicesPreview.module.css'

const services = [
  {
    href: '/services/rodoslovnaya-kniga',
    icon: '📖',
    title: 'Родословная книга',
    description: 'Профессионально оформленная книга с генеалогическим древом и историей рода',
  },
  {
    href: '/services/genealogicheskoe-issledovanie',
    icon: '🔍',
    title: 'Генеалогическое исследование',
    description: 'Полное исследование происхождения семьи по архивным документам',
  },
  {
    href: '/services/arhivnyj-poisk',
    icon: '📁',
    title: 'Архивный поиск',
    description: 'Поиск документов в государственных и частных архивах',
  },
  {
    href: '/services/family-tree',
    icon: '🌳',
    title: 'Семейное древо',
    description: 'Визуальное представление родословной в современном дизайне',
  },
]

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Наши услуги</h2>
        <p className={styles.sectionSubtitle}>
          Профессиональные генеалогические услуги для сохранения семейной истории
        </p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link key={service.href} href={service.href} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </Link>
          ))}
        </div>
        
        <div className={styles.viewAll}>
          <Link href="/services" className="btn btn-secondary">
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  )
}