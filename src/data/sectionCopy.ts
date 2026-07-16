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

// Note: the impact headline renders as "{impactHeadline} {impactAccent}"
// (impactAccent is the orange word), giving "PROOF OF WORK." across all views.
export const SECTION_COPY: Record<ViewType, SectionCopy> = {
  about: {
    impactLabel: 'Proof',
    impactHeadline: 'Proof of',
    impactAccent: 'Work.',
    impactDescription:
      'Six years across three companies, most of it built from or near zero. The numbers first, then the product I now build myself.',
    timelineLabel: 'Reverse chronological',
    timelineHeadline: 'THE',
    timelineAccent: 'WORK.',
    timelineDescription:
      'Three companies in six years: <strong>a NASDAQ firm, a Tiger Global–backed insurtech, a fintech.</strong>',
    feedLabel: 'Writing',
    feedHeadline: 'SELECTED',
    feedAccent: 'WRITING.',
    feedDescription:
      'A LinkedIn series on <strong>building product as a marketer.</strong> Notes from shipping Currly and running marketing at the pace of a larger team.',
  },
  partnerships: {
    impactLabel: 'Proof',
    impactHeadline: 'Proof of',
    impactAccent: 'Work.',
    impactDescription:
      'I build partner channels from zero and run them with P&L accountability. Three companies, three channels: the numbers, and the product I now build myself.',
    timelineLabel: 'Three channels, from zero',
    timelineHeadline: 'WHAT I',
    timelineAccent: 'BUILT.',
    timelineDescription:
      'Every partner channel here I built from zero: <strong>at ClearTax, at Plum, and the CXO relationships at Grid Dynamics.</strong>',
    feedLabel: 'Writing',
    feedHeadline: 'SELECTED',
    feedAccent: 'WRITING.',
    feedDescription:
      'A LinkedIn series on <strong>partnerships, ecosystems, and building from zero,</strong> and what changes when you also build the product.',
  },
  marketing: {
    impactLabel: 'Proof',
    impactHeadline: 'Proof of',
    impactAccent: 'Work.',
    impactDescription:
      'Demand, brand, and employer brand, owned end to end across three companies. The numbers, and the product I build alongside them.',
    timelineLabel: 'Owned end to end',
    timelineHeadline: 'THE',
    timelineAccent: 'WORK.',
    timelineDescription:
      'Demand generation, brand, and employer brand: <strong>owned end to end across three companies.</strong>',
    feedLabel: 'Writing',
    feedHeadline: 'SELECTED',
    feedAccent: 'WRITING.',
    feedDescription:
      'A LinkedIn series on <strong>AI-native marketing and building product.</strong>',
  },
};
