'use client';

import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Консультация',
    description: 'Обсуждаем вашу задачу, цели и пожелания. Определяем объём исследования и сроки.',
  },
  {
    number: '02',
    title: 'Исследование',
    description: 'Работаем с архивами, базами данных и историческими документами.',
  },
  {
    number: '03',
    title: 'Анализ',
    description: 'Систематизируем найденную информацию, проверяем данные и восстанавливаем связи.',
  },
  {
    number: '04',
    title: 'Создание книги',
    description: 'Оформляем результаты в роскошную книгу или другое представление на ваш выбор.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Процесс</span>
          <h2 className={styles.title}>Как проходит исследование</h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < steps.length - 1 && <span className={styles.connector}></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}