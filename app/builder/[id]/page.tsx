import { notFound } from 'next/navigation';
import { getTemplateById } from 'lib/templates';
import BuilderClient from './BuilderClient';

type BuilderPageProps = {
  params: {
    id: string;
  };
};

export default function BuilderPage({ params }: BuilderPageProps) {
  const template = getTemplateById(params.id);

  if (!template) {
    notFound();
  }

  return (
    <main className="builder">
      <BuilderClient template={template} />
    </main>
  );
}
