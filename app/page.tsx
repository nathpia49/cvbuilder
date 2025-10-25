import Link from 'next/link';
import { templates } from 'lib/templates';

export default function HomePage() {
  return (
    <main className="home">
      <div className="home__hero">
        <div>
          <h1>CV Builder Templates</h1>
          <p>
            Choose a template that matches your personal brand, then customise every
            section in the builder. Click any preview to start editing with live
            experience and styling controls.
          </p>
        </div>
      </div>
      <div className="home__grid">
        {templates.map((template) => (
          <Link key={template.id} href={`/builder/${template.id}`} className="home__card">
            <div className="home__image">
              <img src={template.image} alt={`${template.title} template`} />
            </div>
            <div className="home__meta">
              <h3>{template.title}</h3>
              <p>{template.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
