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
    badge: 'Builder · Marketer',
    headlineTop: 'MARKET',
    headlineAccent1: 'IT',
    headlineMid: '→',
    headlineBottom: 'BUILD',
    headlineAccent2: 'IT',
    subtitle:
      'Six years marketing B2B software — a NASDAQ firm, a Tiger Global–backed insurtech, a fintech. Now I build it too. <strong>Currly is an AI workflow platform I shipped solo: 1,400+ tools, 111+ workflows, live in production.</strong>',
  },
  partnerships: {
    badge: 'Partnerships · Builder',
    headlineTop: 'ZERO',
    headlineAccent1: 'TO',
    headlineMid: '→',
    headlineBottom: '54',
    headlineAccent2: 'PARTNERS',
    subtitle:
      'I build partner channels from zero. At ClearTax: 54 partnerships, ₹7M revenue, 20x YoY. At Plum: $3M+ in key accounts and two promotions in under two years. <strong>Now I build the product too.</strong>',
  },
  marketing: {
    badge: 'Marketing · Builder',
    headlineTop: '20%',
    headlineAccent1: 'TO',
    headlineMid: '→',
    headlineBottom: '80%',
    headlineAccent2: 'AWARE',
    subtitle:
      'Sole marketing owner for Grid Dynamics India — client, talent, and brand, no team beneath me. 12 events, 4,600+ qualified prospects, brand awareness 20% to 80%. <strong>And I build the product, not just the campaigns.</strong>',
  },
};
