import Image from 'next/image';
import { team } from '@/data/team';
import { ArrowDownToLine, Plus, Users } from 'lucide-react';

export function TeamGrid() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 text-center">
        <div className="mx-auto flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand">
          <Users className="h-4 w-4" /> Our team
        </div>
        <h1 className="text-4xl font-semibold text-white">We build the templates we want to use</h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          Designers, writers, and engineers collaborating to help you present your best self. Insert any teammate into a CV template with a single tap.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
        {team.map((member) => (
          <article
            key={member.id}
            className="group flex flex-col items-center gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center shadow-card transition hover:-translate-y-1 hover:border-brand/60"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-slate-800">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-slate-400">{member.role}</p>
            </div>
            <p className="text-sm text-slate-400">{member.bio}</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
              {member.expertise.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-800/60 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex w-full flex-col gap-3 pt-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand hover:text-brand">
                <Plus className="h-4 w-4" /> Insert into template
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand transition hover:bg-brand/20">
                <ArrowDownToLine className="h-4 w-4" /> Download profile PDF
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
