'use client';

import { useState } from 'react';
import { downloadCvAsPdf } from '@/lib/pdf';
import { useCvBuilder } from '@/hooks/useCvBuilder';
import { CvPreview } from '@/components/cv-builder/CvPreview';
import { SettingsPanel } from '@/components/cv-builder/SettingsPanel';
import { AiPictureTab } from '@/components/cv-builder/AiPictureTab';
import { AiAssistantTab } from '@/components/cv-builder/AiAssistantTab';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'settings', label: 'Settings' },
  { id: 'ai-picture', label: 'AI Picture' },
  { id: 'ai-assistant', label: 'AI Assistant' }
] as const;

export default function CvBuilderPage() {
  const {
    cv,
    activeTab,
    setActiveTab,
    updateTheme,
    updateProfile,
    updateLabelList,
    updateSectionList,
    updateCustomSections,
    addLabel,
    addSectionItem,
    addCustomSection,
    resetCv
  } = useCvBuilder();
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleUploadAvatar = async (file: File) => {
    const reader = new FileReader();
    const result = await new Promise<string>((resolve, reject) => {
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    updateProfile({ avatar: result });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setStatusMessage(null);
      const response = await fetch('/api/cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cv)
      });
      if (!response.ok) {
        throw new Error('Failed to save CV');
      }
      setStatusMessage('CV saved to MongoDB.');
    } catch (error) {
      console.error(error);
      setStatusMessage('Unable to save CV. Check server logs or your MongoDB connection.');
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadPdf = async () => {
    await downloadCvAsPdf('cv-preview', `${cv.name.replace(/\s+/g, '-').toLowerCase()}-cv.pdf`);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-white">CV Builder</h1>
          <div className="flex gap-2">
            <button
              onClick={handleDownloadPdf}
              className="rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-xs font-semibold text-brand transition hover:border-brand hover:bg-brand/20"
            >
              Download PDF
            </button>
            <button
              onClick={() => window.print()}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500"
            >
              Print
            </button>
          </div>
        </div>
        <nav className="flex gap-2 rounded-full border border-slate-800 bg-slate-900/80 p-1 text-xs font-semibold text-slate-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex-1 rounded-full px-4 py-2 transition',
                activeTab === tab.id ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'hover:text-white'
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        {statusMessage && <p className="text-xs text-slate-400">{statusMessage}</p>}

        {activeTab === 'settings' && (
          <SettingsPanel
            cv={cv}
            onThemeChange={updateTheme}
            onProfileChange={updateProfile}
            onLabelChange={updateLabelList}
            onSectionChange={updateSectionList}
            onCustomSectionsChange={updateCustomSections}
            onAddLabel={addLabel}
            onAddSection={addSectionItem}
            onAddCustomSection={addCustomSection}
            onReset={resetCv}
            onUploadAvatar={handleUploadAvatar}
            onSave={handleSave}
            saving={saving}
          />
        )}
        {activeTab === 'ai-picture' && <AiPictureTab onSelect={(url) => updateProfile({ avatar: url })} />}
        {activeTab === 'ai-assistant' && <AiAssistantTab />}
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-card">
          <CvPreview cv={cv} />
        </div>
      </div>
    </div>
  );
}
