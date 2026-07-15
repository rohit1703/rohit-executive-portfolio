import { ViewType } from './views';

export interface ExperienceCategory {
  title: string;
  points: string[];
}

export interface ExperienceKPI {
  value: number;
  suffix: string;
  label: string;
}

export interface ExperienceEntry {
  role: Record<ViewType, string>;
  company: string;
  period: string;
  tagline: Record<ViewType, string>;
  categories: Record<ViewType, ExperienceCategory[]>;
  kpi: Record<ViewType, ExperienceKPI>;
  secondaryKpi?: Record<ViewType, ExperienceKPI>;
  visualType: 'glassdoor' | 'grid-stats' | 'growth-chart';
  order: Record<ViewType, number>;
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    role: {
      about: 'Marketing Lead, India',
      partnerships: 'Marketing Lead, India',
      marketing: 'Marketing Lead, India',
    },
    company: 'Grid Dynamics (NASDAQ: GDYN)',
    period: 'Jul 2024 – Present',
    tagline: {
      about:
        'Sole marketing owner for Grid Dynamics India, client, talent, and brand. No team beneath me, no daily supervision.',
      partnerships:
        'I own the India CXO relationships end to end. Two flagship client events; the latest, with ISB, put me in a room with 200+ Fortune 1000 CXOs.',
      marketing:
        'Sole marketing owner for India, client, talent, and brand. I run the full campaign cycle: research, content, decks, video, events.',
    },
    categories: {
      about: [
        {
          title: 'The mandate',
          points: [
            'Sole marketing owner for India, client, talent, and brand. No team beneath me.',
            '12 Dynamic Talks across 3 cities → 4,600+ qualified talent prospects. Peak event: 664 registrations; 400+ average.',
            'AI-native operator: full campaign cycles, research, content, decks, video, run at the pace of a larger team.',
          ],
        },
        {
          title: 'Brand, moved',
          points: [
            'Brand awareness among target tech talent: 20% → 80%.',
            "Glassdoor 3.2 → 3.9. AmbitionBox 2.0 → 3.1. India grew to 48% of the company's global LinkedIn following.",
          ],
        },
      ],
      partnerships: [
        {
          title: 'CXO rooms',
          points: [
            '2 India flagship client events. The latest, with ISB, engaged 200+ Fortune 1000 CXOs.',
            '12 Dynamic Talks across 3 cities → 4,600+ qualified prospects feeding talent and client pipeline.',
          ],
        },
        {
          title: 'Trust, rebuilt',
          points: [
            'Glassdoor 3.2 → 3.9; AmbitionBox 2.0 → 3.1, the credibility that makes CXO conversations easier.',
            "India grew to 48% of the company's global LinkedIn following; 1,200+ talent leads.",
          ],
        },
      ],
      marketing: [
        {
          title: 'Demand',
          points: [
            '12 Dynamic Talks across 3 cities → 4,600+ qualified talent prospects. Peak: 664 registrations; 400+ average.',
            '2 India flagship client events; the latest with ISB, 200+ Fortune 1000 CXOs.',
            'AI-native operator: research, content, decks, and video scripts run with Claude, NotebookLM, and Perplexity.',
          ],
        },
        {
          title: 'Brand & employer brand',
          points: [
            'Brand awareness among target tech talent: 20% → 80%.',
            "Glassdoor 3.2 → 3.9; AmbitionBox 2.0 → 3.1; India → 48% of global LinkedIn following; 1,200+ talent leads.",
          ],
        },
      ],
    },
    kpi: {
      about: { value: 4600, label: 'Qualified Prospects', suffix: '+' },
      partnerships: { value: 200, label: 'Fortune 1000 CXOs', suffix: '+' },
      marketing: { value: 4600, label: 'Qualified Prospects', suffix: '+' },
    },
    secondaryKpi: {
      about: { value: 3.9, label: 'Glassdoor (from 3.2)', suffix: '' },
      partnerships: { value: 12, label: 'Events, 3 Cities', suffix: '' },
      marketing: { value: 80, label: 'Brand Awareness (from 20%)', suffix: '%' },
    },
    visualType: 'glassdoor',
    order: { about: 1, partnerships: 3, marketing: 1 },
  },
  {
    role: {
      about: 'AGM, Partnerships',
      partnerships: 'AGM, Partnerships',
      marketing: 'AGM, Partnerships',
    },
    company: 'Plum Benefits (Tiger Global/Sequoia)',
    period: 'Jul 2022 – Jul 2024',
    tagline: {
      about:
        'Promoted twice in under two years, Community Builder → Senior Associate → AGM, Partnerships. Built Plum’s partner ecosystem from zero.',
      partnerships:
        'I built Plum’s partner ecosystem from zero and ran it with P&L accountability. $3M+ in key accounts; 45% YoY partner growth.',
      marketing:
        'Ran experiential marketing and partnerships, 8+ events across 7 cities. Two promotions in under two years.',
    },
    categories: {
      about: [
        {
          title: 'Promoted twice, under two years',
          points: [
            'Partnerships & Community Builder → Senior Associate → AGM, Partnerships.',
            '$3M+ in key accounts; 45% YoY partner growth; 35% engagement improvement.',
          ],
        },
        {
          title: 'Built from zero',
          points: [
            '50+ partners onboarded in 6 months; 100+ enterprise accounts.',
            '8+ experiential events across 7 cities → 150 enterprise SALs. Top 25 Emerging Leaders 2024, Indian Startup Times.',
          ],
        },
      ],
      partnerships: [
        {
          title: 'The ecosystem',
          points: [
            'Built Plum’s partner base from zero, government bodies, associations, VCs, HRMS platforms, and coworking networks; 50+ onboarded in 6 months, 100+ enterprise accounts.',
            '$3M+ in key accounts; 45% YoY partner growth; 35% engagement improvement.',
          ],
        },
        {
          title: 'The proof',
          points: [
            '8+ experiential events across 7 cities → 150 enterprise SALs.',
            'Promoted twice in under two years. Top 25 Emerging Leaders 2024, Indian Startup Times.',
          ],
        },
      ],
      marketing: [
        {
          title: 'Experiential',
          points: [
            '8+ experiential events across 7 cities → 150 enterprise SALs.',
            '35% engagement improvement across partner and customer programs.',
          ],
        },
        {
          title: 'Growth',
          points: [
            '$3M+ in key accounts; 45% YoY partner growth; 100+ enterprise accounts.',
            'Promoted twice in under two years. Top 25 Emerging Leaders 2024, Indian Startup Times.',
          ],
        },
      ],
    },
    kpi: {
      about: { value: 150, label: 'Enterprise SALs', suffix: '' },
      partnerships: { value: 45, label: 'YoY Partner Growth', suffix: '%' },
      marketing: { value: 150, label: 'Enterprise SALs', suffix: '' },
    },
    secondaryKpi: {
      about: { value: 45, label: 'YoY Partner Growth', suffix: '%' },
      partnerships: { value: 100, label: 'Enterprise Accounts', suffix: '+' },
      marketing: { value: 35, label: 'Engagement Lift', suffix: '%' },
    },
    visualType: 'grid-stats',
    order: { about: 2, partnerships: 2, marketing: 2 },
  },
  {
    role: {
      about: 'Partnerships Manager, BFSI & Payroll',
      partnerships: 'Partnerships Manager, BFSI & Payroll',
      marketing: 'Partnerships Manager, BFSI & Payroll',
    },
    company: 'Clear (formerly ClearTax)',
    period: 'Feb 2021 – Jul 2022',
    tagline: {
      about:
        'Built ClearTax’s BFSI & Payroll partnership channel from zero, 54 partnerships, ₹7M revenue, 20x YoY.',
      partnerships:
        'I built the BFSI channel from zero. 54 partnerships across banks, NBFCs, and fintechs → ₹7M revenue, 20x YoY.',
      marketing:
        'Ran integrated BFSI campaigns end to end, 50+ partner microsites and mailers, webinars with fintech leaders. Reached 150,000 consumers.',
    },
    categories: {
      about: [
        {
          title: '0 → 1 channel',
          points: [
            'Built the BFSI & Payroll partnership channel from zero, 54 partnerships across banks, NBFCs, and fintechs.',
            '₹7M revenue; 20x YoY growth; 150,000 consumers reached.',
          ],
        },
        {
          title: 'Hands on the integrations',
          points: [
            'Owned API, CG, and PWA integrations end to end.',
            'Led a 12-member team → 40% output improvement.',
          ],
        },
      ],
      partnerships: [
        {
          title: 'Channel from zero',
          points: [
            '54 partnerships across banks, NBFCs, and fintech platforms, ₹7M revenue, 20x YoY.',
            'Owned API, CG, and PWA integrations end to end, cutting onboarding friction.',
          ],
        },
        {
          title: 'Reach & team',
          points: [
            '150,000 consumers reached through co-branded campaigns.',
            'Led a 12-member team → 40% output improvement.',
          ],
        },
      ],
      marketing: [
        {
          title: 'Integrated campaigns',
          points: [
            '50+ partner microsites and mailers (Webflow, Canva, Mailchimp).',
            'Webinars with fintech industry leaders, end to end.',
          ],
        },
        {
          title: 'Results',
          points: [
            '150,000 consumers reached; ₹7M revenue; 20x YoY growth.',
            'Led a 12-member team → 40% output improvement.',
          ],
        },
      ],
    },
    kpi: {
      about: { value: 20, label: 'YoY Growth', suffix: 'x' },
      partnerships: { value: 54, label: 'Partnerships Built', suffix: '' },
      marketing: { value: 150000, label: 'Consumers Reached', suffix: '' },
    },
    secondaryKpi: {
      about: { value: 54, label: 'Partnerships', suffix: '' },
      partnerships: { value: 20, label: 'YoY Growth', suffix: 'x' },
      marketing: { value: 40, label: 'Team Output Lift', suffix: '%' },
    },
    visualType: 'growth-chart',
    order: { about: 3, partnerships: 1, marketing: 3 },
  },
];
