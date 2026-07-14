export const VALID_VIEWS = ['about', 'partnerships', 'marketing'] as const;
export type ViewType = typeof VALID_VIEWS[number];

export interface ViewMeta {
  title: string;
  description: string;
}

export const VIEW_META: Record<ViewType, ViewMeta> = {
  about: {
    title: 'Rohit Mallavarapu | Builder-Marketer',
    description:
      'B2B marketing and partnerships, six years. Now I build the product too: Currly, an AI workflow platform I shipped solo (1,400+ tools, 111+ workflows in production).',
  },
  partnerships: {
    title: 'Rohit Mallavarapu | Partnerships, Built From Zero',
    description:
      'I build partner channels from zero. ClearTax: 54 partnerships, ₹7M, 20x YoY. Plum: $3M+ in key accounts, promoted twice. And I build the product too.',
  },
  marketing: {
    title: 'Rohit Mallavarapu | Marketing Lead & Builder',
    description:
      'Sole marketing owner for Grid Dynamics India. 12 events, 4,600+ qualified prospects, brand awareness 20% → 80%. And I build the product, Currly, shipped solo.',
  },
};
