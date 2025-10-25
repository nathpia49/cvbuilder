export type CvSectionItem = {
  id: string;
  title?: string;
  subtitle?: string;
  period?: string;
  description?: string;
};

export type CvLabel = {
  id: string;
  label: string;
};

export type CvData = {
  id: string;
  name: string;
  title: string;
  summary: string;
  theme: {
    accentColor: string;
    fontFamily: string;
    fontStyle: 'normal' | 'italic';
    fontWeight: string;
    fontSize: number;
  };
  avatar?: string;
  contacts: CvLabel[];
  skills: CvLabel[];
  languages: CvLabel[];
  interests: CvLabel[];
  experiences: CvSectionItem[];
  education: CvSectionItem[];
  customSections: {
    id: string;
    heading: string;
    items: CvLabel[];
  }[];
};

export const defaultCv: CvData = {
  id: 'demo-cv',
  name: 'Pich Sokha',
  title: 'Product Designer',
  summary:
    'I design human-centred experiences that help people tell their professional story with clarity and impact.',
  theme: {
    accentColor: '#2563eb',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16
  },
  avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
  contacts: [
    { id: 'phone', label: '+855 98 123 456' },
    { id: 'email', label: 'hello@cvbuilder.pro' },
    { id: 'location', label: '123 Anywhere St, Phnom Penh' }
  ],
  skills: [
    { id: 'ux', label: 'UX Research' },
    { id: 'visual', label: 'Visual Design' },
    { id: 'leadership', label: 'Team Leadership' }
  ],
  languages: [
    { id: 'khmer', label: 'Khmer (native)' },
    { id: 'english', label: 'English (fluent)' }
  ],
  interests: [
    { id: 'public-speaking', label: 'Public Speaking' },
    { id: 'design-systems', label: 'Design Systems' }
  ],
  experiences: [
    {
      id: 'exp-1',
      title: 'Lead Product Designer',
      subtitle: 'Bluewave Digital',
      period: '2021 – Present',
      description: 'Leading multi-disciplinary teams to ship AI-assisted hiring products used by 200+ companies.'
    },
    {
      id: 'exp-2',
      title: 'Product Designer',
      subtitle: 'Rivera Studio',
      period: '2018 – 2021',
      description: 'Delivered data-driven resume templates that increased candidate callbacks by 28%.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      title: 'B.Des in Interaction Design',
      subtitle: 'National University of Management',
      period: '2014 – 2018',
      description: 'Graduated with honors, focusing on inclusive design systems.'
    }
  ],
  customSections: [
    {
      id: 'certifications',
      heading: 'Certifications',
      items: [
        { id: 'ux-cert', label: 'Nielsen Norman UX Master Certification' }
      ]
    }
  ]
};
