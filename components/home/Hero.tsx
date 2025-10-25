import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 px-10 py-16">
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="relative flex flex-col gap-8">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand">
          <Sparkles className="h-4 w-4" /> Latest: AI-powered cover letters
        </div>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Craft a standout CV in minutes with collaborative AI support.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Explore curated templates, personalise every detail, and export production-ready resumes. Our AI image and writing
          assistants keep your portfolio looking sharp and authentic.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/cv-builder"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark"
          >
            Start building now
          </Link>
          <Link
            href="#templates"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-slate-500"
          >
            Browse templates
          </Link>
        </div>
        <dl className="grid grid-cols-1 gap-6 text-sm text-slate-300 sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-white">Premium templates</dt>
            <dd>40+ layouts inspired by leading design teams.</dd>
          </div>
          <div>
            <dt className="font-semibold text-white">AI assisted</dt>
            <dd>Generate portraits and cover letters with one click.</dd>
          </div>
          <div>
            <dt className="font-semibold text-white">Team ready</dt>
            <dd>Invite collaborators and insert team profiles instantly.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
