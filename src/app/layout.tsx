import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Родословные книги и генеалогические исследования | Семейное Наследие',
  description: 'Профессиональные генеалогические исследования, создание родословных книг и восстановление истории семьи. Сохраняем память поколений.',
  keywords: ['генеалогия', 'родословная', 'семейное древо', 'архивный поиск', 'восстановление рода'],
  openGraph: {
    title: 'Родословные книги и генеалогические исследования | Семейное Наследие',
    description: 'Профессиональные генеалогические исследования, создание родословных книг и восстановление истории семьи.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}