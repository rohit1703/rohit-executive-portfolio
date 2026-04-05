import { ViewType } from './views';

export interface HeroData {
  badge: string;
  headlineTop: string;
  headlineAccent1: string;
  headlineMid: string;
  headlineBottom: string;
  headlineAccent2: string;
  subtitle: string;
}

export const HERO_DATA: Record<ViewType, HeroData> = {
  about: {
    badge: 'Executive Portfolio',
    headlineTop: 'STARTUP',
    headlineAccent1: 'SPARK',
    headlineMid: '→',
    headlineBottom: 'NASDAQ',
    headlineAccent2: 'STAGE',
    subtitle: 'Global marketing leader with deep expertise in scaling high-growth tech organizations. I design and execute <strong>AI-led growth strategies</strong> that fuel revenue acceleration & brand expansion — including strategic leadership for NASDAQ-listed organizations.',
  },
  partnerships: {
    badge: 'Partnerships Leader',
    headlineTop: 'ZERO',
    headlineAccent1: 'TO',
    headlineMid: '→',
    headlineBottom: '$7M+',
    headlineAccent2: 'REVENUE',
    subtitle: 'I build partnership engines from scratch. <strong>54+ BFSI partners, 50+ strategic alliances, 20x YoY growth</strong> — every system designed, built, and scaled by me. From scoring 200+ potential partners to reducing time-to-first-revenue from 6 months to 6 weeks.',
  },
  marketing: {
    badge: 'Marketing Leader',
    headlineTop: 'STARTUP',
    headlineAccent1: 'SPARK',
    headlineMid: '→',
    headlineBottom: 'NASDAQ',
    headlineAccent2: 'STAGE',
    subtitle: 'Global marketing leader designing <strong>AI-led growth strategies</strong> that fuel revenue acceleration and brand expansion. From Glassdoor turnarounds to flagship CXO summits — driving demand generation, content strategy, and measurable growth at scale.',
  },
};
