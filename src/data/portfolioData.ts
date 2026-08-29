export type PortfolioCategory = 'Video Editing' | 'Graphic Design' | 'Social Media' | 'Project Management'

export interface PortfolioProject {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  longDescription: string
  image: string
  color: string
  services: string[]
  tools: string[]
  results: string[]
  year: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '01',
    title: 'Brand Promotional Video',
    category: 'Video Editing',
    description: 'Cinematic promotional video designed to increase brand awareness and engagement.',
    longDescription: 'A cinematic brand promotional video crafted to elevate brand awareness and drive engagement across digital platforms. Focused on storytelling, dynamic transitions, and emotionally resonant pacing to capture audience attention within the first 3 seconds.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    color: 'from-violet-600 to-indigo-600',
    services: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    results: ['+180% engagement increase', '2.4M views in 30 days', 'Featured in brand campaign'],
    year: '2024',
  },
  {
    id: '02',
    title: 'YouTube Content Editing',
    category: 'Video Editing',
    description: 'High-retention YouTube editing focused on storytelling, pacing, and audience engagement.',
    longDescription: 'High-retention YouTube content editing series optimized for watch time and subscriber growth. Implemented strategic hook structure, jump cuts, captions, and B-roll integration to maintain 68% average retention across 20+ episodes.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    color: 'from-fuchsia-600 to-purple-600',
    services: ['Long-form Editing', 'Thumbnail Strategy', 'Pacing & Storytelling'],
    tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    results: ['68% avg. retention', '+45k subscribers', 'Top 5% channel growth'],
    year: '2024',
  },
  {
    id: '03',
    title: 'Social Media Campaign',
    category: 'Social Media',
    description: 'Complete content strategy and creative campaign for improving social media engagement.',
    longDescription: 'End-to-end social media campaign management including content calendar creation, creative direction, community management, and paid amplification strategy for a D2C lifestyle brand.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142a6?w=800&q=80',
    color: 'from-cyan-600 to-blue-600',
    services: ['Content Strategy', 'Campaign Planning', 'Community Management', 'Analytics'],
    tools: ['Meta Business Suite', 'Canva', 'Notion', 'Later'],
    results: ['+240% follower growth', '4.8% avg. engagement rate', '320% reach increase'],
    year: '2024',
  },
  {
    id: '04',
    title: 'Creative Brand Design',
    category: 'Graphic Design',
    description: 'Modern visual identity and social media creatives designed for a growing digital brand.',
    longDescription: 'Complete visual identity system including logo variations, color palette, typography, and 50+ social media templates designed to ensure brand consistency across all touchpoints while standing out in crowded feeds.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    color: 'from-orange-600 to-pink-600',
    services: ['Brand Identity', 'Social Media Design', 'Marketing Creatives'],
    tools: ['Illustrator', 'Photoshop', 'Figma', 'Canva'],
    results: ['Full brand toolkit delivered', 'Consistent 9-grid aesthetic', 'Client featured in design showcase'],
    year: '2023',
  },
  {
    id: '05',
    title: 'Product Advertisement Video',
    category: 'Video Editing',
    description: 'High-converting product advertisement optimized for Instagram and TikTok placements.',
    longDescription: 'Performance-driven product advertisement video built for paid social. Composed of UGC-style hook, product demonstration, social proof overlay, and strong CTA — tested across 12 variations to identify winning creative.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    color: 'from-emerald-600 to-teal-600',
    services: ['Short-form Video', 'Ad Creative', 'Motion Graphics'],
    tools: ['After Effects', 'Premiere Pro', 'CapCut'],
    results: ['3.2x ROAS', '42% lower CPA', 'Scaled to $15k spend'],
    year: '2024',
  },
  {
    id: '06',
    title: 'Instagram Growth Strategy',
    category: 'Social Media',
    description: 'Strategic Instagram growth system built around reels, carousels, and community building.',
    longDescription: 'Data-driven Instagram growth engine combining topical reels, educational carousels, and intentional community engagement. Developed content pillars and weekly sprint system to achieve consistent organic growth.',
    image: 'https://images.unsplash.com/photo-1501504905252-473cdee68f94?w=800&q=80',
    color: 'from-pink-600 to-rose-600',
    services: ['Content Calendar', 'Reels Strategy', 'Growth Optimization'],
    tools: ['Instagram', 'Meta Business Suite', 'Notion', 'Canva'],
    results: ['0 to 28k followers in 6 months', '12 viral reels (100k+ views)', 'Brand collaboration inbound'],
    year: '2023',
  },
  {
    id: '07',
    title: 'Marketing Design Campaign',
    category: 'Graphic Design',
    description: 'Performance marketing creatives for multi-channel advertising campaign.',
    longDescription: 'High-performance ad creative suite for Facebook, Instagram, and LinkedIn campaigns. Designed 40+ variations testing hooks, layouts, and value propositions to maximize CTR and conversion rate.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb4?w=800&q=80',
    color: 'from-indigo-600 to-violet-600',
    services: ['Ad Design', 'A/B Testing', 'Brand Positioning'],
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    results: ['2.8% CTR (industry 0.9%)', '40+ creative variants', 'Creative fatigue reduced by 60%'],
    year: '2024',
  },
  {
    id: '08',
    title: 'Creative Team Project Management',
    category: 'Project Management',
    description: 'End-to-end management of distributed creative team delivering 50+ assets per month.',
    longDescription: 'Operational system for managing a remote team of editors, designers, and copywriters. Built Notion workspace with automated workflows, clear ownership, and weekly sprints ensuring on-time delivery without burnout.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    color: 'from-slate-700 to-zinc-700',
    services: ['Workflow Management', 'Team Coordination', 'Client Communication', 'Quality Control'],
    tools: ['Notion', 'Trello', 'Slack', 'ClickUp'],
    results: ['100% on-time delivery', 'Team efficiency +35%', 'Zero missed deadlines in 8 months'],
    year: '2023',
  },
]

export const portfolioFilters: (PortfolioCategory | 'All')[] = ['All', 'Video Editing', 'Graphic Design', 'Social Media', 'Project Management']
