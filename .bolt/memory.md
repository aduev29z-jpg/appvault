# Project memory

## Product intent & audience

- AppVault: premium Russian-language digital app catalog for iPhone users
- Future goal: integrate as Telegram Mini App
- Showcase only — links to official stores/sites, no third-party app file distribution
- Target audience: Russian-speaking iOS users browsing/discovering apps

## Brand personality & voice

- Premium, polished, minimal Apple-inspired aesthetic
- All interface text in Russian
- Honest availability status messaging (e.g. "Ограничено в регионе")
- Non-generic, marketplace-quality presentation

## Visual design & UX direction

- Premium dark theme: black bg (#09090B), graphite cards (#17171B), white text, violet accent (#8B5CF6)
- Mobile-first, phone-width-capped and centered; looks native on iPhone, acceptable on larger screens
- Rounded cards, frosted-glass header and tab bar
- Smooth slide-up animations, press-scale feedback, subtle scroll header effect
- Stock photos unavailable → generated gradient artwork from each app's brand colors used for hero/detail banners
- Avoid invalid HTML nesting (e.g. button-in-button)

## Decisions, constraints & rationale

- Static HTML/CSS/JS single-page app (no framework)
- 18 realistic sample apps across 7 categories: Финансы, Социальные сети, Музыка, Покупки, Транспорт, Инструменты, Развлечения
- Bottom nav tabs: Главная, Каталог, Избранное, Профиль
- Live search filtering on Home and Каталог; category chips filter catalog
- Favorites persist across visits; heart icon adds to favorites with tab-bar counter badge
- Detail page includes description, rating, installs, size, age rating, availability, official-site link
- Removed leftover `page2.html` to keep single-page structure
- Cleaned up unused stub functions during verification

## Open questions & assumptions

- Telegram Mini App integration deferred; current build is web-only
- Sample data is manually curated; no backend or live catalog API
- Region availability statuses hardcoded per app
- Stock photo dependency unresolved; gradient artwork is a fallback, not final