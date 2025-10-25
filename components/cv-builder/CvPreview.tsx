'use client';

import { CvData } from '@/lib/defaultCv';
import { cn } from '@/lib/utils';

const FONT_MAP: Record<string, string> = {
  Inter: 'var(--font-inter), system-ui, sans-serif',
  'Space Grotesk': 'var(--font-space-grotesk), system-ui, sans-serif',
  'Playfair Display': 'var(--font-playfair-display), serif',
  Roboto: 'var(--font-roboto), system-ui, sans-serif',
  Lora: 'var(--font-lora), serif'
};

export function CvPreview({ cv }: { cv: CvData }) {
  return (
    <div
      id="cv-preview"
      className={cn('mx-auto w-full max-w-3xl rounded-3xl bg-white text-slate-900 shadow-2xl')}
      style={{
        fontWeight: cv.theme.fontWeight,
        fontStyle: cv.theme.fontStyle,
        fontSize: cv.theme.fontSize,
        fontFamily: FONT_MAP[cv.theme.fontFamily] ?? FONT_MAP['Inter']
      }}
    >
      <div className="grid grid-cols-3 overflow-hidden rounded-3xl">
        <aside className="col-span-1 flex flex-col gap-6 bg-slate-900 px-8 py-10 text-white">
          <div className="flex flex-col items-center gap-3 text-center">
            {cv.avatar ? (
              <img src={cv.avatar} alt={cv.name} className="h-32 w-32 rounded-full object-cover" />
            ) : (
              <div
                className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-800 text-4xl font-semibold"
                style={{ color: cv.theme.accentColor }}
              >
                {cv.name
                  .split(' ')
                  .map((word) => word.charAt(0))
                  .join('')}
              </div>
            )}
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{cv.name}</h2>
              <p className="text-sm text-slate-300">{cv.title}</p>
            </div>
          </div>
          <Section heading="Contact" accentColor={cv.theme.accentColor}>
            <ul className="space-y-2 text-sm">
              {cv.contacts.map((item) => (
                <li key={item.id} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: cv.theme.accentColor }} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </Section>
          <Section heading="Skills" accentColor={cv.theme.accentColor}>
            <ul className="space-y-2 text-sm">
              {cv.skills.map((skill) => (
                <li key={skill.id}>{skill.label}</li>
              ))}
            </ul>
          </Section>
          <Section heading="Languages" accentColor={cv.theme.accentColor}>
            <ul className="space-y-2 text-sm">
              {cv.languages.map((language) => (
                <li key={language.id}>{language.label}</li>
              ))}
            </ul>
          </Section>
          <Section heading="Interests" accentColor={cv.theme.accentColor}>
            <ul className="space-y-2 text-sm">
              {cv.interests.map((interest) => (
                <li key={interest.id}>{interest.label}</li>
              ))}
            </ul>
          </Section>
          {cv.customSections.map((section) => (
            <Section key={section.id} heading={section.heading} accentColor={cv.theme.accentColor}>
              <ul className="space-y-2 text-sm">
                {section.items.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </Section>
          ))}
        </aside>
        <section className="col-span-2 flex flex-col gap-8 px-10 py-12">
          <article className="space-y-3">
            <h1 className="text-3xl font-semibold" style={{ color: cv.theme.accentColor }}>
              About Me
            </h1>
            <p className="text-sm leading-relaxed text-slate-700">{cv.summary}</p>
          </article>
          <article className="space-y-6">
            <SectionHeading title="Experience" accentColor={cv.theme.accentColor} />
            <div className="space-y-6">
              {cv.experiences.map((experience) => (
                <div key={experience.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                    <span className="text-sm font-medium" style={{ color: cv.theme.accentColor }}>
                      {experience.period}
                    </span>
                  </div>
                  {experience.subtitle && <p className="text-sm font-medium text-slate-600">{experience.subtitle}</p>}
                  {experience.description && (
                    <p className="text-sm leading-relaxed text-slate-600">{experience.description}</p>
                  )}
                </div>
              ))}
            </div>
          </article>
          <article className="space-y-6">
            <SectionHeading title="Education" accentColor={cv.theme.accentColor} />
            <div className="space-y-6">
              {cv.education.map((education) => (
                <div key={education.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">{education.title}</h3>
                    <span className="text-sm font-medium" style={{ color: cv.theme.accentColor }}>
                      {education.period}
                    </span>
                  </div>
                  {education.subtitle && <p className="text-sm font-medium text-slate-600">{education.subtitle}</p>}
                  {education.description && (
                    <p className="text-sm leading-relaxed text-slate-600">{education.description}</p>
                  )}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

function Section({ heading, accentColor, children }: { heading: string; accentColor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
        {heading}
      </h3>
      {children}
    </div>
  );
}

function SectionHeading({ title, accentColor }: { title: string; accentColor: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-slate-200" />
      <h2 className="text-xl font-semibold uppercase tracking-[0.4em] text-slate-900">{title}</h2>
      <div className="h-px flex-1" style={{ backgroundColor: accentColor }} />
    </div>
  );
}
