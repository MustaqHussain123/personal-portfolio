# Mustaq Hussain — Portfolio (React)

A premium, light-mode "liquid glass" scrolling portfolio built with React + Vite, GSAP for scroll storytelling, and EmailJS for the contact form. There is no backend server — everything, including sending the contact email, runs client-side.

## Project structure

```
react-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── .env.example
├── .gitignore
├── public/
│   └── assets/
│       └── portrait.jpg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── hooks/
    │   └── useReveal.js
    └── components/
        ├── Reveal.jsx
        ├── LiquidBackground.jsx
        ├── ProgressBar.jsx
        ├── Cursor.jsx
        ├── Preloader.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── StoryBand.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Engineering.jsx
        ├── Projects.jsx
        ├── EduLang.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 1. Installation

```bash
npm install
```

## 2. Set up EmailJS (replaces Nodemailer — no backend needed)

The contact form sends mail directly from the browser using [EmailJS](https://www.emailjs.com/). You need three values from your EmailJS account:

1. Sign up at emailjs.com (free tier is fine for a portfolio).
2. **Email Services** → connect your Gmail (or any provider) → note the **Service ID**.
3. **Email Templates** → create a template with variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` → note the **Template ID**. A simple template body:
   ```
   New message from {{from_name}} ({{from_email}})
   Subject: {{subject}}

   {{message}}
   ```
4. **Account** → **General** → copy your **Public Key**.

Copy the env template and fill these in:

```bash
cp .env.example .env
```

`.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note on secrecy:** EmailJS's public key is designed to be exposed in frontend code (it's not a secret like an SMTP password) — that's why this whole approach doesn't need a server. Still, keep `.env` itself out of git (already handled by `.gitignore`) so these IDs aren't casually indexed, and set a reasonable per-domain and rate-limit restriction in your EmailJS dashboard to prevent abuse of your quota.

## 3. Run it (development)

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 4. Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — deploy it anywhere that serves static files (Vercel, Netlify, GitHub Pages, S3, etc.). Because there's no backend, hosting is just static file hosting; make sure to set the three `VITE_EMAILJS_*` environment variables in your host's dashboard so they're baked in at build time.

## What changed from the vanilla version

- Rebuilt as React components (Vite build, no TypeScript, no server framework).
- Contact form now uses `@emailjs/browser` instead of an Express + Nodemailer backend — no server to run or deploy.
- All scrollbars are hidden site-wide (`scrollbar-width: none` / WebKit equivalent) while scrolling itself stays fully functional, including the horizontal project rail.
- Layout and animation behavior (GSAP reveals, mouse parallax, pinned horizontal project rail on desktop, plain vertical stacking on mobile) carried over from the original build.

## Customizing

- Swap `public/assets/portrait.jpg` for an updated photo any time.
- Section content lives in each component under `src/components/` — update copy or data arrays directly there.
