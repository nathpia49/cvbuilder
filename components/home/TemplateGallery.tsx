import { Template, templates } from '@/data/templates';
import { TemplateCard } from './TemplateCard';

export function TemplateGallery() {
  const featured = templates.slice(0, 4);
  const moreTemplates = templates.slice(4);

  return (
    <section id="templates" className="mt-12 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-widest text-brand/80">Curriculum Vitae</p>
        <h2 className="text-3xl font-semibold text-white">Explore curated layouts</h2>
        <p className="text-slate-400">
          Choose from modern, minimalist, and executive designs. Each template is optimised for readability and Applicant Tracking Systems.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featured.map((template: Template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {moreTemplates.map((template: Template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
}
