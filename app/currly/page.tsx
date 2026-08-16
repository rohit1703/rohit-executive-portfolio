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
  { n: '01', t: 'Found the bug that had silently killed prod search', b: 'A search_path bug had quietly switched off semantic search in production. Nobody would have noticed — which is what made it dangerous. I traced it, fixed it, and cut 60MB payloads to kilobytes on the way out.' },
  { n: '02', t: 'Built an eval harness, then moved the number', b: 'Paraphrase stability sat at 29%, and I had no honest way to tell if my changes helped. So I built an eval harness to measure it, added a canonical-intent layer, and got it to 62%.' },
  { n: '03', t: 'Five signals, ranked, under 400ms', b: 'A Postgres engine scoring semantic match, lexical match, quality, freshness, and behaviour. p95 search latency holds under 400ms.' },
  { n: '04', t: 'A data asset that gets better the longer it runs', b: 'D7/D30 outcome data on which AI tool combinations actually work in the real world. Nothing shows a success rate until it clears n=5 reports, so the number means something when it finally appears.' },
  { n: '05', t: 'Programmatic SEO that feeds a community that feeds the product', b: '84 use-case pages with structured data and rules for AI crawlers. They pull in a 450+ builder community, and the community feeds real usage back in. The loop runs itself.' },
];

export default function CurrlyPage() {
  return (
    <div className="container">
      <section className="currly-hero">
        <div>
          <span className="currly-eyebrow">A product I shipped · In production</span>
          <h1 className="currly-name">Currly</h1>
          <p className="currly-tagline">Describe the outcome. Get the workflow.</p>
          <p className="currly-blurb">
            For years I built the go-to-market around other people&rsquo;s products. Currly is
            the first one that&rsquo;s mine — an AI workflow platform I designed and shipped on
            my own, now running 1,400+ tools and 111+ workflows in production. I owned the
            positioning too &mdash; repositioning it from an AI tool directory to an AI workflow
            platform, and rewriting the whole site around an outcome-first thesis.
          </p>
          <p className="currly-blurb" style={{ marginTop: 14 }}>
            I broke plenty on the way here. The five decisions below are the ones that actually
            moved the product.
          </p>
          <div className="tech-tags">
            {TECH.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
          </div>
          <div style={{ marginTop: 26 }}>
            <a className="pill pill-primary" href={CURRLY} target="_blank" rel="noopener noreferrer">currlyai.com ↗</a>
          </div>
        </div>
        <figure className="currly-shot">
          <img src="/currly/hero.png" alt="Currly — describe the outcome, get the AI workflow" width={2000} height={1008} />
        </figure>
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
          <figure className="shot">
            <img src="/currly/search.png" width={2000} height={1225} alt="Currly search — describe the outcome, get the ordered route" loading="lazy" />
            <figcaption>Search → the ordered route</figcaption>
          </figure>
          <div className="gallery-col">
            <figure className="shot">
              <img src="/currly/workflows.png" width={2000} height={1225} alt="Currly — proven workflows with real success rates" loading="lazy" />
              <figcaption>Proven workflows</figcaption>
            </figure>
            <figure className="shot">
              <img src="/currly/community.png" width={2000} height={1079} alt="Currly — two ways to use it, and the community" loading="lazy" />
              <figcaption>Two ways to use it</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 'clamp(44px,6vw,80px)' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 8 }}>Engineering decisions</span>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.06, margin: '0 0 30px' }}>
          Five that moved the <span className="ital">number.</span>
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
            <p>I don&rsquo;t just take the product to market. I built this one.</p>
            <a className="pill pill-primary" href={CURRLY} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>Visit Currly ↗</a>
          </div>
        </div>
      </section>

      {/* Selected builds — Currly isn't the only thing I've shipped. */}
      <section className="section-top" style={{ paddingBottom: 'clamp(44px,6vw,80px)' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 8 }}>Selected builds</span>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.06, margin: '0 0 12px' }}>
          Currly isn&rsquo;t the only thing I&rsquo;ve <span className="ital">shipped.</span>
        </h2>
        <p className="currly-blurb" style={{ margin: '0 0 28px', maxWidth: '62ch' }}>
          The build muscle isn&rsquo;t a one-off. Shared Earth is a full booking platform I
          designed and shipped for a paying client &mdash; solo, to a fixed launch date.
        </p>
        <div className="ccard">
          <div className="ccard-head">
            <div>
              <span className="eyebrow faint">Bilingual travel booking · a paying client</span>
              <h3 className="ccard-title">Shared Earth</h3>
            </div>
            <span className="live">Launched to a hard date</span>
          </div>
          <p style={{ fontFamily: 'var(--body)', fontSize: 15, lineHeight: 1.62, color: 'var(--muted)', margin: '2px 0 0', maxWidth: '70ch' }}>
            Built for a German eco-tourism operator. Webflow for the content they edit
            themselves; custom code for the parts Webflow can&rsquo;t reach &mdash; embedded Bokun
            payments with no redirect, bilingual DE/EN, GDPR-compliant cookie-gated analytics,
            and per-tour SEO structured data. Sub-3-second loads, launched to a hard date.
          </p>
          <div style={{ marginTop: 22 }}>
            <a className="pill pill-primary" href="/shared-earth">Visit Shared Earth ▸</a>
          </div>
        </div>
      </section>
    </div>
  );
}
