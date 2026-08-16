import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shared Earth — Rohit Mallavarapu',
  description:
    'A bilingual (DE/EN) travel-booking platform for a German eco-tourism operator — designed and shipped solo to a fixed launch date, with embedded Bokun payments, GDPR-compliant analytics, per-tour SEO structured data, and a client-run CMS.',
};

const TECH = ['Bilingual DE / EN', 'Bokun payments', 'GDPR', 'SEO structured data', 'Client CMS'];

const SPECS: [string, string][] = [
  ['DE · EN', 'Bilingual, end to end'],
  ['0', 'Redirects — embedded checkout'],
  ['GDPR', 'Cookie-gated analytics'],
  ['Self-run', 'A CMS the client owns'],
];

const DECISIONS: { n: string; t: string; b: string }[] = [
  { n: '01', t: 'Payments that never leave the site', b: 'Embedded Bokun checkout instead of a redirect — the traveller books and pays without leaving Shared Earth, so the brand carries all the way through the transaction.' },
  { n: '02', t: 'Bilingual from the ground up', b: 'German and English as first-class citizens — not a bolt-on translation but a fully localised booking flow, content, and metadata in both languages.' },
  { n: '03', t: 'GDPR, built in — not patched on', b: 'Analytics gated behind cookie consent: nothing tracks until the visitor agrees. Compliance from the first line, for a European operator and audience.' },
  { n: '04', t: 'Every tour, structured for search', b: 'Per-tour SEO structured data so each experience is individually discoverable and eligible for rich results — the booking engine feeding the growth engine.' },
  { n: '05', t: 'A site the client runs without me', b: 'A CMS the operator manages themselves — they add tours, edit content, and publish on their own. I built it to be handed over, not depended on.' },
];

export default function SharedEarthPage() {
  return (
    <div className="container">
      <section className="page-hero" style={{ maxWidth: '64ch' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>A platform I shipped · for a paying client</span>
        <h1>Shared <span className="ital">Earth.</span></h1>
        <p className="lead">
          Currly is my own product. Shared Earth is the other kind of proof — a complete
          travel-booking platform I designed and shipped for a paying client: a German
          eco-tourism operator. Solo, to a hard launch date.
        </p>
        <p className="lead" style={{ marginTop: 14 }}>
          Bilingual German and English, embedded payments, GDPR by default, and a CMS they run
          themselves. Real production constraints, a real deadline — and it shipped on time.
        </p>
        <div className="tech-tags">
          {TECH.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="band no-mark">
          {SPECS.map(([n, l]) => (
            <div className="band-item" key={l}>
              <p className="band-num">{n}</p>
              <p className="band-label">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 'clamp(44px,6vw,80px)' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 8 }}>What it took</span>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.06, margin: '0 0 30px' }}>
          A booking platform, <span className="ital">end to end.</span>
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
            <p>One of two products I&rsquo;ve shipped. The other is Currly.</p>
            <Link className="pill pill-primary" href="/currly" style={{ alignSelf: 'flex-start' }}>See Currly ▸</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
