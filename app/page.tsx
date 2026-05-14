import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import CasesPreview from '@/components/sections/CasesPreview'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import AboutPreview from '@/components/sections/AboutPreview'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <CasesPreview />
        <Testimonials />
        <FAQ />
        <AboutPreview />
        <CTA />
      </main>
      <Footer />
      
      {/* SEO Text Section - visually hidden pero indexable */}
      <section className="visually-hidden" aria-label="SEO информация">
        <h1>Генеалогия и родословные исследования</h1>
        <p>
          Мы предлагаем профессиональные генеалогические услуги: создание родословных книг, 
          архивные исследования, поиск предков и восстановление семейной истории. 
          Наша команда работает с государственными и частными архивами для поиска 
          документов о ваших родственниках. Мы помогаем узнать историю семьи, 
          найти участников войн, восстановить родословную и создать красивую семейную книгу.
        </p>
        <h2>Наши услуги</h2>
        <ul>
          <li>Родословная книга — профессионально оформленное издание с генеалогическим древом</li>
          <li>Генеалогическое исследование — полный поиск по архивам и документам</li>
          <li>Архивный поиск — работа с государственными архивами России</li>
          <li>Семейное древо — визуальное представление родословной</li>
        </ul>
        <h2>Почему выбирают нас</h2>
        <p>
          Опыт работы с 2010 года, сотни восстановленных семейных историй, 
          профессиональные историки и архивисты в команде.
        </p>
      </section>
    </>
  )
}