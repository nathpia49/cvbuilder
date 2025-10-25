# CV Builder

A polished Next.js + Tailwind CSS experience for showcasing CV templates, building resumes with AI assisted tooling, and highlighting the team behind the product.

## Features

- **Home page** with hero, template gallery, and product highlights.
- **Interactive CV builder** with live preview, theme controls (color, font family/size/style/weight), editable sections (contact, skills, languages, interests, experience, education, custom sections), avatar upload, AI portrait generator tab, AI assistant cover letter chat, save-to-MongoDB action, and PDF export / print controls.
- **Team page** presenting the core crew with quick actions to insert a template or download a team profile.
- **API routes** for persisting CVs to MongoDB and returning stubbed AI responses for portraits and cover letter assistance.

## Getting started

1. Install dependencies: `npm install`
2. Create `.env.local` with the following variables:
   ```bash
   MONGODB_URI="mongodb+srv://..."
   OPENAI_API_KEY="sk-..." # optional, the AI routes return stubbed data without a key
   ```
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to explore the experience.

> **Note:** The AI routes are implemented as local stubs. Wire them to your preferred AI provider for production use. Ensure you never commit API secrets.

## Tech stack

- Next.js App Router (TypeScript)
- Tailwind CSS for styling
- MongoDB Node.js Driver for persistence
- html2canvas + jsPDF for PDF export
- React Query & Next Themes providers for client-side enhancements
