import type { Metadata } from 'next';

const WORK_DESC =
  'Three companies in six years — a NASDAQ firm, a Tiger Global–backed insurtech, a fintech. $10M+ in revenue and pipeline, 100+ partnerships built from zero, 35+ events hosted.';

export const metadata: Metadata = {
  title: 'Work — Rohit Mallavarapu',
  description: WORK_DESC,
  openGraph: {
    type: 'website',
    url: '/work',
    title: 'The Work — Rohit Mallavarapu',
    description: WORK_DESC,
    images: [{ url: '/og-work.png', width: 1200, height: 630, alt: 'Rohit Mallavarapu — selected work, built from zero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Work — Rohit Mallavarapu',
    description: WORK_DESC,
    images: ['/og-work.png'],
  },
};

interface Role {
  idx: string; title: string; company: string; summary: string;
  stats?: { n: string; l: string; accent?: boolean }[];
  bullets?: string[];
}

const ROLES: Role[] = [
  {
    idx: '01 · Jul 2024 – Aug 2026', title: 'Marketing Lead, India', company: 'Grid Dynamics (NASDAQ: GDYN)',
    summary: "I ran India marketing on my own — client, talent, and brand. No team beneath me, no one checking the work day to day. So I built AI into everything and ran at a bigger team's pace.",
    stats: [{ n: '5,000+', l: 'Qualified prospects', accent: true }, { n: '80%', l: 'Brand awareness (from 20%)' }],
    bullets: [
      '12+ Dynamic Talks across 3 cities → 5,000+ qualified prospects. The best one pulled 664 registrations; 400+ was normal.',
      'Two flagship client events. The one with ISB put me in a room with 200+ Fortune 1000 CXOs.',
      "Brand awareness 20% → 80%. Glassdoor 3.2 → 3.9, AmbitionBox 2.0 → 3.1. India grew to 48% of the company's global LinkedIn following.",
      '1,200+ talent leads that influenced 20+ direct hires and 300+ more indirectly.',
      'Owned performance marketing end to end — paid social on LinkedIn and Meta: targeting, creative, budget, and attribution, reallocating spend toward higher-ROI channels.',
      "Built India's AI-employer positioning — a quarterly Dynamic Talks cadence and an AI Center of Excellence narrative tying local brand to global AI priorities.",
      'Ran full campaign cycles — research, content, decks, video — solo, by handing the team-sized parts to AI.',
      'Wrote the marketing SOPs adopted across all three India offices, and owned agency relationships and brand governance.',
    ],
  },
  {
    idx: '02 · Jul 2022 – Jul 2024', title: 'AGM, Partnerships', company: 'Plum Benefits (Tiger Global / Sequoia)',
    summary: 'I came in to build partnerships and community from nothing, and got promoted twice in under two years — Community Builder → Senior Associate → AGM.',
    stats: [{ n: '$3M+', l: 'Key accounts', accent: true }, { n: '45%', l: 'YoY partner growth' }],
    bullets: [
      'Built the partner ecosystem from zero — government bodies, associations, VCs, HRMS platforms, accelerators, incubators, and coworking networks.',
      '50+ partners in the first 6 months; 100+ enterprise accounts. Co-marketing playbooks and enablement assets across 50+ partner organizations.',
      '$3M+ in key accounts. 45% YoY partner growth. 35% lift in engagement.',
      'Drove community-led growth — CXO roundtables, founder forums, and joint webinars across 100+ enterprise accounts.',
      '8+ experiential events across 7 cities → 150 enterprise SALs. Top 25 Emerging Leaders 2024, Indian Startup Times.',
    ],
  },
  {
    idx: '03 · Feb 2021 – Jul 2022', title: 'Partnerships Manager, BFSI & Payroll', company: 'Clear (ClearTax)',
    summary: "My first channel from zero. I built ClearTax's BFSI & Payroll partnerships into $7M and 20x growth in a year — and got my first real taste of the product side.",
    stats: [{ n: '54', l: 'Partnerships built', accent: true }, { n: '20x', l: 'YoY growth' }],
    bullets: [
      'Built the BFSI & Payroll channel from scratch — 54 partnerships across banks, NBFCs, and fintechs.',
      '$7M in revenue, 20x in a year, 150,000 consumers reached — a category-leading ITR partner in BFSI.',
      'Shipped integrated BFSI campaigns — 50+ partner microsites, mailers and creative — coordinating Product, Legal, Tax, Social and Ops.',
      'Owned the API, CG, and PWA integrations end to end — where I first started thinking like a builder.',
      'Hosted webinars with fintech leaders end to end, converting attendance into partner pipeline.',
      'Led a 12-member team and lifted output 40%.',
    ],
  },
  {
    idx: 'Earlier · Jun 2020 – Jan 2021', title: 'GTM & Recruitment Consultant', company: 'Northlance Agency · Freelance',
    summary: 'Advised early-stage startups on go-to-market positioning, outbound, and hiring pipelines.',
  },
];

const CAPS: [string, string[]][] = [
  ['Technical & AI', ['Next.js', 'React', 'TypeScript', 'Python', 'Supabase', 'Postgres', 'pgvector', 'LLM pipelines', 'Evals', 'Programmatic SEO', 'Claude Code', 'n8n']],
  ['Marketing', ['Demand generation', 'Integrated campaigns', 'Field & experiential', 'Employer brand', 'Content strategy', 'Product marketing', 'Budget & ROI']],
  ['Partnerships & GTM', ['Partner ecosystems', 'Co-marketing', 'Channel strategy', 'Partner enablement', 'Business development', 'Pipeline ownership', 'CXO stakeholders']],
  ['Tools & Channels', ['LinkedIn Ads', 'Meta Ads', 'Google Analytics', 'Attribution', 'Webflow', 'Framer', 'Canva', 'Mailchimp', 'Notion', 'HubSpot', 'Salesforce']],
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
      <section className="page-hero" style={{ maxWidth: '64ch' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>Reverse chronological</span>
        <h1>The <span className="ital">work.</span></h1>
        <p className="lead">Three companies in six years — a NASDAQ firm, a Tiger Global–backed insurtech, a fintech. I built most of what&rsquo;s here from zero, or close to it. This is the marketing-and-partnerships half of the story. Currly is the other half.</p>
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
        <p className="lead" style={{ maxWidth: '58ch', fontSize: 15, margin: '0 0 30px' }}>
          The marketing and partnerships is the half people expect. The other half is the product itself, written in code. Here&rsquo;s what I actually work with.
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
