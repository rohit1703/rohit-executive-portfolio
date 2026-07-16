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
    badge: 'Marketing · Partnerships · Product',
    headlineTop: 'STARTUP',
    headlineAccent1: 'SPARK',
    headlineMid: '→',
    headlineBottom: 'NASDAQ',
    headlineAccent2: 'STAGE',
    subtitle: 'Six years in B2B marketing and partnerships across a NASDAQ firm, a Tiger Global–backed insurtech, and a fintech. <strong>I now design and ship the product as well: Currly, an AI workflow platform built solo.</strong>',
  },
  partnerships: {
    badge: 'Partnerships · Built From Zero',
    headlineTop: 'ZERO',
    headlineAccent1: 'TO',
    headlineMid: '→',
    headlineBottom: '₹7M',
    headlineAccent2: 'REVENUE',
    subtitle: 'I build partnership channels from zero. <strong>54 BFSI partnerships, ₹7M revenue, 20x YoY growth,</strong> designed and scaled across ClearTax and Plum.',
  },
  marketing: {
    badge: 'Marketing · Owned End to End',
    headlineTop: 'STARTUP',
    headlineAccent1: 'SPARK',
    headlineMid: '→',
    headlineBottom: 'NASDAQ',
    headlineAccent2: 'STAGE',
    subtitle: 'Sole marketing owner for Grid Dynamics India: <strong>demand, brand, and employer brand, owned end to end.</strong> I also build the product I market.',
  },
};
