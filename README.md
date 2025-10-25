# Elevate CV Studio

A modern Next.js + Tailwind CV builder experience that pairs design controls with AI-ready workflows. This project includes a polished landing page, an interactive resume editor with live preview, and a team showcase page.

## Features

- **Home page** – Hero section with feature highlights, workflow steps, and CTA buttons.
- **CV Builder** – Full editor with settings, AI portrait, and AI assistant tabs.
  - Customize typography (font family, heading font, weight, size, style) and colors.
  - Edit personal info, dynamic experience/education/skills sections with add/remove support.
  - Upload portraits or trigger an AI template placeholder.
  - AI assistant chat interface with prompt chips (stubbed for backend integration).
  - Live preview surface reflecting all customizations in real time.
  - Actions for save (stub), download/print via `window.print()`.
- **Team page** – Professional team grid with bios, imagery, and guiding principles.

## Tech stack

- [Next.js 14](https://nextjs.org/) with the App Router.
- [React 18](https://react.dev/).
- [Tailwind CSS](https://tailwindcss.com/) with a custom dark theme.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` (optional but recommended) with your MongoDB and OpenAI keys:
   ```bash
   MONGODB_URI=your-mongodb-uri
   OPENAI_API_KEY=your-openai-api-key
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the experience.

## Notes

- The **Save to workspace**, **AI portrait generation**, and **AI assistant** actions are stubs. Connect them to your Lovable Cloud backend (MongoDB + OpenAI) to activate persistence and AI features.
- Remote Unsplash images are configured through `next.config.ts` for the preview portrait generator and marketing imagery.
- Tailwind and component utilities live under `components/` and `lib/` to keep the design system cohesive.

Feel free to adapt the design tokens and copy to match your brand.
