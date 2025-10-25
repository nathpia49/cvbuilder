"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Tabs, type TabItem } from "@/components/ui/tabs";
import {
  defaultPersonalInfo,
  defaultExperience,
  defaultEducation,
  defaultSkills,
  fontOptions,
  weightOptions,
} from "@/lib/cv-data";

import type { CSSProperties } from "react";

type Experience = (typeof defaultExperience)[number];
type Education = (typeof defaultEducation)[number];
type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const createId = () => Math.random().toString(36).slice(2, 11);

const aiPrompts = [
  "Polish my summary for a product design role",
  "Suggest bullet points for design leadership",
  "Draft a cover letter for a SaaS startup",
];

export function BuilderClient() {
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [experience, setExperience] = useState(defaultExperience);
  const [education, setEducation] = useState(defaultEducation);
  const [skills, setSkills] = useState(defaultSkills);

  const [fontFamily, setFontFamily] = useState(fontOptions[0]!.value);
  const [headingFont, setHeadingFont] = useState(fontOptions[1]!.value);
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState(weightOptions[2]!.value);
  const [fontStyle, setFontStyle] = useState<"normal" | "italic">("normal");
  const [accentColor, setAccentColor] = useState("#2563eb");
  const [textColor, setTextColor] = useState("#f8fafc");
  const [backgroundColor, setBackgroundColor] = useState("#0f172a");
  const [borderStyle, setBorderStyle] = useState("solid");

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [aiTemplate, setAiTemplate] = useState("studio");
  const [isGenerating, setIsGenerating] = useState(false);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: createId(),
      role: "assistant",
      content:
        "Hi! I'm your AI career partner. Ask me for summary punch-ups, cover letter drafts, or bullet inspiration.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const previewStyles = useMemo<CSSProperties>(
    () => ({
      fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight: Number(fontWeight),
      fontStyle,
      color: textColor,
      background: `linear-gradient(135deg, ${backgroundColor}, #111a2e)`,
      borderStyle,
      borderColor: `${accentColor}40`,
      borderWidth: 2,
      boxShadow: `0 35px 120px -35px ${accentColor}80`,
    }),
    [fontFamily, fontSize, fontWeight, fontStyle, textColor, backgroundColor, borderStyle, accentColor],
  );

  const headingStyles = useMemo<CSSProperties>(
    () => ({
      fontFamily: headingFont,
      color: accentColor,
    }),
    [headingFont, accentColor],
  );

  const handlePersonalChange = (key: keyof typeof defaultPersonalInfo, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleExperienceChange = (id: string, key: keyof Experience, value: string) => {
    setExperience((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item)),
    );
  };

  const handleEducationChange = (id: string, key: keyof Education, value: string) => {
    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item)),
    );
  };

  const handleSkillChange = (id: string, value: string) => {
    setSkills((prev) => prev.map((item) => (item.id === id ? { ...item, name: value } : item)));
  };

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        id: createId(),
        role: "New Role",
        company: "Company",
        startDate: "2023",
        endDate: "Present",
        description: "Describe your impact in 2-3 concise bullet points.",
      },
    ]);
  };

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      { id: createId(), school: "University", degree: "Degree", startDate: "2019", endDate: "2023" },
    ]);
  };

  const addSkill = () => {
    setSkills((prev) => [...prev, { id: createId(), name: "New skill" }]);
  };

  const removeExperience = (id: string) => {
    setExperience((prev) => prev.filter((item) => item.id !== id));
  };

  const removeEducation = (id: string) => {
    setEducation((prev) => prev.filter((item) => item.id !== id));
  };

  const removeSkill = (id: string) => {
    setSkills((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAvatarUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAiGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setAvatarPreview(
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=320&q=80",
      );
      setIsGenerating(false);
    }, 900);
  };

  const handleSave = () => {
    alert("Save to MongoDB is stubbed. Connect your API route to persist CVs.");
  };

  const handleDownload = () => {
    window.print();
  };

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: chatInput.trim(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          content:
            "On Lovable Cloud you'd connect the OpenAI API here. For now, tailor your bullet to highlight measurable outcomes and leadership behaviors.",
        },
      ]);
    }, 600);
  };

  const tabItems: TabItem[] = [
    {
      id: "settings",
      label: "Settings",
      description: "Fonts, colors, and resume content",
      content: (
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="card-surface p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
              Personal Information
            </h3>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={personalInfo.fullName}
                  onChange={(event) => handlePersonalChange("fullName", event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="headline">Professional Headline</Label>
                <Input
                  id="headline"
                  value={personalInfo.headline}
                  onChange={(event) => handlePersonalChange("headline", event.target.value)}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={(event) => handlePersonalChange("email", event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={personalInfo.phone}
                    onChange={(event) => handlePersonalChange("phone", event.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={personalInfo.location}
                  onChange={(event) => handlePersonalChange("location", event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  rows={4}
                  value={personalInfo.summary}
                  onChange={(event) => handlePersonalChange("summary", event.target.value)}
                />
              </div>
            </div>
          </section>

          <section className="card-surface p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
              Typography & Colors
            </h3>
            <div className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="fontFamily">Body Font</Label>
                  <Select
                    id="fontFamily"
                    value={fontFamily}
                    onChange={(event) => setFontFamily(event.target.value)}
                  >
                    {fontOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="headingFont">Heading Font</Label>
                  <Select
                    id="headingFont"
                    value={headingFont}
                    onChange={(event) => setHeadingFont(event.target.value)}
                  >
                    {fontOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <Label htmlFor="fontWeight">Weight</Label>
                  <Select
                    id="fontWeight"
                    value={fontWeight}
                    onChange={(event) => setFontWeight(event.target.value)}
                  >
                    {weightOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="fontSize">Size</Label>
                  <Input
                    id="fontSize"
                    type="number"
                    min={12}
                    max={22}
                    value={fontSize}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      if (Number.isNaN(value)) return;
                      setFontSize(Math.min(22, Math.max(12, value)));
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="fontStyle">Style</Label>
                  <Select
                    id="fontStyle"
                    value={fontStyle}
                    onChange={(event) => setFontStyle(event.target.value as "normal" | "italic")}
                  >
                    <option value="normal">Normal</option>
                    <option value="italic">Italic</option>
                  </Select>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <Label htmlFor="accentColor">Accent</Label>
                  <Input
                    id="accentColor"
                    type="color"
                    value={accentColor}
                    onChange={(event) => setAccentColor(event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="textColor">Text</Label>
                  <Input
                    id="textColor"
                    type="color"
                    value={textColor}
                    onChange={(event) => setTextColor(event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="backgroundColor">Background</Label>
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={backgroundColor}
                    onChange={(event) => setBackgroundColor(event.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="borderStyle">Border Style</Label>
                <Select
                  id="borderStyle"
                  value={borderStyle}
                  onChange={(event) => setBorderStyle(event.target.value)}
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                </Select>
              </div>
            </div>
          </section>

          <section className="card-surface p-6 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Experience
              </h3>
              <Button onClick={addExperience} variant="secondary" size="sm">
                Add Role
              </Button>
            </div>
            <div className="grid gap-6">
              {experience.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/5 bg-white/5 p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Role</Label>
                      <Input
                        value={item.role}
                        onChange={(event) => handleExperienceChange(item.id, "role", event.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Company</Label>
                      <Input
                        value={item.company}
                        onChange={(event) => handleExperienceChange(item.id, "company", event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Start</Label>
                      <Input
                        value={item.startDate}
                        onChange={(event) => handleExperienceChange(item.id, "startDate", event.target.value)}
                      />
                    </div>
                    <div>
                      <Label>End</Label>
                      <Input
                        value={item.endDate}
                        onChange={(event) => handleExperienceChange(item.id, "endDate", event.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      rows={3}
                      value={item.description}
                      onChange={(event) => handleExperienceChange(item.id, "description", event.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Education
              </h3>
              <Button onClick={addEducation} variant="secondary" size="sm">
                Add School
              </Button>
            </div>
            <div className="grid gap-4">
              {education.map((item) => (
                <div key={item.id} className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div>
                    <Label>School</Label>
                    <Input
                      value={item.school}
                      onChange={(event) => handleEducationChange(item.id, "school", event.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={item.degree}
                      onChange={(event) => handleEducationChange(item.id, "degree", event.target.value)}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Start</Label>
                      <Input
                        value={item.startDate}
                        onChange={(event) => handleEducationChange(item.id, "startDate", event.target.value)}
                      />
                    </div>
                    <div>
                      <Label>End</Label>
                      <Input
                        value={item.endDate}
                        onChange={(event) => handleEducationChange(item.id, "endDate", event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducation(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Skills
              </h3>
              <Button onClick={addSkill} variant="secondary" size="sm">
                Add Skill
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((item) => (
                <div key={item.id} className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                  <Input
                    value={item.name}
                    onChange={(event) => handleSkillChange(item.id, event.target.value)}
                    className="w-32 border-none bg-transparent p-0 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeSkill(item.id)}
                    className="text-xs uppercase tracking-wide text-slate-400 transition hover:text-primary"
                  >
                    remove
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      ),
    },
    {
      id: "picture",
      label: "AI Picture",
      description: "Upload or generate a profile shot",
      content: (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <section className="card-surface flex flex-col gap-6 p-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Portrait tools</h3>
              <p className="text-sm text-slate-400">
                Upload a polished headshot or select an AI studio look. Keep backgrounds clean
                and lighting consistent.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="avatarUpload">Upload image</Label>
              <Input id="avatarUpload" type="file" accept="image/*" onChange={handleAvatarUpload} />
              <p className="text-xs text-slate-500">
                For AI generation hook into Lovable Cloud → OpenAI image API. We store references in
                MongoDB alongside your CV JSON.
              </p>
            </div>
            <div className="space-y-3">
              <Label>Choose AI template</Label>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { id: "studio", label: "Studio" },
                  { id: "natural", label: "Natural" },
                  { id: "executive", label: "Executive" },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setAiTemplate(option.id)}
                    className={
                      "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:border-primary/60" +
                      (aiTemplate === option.id ? " border-primary/60 bg-primary/10 text-primary" : " text-slate-200")
                    }
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleAiGenerate} disabled={isGenerating}>
                {isGenerating ? "Generating…" : "Generate with AI"}
              </Button>
              <Button variant="secondary" onClick={() => setAvatarPreview(null)}>
                Remove portrait
              </Button>
            </div>
          </section>
          <section className="card-surface flex flex-col items-center justify-center gap-4 p-6 text-center">
            {avatarPreview ? (
              <div className="gradient-ring rounded-3xl">
                <Image
                  src={avatarPreview}
                  alt="Preview"
                  width={320}
                  height={320}
                  className="h-64 w-64 rounded-3xl object-cover"
                />
              </div>
            ) : (
              <div className="flex h-64 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5">
                <span className="text-sm text-slate-400">
                  Upload a portrait or try the AI generator.
                </span>
              </div>
            )}
            <p className="text-xs text-slate-400">
              Portraits render inside the CV preview automatically with your chosen style.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: "assistant",
      label: "AI Assistant",
      description: "Cover letter and bullet helper",
      content: (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <section className="card-surface flex flex-col gap-6 p-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">Career copilot</h3>
              <p className="text-sm text-slate-400">
                Ask targeted questions about resume bullets, cover letters, or interview prep.
                Hook into Lovable Cloud to power GPT responses.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {aiPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setChatInput(prompt)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 transition hover:border-primary/50 hover:text-primary"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className="grow overflow-hidden rounded-2xl border border-white/5 bg-white/5">
              <div className="h-[320px] space-y-4 overflow-y-auto p-5">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={
                        "max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow" +
                        (message.role === "assistant"
                          ? " bg-primary/15 text-slate-100"
                          : " bg-primary text-primary-foreground")
                      }
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="border-t border-white/10 p-4">
                <div className="flex gap-3">
                  <Input
                    value={chatInput}
                    onChange={(event) => setChatInput(event.target.value)}
                    placeholder="Ask for bullet edits, cover letter intros, interview prep..."
                  />
                  <Button type="submit" disabled={!chatInput.trim()}>
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </section>
          <section className="card-surface flex flex-col gap-4 p-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Workflow tips
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="rounded-xl bg-white/5 p-4">
                Save transcripts alongside CV JSON in MongoDB for quick reference across devices.
              </li>
              <li className="rounded-xl bg-white/5 p-4">
                Use AI suggestions to craft quantified bullet points that ladder up to business value.
              </li>
              <li className="rounded-xl bg-white/5 p-4">
                Export cover letters as PDF via the download action once the backend endpoint is ready.
              </li>
            </ul>
          </section>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-10">
      <header className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/20 to-indigo-600/20 p-8 text-slate-100 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Studio</p>
            <h1 className="text-3xl font-semibold text-slate-100 md:text-4xl">
              Build polished, AI-ready resumes in minutes
            </h1>
            <p className="max-w-2xl text-sm text-slate-300">
              Craft your personal brand with live previews, AI-generated portraits, and an assistant that
              helps you ship impact-driven content. Connected storage and automation come alive on
              Lovable Cloud.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleSave} variant="secondary">
              Save to workspace
            </Button>
            <Button onClick={handleDownload}>Download PDF</Button>
            <Button variant="ghost" onClick={() => window.print()}>
              Print
            </Button>
          </div>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.1fr_0.9fr]">
        <Tabs tabs={tabItems} />
        <aside className="card-surface sticky top-28 h-fit space-y-6 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-100">Live Preview</h2>
              <p className="text-xs text-slate-400">Changes sync instantly with your styling controls.</p>
            </div>
            <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
              {experience.length + education.length + skills.length} sections
            </span>
          </div>
          <div className="rounded-[28px] border border-white/5 bg-[#050b16] p-1">
            <div className="rounded-[24px] border border-white/5 bg-[#0b1424]/80 p-6 shadow-inner">
              <div className="rounded-3xl border border-white/10 bg-[#0d1628]/90 p-8" style={previewStyles}>
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {avatarPreview ? (
                    <Image
                      src={avatarPreview}
                      alt="Portrait"
                      width={120}
                      height={120}
                      className="h-28 w-28 rounded-3xl object-cover ring-2"
                      style={{ borderColor: `${accentColor}40` }}
                    />
                  ) : (
                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-dashed border-white/10 text-xs text-slate-400">
                      Add photo
                    </div>
                  )}
                  <div className="space-y-3">
                    <h2 style={headingStyles} className="text-3xl font-semibold">
                      {personalInfo.fullName}
                    </h2>
                    <p className="text-sm text-slate-300">{personalInfo.headline}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                      <span>{personalInfo.email}</span>
                      <span className="text-primary">•</span>
                      <span>{personalInfo.phone}</span>
                      <span className="text-primary">•</span>
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-relaxed">
                  <h3 style={headingStyles} className="text-lg font-semibold uppercase tracking-wide">
                    Profile
                  </h3>
                  <p className="text-slate-200/90">{personalInfo.summary}</p>
                </div>

                <div className="mt-7 space-y-4">
                  <h3 style={headingStyles} className="text-lg font-semibold uppercase tracking-wide">
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {experience.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="text-base font-semibold" style={headingStyles}>
                            {item.role}
                          </p>
                          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {item.startDate} — {item.endDate}
                          </span>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {item.company}
                        </p>
                        <p className="text-sm text-slate-200/90">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <h3 style={headingStyles} className="text-lg font-semibold uppercase tracking-wide">
                    Education
                  </h3>
                  <div className="space-y-3">
                    {education.map((item) => (
                      <div key={item.id} className="flex flex-col gap-1">
                        <p className="text-base font-semibold" style={headingStyles}>
                          {item.degree}
                        </p>
                        <p className="text-xs uppercase tracking-wide text-slate-400">{item.school}</p>
                        <p className="text-xs text-slate-500">
                          {item.startDate} — {item.endDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <h3 style={headingStyles} className="text-lg font-semibold uppercase tracking-wide">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((item) => (
                      <span
                        key={item.id}
                        className="rounded-full border bg-white/10 px-3 py-1 text-xs font-semibold"
                        style={{ color: accentColor, borderColor: accentColor }}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
