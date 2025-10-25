import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { messages } = await request.json();

  const latestUserMessage = messages?.filter((msg: any) => msg.role === 'user').pop();

  const reply = `Here's a polished paragraph based on what you shared: ${
    latestUserMessage?.content ?? 'Tell me more about the role and your achievements so I can personalise the tone.'
  }`;

  return NextResponse.json({ reply });
}
