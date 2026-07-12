import { ViewType } from './views';

export interface MetricCard {
  id: string;
  company: string;
  label: string;
  descriptions: Record<ViewType, string>;
  kpiValue: number;
  kpiSuffix: string;
  kpiLabel: string;
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
        'Sole marketing owner for Grid Dynamics India — client, talent, and brand. No team beneath me.',
      partnerships:
        'I own the India CXO relationships. Two flagship client events; the latest, with ISB, engaged 200+ Fortune 1000 CXOs.',
      marketing:
        'Sole owner of India marketing. 12 events → 4,600+ qualified prospects; brand awareness 20% → 80%.',
    },
    kpiValue: 3.9,
    kpiSuffix: '',
    kpiLabel: 'Glassdoor Score',
    secondaryText: {
      about: '3.2 → 3.9 in the employer-brand rebuild',
      partnerships: '200+ Fortune 1000 CXOs engaged',
      marketing: '4,600+ qualified prospects across 12 events',
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
        'Built the BFSI & Payroll channel from zero — 54 partnerships, ₹7M revenue, 150,000 consumers reached.',
      partnerships:
        '54 partnerships across banks, NBFCs, and fintechs. ₹7M revenue. API, CG, and PWA integrations end to end.',
      marketing:
        'Integrated BFSI campaigns end to end — 50+ partner microsites and mailers; 150,000 consumers reached.',
    },
    kpiValue: 20,
    kpiSuffix: 'x',
    kpiLabel: 'YoY Growth',
    secondaryText: {
      about: '54 partnerships built from zero',
      partnerships: 'API, CG & PWA integrations, end to end',
      marketing: '150,000 consumers reached',
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
        'Promoted twice in under two years. Built the partner ecosystem from zero — 50+ partners onboarded in 6 months.',
      partnerships:
        '$3M+ in key accounts; 100+ enterprise accounts; 45% YoY partner growth, with P&L accountability.',
      marketing:
        '8+ experiential events across 7 cities → 150 enterprise SALs; 35% engagement improvement.',
    },
    kpiValue: 45,
    kpiSuffix: '%',
    kpiLabel: 'YoY Partner Growth',
    secondaryText: {
      about: 'Community Builder → Senior Associate → AGM',
      partnerships: '$3M+ in key accounts',
      marketing: '150 enterprise SALs from 8+ events',
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
        'I build the product too — Currly, solo, in production. 1,400+ tools, 111+ workflows, p95 search under 400ms.',
      marketing:
        'I build the product I market. Currly: 1,400+ tools, 111+ workflows, 84 ISR use-case pages of programmatic SEO.',
    },
    kpiValue: 1400,
    kpiSuffix: '+',
    kpiLabel: 'Tools in Production',
    secondaryText: {
      about: '111+ workflows · p95 search < 400ms',
      partnerships: '5-signal Postgres ranking engine',
      marketing: 'Describe the outcome. Get the workflow.',
    },
    order: { about: 4, partnerships: 4, marketing: 2 },
    variant: 'dark',
  },
];
