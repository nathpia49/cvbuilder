'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

export type GeneratedImage = {
  id: string;
  url: string;
  prompt: string;
};

export function AiPictureTab({ onSelect }: { onSelect: (url: string) => void }) {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('professional portrait, studio lighting');

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/ai/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      setImages(data.images ?? []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <header className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">AI Portrait Generator</h3>
        <p className="text-sm text-slate-400">
          Describe the type of avatar you'd like and choose your favourite result. Use this for consistent team branding.
        </p>
      </header>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200 focus:border-brand focus:outline-none"
          placeholder="Calm portrait, navy suit, soft lighting"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          Generate
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.length === 0 && !loading ? (
          <div className="col-span-full rounded-3xl border border-dashed border-slate-800 bg-slate-950/50 p-10 text-center text-sm text-slate-400">
            Enter a prompt to generate custom avatars.
          </div>
        ) : (
          images.map((image) => (
            <button
              key={image.id}
              onClick={() => onSelect(image.url)}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-card transition hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={image.url}
                  alt={image.prompt}
                  fill
                  sizes="(max-width: 768px) 50vw, 200px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/80" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-xs text-slate-200">
                {image.prompt}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
