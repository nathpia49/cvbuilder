import { NextResponse } from 'next/server';

const fallbackImages = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1545991591-ec75c5d6b53c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
];

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const images = fallbackImages.slice(0, 6).map((url, index) => ({
    id: `${Date.now()}-${index}`,
    url,
    prompt
  }));

  return NextResponse.json({ images });
}
