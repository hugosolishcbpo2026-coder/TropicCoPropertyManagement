# Tropic Co. Property Management

> Elevated coastal living. Diamond-tier hospitality. Cinematic tropical escapes.
> **200 Monroe St., Phoenix, Arizona 85003**

A world-class luxury property management website — built with React + Vite + Tailwind, animated with Framer Motion + GSAP + Lenis, and configured out of the box for GitHub Pages.

---

## ✨ What's inside

- **Official brand logos** (`/public/tropic-co-logo.svg`, `tropic-co-logo-dark.svg`, `tropic-co-emblem.svg`)
- **Working navigation** — every menu item, footer link, and CTA smooth-scrolls to its section via Lenis (with a native fallback)
- **Active-link highlighting** on scroll (IntersectionObserver)
- **Cinematic Hero** with parallax Unsplash photography, GSAP character-stagger headline, and a canvas-based diamond particle field
- **GSAP ScrollTrigger** scrub-scale effect on the Experience section
- **Auto-cycling testimonials** with blur-filter transitions
- **Editorial asymmetric Properties grid** with hover zoom and luxury overlays
- **Glassmorphism navbar** that contracts on scroll, with a full-screen mobile menu
- **Animated luxury loader** that draws the official emblem with SVG path animation
- **Reduced-motion accessibility** built in
- **GitHub Pages-ready** with relative base path (`base: './'`) and SPA 404 fallback

---

## 🚀 Quick Start

```bash
# Inside the unzipped project folder:
npm install
npm run dev          # → http://localhost:5173
```

## 🌍 Build & Deploy to GitHub Pages

```bash
npm run build        # builds production bundle to /dist
npm run deploy       # publishes /dist to the gh-pages branch
```

Then in your GitHub repo: **Settings → Pages → Source → `gh-pages` branch → `/ (root)`**.

The site uses `base: './'` so it works on **any** repo name without editing the config (e.g. `https://you.github.io/anything-here/`).

For a custom domain or `<username>.github.io` user site, change `base` to `'/'` in `vite.config.js` and add a `CNAME` file to `/public`.

---

## ✏️ Updating contact info

When you have your phone number and email, open **`src/components/Contact.jsx`** and edit the top of the file:

```js
const CONTACT = {
  phone: { value: '(602) 555-0100', live: true },         // ← set live: true
  email: { value: 'hello@tropicco.com', live: true },     // ← set live: true
  address: {
    line1: '200 Monroe St.',
    line2: 'Phoenix, Arizona 85003',
  },
}
```

Setting `live: true` will make the phone tap-to-call and the email tap-to-compose.

Also update **`src/components/Footer.jsx`** in the brand block (search for `Coming soon`) so the footer matches.

---

## 🧭 Navigation — how it works

Each nav link maps to a section ID:

| Menu item   | Section ID       |
| ----------- | ---------------- |
| About       | `#about`         |
| Services    | `#services`      |
| Properties  | `#properties`    |
| Experience  | `#experience`    |
| Reviews     | `#testimonials`  |
| Contact     | `#contact`       |

Click handling lives in `src/components/Navbar.jsx` → `scrollToSection()`. It uses Lenis when available, otherwise falls back to native `scrollIntoView`. To add a new section, give it an `id` and add a matching entry to `NAV_LINKS` at the top of `Navbar.jsx`.

---

## 📁 Project Structure

```
tropic-co/
├── public/
│   ├── favicon.svg                  (= official emblem)
│   ├── tropic-co-logo.svg
│   ├── tropic-co-logo-dark.svg
│   ├── tropic-co-emblem.svg
│   └── 404.html                     (SPA fallback for GitHub Pages)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               (working nav + mobile menu)
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Properties.jsx
│   │   ├── Experience.jsx           (GSAP ScrollTrigger)
│   │   ├── Testimonials.jsx         (auto-cycle + blur)
│   │   ├── Contact.jsx              (edit CONTACT object here)
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx                 (inline official emblem)
│   │   ├── Loader.jsx
│   │   └── DiamondParticles.jsx     (Canvas particle field)
│   ├── hooks/
│   │   └── useLenis.js              (smooth scroll + GSAP sync)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                    (design system + utilities)
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Design System

Defined in `tailwind.config.js` + `src/index.css`. The palette matches the official brand SVGs exactly:

| Token        | Color hex                                           |
| ------------ | --------------------------------------------------- |
| `ink-950`    | `#050d10` (logo dark background)                    |
| `gold-400`   | `#dbac3b` (mid-gold from official gradient)         |
| `gold-100`   | `#f8efcd` (highlight gold)                          |
| `emerald-400`| `#1eb775` (palm-frond emerald)                      |
| `emerald-800`| `#0a3326` (deep emerald)                            |
| `coral-400`  | `#ff5a36` (neon highlight)                          |
| `ivory`      | `#f5f1e8`                                           |

Typography: **Fraunces** (variable serif, optical sizing) + **Jost** (modern sans) + **JetBrains Mono** (technical labels).

---

## 🖼️ Replacing images

The site uses Unsplash for stock photography (Hero, About, Properties, Experience). To swap in real client photography, search for image URLs in:
- `src/components/Hero.jsx` → `HERO_IMG`
- `src/components/About.jsx` → `ABOUT_IMG`
- `src/components/Properties.jsx` → `properties[].img`
- `src/components/Experience.jsx` → `EXP_IMG`

Drop your photos in `/public/images/` and reference them as `./images/yourfile.jpg`.

---

## 📜 Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## ⚖️ License

Crafted for Tropic Co. Property Management. Use, adapt, and elevate.
