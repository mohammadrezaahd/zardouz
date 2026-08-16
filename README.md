# Zardouz

Zardouz is a Next.js App Router storefront migrated from the original static HTML/CSS/JS implementation.

## Stack

- Next.js + TypeScript
- MUI for the component system and responsive layout
- Swiper React for product and collection sliders
- notistack for user notifications
- Mock catalog/cart data only; no backend or server actions are included yet

## Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run type-check
npm run build
npm run lint
```

## Structure

- `src/app` contains route-level pages.
- `src/components` contains shared layout, catalog, cart and product components.
- `src/lib` contains mock catalog data and navigation constants.
- `public/assets` contains the original brand images and fonts.

The existing backend integration points are intentionally represented by local UI feedback and can be replaced with API calls in the next phase.
