import { ViewType } from './views';

export interface ExperienceCategory {
  title: string;
  points: string[];
}

export interface ExperienceKPI {
  value: number;
  suffix: string;
  label: string;
}

export interface ExperienceEntry {
  role: Record<ViewType, string>;
  company: string;
  period: string;
  tagline: Record<ViewType, string>;
  categories: Record<ViewType, ExperienceCategory[]>;
  kpi: Record<ViewType, ExperienceKPI>;
  secondaryKpi?: Record<ViewType, ExperienceKPI>;
  visualType: 'glassdoor' | 'grid-stats' | 'growth-chart';
  order: Record<ViewType, number>;
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    role: {
      about: 'Marketing Specialist',
      partnerships: 'Marketing Specialist',
      marketing: 'Marketing Specialist',
    },
    company: 'Grid Dynamics (NASDAQ: GDYN)',
    period: 'July 2024 — Present',
    tagline: {
      about: 'Sole marketing leader driving comprehensive market strategy for $2B+ global digital engineering consultancy.',
      partnerships: 'Own strategic relationships with 100+ Fortune 1000 CXOs — managing complete 360° relationships across sell-to, sell-with, and sell-through dimensions.',
      marketing: 'Sole marketing leader building India GTM engine from scratch. Driving brand transformation, AI positioning, and integrated demand generation for $2B+ NASDAQ-listed consultancy.',
    },
    categories: {
      about: [
        {
          title: 'Enterprise Leadership',
          points: [
            'Orchestrated flagship events attracting 100+ Fortune 1000 CXOs, driving brand authority and pipeline.',
            'Driven 70% of the company\'s regional follower growth via strategic content distribution.',
          ],
        },
        {
          title: 'Strategic Innovation',
          points: [
            'Developed AI positioning framework; optimised $10,000+ budget allocation for 300% efficiency gains.',
            'Built entire India marketing infrastructure from scratch — every process, dashboard, and framework.',
          ],
        },
      ],
      partnerships: [
        {
          title: 'Partner Portfolio Management',
          points: [
            'Own strategic relationships with 100+ Fortune 1000 CXOs and VPs across consulting firms, technology partners, and enterprise organizations.',
            'Drive co-selling motions and joint GTM programs generating 4,000+ qualified prospects and $3M+ partner-influenced pipeline.',
            'Manage full partner lifecycle: sourcing, due diligence, onboarding, enablement, growth planning, and strategic investment decisions.',
          ],
        },
        {
          title: 'Partner Enablement & Practice Building',
          points: [
            'Design comprehensive partner enablement programs: training curricula, solution narratives, co-marketing campaigns, and sales enablement assets.',
            'Translate complex AI capabilities into industry-specific business value propositions for enterprise buyers across financial services, retail, and technology verticals.',
            'Manage partnership P&L with forecasting accountability, ROI tracking, and budget optimization (300% efficiency improvement).',
          ],
        },
      ],
      marketing: [
        {
          title: 'Brand & Demand Generation',
          points: [
            'Transformed brand perception: Glassdoor score from 3.2 → 3.9 (+22% improvement) through strategic employer branding and content programs.',
            'Driven 70% of regional follower growth via integrated content strategy across LinkedIn, events, and thought leadership.',
            'Orchestrated flagship CXO events attracting 100+ Fortune 1000 executives — building authority and generating pipeline.',
          ],
        },
        {
          title: 'AI-Led Marketing Innovation',
          points: [
            'Built AI marketing team in under 4 weeks — using Claude for research, content drafting, and data analysis to 3x output velocity.',
            'Developed AI positioning framework; optimised $10,000+ budget for 300% efficiency through A/B testing of event formats and messaging.',
            'Shifted 60% of budget to top-performing channels based on data — systematic test-and-learn across 6+ channels simultaneously.',
          ],
        },
      ],
    },
    kpi: {
      about: { value: 3.9, label: 'Glassdoor Score', suffix: '' },
      partnerships: { value: 4000, label: 'Qualified Prospects', suffix: '+' },
      marketing: { value: 3.9, label: 'Glassdoor Score', suffix: '' },
    },
    secondaryKpi: {
      about: { value: 4000, label: 'Qualified Prospects', suffix: '+' },
      partnerships: { value: 3, label: 'Pipeline Value', suffix: 'M+' },
      marketing: { value: 300, label: 'Budget Efficiency', suffix: '%' },
    },
    visualType: 'glassdoor',
    order: { about: 1, partnerships: 3, marketing: 1 },
  },
  {
    role: {
      about: 'Assistant General Manager',
      partnerships: 'Assistant General Manager',
      marketing: 'Assistant General Manager',
    },
    company: 'Plum Benefits (Tiger Global/Sequoia)',
    period: '2022 — 2024',
    tagline: {
      about: 'Fast-tracked from Senior Associate to AGM. Oversaw strategic partnerships and experiential marketing for leading insurtech startup.',
      partnerships: 'Owned and scaled strategic partner portfolio with full P&L accountability. Built partner lifecycle framework from sourcing through growth — promoted to AGM on "executive stakeholder trust."',
      marketing: 'Planned and executed integrated marketing campaigns — webinars, workshops, regional events, digital programs. Designed A/B testing frameworks that drove 35% engagement improvement.',
    },
    categories: {
      about: [
        {
          title: 'Revenue & Market Impact',
          points: [
            'Generated 150+ enterprise leads via events, driving 28% business value increase.',
            'Managed strategic accounts worth $3M+, demonstrating high-value leadership capabilities.',
          ],
        },
        {
          title: 'Partnership Scaling',
          points: [
            'Expanded partner network by 45%, managing 50+ VCs and HRMS platforms.',
            'Drove engagement initiatives resulting in 35% improvement in core performance metrics.',
          ],
        },
      ],
      partnerships: [
        {
          title: 'Portfolio Ownership & P&L',
          points: [
            'Owned partner portfolio expansion from 35 to 50+ partners (45% growth) with full P&L accountability: forecasting, ROI optimization, and investment prioritization.',
            'Architected each partnership for mutual value creation — balancing investment across portfolio with maturity progression frameworks.',
            'Built partner health scoring algorithm (engagement frequency + revenue + growth trajectory) to focus resources on highest-potential relationships.',
          ],
        },
        {
          title: 'Multi-Dimensional Execution',
          points: [
            'Led co-selling motions generating 150+ enterprise leads and $3M+ in new accounts across sell-to, sell-with, and sell-through models.',
            'Built comprehensive enablement infrastructure from scratch: onboarding playbooks, training curricula, certification frameworks, co-branded assets.',
            'Reduced time-to-revenue through systematic partner onboarding — created repeatable revenue streams across 50+ partners.',
          ],
        },
      ],
      marketing: [
        {
          title: 'Campaign Management',
          points: [
            'Planned and executed integrated campaigns (webinars, workshops, regional events, email programs, digital) generating 150+ enterprise leads and $3M+ influenced revenue.',
            'Designed A/B tests for campaign formats (webinar vs. in-person, email messaging, content types) — 35% improvement in engagement metrics.',
            'Developed marketing briefs, campaign assets, and performance dashboards for ongoing optimization.',
          ],
        },
        {
          title: 'Experiential Marketing',
          points: [
            'Built experiential marketing programs connecting insurance products with enterprise HR audiences at scale.',
            'Coordinated cross-functional campaigns spanning Sales, Product, Marketing, and Operations with clear accountability frameworks.',
            'Promoted from Manager to AGM in under 2 years based on consistent campaign delivery and measurable outcomes.',
          ],
        },
      ],
    },
    kpi: {
      about: { value: 150, label: 'Qualified SQLs', suffix: '+' },
      partnerships: { value: 45, label: 'Ecosystem Growth', suffix: '%' },
      marketing: { value: 150, label: 'Enterprise Leads', suffix: '+' },
    },
    secondaryKpi: {
      about: { value: 3, label: 'Account Value', suffix: 'M+' },
      partnerships: { value: 3, label: 'Co-Sell Revenue', suffix: 'M+' },
      marketing: { value: 35, label: 'Engagement Lift', suffix: '%' },
    },
    visualType: 'grid-stats',
    order: { about: 2, partnerships: 2, marketing: 2 },
  },
  {
    role: {
      about: 'Partnerships Manager - BFSI & Payroll',
      partnerships: 'Partnerships Manager - BFSI & Payroll',
      marketing: 'Partnerships Manager - BFSI & Payroll',
    },
    company: 'Clear (formerly ClearTax)',
    period: '2021 — 2022',
    tagline: {
      about: 'Handled BFSI & Payroll verticals overseeing end-to-end processes for top-tier financial partners.',
      partnerships: 'Built entire BFSI partnership channel from zero. Scored 200+ potential partners, prioritized 54, designed the system that generated $7M+ revenue in 18 months.',
      marketing: 'Developed and executed integrated marketing campaigns across digital and offline channels for BFSI vertical. $7M+ influenced revenue through systematic testing and channel expansion.',
    },
    categories: {
      about: [
        {
          title: 'Growth Engineering',
          points: [
            'Delivered 20x YoY growth through strategic partnership development with financial institutions.',
            'Established 30+ bank partnerships, directly contributing $7M+ in attributed revenue.',
          ],
        },
        {
          title: 'Ecosystem Management',
          points: [
            'Managed 54+ BFSI partnerships, enhancing service for 150,000+ customers.',
            'Built and trained teams that increased operational performance by 40%.',
          ],
        },
      ],
      partnerships: [
        {
          title: '0→1 Channel Architecture',
          points: [
            'Built BFSI partnership channel from zero — tested 200+ potential partners, scored and prioritized 54 through custom evaluation framework.',
            'Designed partner onboarding playbook that reduced time-to-first-revenue from 6 months to 6 weeks.',
            'Created repeatable acquisition system: partner identification → scoring → onboarding → enablement → revenue. Framework still used at Clear today.',
          ],
        },
        {
          title: 'Revenue & Scale',
          points: [
            'Generated $7M+ partner-sourced revenue from $0 baseline in 18 months — 20x YoY growth.',
            'Managed 54+ BFSI partnerships (banks, NBFCs, insurers, fintech platforms) serving 150,000+ customers.',
            'Led 12-member partner success team with 40% performance improvement through structured KPIs, coaching frameworks, and incentive optimization.',
          ],
        },
      ],
      marketing: [
        {
          title: 'Integrated Campaign Strategy',
          points: [
            'Developed and executed integrated marketing campaigns across email, social media, events, and content marketing for BFSI vertical.',
            'Analyzed campaign performance data (conversion rates, CAC, LTV, channel attribution) to identify optimization opportunities — delivering 20x YoY growth.',
            'Built lead attribution system tracking partner contribution across offline (branch activations, co-branded events) and digital channels.',
          ],
        },
        {
          title: 'Team & Budget Management',
          points: [
            'Led 12-member marketing and sales team with 40% performance improvement through structured KPIs and training programs.',
            'Managed campaign budgets and resource allocation based on performance data — systematic testing across channels.',
            '$7M+ influenced revenue and 150,000+ customers reached through targeted, data-driven campaigns.',
          ],
        },
      ],
    },
    kpi: {
      about: { value: 7, label: 'Revenue Contribution', suffix: 'M+' },
      partnerships: { value: 7, label: 'Partner-Sourced Revenue', suffix: 'M+' },
      marketing: { value: 7, label: 'Influenced Revenue', suffix: 'M+' },
    },
    secondaryKpi: {
      about: { value: 20, label: 'YoY Scale', suffix: 'x' },
      partnerships: { value: 54, label: 'Partners Built', suffix: '+' },
      marketing: { value: 20, label: 'YoY Growth', suffix: 'x' },
    },
    visualType: 'growth-chart',
    order: { about: 3, partnerships: 1, marketing: 3 },
  },
];
