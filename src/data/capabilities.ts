// Source of truth: the 17-area capability deck, condensed to 6 hiring-legible
// clusters. Every receipt traces to a real, quantified proof point. Framing is
// deliberately honest — partner-INFLUENCED pipeline (not owned co-sell), joint
// GTM (not carried quota) — so a JD can't reframe a number Rohit doesn't have.

export interface Receipt {
  /** The number, first — this is what a scanner reads. */
  metric: string;
  /** One line of context on what the number is. */
  detail: string;
  /** Where it happened. */
  company: string;
  /** Optional public link that verifies the claim. */
  href?: string;
}

export type LaneId =
  | 'partnerships'
  | 'growth'
  | 'events'
  | 'brand'
  | 'product'
  | 'leadership';

export interface Capability {
  id: string;
  /** Maps the card to a hiring lane / filter chip. */
  lane: LaneId;
  title: string;
  tagline: string;
  receipts: Receipt[];
}

export interface Lane {
  id: LaneId;
  /** Role-framed label — reads as an answer to "what are you hiring for?" */
  label: string;
}

// Chip order = strongest-fit lanes first, per the deck's role ranking.
export const LANES: Lane[] = [
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'growth', label: 'Demand & Growth' },
  { id: 'events', label: 'Events' },
  { id: 'brand', label: 'Brand & Talent' },
  { id: 'product', label: 'Product & AI' },
  { id: 'leadership', label: 'Leadership' },
];

const CURRLY = 'https://currlyai.com';

export const CAPABILITIES: Capability[] = [
  {
    id: 'partnerships',
    lane: 'partnerships',
    title: 'Partnerships & Channel',
    tagline: 'Partner channels built from zero, run with P&L accountability.',
    receipts: [
      { metric: '54 partnerships', detail: 'BFSI channel built from zero', company: 'ClearTax' },
      { metric: '₹7M · 20× YoY', detail: 'revenue through the channel I owned', company: 'ClearTax' },
      { metric: '35 → 50+ partners', detail: '45% growth with P&L accountability', company: 'Plum' },
      { metric: '100+ enterprise accounts', detail: 'Director-to-CXO relationships', company: 'Plum' },
      { metric: '50+ orgs', detail: 'end-to-end negotiation, contracting, onboarding', company: 'Plum' },
    ],
  },
  {
    id: 'growth',
    lane: 'growth',
    title: 'Demand Gen & Growth',
    tagline: 'Pipeline and reach on near-zero paid budget.',
    receipts: [
      { metric: '4,600+ prospects', detail: '+ 1,200 talent leads, zero paid budget', company: 'Grid Dynamics' },
      { metric: '150,000 consumers', detail: 'reached via co-branded campaigns', company: 'ClearTax' },
      { metric: '300% efficiency', detail: 'on a $10K budget, via channel-mix redesign', company: 'Grid Dynamics' },
      { metric: '$3M+ pipeline', detail: 'partner-influenced (joint GTM, not carried quota)', company: 'Grid Dynamics' },
      { metric: '+35% engagement', detail: 'A/B testing on event formats', company: 'Plum' },
    ],
  },
  {
    id: 'events',
    lane: 'events',
    title: 'Events & Experiential',
    tagline: 'CXO rooms to multi-city programs, hosted and run end to end.',
    receipts: [
      { metric: '80+ Fortune 1000 CXOs', detail: 'Technology & Innovation Day, 300+ reached', company: 'Grid Dynamics' },
      { metric: '10 events · 3 cities', detail: 'Dynamic Talks, 664 peak registrations', company: 'Grid Dynamics' },
      { metric: '8 events · 7 cities', detail: '150 enterprise SALs generated', company: 'Plum' },
    ],
  },
  {
    id: 'brand',
    lane: 'brand',
    title: 'Brand & Employer Brand',
    tagline: 'A reputation turnaround measured on public scorecards.',
    receipts: [
      { metric: 'Glassdoor 3.2 → 3.9', detail: 'AmbitionBox 2.0 → 3.1, inside 6 months', company: 'Grid Dynamics' },
      { metric: '20% → 80%', detail: 'brand awareness among target talent', company: 'Grid Dynamics' },
      { metric: '48% of global following', detail: "grew India's share of company LinkedIn from near-zero", company: 'Grid Dynamics' },
      { metric: '300+ hires influenced', detail: 'through the employer-brand turnaround', company: 'Grid Dynamics' },
    ],
  },
  {
    id: 'product',
    lane: 'product',
    title: 'Product & AI Building',
    tagline: 'The product itself, shipped solo in code — not the marketing around it.',
    receipts: [
      { metric: '1,400+ tools · 111+ workflows', detail: 'shipped solo, live in production', company: 'Currly', href: CURRLY },
      { metric: 'p95 < 400ms', detail: '5-signal Postgres ranking engine', company: 'Currly', href: CURRLY },
      { metric: '29% → 62%', detail: 'paraphrase stability via a self-built eval harness', company: 'Currly', href: CURRLY },
      { metric: 'search_path bug', detail: 'found + fixed a bug that had silently killed semantic search in prod', company: 'Currly', href: CURRLY },
      { metric: '84 ISR pages', detail: 'programmatic SEO/AEO feeding a 450+ builder community', company: 'Currly', href: CURRLY },
    ],
  },
  {
    id: 'leadership',
    lane: 'leadership',
    title: 'Leadership & Systems',
    tagline: 'Teams and the systems that make them repeatable.',
    receipts: [
      { metric: '12-member team', detail: '+40% output via performance frameworks + incentive design', company: 'ClearTax' },
      { metric: 'Across 3 offices', detail: 'SOPs + BDR workflow systems adopted company-wide in India', company: 'Grid Dynamics' },
      { metric: 'From scratch', detail: "built Plum's full partner-enablement infrastructure", company: 'Plum' },
    ],
  },
];
