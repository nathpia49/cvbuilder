'use client';

import { ChangeEvent } from 'react';
import { PlusCircle, RefreshCcw, Save, Type, Paintbrush2, Palette } from 'lucide-react';
import { CvData, CvLabel, CvSectionItem } from '@/lib/defaultCv';

const FONT_FAMILIES = ['Inter', 'Space Grotesk', 'Playfair Display', 'Roboto', 'Lora'];
const FONT_WEIGHTS = ['400', '500', '600', '700'];

const createId = () =>
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

export type SettingsPanelProps = {
  cv: CvData;
  onThemeChange: (theme: Partial<CvData['theme']>) => void;
  onProfileChange: (partial: Partial<Pick<CvData, 'name' | 'title' | 'summary' | 'avatar'>>) => void;
  onLabelChange: (key: 'contacts' | 'skills' | 'languages' | 'interests', items: CvLabel[]) => void;
  onSectionChange: (key: 'experiences' | 'education', items: CvSectionItem[]) => void;
  onCustomSectionsChange: (sections: CvData['customSections']) => void;
  onAddLabel: (key: 'contacts' | 'skills' | 'languages' | 'interests') => void;
  onAddSection: (key: 'experiences' | 'education') => void;
  onAddCustomSection: () => void;
  onReset: () => void;
  onUploadAvatar: (file: File) => Promise<void>;
  onSave: () => Promise<void>;
  saving: boolean;
};

export function SettingsPanel({
  cv,
  onThemeChange,
  onProfileChange,
  onLabelChange,
  onSectionChange,
  onCustomSectionsChange,
  onAddLabel,
  onAddSection,
  onAddCustomSection,
  onReset,
  onUploadAvatar,
  onSave,
  saving
}: SettingsPanelProps) {
  const handleAvatarUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await onUploadAvatar(file);
  };

  const handleLabelChange = (
    key: 'contacts' | 'skills' | 'languages' | 'interests',
    index: number,
    value: string
  ) => {
    const list = [...cv[key]];
    list[index] = { ...list[index], label: value };
    onLabelChange(key, list);
  };

  const handleSectionChange = (
    key: 'experiences' | 'education',
    index: number,
    field: keyof CvSectionItem,
    value: string
  ) => {
    const list = [...cv[key]];
    list[index] = { ...list[index], [field]: value };
    onSectionChange(key, list);
  };

  const handleCustomSectionChange = (sectionIndex: number, heading: string) => {
    const sections = [...cv.customSections];
    sections[sectionIndex] = { ...sections[sectionIndex], heading };
    onCustomSectionsChange(sections);
  };

  const handleCustomSectionItemChange = (sectionIndex: number, itemIndex: number, value: string) => {
    const sections = [...cv.customSections];
    const section = sections[sectionIndex];
    const items = [...section.items];
    items[itemIndex] = { ...items[itemIndex], label: value };
    sections[sectionIndex] = { ...section, items };
    onCustomSectionsChange(sections);
  };

  const addCustomSectionItem = (sectionIndex: number) => {
    const sections = [...cv.customSections];
    const section = sections[sectionIndex];
    sections[sectionIndex] = {
      ...section,
      items: [...section.items, { id: createId(), label: 'New item' }]
    };
    onCustomSectionsChange(sections);
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Settings</h2>
          <p className="text-sm text-slate-400">Fine tune your theme and content</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-brand hover:text-brand"
          >
            <RefreshCcw className="h-4 w-4" /> Reset
          </button>
          <button
            onClick={onSave}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Save className="h-4 w-4" /> {saving ? 'Saving…' : 'Save to MongoDB'}
          </button>
        </div>
      </div>

      <section className="space-y-4">
        <header className="flex items-center gap-2 text-sm font-semibold text-slate-200">
          <Type className="h-4 w-4" /> Profile
        </header>
        <div className="grid grid-cols-1 gap-4">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Full name</span>
            <input
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
              value={cv.name}
              onChange={(event) => onProfileChange({ name: event.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Title</span>
            <input
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
              value={cv.title}
              onChange={(event) => onProfileChange({ title: event.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Summary</span>
            <textarea
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
              rows={3}
              value={cv.summary}
              onChange={(event) => onProfileChange({ summary: event.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Avatar</span>
            <input
              type="file"
              accept="image/*"
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
              onChange={handleAvatarUpload}
            />
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center gap-2 text-sm font-semibold text-slate-200">
          <Palette className="h-4 w-4" /> Theme
        </header>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Accent color</span>
            <input
              type="color"
              value={cv.theme.accentColor}
              onChange={(event) => onThemeChange({ accentColor: event.target.value })}
              className="h-10 w-full cursor-pointer rounded-xl border border-slate-800 bg-slate-950"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Font family</span>
            <select
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
              value={cv.theme.fontFamily}
              onChange={(event) => onThemeChange({ fontFamily: event.target.value })}
            >
              {FONT_FAMILIES.map((family) => (
                <option key={family} value={family} className="bg-slate-900 text-slate-100">
                  {family}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Font weight</span>
            <select
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
              value={cv.theme.fontWeight}
              onChange={(event) => onThemeChange({ fontWeight: event.target.value })}
            >
              {FONT_WEIGHTS.map((weight) => (
                <option key={weight} value={weight} className="bg-slate-900 text-slate-100">
                  {weight}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Font style</span>
            <select
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
              value={cv.theme.fontStyle}
              onChange={(event) => onThemeChange({ fontStyle: event.target.value as 'normal' | 'italic' })}
            >
              <option value="normal" className="bg-slate-900 text-slate-100">
                Normal
              </option>
              <option value="italic" className="bg-slate-900 text-slate-100">
                Italic
              </option>
            </select>
          </label>
          <label className="col-span-2 flex flex-col gap-2 text-sm">
            <span className="text-slate-300">Base font size</span>
            <input
              type="range"
              min={12}
              max={22}
              value={cv.theme.fontSize}
              onChange={(event) => onThemeChange({ fontSize: Number(event.target.value) })}
              className="w-full"
            />
            <span className="text-xs text-slate-400">{cv.theme.fontSize}px</span>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center gap-2 text-sm font-semibold text-slate-200">
          <Paintbrush2 className="h-4 w-4" /> Content
        </header>
        <EditableList
          title="Contact"
          description="Add ways for recruiters to reach you."
          items={cv.contacts}
          onChange={(index, value) => handleLabelChange('contacts', index, value)}
          onAdd={() => onAddLabel('contacts')}
        />
        <EditableList
          title="Skills"
          description="Showcase your strengths."
          items={cv.skills}
          onChange={(index, value) => handleLabelChange('skills', index, value)}
          onAdd={() => onAddLabel('skills')}
        />
        <EditableList
          title="Languages"
          description="List spoken or programming languages."
          items={cv.languages}
          onChange={(index, value) => handleLabelChange('languages', index, value)}
          onAdd={() => onAddLabel('languages')}
        />
        <EditableList
          title="Interests"
          description="Add culture fit elements."
          items={cv.interests}
          onChange={(index, value) => handleLabelChange('interests', index, value)}
          onAdd={() => onAddLabel('interests')}
        />
        <EditableSectionList
          title="Experience"
          items={cv.experiences}
          onChange={(index, field, value) => handleSectionChange('experiences', index, field, value)}
          onAdd={() => onAddSection('experiences')}
        />
        <EditableSectionList
          title="Education"
          items={cv.education}
          onChange={(index, field, value) => handleSectionChange('education', index, field, value)}
          onAdd={() => onAddSection('education')}
        />
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Custom sections</h3>
              <p className="text-xs text-slate-400">Add certifications, awards, references, hobbies, and more.</p>
            </div>
            <button
              onClick={onAddCustomSection}
              className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:text-brand/80"
            >
              <PlusCircle className="h-4 w-4" /> Section
            </button>
          </div>
          <div className="space-y-4">
            {cv.customSections.map((section, sectionIndex) => (
              <div key={section.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <label className="flex flex-col gap-2 text-xs">
                  <span className="text-slate-400">Heading</span>
                  <input
                    value={section.heading}
                    onChange={(event) => handleCustomSectionChange(sectionIndex, event.target.value)}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
                  />
                </label>
                <div className="mt-4 space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <input
                      key={item.id}
                      value={item.label}
                      onChange={(event) =>
                        handleCustomSectionItemChange(sectionIndex, itemIndex, event.target.value)
                      }
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
                    />
                  ))}
                  <button
                    onClick={() => addCustomSectionItem(sectionIndex)}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-800 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-brand hover:text-brand"
                  >
                    <PlusCircle className="h-3 w-3" /> Add item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type EditableListProps = {
  title: string;
  description: string;
  items: CvLabel[];
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
};

function EditableList({ title, description, items, onChange, onAdd }: EditableListProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-xs text-slate-400">{description}</p>
        </div>
        <button onClick={onAdd} className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:text-brand/80">
          <PlusCircle className="h-4 w-4" />
          Add
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <input
            key={item.id}
            value={item.label}
            onChange={(event) => onChange(index, event.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
          />
        ))}
      </div>
    </div>
  );
}

type EditableSectionListProps = {
  title: string;
  items: CvSectionItem[];
  onChange: (index: number, field: keyof CvSectionItem, value: string) => void;
  onAdd: () => void;
};

function EditableSectionList({ title, items, onChange, onAdd }: EditableSectionListProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <button onClick={onAdd} className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:text-brand/80">
          <PlusCircle className="h-4 w-4" />
          Add
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <input
              value={item.title}
              placeholder="Position / Degree"
              onChange={(event) => onChange(index, 'title', event.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
            />
            <input
              value={item.subtitle ?? ''}
              placeholder="Company or School"
              onChange={(event) => onChange(index, 'subtitle', event.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
            />
            <input
              value={item.period ?? ''}
              placeholder="Year – Year"
              onChange={(event) => onChange(index, 'period', event.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
            />
            <textarea
              value={item.description ?? ''}
              placeholder="Key achievements"
              rows={3}
              onChange={(event) => onChange(index, 'description', event.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
