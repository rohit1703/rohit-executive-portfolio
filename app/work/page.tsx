import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Work — Rohit Mallavarapu' };

interface Role {
  idx: string; title: string; company: string; summary: string;
  stats?: { n: string; l: string; accent?: boolean }[];
  bullets?: string[];
}

const ROLES: Role[] = [
  {
    idx: '01 · Jul 2024 – Present', title: 'Marketing Lead, India', company: 'Grid Dynamics (NASDAQ: GDYN)',
    summary: 'Sole marketing owner for Grid Dynamics India — client, talent, and brand. No team beneath me, no daily supervision.',
    stats: [{ n: '4,600+', l: 'Qualified prospects', accent: true }, { n: '80%', l: 'Brand awareness (from 20%)' }],
    bullets: [
      '12 Dynamic Talks across 3 cities → 4,600+ qualified talent prospects. Peak event: 664 registrations; 400+ average.',
      '2 India flagship client events; the latest, with ISB, engaged 200+ Fortune 1000 CXOs.',
      "Brand awareness among target talent 20% → 80%; Glassdoor 3.2 → 3.9; India grew to 48% of the company's global LinkedIn following.",
      'AI-native operator: full campaign cycles — research, content, decks, video — run at the pace of a larger team.',
    ],
  },
  {
    idx: '02 · Jul 2022 – Jul 2024', title: 'AGM, Partnerships', company: 'Plum Benefits (Tiger Global / Sequoia)',
    summary: "Promoted twice in under two years — Community Builder → Senior Associate → AGM. Built Plum's partner ecosystem from zero.",
    stats: [{ n: '$3M+', l: 'Key accounts', accent: true }, { n: '45%', l: 'YoY partner growth' }],
    bullets: [
      '50+ partners onboarded in 6 months; 100+ enterprise accounts; $3M+ in key accounts.',
      '45% YoY partner growth; 35% engagement improvement across partner and customer programs.',
      '8+ experiential events across 7 cities → 150 enterprise SALs.',
      'Top 25 Emerging Leaders 2024, Indian Startup Times.',
    ],
  },
  {
    idx: '03 · Feb 2021 – Jul 2022', title: 'Partnerships Manager, BFSI & Payroll', company: 'Clear (formerly ClearTax)',
    summary: "Built ClearTax's BFSI & Payroll partnership channel from zero — 54 partnerships across banks, NBFCs, and fintechs.",
    stats: [{ n: '54', l: 'Partnerships built', accent: true }, { n: '20x', l: 'YoY growth' }],
    bullets: [
      '₹7M revenue; 20x YoY growth; 150,000 consumers reached.',
      'Owned API, CG, and PWA integrations end to end, cutting onboarding friction.',
      'Led a 12-member team → 40% output improvement.',
    ],
  },
  {
    idx: 'Earlier · Jun 2020 – Jan 2021', title: 'GTM & Recruitment Consultant', company: 'Northlance Agency · Freelance',
    summary: 'Advised early-stage startups on go-to-market positioning, outbound motions, and hiring pipelines.',
  },
];

const CAPS: [string, string[]][] = [
  ['Technical & AI', ['Next.js', 'React', 'Python', 'Supabase', 'Postgres', 'pgvector', 'LLM pipelines', 'Evals', 'Programmatic SEO', 'Claude Code', 'n8n']],
  ['Marketing', ['Demand generation', 'Integrated campaigns', 'Field & experiential', 'Employer brand', 'Content strategy', 'Product marketing', 'Budget & ROI']],
  ['Partnerships & GTM', ['Partner ecosystems', 'Co-marketing', 'Channel strategy', 'Partner enablement', 'Business development', 'Pipeline ownership', 'CXO stakeholders']],
  ['Tools & Channels', ['LinkedIn Ads', 'Meta Ads', 'Google Analytics', 'Attribution', 'Webflow', 'Canva', 'Mailchimp', 'Notion', 'HubSpot']],
];

const CERTS: [string, string][] = [
  ['Brand Management', 'London Business School · 2022'],
  ['Customer Analytics', 'Wharton, UPenn · 2021'],
  ['Financial Accounting', 'Wharton, UPenn · 2023'],
  ['Data Analytics', 'IBM · 2021'],
];

export default function WorkPage() {
  return (
    <div className="container">
      <section className="page-hero" style={{ maxWidth: '62ch' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>Reverse chronological</span>
        <h1>The <span className="ital">work.</span></h1>
        <p className="lead">Three companies in six years — a NASDAQ firm, a Tiger Global–backed insurtech, a fintech. Most of it built from, or near, zero.</p>
      </section>

      {ROLES.map((r) => (
        <section className="role" key={r.idx}>
          <div>
            <span className="role-idx">{r.idx}</span>
            <h2>{r.title}</h2>
            <p className="role-co">{r.company}</p>
            {r.stats && (
              <div className="role-stats">
                {r.stats.map((s) => (
                  <div className="role-stat" key={s.l}>
                    <p className={`n${s.accent ? ' accent' : ''}`}>{s.n}</p>
                    <p className="l">{s.l}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={!r.bullets ? { display: 'flex', alignItems: 'center' } : undefined}>
            <p className="role-summary" style={!r.bullets ? { margin: 0, color: 'var(--muted)' } : undefined}>{r.summary}</p>
            {r.bullets && (
              <div className="bullets">
                {r.bullets.map((b) => <p className="bullet" key={b}>{b}</p>)}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="section-top">
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 8 }}>Across disciplines</span>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.06, margin: '0 0 8px' }}>Capabilities.</h2>
        <p className="lead" style={{ maxWidth: '56ch', fontSize: 15, margin: '0 0 30px' }}>
          Marketing and partnerships is the visible half. The other half is the product itself, built in code.
        </p>
        <div className="caps-grid">
          {CAPS.map(([h, items]) => (
            <div key={h}>
              <h3 className="cap-h">{h}</h3>
              <div className="caps">{items.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-top">
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 24 }}>Education &amp; certifications</span>
        <div className="edu-grid">
          <div>
            <h3 className="serif" style={{ fontWeight: 600, fontSize: 23, lineHeight: 1.2, margin: '0 0 6px' }}>B.Tech, Information &amp; Communication Technology</h3>
            <p className="role-co">DA-IICT (Dhirubhai Ambani Institute), Gujarat · 2020</p>
          </div>
          <div>
            <h3 className="serif" style={{ fontWeight: 600, fontSize: 18, margin: '0 0 14px' }}>Executive certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {CERTS.map(([l, r], i) => (
                <div className={`cert-row${i === CERTS.length - 1 ? ' last' : ''}`} key={l}>
                  <span className="l">{l}</span>
                  <span className="r">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
