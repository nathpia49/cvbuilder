import Image from 'next/image';
import { Template } from '@/data/templates';
import { ArrowUpRight } from 'lucide-react';

export function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 shadow-card transition hover:-translate-y-1 hover:border-brand/60">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={template.image}
          alt={template.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 to-slate-950/70" />
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-100">
          {template.price}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{template.title}</h3>
            <p className="text-sm text-slate-400">{template.location}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 text-slate-500 transition group-hover:text-brand" />
        </div>
        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-auto inline-flex items-center justify-center rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand/20">
          Preview template
        </button>
      </div>
    </div>
  );
}
