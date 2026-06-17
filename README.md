# Video Downloader

A modern, mobile-first, production-ready video downloader website — built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

**Developed by [Sagar Jondhale (IronPurush)](https://github.com/IronPurush)**

![Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)

---

## ✨ Features

- 📱 **Mobile-first responsive design** — optimized for Android & iPhone
- 🎨 **Modern glassmorphism UI** with animated gradient backgrounds
- 🌗 **Dark/Light mode** toggle with persisted preference
- ⚡ **PWA-ready** — installable, offline-capable via service worker
- 🔍 **Fully SEO-optimized** — JSON-LD structured data, sitemap, robots.txt, Open Graph, Twitter Cards, FAQ schema, breadcrumb schema
- 💰 **Google AdSense ready** — pre-built ad slot components in header, content, sidebar, and footer positions
- 🔒 **Security hardened** — CSP headers, XSS protection, input sanitization, rate limiting, CSRF-safe API design
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation, focus states, `prefers-reduced-motion` support
- 🏗️ **Clean architecture** — modular components, typed interfaces, reusable utilities
- ✅ **Zero build warnings, zero lint errors** — TypeScript strict mode throughout

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Home — hero, URL input, features, platforms, testimonials, FAQ |
| `/platforms` | Full list of supported platforms + how-to guide |
| `/faq` | Frequently asked questions with FAQ schema |
| `/about` | About the project and developer |
| `/contact` | Contact form with client-side validation |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/dmca` | DMCA / Copyright Policy |

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Icons:** lucide-react
- **Fonts:** System font stack (zero external network requests, instant render)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/IronPurush/video-downloader.git
cd video-downloader
npm install
```

### Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

See [`.env.example`](./.env.example) for all available variables (AdSense publisher ID, analytics ID, backend API URL, etc).

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

> **Note:** This project uses `output: 'standalone'` in `next.config.ts` for optimized Docker deployments. When running `npm run start` locally without Docker, Next.js will print a warning suggesting `node .next/standalone/server.js` instead — both work, but the standalone server is what production/Docker uses.

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
video-downloader/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout (metadata, JSON-LD, providers)
│   │   ├── page.tsx               # Homepage
│   │   ├── globals.css           # Global styles, design tokens, animations
│   │   ├── sitemap.ts             # Dynamic sitemap.xml generation
│   │   ├── robots.ts              # Dynamic robots.txt generation
│   │   ├── error.tsx               # Error boundary
│   │   ├── loading.tsx             # Loading state
│   │   ├── not-found.tsx           # Custom 404
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── dmca/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── platforms/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── api/
│   │       └── download/route.ts  # Download API (rate-limited, validated)
│   ├── components/
│   │   ├── layout/                # Navbar, Footer
│   │   ├── sections/               # Hero, Features, Platforms, FAQ, Testimonials, URLInput
│   │   └── ui/                     # AdBanner, ServiceWorkerRegistration
│   ├── lib/
│   │   ├── constants.ts            # Site config, platform data, FAQ data
│   │   └── utils.ts                 # URL validation, sanitization, formatting
│   └── types/
│       └── index.ts                  # Shared TypeScript interfaces
├── public/
│   ├── logo.svg, favicon.svg        # Custom SVG branding assets
│   ├── icons/                        # Generated PWA icons (8 sizes)
│   ├── manifest.json                 # PWA manifest
│   └── sw.js                          # Service worker
├── next.config.ts                     # Security headers, image config, redirects
├── Dockerfile                          # Multi-stage production Docker build
├── docker-compose.yml
└── .env.example
```

## 🔌 Connecting a Real Download Backend

The current `/api/download` route returns **mock data** to demonstrate the expected contract. To go live:

1. Stand up a backend service (e.g. using `yt-dlp` in a sandboxed worker, or a third-party extraction API).
2. Set `DOWNLOAD_API_URL` and `DOWNLOAD_API_SECRET` in your environment.
3. Replace the mock response block in `src/app/api/download/route.ts` with a call to your backend.
4. **Important:** Always validate that the user has rights to download the content, respect platform Terms of Service, and never circumvent DRM. See `/dmca` and `/terms` for the legal framework this site is built around.
5. For production-scale rate limiting, replace the in-memory `Map` in the API route with Redis (see commented config in `docker-compose.yml`).

## 💰 Setting Up Google AdSense

1. Get approved for [Google AdSense](https://adsense.google.com) and obtain your Publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`).
2. Set `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` in `.env.local`.
3. Uncomment the AdSense script tag in `src/app/layout.tsx` (`<head>` section) and insert your publisher ID.
4. In `src/components/ui/AdBanner.tsx`, uncomment the `<ins className="adsbygoogle">` block and remove the placeholder `<div>`.
5. Ad slots are already placed in the header, in-content (rectangle), and footer areas across the Home and FAQ pages — just supply real `data-ad-slot` IDs from your AdSense dashboard.

## 🔐 Security Notes

- All API input is sanitized (`sanitizeInput()` in `lib/utils.ts`) before processing.
- `/api/download` is rate-limited to 10 requests/minute per IP (in-memory; swap for Redis in multi-instance production deployments).
- Strict CSP, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy headers are set globally in `next.config.ts`.
- No video URLs or personal data are persisted to disk or a database — see `/privacy` for the full policy.
- Environment secrets (API keys, backend URLs) are never exposed to the client; only `NEXT_PUBLIC_*` variables are bundled into client code.

## 📦 Deployment

### Vercel (Recommended)

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add your environment variables from `.env.example` in the Vercel dashboard.
4. Deploy — Vercel auto-detects Next.js and handles the build.

### Docker

```bash
docker build -t video-downloader .
docker run -p 3000:3000 --env-file .env.local video-downloader
```

Or with Docker Compose:

```bash
docker compose up --build
```

### Self-Hosted (Node.js)

```bash
npm run build
node .next/standalone/server.js
```

(Remember to copy `public/` and `.next/static/` into the standalone output directory — see `Dockerfile` for the exact steps.)

## 📊 Performance & Quality Targets

This project is built to target:

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 100
- Lighthouse Best Practices: 100
- Zero TypeScript errors (strict mode)
- Zero ESLint errors/warnings

Run a local audit with:

```bash
npm run build && npm run start
npx lighthouse http://localhost:3000 --view
```

## ⚖️ Legal & Copyright

Video Downloader is a tool intended for **personal, lawful use only**. It does not host, store, or distribute video content — it helps users download publicly accessible content they have the legal right to access. Users are solely responsible for ensuring their use complies with copyright law and the originating platform's Terms of Service. See [`/dmca`](./src/app/dmca/page.tsx) and [`/terms`](./src/app/terms/page.tsx) for full details.

## 📝 License

MIT License — see [LICENSE](./LICENSE) for details.

## 👤 Author

**Sagar Jondhale (IronPurush)**
Full-stack developer passionate about fast, accessible, privacy-respecting web tools.

---

*Built with Next.js, TypeScript, and Tailwind CSS.*
