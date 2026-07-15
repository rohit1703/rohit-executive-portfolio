export interface StackGroup {
  label: string;
  note: string;
  items: string[];
  /** Featured group, rendered larger with accent treatment. */
  accent?: boolean;
}

// Source of truth: resume SKILLS section. Technical & AI is featured because it
// is the half of the builder-marketer thesis a marketing CV usually can't show.
export const STACK: StackGroup[] = [
  {
    label: 'Technical & AI',
    note: 'What I build with',
    accent: true,
    items: [
      'Next.js',
      'React',
      'Python',
      'Supabase',
      'Postgres',
      'pgvector',
      'LLM pipelines',
      'API integration',
      'Evals',
      'Programmatic SEO',
      'Claude Code',
      'Cursor',
      'n8n',
    ],
  },
  {
    label: 'Marketing',
    note: 'Demand & brand',
    items: [
      'Demand generation',
      'Integrated campaigns',
      'Field & experiential',
      'Employer brand',
      'Content strategy',
      'Product marketing',
      'Budget & ROI ownership',
    ],
  },
  {
    label: 'Partnerships & GTM',
    note: 'Channels & pipeline',
    items: [
      'Partner ecosystem building',
      'Co-marketing',
      'Channel strategy',
      'Partner enablement',
      'Business development',
      'Pipeline ownership',
      'CXO stakeholder management',
    ],
  },
  {
    label: 'Tools & Channels',
    note: 'Day to day',
    items: [
      'LinkedIn Ads',
      'Meta Ads',
      'Google Analytics',
      'Campaign attribution',
      'Webflow',
      'Canva',
      'Mailchimp',
      'Notion',
      'HubSpot',
    ],
  },
];
