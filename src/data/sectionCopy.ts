import { ViewType } from './views';

export interface SectionCopy {
  impactLabel: string;
  impactHeadline: string;
  impactAccent: string;
  impactDescription: string;
  timelineLabel: string;
  timelineHeadline: string;
  timelineAccent: string;
  timelineDescription: string;
  feedLabel: string;
  feedHeadline: string;
  feedAccent: string;
  feedDescription: string;
}

// Note: the impact headline renders as "{impactHeadline} MARKET {impactAccent}"
// ("market" is hard-coded + CSS-uppercased in PortfolioView), giving the spine
// line "I DON'T JUST MARKET IT." across all views.
export const SECTION_COPY: Record<ViewType, SectionCopy> = {
  about: {
    impactLabel: 'Proof',
    impactHeadline: "I don't just",
    impactAccent: 'it.',
    impactDescription:
      'Six years of B2B marketing and partnerships across three companies, most of it built from zero or close to it. Here are the numbers. Then the product I build now.',
    timelineLabel: 'Reverse chronological',
    timelineHeadline: 'THE',
    timelineAccent: 'WORK.',
    timelineDescription:
      'Three companies in six years: <strong>a NASDAQ firm, a Tiger Global–backed insurtech, a fintech.</strong>',
    feedLabel: 'Writing',
    feedHeadline: 'CONTEXT,',
    feedAccent: 'ENGINEERED.',
    feedDescription:
      'A LinkedIn series on <strong>building product as a marketer</strong>. What I learn shipping Currly, and running marketing at the pace of a larger team.',
  },
  partnerships: {
    impactLabel: 'Proof',
    impactHeadline: "I don't just",
    impactAccent: 'it.',
    impactDescription:
      'I build partner channels from zero and run them with P&L accountability. Three companies, three channels. The numbers, and the product I now build myself.',
    timelineLabel: 'Three channels, from zero',
    timelineHeadline: 'WHAT I',
    timelineAccent: 'BUILT.',
    timelineDescription:
      'Every partner channel here I built from zero: <strong>at ClearTax, at Plum, and the CXO relationships at Grid Dynamics.</strong>',
    feedLabel: 'Writing',
    feedHeadline: 'CONTEXT,',
    feedAccent: 'ENGINEERED.',
    feedDescription:
      'Notes on <strong>partnerships, ecosystems, and building from zero</strong>, and what changes when you also build the product.',
  },
  marketing: {
    impactLabel: 'Proof',
    impactHeadline: "I don't just",
    impactAccent: 'it.',
    impactDescription:
      'Demand, brand, and employer brand, owned end to end across three companies. Here are the numbers, and the product I build alongside them.',
    timelineLabel: 'Owned end to end',
    timelineHeadline: 'THE',
    timelineAccent: 'WORK.',
    timelineDescription:
      'Demand generation, brand, and employer brand: <strong>owned end to end across three companies.</strong>',
    feedLabel: 'Writing',
    feedHeadline: 'CONTEXT,',
    feedAccent: 'ENGINEERED.',
    feedDescription:
      'Notes on <strong>AI-native marketing and building product</strong>. The series, on LinkedIn.',
  },
};
