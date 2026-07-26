# Kimi K3 Referral Landing Page

An independent, premium referral landing page designed to encourage signups for Kimi K3 using a personal referral link. Built with React, TypeScript, Vite, and Tailwind CSS.

> **Disclaimer**: This is an independent referral page. It is not an official Moonshot AI or Kimi website.

## 🚀 Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Modern UI**: Dark theme, glassmorphism, and subtle Framer Motion animations.
- **Conversion Focused**: Prominent QR code, 1-click copy functionality, and clear CTAs.
- **Performance**: Fully static architecture, perfect for edge deployment on Cloudflare Pages.
- **SEO Optimized**: Pre-configured meta tags, Open Graph, Twitter cards, and JSON-LD structured data.
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation support, and reduced motion awareness.

## 🛠 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (Icons)
- Framer Motion (Animations)

## 📋 Prerequisites

- Node.js 22 LTS (or compatible LTS version)
- npm

## 💻 Local Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:YOUR_GITHUB_USERNAME/moonshoot-kimi-referal.git
   cd moonshoot-kimi-referal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and configure your referral variables:
   ```env
   VITE_REFERRAL_URL="PASTE_MY_KIMI_REFERRAL_LINK_HERE"
   ```

4. **Update the QR Code**
   Replace the placeholder `public/kimi-referral-qr.png` with your actual referral QR code image. Keep the filename the same.

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## ✏️ Customizing Content

- **Site Copy & FAQs**: Edit `src/data/content.ts`
- **Global Configuration**: Edit `src/config/site.ts`
- **Styling Tokens**: Edit `src/index.css` and `tailwind.config.js`

## 🏗 Production Build

To test the production build locally:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## ☁️ Cloudflare Pages Deployment

This project is optimized for Git integration with Cloudflare Pages.

1. Push your code to the `main` branch on GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
3. Select your `moonshoot-kimi-referal` repository.
4. Set the following build configurations:
   - **Production branch**: `main`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Add the following **Environment Variables**:
   - `VITE_REFERRAL_URL` (Your actual referral link)
   - `VITE_SITE_URL` (Your final deployed URL)
   - `VITE_SITE_NAME`
   - `VITE_QR_CODE_PATH` (default: `/kimi-referral-qr.png`)
6. Click **Save and Deploy**.

> **Note on URLs**: Cloudflare will provide a `pages.dev` subdomain. The specific URL `moonshoot-kimi-referal.pages.dev` is only available if another user has not already claimed that project name. If it is taken, Cloudflare will automatically assign a different available name (or you can specify a unique project name).

## ⚠️ Important Considerations

- **Authorization**: Ensure you are authorized to share and distribute the referral links and assets you are using.
- **Accuracy**: Do not make unverified claims regarding pricing, guarantees, or capabilities of Kimi K3 on this page.
- **Static Headers**: Security headers are defined in `public/_headers` to ensure a secure baseline when deployed to Cloudflare.
