import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Currly — Rohit Mallavarapu' };

const CURRLY = 'https://currlyai.com';
const TECH = ['Next.js', 'Supabase / pgvector', 'OpenAI', 'Vercel'];
const BAND: [string, string][] = [
  ['1,400+', 'Tools in production'],
  ['111+', 'Workflows live'],
  ['<400ms', 'p95 search latency'],
  ['450+', 'Builder community'],
];
const DECISIONS: { n: string; t: string; b: string }[] = [
  { n: '01', t: 'Fixed a bug that had silently killed search in prod', b: 'A search_path bug had quietly disabled semantic search in production. I found it, fixed it, and cut 60MB search payloads down to kilobytes.' },
  { n: '02', t: 'Built an eval harness, then moved the number', b: 'Raised paraphrase stability from 29% to 62% with a canonical-intent layer, measured against an eval harness I built for the purpose.' },
  { n: '03', t: '5-signal ranking, p95 under 400ms', b: 'A Postgres ranking engine scoring semantic, lexical, quality, freshness, and behavior. p95 search latency holds under 400ms.' },
  { n: '04', t: 'A defensible data asset', b: 'Proprietary D7/D30 outcome data on which AI tool combinations actually work, gated at n=5 reports before any success rate shows.' },
  { n: '05', t: 'Programmatic SEO/AEO, plus a community', b: '84 ISR use-case pages, HowTo/FAQ JSON-LD, and AI-crawler rules that feed a 450+ builder community, which feeds content back into the product.' },
];

export default function CurrlyPage() {
  return (
    <div className="container">
      <section className="currly-hero">
        <div>
          <span className="currly-eyebrow">Current focus · LIVE ●</span>
          <h1 className="currly-name">Currly</h1>
          <p className="currly-tagline">Describe the outcome. Get the workflow.</p>
          <p className="currly-blurb">
            The distinction that matters: I now build the product, not only the go-to-market
            around it. An AI workflow platform I designed and shipped solo — 1,400+ tools and
            111+ workflows live in production.
          </p>
          <div className="tech-tags">
            {TECH.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
          </div>
          <div style={{ marginTop: 26 }}>
            <a className="pill pill-primary" href={CURRLY} target="_blank" rel="noopener noreferrer">currlyai.com ↗</a>
          </div>
        </div>
        <div className="ph" style={{ height: 'clamp(300px,40vw,420px)' }}>Currly — hero product screenshot</div>
      </section>

      <section className="section">
        <div className="band no-mark">
          {BAND.map(([n, l]) => (
            <div className="band-item" key={l}>
              <p className="band-num">{n}</p>
              <p className="band-label">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>Inside the product</span>
        <div className="gallery">
          <div className="ph" style={{ height: 300 }}>Currly — workflow / search screenshot</div>
          <div className="gallery-col">
            <div className="ph" style={{ height: '100%' }}>Ranking dashboard</div>
            <div className="ph" style={{ height: '100%' }}>Use-case page</div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 'clamp(44px,6vw,80px)' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 8 }}>Engineering decisions</span>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.06, margin: '0 0 30px' }}>
          Five that <span className="ital">moved the number.</span>
        </h2>
        <div className="eng-grid">
          {DECISIONS.map((d) => (
            <div className={`eng-item${d.n === '05' ? ' last' : ''}`} key={d.n}>
              <span className="eng-num">{d.n}</span>
              <h3>{d.t}</h3>
              <p>{d.b}</p>
            </div>
          ))}
          <div className="eng-cta">
            <p>The marketer who now ships the product he sells.</p>
            <a className="pill pill-primary" href={CURRLY} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>Visit Currly ↗</a>
          </div>
        </div>
      </section>
    </div>
  );
}
