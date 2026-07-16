import { ViewType } from './views';

export interface CurrlyPoint {
  label: string;
  detail: string;
}

// Per-view opening line. The spine ("I build the product now, not just market it")
// lands the same in every view; the framing shifts to match the lens.
export const CURRLY_INTRO: Record<ViewType, string> = {
  about:
    'The distinction that matters: I now build the product, not only the go-to-market around it.',
  partnerships:
    'I no longer only build partner pipelines. I build the product itself, solo and in production.',
  marketing:
    'I no longer only run the marketing. I build the product it sells, solo and in production.',
};

export const CURRLY = {
  eyebrow: 'Current focus',
  name: 'Currly',
  url: 'https://currlyai.com',
  urlLabel: 'currlyai.com',
  tagline: 'Describe the outcome. Get the workflow.',
  summary:
    'An AI workflow platform I designed and shipped solo. 1,400+ tools and 111+ workflows live in production.',
  stack: ['Next.js', 'Supabase / pgvector', 'OpenAI', 'Vercel'],
  // Lead with the search_path bug and the eval harness — anyone can list a stack.
  points: [
    {
      label: 'Fixed a bug that had silently killed search in prod',
      detail:
        'A search_path bug had quietly disabled semantic search in production. I found it, fixed it, and cut 60MB search payloads down to kilobytes.',
    },
    {
      label: 'Built an eval harness, then moved the number',
      detail:
        'Raised paraphrase stability from 29% to 62% with a canonical-intent layer, measured against an eval harness I built for the purpose.',
    },
    {
      label: '5-signal ranking, p95 under 400ms',
      detail:
        'A Postgres ranking engine scoring semantic, lexical, quality, freshness, and behavior. p95 search latency holds under 400ms.',
    },
    {
      label: 'A defensible data asset',
      detail:
        'Proprietary D7/D30 outcome data on which AI tool combinations actually work, gated at n=5 reports before any success rate shows.',
    },
    {
      label: 'Programmatic SEO/AEO, plus a community',
      detail:
        '84 ISR use-case pages, HowTo/FAQ JSON-LD, and AI-crawler rules that feed a 450+ builder community, which feeds content back into the product.',
    },
  ] as CurrlyPoint[],
};
