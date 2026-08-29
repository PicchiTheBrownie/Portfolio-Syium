export interface ExperienceItem {
  period: string
  role: string
  company: string
  description: string
  responsibilities: string[]
  color: string
}

export const experiences: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Creative Digital Specialist',
    company: 'Freelance & Collaborative Projects',
    description: 'Working across video editing, graphic design, social media, and creative project management for international clients and growing brands.',
    responsibilities: [
      'Managing creative projects from concept to delivery',
      'Editing high-impact video content for brands and social platforms',
      'Designing marketing assets and visual identities',
      'Coordinating distributed creative teams and workflows',
      'Managing social media campaigns and growth strategies',
    ],
    color: 'from-violet-600 to-indigo-600',
  },
  {
    period: '2023 — 2024',
    role: 'Freelance Creative Professional',
    company: 'Independent Studio',
    description: 'Worked with diverse clients on video production, social media content, graphics, and digital campaigns with focus on measurable results.',
    responsibilities: [
      'Delivered 50+ projects across video and design disciplines',
      'Built content systems for consistent brand communication',
      'Optimized editing workflows for faster turnaround',
      'Developed social media calendars and growth playbooks',
    ],
    color: 'from-cyan-600 to-blue-600',
  },
  {
    period: '2022 — 2023',
    role: 'Creative Content & Design',
    company: 'Digital Studio',
    description: 'Focused on developing visual content, branding assets, and engaging digital experiences for early-stage startups and SMEs.',
    responsibilities: [
      'Created visual content libraries for 15+ brands',
      'Designed branding assets and presentation systems',
      'Supported video editing for marketing and YouTube content',
      'Learned strategic project coordination and client communication',
    ],
    color: 'from-fuchsia-600 to-pink-600',
  },
]
