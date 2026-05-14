# Семейное Наследие — Премиальный сайт генеалогических услуг

Production-ready premium genealogy website с Next.js 14, TypeScript и App Router.

## О проекте

Профессиональный сайт для продажи генеалогических услуг:
- Родословные книги
- Генеалогические исследования
- Архивный поиск
- Семейные древ

## Технологии

- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- SSR

## Структура

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css        # Global styles
│   ├── services/          # Services pages
│   ├── blog/             # Blog articles
│   ├── cases/            # Case studies
│   ├── about/            # About page
│   └── faq/              # FAQ page
└── components/             # React components
    ├── Header.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── ServicesPreview.tsx
    ├── CasesPreview.tsx
    ├── HowItWorks.tsx
    ├── BooksExamples.tsx
    ├── Testimonials.tsx
    ├── FAQ.tsx
    └── CTA.tsx
```

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## SEO

- Semantic HTML
- Metadata на каждой странице
- Sitemap.xml
- Robots.txt

## Лицензия

MIT