import { ViewType } from './views';

export interface HeroData {
  badge: string;
  headline: string; // navy part
  headlineAccent: string; // orange part
  subtitle: string; // HTML allowed
}

// The thesis headline is constant across views (it's the spike). Only the
// sub-line shifts, so a tailored outreach link (/marketing, /partnerships)
// opens leading with that reader's world.
export const HERO_DATA: Record<ViewType, HeroData> = {
  about: {
    badge: 'Builder · Marketer',
    headline: 'The marketer who ships',
    headlineAccent: 'the product.',
    subtitle:
      'Six years in B2B marketing and partnerships across a NASDAQ firm, a Tiger Global–backed insurtech, and a fintech. <strong>Now I design and ship the product too: Currly, an AI workflow platform, built solo.</strong>',
  },
  partnerships: {
    badge: 'Partnerships · Builder',
    headline: 'The marketer who ships',
    headlineAccent: 'the product.',
    subtitle:
      'I build partnership channels from zero: <strong>54 BFSI partnerships at ClearTax (₹7M, 20x YoY); $3M+ in key accounts at Plum, promoted twice.</strong> And I build the product too, solo, in production.',
  },
  marketing: {
    badge: 'Marketing · Builder',
    headline: 'The marketer who ships',
    headlineAccent: 'the product.',
    subtitle:
      'Sole marketing owner for Grid Dynamics India: <strong>demand, brand, and employer brand, owned end to end.</strong> And I build the product I market, solo, in production.',
  },
};
