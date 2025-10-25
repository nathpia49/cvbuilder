export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
};

export const team: TeamMember[] = [
  {
    id: 'bonnie-green',
    name: 'Bonnie Green',
    role: 'CEO & Co-founder',
    bio: 'Product strategist focused on creating inclusive hiring journeys.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    expertise: ['Product Strategy', 'Leadership']
  },
  {
    id: 'helene-engels',
    name: 'Helene Engels',
    role: 'CTO & Co-founder',
    bio: 'Architect of our AI stack and champion for ethical automation.',
    avatar: 'https://images.unsplash.com/photo-1545991591-ec75c5d6b53c?auto=format&fit=crop&w=400&q=80',
    expertise: ['AI Systems', 'Cloud Infrastructure']
  },
  {
    id: 'jesse-leos',
    name: 'Jesse Leos',
    role: 'Lead Designer',
    bio: 'Designs polished interfaces with a human touch.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    expertise: ['Product Design', 'Design Systems']
  },
  {
    id: 'joseph-mcfal',
    name: 'Joseph Mcfal',
    role: 'SEO & Marketing',
    bio: 'Drives inbound growth and ensures CVs get noticed online.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    expertise: ['SEO', 'Content Strategy']
  },
  {
    id: 'lana-byrd',
    name: 'Lana Byrd',
    role: 'Web Designer',
    bio: 'Brings motion and storytelling into each resume template.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    expertise: ['Motion Design', 'Brand']
  },
  {
    id: 'leslie-livingston',
    name: 'Leslie Livingston',
    role: 'Graphic Designer',
    bio: 'Creates the signature illustration style across our templates.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    expertise: ['Illustration', 'Graphic Design']
  },
  {
    id: 'michael-gough',
    name: 'Michael Gough',
    role: 'React Developer',
    bio: 'Ensures editing is instantaneous and delightful.',
    avatar: 'https://images.unsplash.com/photo-1545991591-ec75c5d6b53c?auto=format&fit=crop&w=400&q=80',
    expertise: ['React', 'Performance']
  },
  {
    id: 'neil-sims',
    name: 'Neil Sims',
    role: 'Vue Specialist',
    bio: 'Experiments with the future of cross-platform document builders.',
    avatar: 'https://images.unsplash.com/photo-1545991591-ec75c5d6b53c?auto=format&fit=crop&w=400&q=80',
    expertise: ['R&D', 'DX']
  }
];
