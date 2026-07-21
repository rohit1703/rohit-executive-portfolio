import { ViewType } from './views';

export interface MetricKPI {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface MetricCard {
  id: string;
  company: string;
  label: string;
  descriptions: Record<ViewType, string>;
  kpi: Record<ViewType, MetricKPI>;
  secondaryText?: Record<ViewType, string>;
  order: Record<ViewType, number>;
  variant: 'wide' | 'tall-accent' | 'standard' | 'dark';
}

export const METRIC_CARDS: MetricCard[] = [
  {
    id: 'grid-dynamics',
    company: 'Grid Dynamics',
    label: 'Sole Owner, India',
    descriptions: {
      about:
        'Sole marketing owner for Grid Dynamics India, client, talent, and brand. The latest flagship event, with ISB, engaged 200+ Fortune 1000 CXOs.',
      partnerships:
        'I own the India CXO relationships. Two flagship client events; the latest, with ISB, engaged 200+ Fortune 1000 CXOs.',
      marketing:
        'Sole owner of India marketing. 12 events → 4,600+ qualified prospects; brand awareness 20% → 80%.',
    },
    kpi: {
      about: { value: 4600, suffix: '+', label: 'Qualified Prospects' },
      partnerships: { value: 200, suffix: '+', label: 'Fortune 1000 CXOs' },
      marketing: { value: 12, suffix: '', label: 'Events, 3 Cities' },
    },
    secondaryText: {
      about: '20% → 80% brand awareness; Glassdoor 3.2 → 3.9',
      partnerships: '2 flagship client events; ISB partnership',
      marketing: '664 peak registrations; 400+ average',
    },
    order: { about: 1, partnerships: 3, marketing: 1 },
    variant: 'wide',
  },
  {
    id: 'clear',
    company: 'Clear',
    label: 'BFSI Channel, From Zero',
    descriptions: {
      about:
        'Built the BFSI & Payroll channel from zero, 54 partnerships, ₹7M revenue, 150,000 consumers reached.',
      partnerships:
        '54 partnerships across banks, NBFCs, and fintechs. ₹7M revenue. API, CG, and PWA integrations end to end.',
      marketing:
        'Integrated BFSI campaigns end to end, 50+ partner microsites and mailers; 150,000 consumers reached.',
    },
    kpi: {
      about: { value: 7, suffix: 'M', prefix: '₹', label: 'BFSI Revenue' },
      partnerships: { value: 54, suffix: '', label: 'Partnerships' },
      marketing: { value: 150000, suffix: '', label: 'Consumers Reached' },
    },
    secondaryText: {
      about: '54 partnerships built from zero',
      partnerships: '20x YoY growth for the vertical',
      marketing: '50+ partner microsites and mailers',
    },
    order: { about: 2, partnerships: 1, marketing: 4 },
    variant: 'tall-accent',
  },
  {
    id: 'plum',
    company: 'Plum Benefits',
    label: 'Ecosystem, Built',
    descriptions: {
      about:
        'Promoted twice in under two years. Built the partner ecosystem from zero, 50+ partners onboarded in 6 months.',
      partnerships:
        '$3M+ in key accounts; 100+ enterprise accounts; 45% YoY partner growth, with P&L accountability.',
      marketing:
        '8+ experiential events across 7 cities → 150 enterprise SALs; 35% engagement improvement.',
    },
    kpi: {
      about: { value: 3, suffix: 'M+', prefix: '$', label: 'Key Accounts' },
      partnerships: { value: 45, suffix: '%', label: 'YoY Partner Growth' },
      marketing: { value: 2, suffix: 'x', label: 'Promotions, <2 Yrs' },
    },
    secondaryText: {
      about: 'Promoted twice; 8+ enterprise events across 7 cities',
      partnerships: '$3M+ key accounts; 100+ enterprise accounts',
      marketing: '8+ enterprise events, 7 cities → 150 SALs',
    },
    order: { about: 3, partnerships: 2, marketing: 3 },
    variant: 'standard',
  },
  {
    id: 'currly',
    company: 'Currly',
    label: 'What I Build Now',
    descriptions: {
      about:
        'An AI workflow platform I shipped solo. 111+ workflows live; fixed a search_path bug that had silently killed semantic search in prod.',
      partnerships:
        'I build the product too, Currly, solo, in production. 1,400+ tools, 111+ workflows, p95 search under 400ms.',
      marketing:
        'I build the product I market. Currly: 1,400+ tools, 111+ workflows, 84 ISR use-case pages of programmatic SEO.',
    },
    kpi: {
      about: { value: 450, suffix: '+', label: 'Builder community' },
      partnerships: { value: 450, suffix: '+', label: 'Builder community' },
      marketing: { value: 450, suffix: '+', label: 'Builder community' },
    },
    secondaryText: {
      about: '1,400+ tools · 111+ workflows in production',
      partnerships: '5-signal ranking · p95 search < 400ms',
      marketing: '84 ISR use-case pages · programmatic SEO',
    },
    order: { about: 4, partnerships: 4, marketing: 2 },
    variant: 'dark',
  },
];
