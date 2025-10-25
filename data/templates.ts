export type Template = {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  tags: string[];
};

export const templates: Template[] = [
  {
    id: 'classic-blue',
    title: 'Classic Blue',
    location: 'Phnom Penh',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    tags: ['Corporate', 'ATS-friendly']
  },
  {
    id: 'minimal-elegance',
    title: 'Minimal Elegance',
    location: 'Siem Reap',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    tags: ['Minimal', 'Creative']
  },
  {
    id: 'geometric-focus',
    title: 'Geometric Focus',
    location: 'Kampot',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=800&q=80',
    tags: ['Designer', 'Bold']
  },
  {
    id: 'executive-night',
    title: 'Executive Night',
    location: 'Battambang',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1545239350-90c6361c79af?auto=format&fit=crop&w=800&q=80',
    tags: ['Executive', 'Premium']
  },
  {
    id: 'gradient-wave',
    title: 'Gradient Wave',
    location: 'Siem Reap',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1545239351-6ee9a8d78be9?auto=format&fit=crop&w=800&q=80',
    tags: ['Modern', 'Creative']
  },
  {
    id: 'sleek-silver',
    title: 'Sleek Silver',
    location: 'Kampong Cham',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    tags: ['Tech', 'ATS-friendly']
  },
  {
    id: 'warm-persona',
    title: 'Warm Persona',
    location: 'Kandal',
    price: '$3.49',
    image: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=800&q=80',
    tags: ['Hospitality', 'Friendly']
  },
  {
    id: 'neon-stream',
    title: 'Neon Stream',
    location: 'Sihanoukville',
    price: '$6.49',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    tags: ['Tech', 'Bold']
  }
];
