import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'Сколько времени занимает генеалогическое исследование?',
    answer: 'Срок зависит от сложности исследования. Обычно базовое исследование занимает 2-4 недели, полное — до 2-3 месяцев. Мы всегда согласовываем сроки индивидуально.',
  },
  {
    question: 'Какие документы нужны для начала исследования?',
    answer: 'Достаточно предоставить любую информацию, которую вы знаете о семье: фамилии, известные даты, места проживания. Чем больше информации — тем быстрее и точнее результат.',
  },
  {
    question: 'Можно ли заказать только родословную книгу без исследования?',
    answer: 'Да, мы предлагаем различные форматы. Можно заказать оформление уже готового материала или полный комплекс — исследование + книга.',
  },
  {
    question: 'Какие архивы вы используете для поиска?',
    answer: 'Мы работаем с государственными архивами России, архивами ЗАГС, церковными записями, военными архивами и частными коллекциями.',
  },
]

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Частые вопросы</h2>
        <p className={styles.sectionSubtitle}>
          Ответы на популярные вопросы о генеалогических услугах
        </p>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}