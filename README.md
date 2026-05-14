# Genealogy Website

Современный SEO-first сайт для генеалогических услуг, построенный на Next.js 14.

## Технический стек

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS
- **Rendering**: SSR + Static Generation

## Структура проекта

```
/app                    # Next.js App Router
  /blog                # Блог
    /[slug]           # Статьи блога
  /services           # Услуги
    /rodoslovnaya-kniga
    /genealogicheskoe-issledovanie
    /arhivnyj-poisk
    /family-tree
  /cases              # Кейсы
    /[slug]
  /about             # О нас
  /contact          # Контакты
/components         # Компоненты
  /layout           # Header, Footer
  /sections         # Hero, Services, Cases и т.д.
/lib                 # Утилиты (SEO)
/styles              # Глобальные стили
/public             # Статические файлы
```

## SEO Архитектура

- Semantic HTML с правильной структурой заголовков
- Metadata API для мета-тегов
- OpenGraph и Twitter Cards
- JSON-LD Schema (Organization, FAQ, Article)
- Карта сайта и robots.txt
- SSR для динамических страниц
- SSG для статического контента

## Установка

```bash
# Установка зависимостей
npm install

# Разработка
npm run dev

# Продакшн сборка
npm run build

# Запуск продакшн
npm start
```

## Развёртывание

Проект готов для развёртывания на:

- Vercel (рекомендуется)
- Netlify
- Docker
- Любой Node.js хостинг

### Vercel

```bash
npm i -g vercel
vercel deploy
```

## SEO Рекомендации

Для максимальной эффективности SEO:

1. **Контент** - Основной SEO-трафик идёт через статьи блога и страницы услуг
2. **Обновления** - Регулярно добавляйте новые статьи в блог
3. **Скорость** - Сайт оптимизирован для Core Web Vitals 90+
4. **Внутренние ссылки** - Используйте перекрёстные ссылки между страницами
5. **Схемы** - JSON-LD схемы уже настроены

## Производительность

Сайт оптимизирован для:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- First Contentful Paint < 1.8s

## Контакты

- Email: info@genealogy.example.com
- Телефон: +7 (495) 123-45-67