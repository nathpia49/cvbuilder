export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

export type Template = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  profile: {
    name: string;
    role: string;
    location: string;
    summary: string;
    contact: {
      email: string;
      phone: string;
      website?: string;
    };
    skills: string[];
    languages: string[];
  };
  experiences: ExperienceItem[];
};

export const templates: Template[] = [
  {
    id: 'aurora',
    title: 'Aurora',
    subtitle: 'Korean teacher resume',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
    profile: {
      name: 'Chea Sokvantharita',
      role: 'Korean Teacher',
      location: 'Any City',
      summary:
        'Language educator with a passion for immersive, student-led instruction and a focus on cultural context.',
      contact: {
        email: 'hello@reallygreatsite.com',
        phone: '+123-456-7890',
        website: 'reallygreatsite.com'
      },
      skills: ['Immersive lesson planning', 'Differentiated instruction', 'Curriculum development'],
      languages: ['Korean', 'English', 'Japanese']
    },
    experiences: [
      {
        id: 'aurora-1',
        role: 'Lead Korean Instructor',
        company: 'Wadriere University',
        start: '2019',
        end: 'Present',
        description:
          'Design conversational curriculum for 150+ students each semester and spearhead cross-cultural immersion trips.'
      },
      {
        id: 'aurora-2',
        role: 'Curriculum Designer',
        company: 'Wardiere Language Center',
        start: '2015',
        end: '2019',
        description:
          'Introduced blended learning framework and led teacher workshops focused on proficiency-based assessment.'
      }
    ]
  },
  {
    id: 'slate',
    title: 'Slate',
    subtitle: 'Sales professional profile',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    profile: {
      name: 'Mai Sokpanha',
      role: 'Sales Representative',
      location: 'Any City',
      summary:
        'Relationship-first sales specialist delivering consultative experiences for growing B2B technology firms.',
      contact: {
        email: 'mai@reallygreatsite.com',
        phone: '+123-456-7890',
        website: 'maislatesales.com'
      },
      skills: ['CRM mastery', 'Pipeline development', 'Executive pitching'],
      languages: ['English', 'Khmer']
    },
    experiences: [
      {
        id: 'slate-1',
        role: 'Senior Business Consultant',
        company: 'Wardier Inc.',
        start: '2022',
        end: 'Present',
        description:
          'Own enterprise accounts worth $4.2M ARR and partner with marketing to build industry-specific playbooks.'
      },
      {
        id: 'slate-2',
        role: 'Business Consultant',
        company: 'Any City Consulting',
        start: '2017',
        end: '2022',
        description:
          'Guided expansion into three new regional markets and coached SDR team on storytelling discovery calls.'
      }
    ]
  },
  {
    id: 'terra',
    title: 'Terra',
    subtitle: 'Customer success resume',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    profile: {
      name: 'Brak Souma',
      role: 'Customer Service Specialist',
      location: 'Any City',
      summary:
        'Customer success champion known for building long-term loyalty programs and improving retention.',
      contact: {
        email: 'souma@reallygreatsite.com',
        phone: '+123-456-7890',
        website: 'braksupport.com'
      },
      skills: ['Customer retention', 'Support operations', 'Escalation management'],
      languages: ['English', 'Chinese', 'Khmer']
    },
    experiences: [
      {
        id: 'terra-1',
        role: 'Senior Designer',
        company: 'Salford & Co.',
        start: '2019',
        end: '2022',
        description:
          'Led customer journey redesign for 20+ enterprise clients, lifting renewals by 18% year-over-year.'
      },
      {
        id: 'terra-2',
        role: 'Customer Engagement Manager',
        company: 'Logo Design House',
        start: '2016',
        end: '2019',
        description:
          'Managed loyalty program that boosted NPS from 48 to 63 within the first year of launch.'
      }
    ]
  },
  {
    id: 'noir',
    title: 'Noir',
    subtitle: 'Creative director profile',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
    profile: {
      name: 'Lorina Darcy',
      role: 'Creative Director',
      location: 'Any City',
      summary:
        'Creative director with a strategic mindset translating brand stories into high-impact visual campaigns.',
      contact: {
        email: 'lorina@reallygreatsite.com',
        phone: '+123-456-7890',
        website: 'lorinacreative.com'
      },
      skills: ['Brand storytelling', 'Campaign strategy', 'Team leadership'],
      languages: ['English', 'French']
    },
    experiences: [
      {
        id: 'noir-1',
        role: 'Senior Graphic Designer',
        company: 'Lariot Studio',
        start: '2019',
        end: '2022',
        description:
          'Directed a cross-disciplinary team of 12 and delivered award-winning product launches across APAC.'
      },
      {
        id: 'noir-2',
        role: 'Graphic Designer',
        company: 'Borcelle Studio',
        start: '2014',
        end: '2019',
        description:
          'Pioneered design systems that reduced production timelines by 30% and improved brand consistency.'
      }
    ]
  }
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find((template) => template.id === id);
}
