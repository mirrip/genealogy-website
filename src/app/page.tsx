import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BrandHistory from '@/components/BrandHistory';
import ServicesPreview from '@/components/ServicesPreview';
import CasesPreview from '@/components/CasesPreview';
import HowItWorks from '@/components/HowItWorks';
import BooksExamples from '@/components/BooksExamples';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import FloatingButtons from '@/components/FloatingButtons';
import AIChat from '@/components/AIChat';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Родословные книги и генеалогические исследования | Семейное Наследие',
  description: 'Профессиональные генеалогические исследования, создание родословных книг и восстановление истории семьи. Сохраняем память поколений.',
  keywords: ['генеалогия', 'родословная', 'семейное древо', 'архивный поиск', 'восстановление рода'],
  openGraph: {
    title: 'Родословные книги и генеалогические исследования | Семейное Наследие',
    description: 'Профессиональные генеалогические исследования и создание родословных книг. Сохраняем память поколений.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <BrandHistory />
        <ServicesPreview />
        <CasesPreview />
        <HowItWorks />
        <BooksExamples />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <FloatingButtons />
      <AIChat />
      <Footer />
    </>
  );
}