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
    label: 'Institutional Leadership',
    descriptions: {
      about: 'Sole Marketing Leader for a $2B+ NASDAQ-listed consultancy. Transformed public brand equity and orchestrated flagship CXO activations.',
      partnerships: 'Own strategic relationships with 100+ Fortune 1000 CXOs and VPs — managing sell-to, sell-with, and sell-through dimensions. $3M+ partner-influenced pipeline through structured top-down engagement.',
      marketing: 'Sole Marketing Leader for a $2B+ NASDAQ-listed consultancy. Transformed public brand equity, drove 70% regional follower growth, and built AI positioning framework with 300% budget efficiency.',
    },
    kpiValue: 3.9,
    kpiSuffix: '',
    kpiLabel: 'Glassdoor Score',
    secondaryText: {
      about: '3.2 → 3.9 brand sentiment turnaround',
      partnerships: '4,000+ qualified prospects via partner-led programs',
      marketing: '3.2 → 3.9 brand sentiment turnaround',
    },
    order: { about: 1, partnerships: 3, marketing: 1 },
    variant: 'wide',
  },
  {
    id: 'clear',
    company: 'Clear',
    label: 'Revenue Engine',
    descriptions: {
      about: 'Scaled partner ecosystems to 54+ active relationships from zero. Built entire BFSI partnership channel generating $7M+ revenue in 18 months.',
      partnerships: 'Built 0→1 BFSI channel from scratch. Scored 200+ potential partners, prioritized 54, reduced time-to-first-revenue from 6 months to 6 weeks. $7M+ partner-sourced revenue.',
      marketing: 'Developed and executed integrated marketing campaigns across digital and offline channels. $7M+ influenced revenue through data-driven optimization and 20x YoY growth.',
    },
    kpiValue: 20,
    kpiSuffix: 'x',
    kpiLabel: 'YoY Expansion',
    secondaryText: {
      about: '54+ active BFSI partnerships built from zero',
      partnerships: 'Time-to-revenue: 6 months → 6 weeks',
      marketing: '150,000+ customers reached through campaigns',
    },
    order: { about: 2, partnerships: 1, marketing: 4 },
    variant: 'tall-accent',
  },
  {
    id: 'plum',
    company: 'Plum Benefits',
    label: 'Lead Velocity',
    descriptions: {
      about: '45% partner growth expansion. Fast-tracked from Senior Associate to AGM in under 2 years.',
      partnerships: 'Portfolio ownership with P&L accountability. Expanded from 35 to 50+ partners, built partner lifecycle framework (sourcing→onboarding→enablement→growth). Co-selling generated $3M+ accounts.',
      marketing: 'Planned and executed integrated marketing campaigns — webinars, workshops, regional events, email programs. A/B tested formats for 35% engagement improvement.',
    },
    kpiValue: 150,
    kpiSuffix: '+',
    kpiLabel: 'Qualified Pipeline',
    secondaryText: {
      about: '45% partner growth expansion',
      partnerships: '45% ecosystem expansion with P&L accountability',
      marketing: '35% engagement improvement via A/B testing',
    },
    order: { about: 3, partnerships: 2, marketing: 3 },
    variant: 'standard',
  },
  {
    id: 'career-impact',
    company: 'Career Impact',
    label: 'Career Impact',
    descriptions: {
      about: 'Cumulative pipeline generation across 3 companies. Built 3 complete 0→1 GTM systems from scratch.',
      partnerships: 'Cumulative partner-sourced revenue across 3 companies. Every dollar attributed through partnership systems I designed and built.',
      marketing: 'Cumulative revenue influence across integrated B2B marketing campaigns. From demand generation to brand-led pipeline.',
    },
    kpiValue: 7,
    kpiSuffix: 'M+',
    kpiLabel: 'Revenue Attributed',
    secondaryText: {
      about: '3 complete 0→1 systems built from scratch',
      partnerships: '54+ BFSI + 50+ strategic alliances',
      marketing: '4,000+ qualified prospects generated',
    },
    order: { about: 4, partnerships: 4, marketing: 2 },
    variant: 'dark',
  },
];
