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
    subtitle: 'Six years in B2B marketing and partnerships across a NASDAQ firm, a Tiger Global–backed insurtech, and a fintech. <strong>Now I build the product too: Currly, an AI workflow platform I shipped solo.</strong>',
  },
  partnerships: {
    badge: 'Partnerships Leader',
    headlineTop: 'ZERO',
    headlineAccent1: 'TO',
    headlineMid: '→',
    headlineBottom: '₹7M',
    headlineAccent2: 'REVENUE',
    subtitle: 'I build partnership engines from scratch. <strong>54 BFSI partnerships, ₹7M revenue, 20x YoY growth.</strong> Every system designed, built, and scaled by me across ClearTax and Plum.',
  },
  marketing: {
    badge: 'Marketing Leader',
    headlineTop: 'STARTUP',
    headlineAccent1: 'SPARK',
    headlineMid: '→',
    headlineBottom: 'NASDAQ',
    headlineAccent2: 'STAGE',
    subtitle: 'Sole marketing owner for Grid Dynamics India: <strong>demand, brand, and employer brand, owned end to end.</strong> And I build the product I market, not just the campaigns around it.',
  },
};
