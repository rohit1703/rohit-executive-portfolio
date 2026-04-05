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

export const SECTION_COPY: Record<ViewType, SectionCopy> = {
  about: {
    impactLabel: 'Strategic Output',
    impactHeadline: 'measurable',
    impactAccent: 'dominance.',
    impactDescription: 'Driven by an innate curiosity to understand how global technologies can authentically connect with communities. Whether crafting experiential marketing campaigns, building genuine partnerships, or developing market positioning strategies, I am committed to creating meaningful connections that drive lasting impact.',
    timelineLabel: 'Executive Experience Centre',
    timelineHeadline: 'OPERATIONAL',
    timelineAccent: 'RIGOR.',
    timelineDescription: 'The "How" behind the metrics. Detailed breakdowns of <strong>market entry, pipeline velocity, and brand turnaround</strong> across the growth lifecycle.',
    feedLabel: 'The Narrative Feed',
    feedHeadline: 'INSIGHTS',
    feedAccent: 'UNFILTERED.',
    feedDescription: 'Deep dives into <strong>AI strategy, leadership philosophy, and institutional growth</strong>.',
  },
  partnerships: {
    impactLabel: 'Strategic Output',
    impactHeadline: 'partnership',
    impactAccent: 'velocity.',
    impactDescription: 'I build systems that turn partners into revenue engines. From identifying and scoring 200+ potential partners to architecting lifecycle frameworks that scale — every partnership is designed for mutual value creation, P&L accountability, and repeatable growth.',
    timelineLabel: 'Partnership Portfolio',
    timelineHeadline: 'SYSTEMS',
    timelineAccent: 'I BUILT.',
    timelineDescription: 'The "How" behind the partner revenue. Detailed breakdowns of <strong>0→1 channel building, portfolio management, and ecosystem scaling</strong> across three companies.',
    feedLabel: 'Ecosystem Insights',
    feedHeadline: 'PARTNERSHIP',
    feedAccent: 'PLAYBOOK.',
    feedDescription: 'Perspectives on <strong>ecosystem building, strategic alliances, and community-driven growth</strong>.',
  },
  marketing: {
    impactLabel: 'Strategic Output',
    impactHeadline: 'measurable',
    impactAccent: 'dominance.',
    impactDescription: 'Driven by data and creative conviction. From AI positioning frameworks to flagship CXO events, I build integrated B2B marketing engines — campaigns that generate pipeline, content that builds authority, and brand strategies that transform perception.',
    timelineLabel: 'Marketing Command',
    timelineHeadline: 'CAMPAIGN',
    timelineAccent: 'RIGOR.',
    timelineDescription: 'The "How" behind the growth. Detailed breakdowns of <strong>brand transformation, demand generation, and AI-led marketing</strong> across the growth lifecycle.',
    feedLabel: 'The Narrative Feed',
    feedHeadline: 'INSIGHTS',
    feedAccent: 'UNFILTERED.',
    feedDescription: 'Deep dives into <strong>AI strategy, brand building, and growth marketing</strong>.',
  },
};
