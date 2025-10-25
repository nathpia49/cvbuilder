import Link from "next/link";

const features = [
  {
    title: "Design your brand",
    description:
      "Switch fonts, colors, and layout tokens instantly. Every update mirrors in the live preview so you stay in flow.",
  },
  {
    title: "AI-ready workflows",
    description:
      "Generate portraits, punch up bullets, and co-write cover letters with the integrated assistant and image studio.",
  },
  {
    title: "Team collaboration",
    description:
      "Save CVs to MongoDB, share templates, and keep everyone aligned with version history and template kits.",
  },
];

const steps = [
  {
    step: "01",
    title: "Import or start fresh",
    description: "Start with a template or import existing content. Auto-formatting gets you production-ready quickly.",
  },
  {
    step: "02",
    title: "Polish with AI",
    description: "Use the assistant for quantified bullets, AI portraits, and cover letter drafts tailored to each role.",
  },
  {
    step: "03",
    title: "Ship anywhere",
    description: "Export PDFs, sync to MongoDB, or trigger Lovable Cloud automations that deliver CVs to hiring teams.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-[#0b1324] via-[#0d1830] to-[#0f1c3a] p-10 shadow-glow">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex rounded-full border border-primary/40 bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Elevated resumes
            </span>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">
              A modern CV studio for ambitious careers
            </h1>
            <p className="text-lg text-slate-300">
              Elevate combines precise design controls with AI copilots so you can craft beautiful, outcome-driven
              resumes, cover letters, and team-ready profile kits in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/builder"
                className="inline-flex items-center justify-center rounded-full border border-primary/60 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90"
              >
                Start building
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary/40 hover:text-primary"
              >
                Meet the team
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/5 bg-[#111a2f] p-5">
              <p className="text-xs uppercase tracking-wide text-primary">Live preview</p>
              <p className="mt-3 text-lg font-semibold text-white">Update once, ship everywhere</p>
              <p className="mt-2 text-sm text-slate-300">
                The builder syncs your edits instantly across PDF, print, and web exports. No more fiddling with
                static templates.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#10162b] p-5">
              <p className="text-xs uppercase tracking-wide text-primary">AI assistant</p>
              <p className="mt-3 text-sm text-slate-300">
                Chat with a resume strategist to craft standout bullets, interview answers, and cover letter hooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="card-surface relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/5 bg-[#0b1425] p-10 shadow-inner">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">How it works</span>
          <h2 className="text-3xl font-semibold text-white">From first draft to final delivery</h2>
          <p className="text-sm text-slate-300">
            Launch the builder, polish with AI, then share professional assets with your team. Every step is designed
            to keep momentum high.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-white/5 bg-white/5 p-6 text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">{step.step}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
