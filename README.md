# CV Builder

Starter Next.js + Tailwind CV Builder app.

Features included in this scaffold:
- Home page (templates)
- CV Builder editor: change font family/size/weight, upload avatar, AI image generator tab, AI-assisted cover letter tab
- Save CV JSON to MongoDB
- Download CV as PDF
- Team page with team member listing and "insert template" example

Required environment variables:
- MONGODB_URI - MongoDB connection string
- OPENAI_API_KEY - (optional) for AI image / cover generation

Install & run:
1. npm install
2. Create .env.local with MONGODB_URI and OPENAI_API_KEY (optional)
3. npm run dev

Notes:
- The AI endpoints are stubs that call OpenAI if OPENAI_API_KEY is provided. Do not commit secrets.
- Adjust styling and templates to match your design; this is a functional skeleton.
