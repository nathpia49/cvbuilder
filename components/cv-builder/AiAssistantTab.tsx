'use client';

import { FormEvent, useState } from 'react';
import { Loader2, SendHorizonal } from 'lucide-react';

const createId = () =>
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function AiAssistantTab() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'assistant-hello',
      role: 'assistant',
      content:
        'Hey there! I can help polish your cover letter. Share a draft or describe the role you are applying for.'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: createId(), role: 'user', content: input };
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setInput('');

    try {
      setLoading(true);
      const response = await fetch('/api/ai/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversation })
      });
      const data = await response.json();
      const assistantMessage: Message = {
        id: createId(),
        role: 'assistant',
        content: data.reply ?? 'I am here to help with your cover letter. Provide more context to continue!'
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/60">
      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-xl rounded-3xl px-5 py-3 text-sm leading-relaxed ${
              message.role === 'assistant'
                ? 'bg-slate-800/80 text-slate-100'
                : 'ml-auto bg-brand text-white shadow-lg shadow-brand/20'
            }`}
          >
            {message.content}
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Loader2 className="h-4 w-4 animate-spin" /> Crafting a suggestion…
          </div>
        )}
      </div>
      <form onSubmit={sendMessage} className="flex items-center gap-3 border-t border-slate-800 bg-slate-950/60 px-4 py-3">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask for a cover letter paragraph, elevator pitch, or bullet rewrite"
          className="flex-1 rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-200 focus:border-brand focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <SendHorizonal className="h-4 w-4" />}
        </button>
      </form>
    </div>
  );
}
