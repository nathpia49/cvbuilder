import { Hero } from '@/components/home/Hero';
import { TemplateGallery } from '@/components/home/TemplateGallery';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <TemplateGallery />
    </div>
  );
}
