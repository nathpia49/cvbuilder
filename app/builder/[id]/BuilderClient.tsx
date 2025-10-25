'use client';

import { useMemo, useState } from 'react';
import clsx from 'clsx';
import type { ExperienceItem, Template } from 'lib/templates';

type StyleOptions = {
  backgroundColor: string;
  accentColor: string;
  textColor: string;
  borderRadius: number;
  padding: number;
  headingSize: number;
  bodySize: number;
  accentWeight: number;
  fontFamily: string;
  showShadow: boolean;
};

const fontOptions = ['Inter', 'Georgia', 'Poppins', 'Montserrat', 'Lora'];

function createBlankExperience(): ExperienceItem {
  return {
    id: `experience-${Math.random().toString(36).slice(2, 9)}`,
    role: 'New role title',
    company: 'Company name',
    start: 'Year',
    end: 'Present',
    description: 'Describe your accomplishments and the impact you delivered.'
  };
}

type BuilderClientProps = {
  template: Template;
};

export default function BuilderClient({ template }: BuilderClientProps) {
  const [experiences, setExperiences] = useState<ExperienceItem[]>(() =>
    template.experiences.map((experience) => ({ ...experience }))
  );
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(
    () => template.experiences[0]?.id ?? null
  );
  const [styleOptions, setStyleOptions] = useState<StyleOptions>({
    backgroundColor: '#ffffff',
    accentColor: '#1f3c88',
    textColor: '#0f172a',
    borderRadius: 28,
    padding: 36,
    headingSize: 30,
    bodySize: 15,
    accentWeight: 600,
    fontFamily: 'Inter',
    showShadow: true
  });

  const selectedExperience = useMemo(
    () => experiences.find((experience) => experience.id === selectedExperienceId) ?? null,
    [experiences, selectedExperienceId]
  );

  const handleExperienceChange = (key: keyof Omit<ExperienceItem, 'id'>, value: string) => {
    if (!selectedExperienceId) {
      return;
    }

    setExperiences((previous) =>
      previous.map((experience) =>
        experience.id === selectedExperienceId
          ? {
              ...experience,
              [key]: value
            }
          : experience
      )
    );
  };

  const handleAddExperience = () => {
    setExperiences((previous) => {
      const next = [...previous, createBlankExperience()];
      setSelectedExperienceId(next[next.length - 1]?.id ?? null);
      return next;
    });
  };

  const handleRemoveExperience = (id: string) => {
    setExperiences((previous) => {
      const next = previous.filter((experience) => experience.id !== id);
      setSelectedExperienceId((current) => {
        if (!next.length) {
          return null;
        }

        if (!current || current === id || !next.some((experience) => experience.id === current)) {
          return next[0].id;
        }

        return current;
      });
      return next;
    });
  };

  const handleStyleChange = <K extends keyof StyleOptions>(key: K, value: StyleOptions[K]) => {
    setStyleOptions((previous) => ({
      ...previous,
      [key]: value
    }));
  };

  return (
    <div className="builder__grid">
      <section className="builder__sidebar builder__sidebar--left">
        <header className="builder__sidebar-header">
          <div>
            <h2>Experience</h2>
            <p>Manage your timeline. Add new roles or refine details for each position.</p>
          </div>
          <button className="button button--primary" onClick={handleAddExperience} type="button">
            + Add experience
          </button>
        </header>

        <ul className="experience-list">
          {experiences.map((experience) => {
            const isActive = experience.id === selectedExperienceId;
            return (
              <li key={experience.id} className={clsx('experience-list__item', isActive && 'is-active')}>
                <button
                  type="button"
                  onClick={() => setSelectedExperienceId(experience.id)}
                  className="experience-list__select"
                >
                  <span className="experience-list__role">{experience.role}</span>
                  <span className="experience-list__company">{experience.company}</span>
                  <span className="experience-list__duration">
                    {experience.start} — {experience.end}
                  </span>
                </button>
                <button
                  type="button"
                  className="experience-list__remove"
                  onClick={() => handleRemoveExperience(experience.id)}
                  aria-label={`Remove ${experience.role}`}
                >
                  ×
                </button>
              </li>
            );
          })}
        </ul>

        {selectedExperience ? (
          <form className="experience-form" aria-live="polite">
            <div className="experience-form__field">
              <label htmlFor="role">Role title</label>
              <input
                id="role"
                type="text"
                value={selectedExperience.role}
                onChange={(event) => handleExperienceChange('role', event.target.value)}
              />
            </div>
            <div className="experience-form__field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                value={selectedExperience.company}
                onChange={(event) => handleExperienceChange('company', event.target.value)}
              />
            </div>
            <div className="experience-form__row">
              <div className="experience-form__field">
                <label htmlFor="start">Start</label>
                <input
                  id="start"
                  type="text"
                  value={selectedExperience.start}
                  onChange={(event) => handleExperienceChange('start', event.target.value)}
                />
              </div>
              <div className="experience-form__field">
                <label htmlFor="end">End</label>
                <input
                  id="end"
                  type="text"
                  value={selectedExperience.end}
                  onChange={(event) => handleExperienceChange('end', event.target.value)}
                />
              </div>
            </div>
            <div className="experience-form__field">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={selectedExperience.description}
                rows={5}
                onChange={(event) => handleExperienceChange('description', event.target.value)}
              />
            </div>
          </form>
        ) : (
          <p className="experience-empty">Add experience entries to start building your resume timeline.</p>
        )}
      </section>

      <section className="builder__preview">
        <div
          className={clsx('preview-card', styleOptions.showShadow && 'preview-card--shadow')}
          style={{
            backgroundColor: styleOptions.backgroundColor,
            color: styleOptions.textColor,
            borderRadius: styleOptions.borderRadius,
            padding: styleOptions.padding,
            fontFamily: styleOptions.fontFamily
          }}
        >
          <header className="preview-card__header">
            <div>
              <h1
                style={{
                  fontSize: styleOptions.headingSize,
                  color: styleOptions.accentColor,
                  fontWeight: styleOptions.accentWeight
                }}
              >
                {template.profile.name}
              </h1>
              <p className="preview-card__role" style={{ fontSize: styleOptions.bodySize + 2 }}>
                {template.profile.role}
              </p>
            </div>
            <div className="preview-card__contact" style={{ fontSize: styleOptions.bodySize }}>
              <span>{template.profile.contact.email}</span>
              <span>{template.profile.contact.phone}</span>
              {template.profile.contact.website ? <span>{template.profile.contact.website}</span> : null}
            </div>
          </header>

          <div className="preview-card__body" style={{ fontSize: styleOptions.bodySize }}>
            <div className="preview-card__column preview-card__column--sidebar">
              <section>
                <h2 style={{ color: styleOptions.accentColor, fontWeight: styleOptions.accentWeight }}>Profile</h2>
                <p>{template.profile.summary}</p>
              </section>
              <section>
                <h2 style={{ color: styleOptions.accentColor, fontWeight: styleOptions.accentWeight }}>Skills</h2>
                <ul>
                  {template.profile.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 style={{ color: styleOptions.accentColor, fontWeight: styleOptions.accentWeight }}>Languages</h2>
                <ul>
                  {template.profile.languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="preview-card__column preview-card__column--main">
              <section>
                <h2 style={{ color: styleOptions.accentColor, fontWeight: styleOptions.accentWeight }}>Experience</h2>
                <ul className="preview-card__experience">
                  {experiences.map((experience) => (
                    <li key={experience.id}>
                      <div className="preview-card__experience-header">
                        <div>
                          <strong>{experience.role}</strong>
                          <span>{experience.company}</span>
                        </div>
                        <span className="preview-card__experience-duration">
                          {experience.start} — {experience.end}
                        </span>
                      </div>
                      <p>{experience.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="builder__sidebar builder__sidebar--right">
        <header className="builder__sidebar-header">
          <div>
            <h2>Styling</h2>
            <p>Tweak the personality of your resume. Update colours, spacing and typography.</p>
          </div>
        </header>

        <form className="style-form">
          <div className="style-form__field">
            <label htmlFor="fontFamily">Font family</label>
            <select
              id="fontFamily"
              value={styleOptions.fontFamily}
              onChange={(event) => handleStyleChange('fontFamily', event.target.value)}
            >
              {fontOptions.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>
          <div className="style-form__field">
            <label htmlFor="headingSize">Heading size ({styleOptions.headingSize}px)</label>
            <input
              id="headingSize"
              type="range"
              min={22}
              max={40}
              value={styleOptions.headingSize}
              onChange={(event) => handleStyleChange('headingSize', Number(event.target.value))}
            />
          </div>
          <div className="style-form__field">
            <label htmlFor="bodySize">Body text ({styleOptions.bodySize}px)</label>
            <input
              id="bodySize"
              type="range"
              min={12}
              max={20}
              value={styleOptions.bodySize}
              onChange={(event) => handleStyleChange('bodySize', Number(event.target.value))}
            />
          </div>
          <div className="style-form__field">
            <label htmlFor="accentWeight">Accent weight ({styleOptions.accentWeight})</label>
            <input
              id="accentWeight"
              type="range"
              min={400}
              max={800}
              step={100}
              value={styleOptions.accentWeight}
              onChange={(event) => handleStyleChange('accentWeight', Number(event.target.value))}
            />
          </div>
          <div className="style-form__grid">
            <div className="style-form__field">
              <label htmlFor="backgroundColor">Background</label>
              <input
                id="backgroundColor"
                type="color"
                value={styleOptions.backgroundColor}
                onChange={(event) => handleStyleChange('backgroundColor', event.target.value)}
              />
            </div>
            <div className="style-form__field">
              <label htmlFor="textColor">Text colour</label>
              <input
                id="textColor"
                type="color"
                value={styleOptions.textColor}
                onChange={(event) => handleStyleChange('textColor', event.target.value)}
              />
            </div>
            <div className="style-form__field">
              <label htmlFor="accentColor">Accent</label>
              <input
                id="accentColor"
                type="color"
                value={styleOptions.accentColor}
                onChange={(event) => handleStyleChange('accentColor', event.target.value)}
              />
            </div>
          </div>
          <div className="style-form__field">
            <label htmlFor="borderRadius">Corner radius ({styleOptions.borderRadius}px)</label>
            <input
              id="borderRadius"
              type="range"
              min={0}
              max={48}
              value={styleOptions.borderRadius}
              onChange={(event) => handleStyleChange('borderRadius', Number(event.target.value))}
            />
          </div>
          <div className="style-form__field">
            <label htmlFor="padding">Card padding ({styleOptions.padding}px)</label>
            <input
              id="padding"
              type="range"
              min={16}
              max={72}
              value={styleOptions.padding}
              onChange={(event) => handleStyleChange('padding', Number(event.target.value))}
            />
          </div>
          <div className="style-form__toggle">
            <label htmlFor="shadow">Drop shadow</label>
            <input
              id="shadow"
              type="checkbox"
              checked={styleOptions.showShadow}
              onChange={(event) => handleStyleChange('showShadow', event.target.checked)}
            />
          </div>
        </form>
      </section>
    </div>
  );
}
