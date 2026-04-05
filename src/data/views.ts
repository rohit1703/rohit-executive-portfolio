export const VALID_VIEWS = ['about', 'partnerships', 'marketing'] as const;
export type ViewType = typeof VALID_VIEWS[number];

export interface ViewMeta {
  title: string;
  description: string;
}

export const VIEW_META: Record<ViewType, ViewMeta> = {
  about: {
    title: 'Rohit Mallavarapu | Executive Portfolio',
    description: 'Global marketing leader and partnerships strategist. From startup spark to NASDAQ stage — $7M+ revenue, 20x YoY growth, 100+ Fortune 1000 relationships.',
  },
  partnerships: {
    title: 'Rohit Mallavarapu | Partnerships Leader',
    description: 'Building partner ecosystems from zero to $7M+ revenue. 54+ BFSI partnerships, 50+ strategic alliances, 20x YoY growth — all systems designed, built, and scaled.',
  },
  marketing: {
    title: 'Rohit Mallavarapu | Marketing Leader',
    description: 'Driving brand strategy, demand generation, and AI-led growth. Glassdoor turnaround, 4000+ qualified prospects, 300% budget efficiency — from startup to NASDAQ.',
  },
};
