# Tropic Co. — Elevated Coastal Living

A cinematic, production-grade luxury property management website built for the
world's most luminous coastal residences.

> **Stack** — React · Vite · TailwindCSS · Framer Motion · GSAP · Lenis

---

## ✨ Design philosophy

- **Aesthetic** — luxury tropical modernism, dark cinematic, emerald + gold + coral neon.
- **Typography** — *Fraunces* (variable display serif) paired with *Jost*, *JetBrains Mono* for technical accents.
- **Motion** — Lenis-powered smooth scrolling, GSAP scrub parallax, Framer Motion staggered reveals, custom Canvas diamond particles.
- **Surface treatments** — glassmorphism, layered radial gradients, gold hairlines, grain overlays, diamond-cut clip paths.

---

## 🚀 Local development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Production build
npm run build

# Preview the production build
npm run preview
```

Node 18+ recommended.

---

## 📦 Deploying to GitHub Pages

The project is configured for relative-path hosting (`base: './'`), which works
on any GitHub Pages subdirectory **without further edits**.

### Option A — automatic via `gh-pages`

1. Push the repo to GitHub.
2. In `package.json`, set the `homepage` to your final URL if you want
   absolute asset paths (optional — `./` already works).
3. Run:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then in your
repo settings → Pages → set the source to the `gh-pages` branch / root.

### Option B — GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Enable Pages in repo settings → Source: GitHub Actions.

> If you deploy to a project subpath like `https://user.github.io/tropic-co/`
> and assets break, change `base` in `vite.config.js` from `'./'` to
> `'/tropic-co/'`.

---

## 🗂 Project structure

```
tropic-co/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useLenis.js
    └── components/
        ├── Loader.jsx          # Brand reveal loader
        ├── Navbar.jsx          # Floating glass navbar + mobile menu
        ├── Logo.jsx            # Diamond + palm fusion mark
        ├── DiamondParticles.jsx# Canvas particle field
        ├── Hero.jsx            # Cinematic parallax hero
        ├── About.jsx           # Editorial chapter 01
        ├── Services.jsx        # Animated luxury cards
        ├── Properties.jsx      # Featured portfolio grid
        ├── Experience.jsx      # Pinned GSAP hospitality moment
        ├── Testimonials.jsx    # Auto-cycling glass quotes
        ├── Contact.jsx         # Glassmorphism inquiry form
        └── Footer.jsx          # Oversized wordmark footer
```

---

## 🎨 Design tokens

All design tokens live in `tailwind.config.js` and `src/index.css`:

| Token        | Value         | Use                              |
| ------------ | ------------- | -------------------------------- |
| `ink-950`    | `#03080a`     | Deepest ocean black              |
| `emerald-500`| `#0a9b5e`     | Primary signature green          |
| `gold-400`   | `#dbac3b`     | Metallic gold accents            |
| `coral-500`  | `#ff5a36`     | Neon coral highlights            |
| `ivory-50`   | `#fbf9f3`     | Primary text                     |

---

## 📷 Imagery

Imagery is loaded from Unsplash CDN at runtime. Replace `*_IMG` constants in
each section with your client's brand photography for production.

---

© Tropic Co. — handcrafted with obsession.
