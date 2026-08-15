import Link from 'next/link';
import ReferencesRail from '@/components/ReferencesRail';
import { EVENTS, GALLERY } from '@/lib/content';
import { CAL, LINKEDIN_ACTIVITY } from '@/lib/site';

const DISCIPLINES: { num: string; label: string; stat: string; body: string }[] = [
  { num: '01', label: 'Partnerships', stat: '$7M · 20x YoY', body: 'I build channels from zero. 54 BFSI partnerships at ClearTax, and two promotions at Plum building the ecosystem.' },
  { num: '02', label: 'Marketing', stat: '20% → 80%', body: "I ran a NASDAQ company's India marketing on my own — brand awareness up fourfold, 5,000+ qualified prospects." },
  { num: '03', label: 'Product', stat: '1,400+ tools', body: 'I build the thing itself. Currly — 111+ workflows, live in production. Written and shipped solo.' },
];

const STATS: [string, string][] = [
  ['$10M+', 'Revenue & pipeline'],
  ['100+', 'Partnerships, from zero'],
  ['35+', 'Events hosted'],
  ['6 yrs', 'Three companies'],
];

const ARC: { yr: string; co: string; sec: string; met: string; href: string }[] = [
  { yr: '2021 — 2022', co: 'Clear', sec: 'Fintech · ClearTax', met: '54 partnerships · $7M · 20x YoY', href: '/work' },
  { yr: '2022 — 2024', co: 'Plum', sec: 'Insurtech', met: '$3M+ key accounts · promoted twice', href: '/work' },
  { yr: '2024 — 2026', co: 'Grid Dynamics', sec: 'NASDAQ: GDYN', met: 'Brand 20% → 80% · 5,000+ prospects', href: '/work' },
  { yr: 'Now', co: 'Currly', sec: 'Built solo', met: '1,400+ tools · in production', href: '/currly' },
];

const CURRLY_ROWS: { label: string; width: string; val: string }[] = [
  { label: 'Semantic search · a 5-signal ranking engine I built', width: '82%', val: 'p95 <400ms' },
  { label: 'Paraphrase stability · measured on an eval harness I built', width: '62%', val: '29 → 62%' },
  { label: 'A 450+ builder community, fed by programmatic SEO', width: '45%', val: 'the loop runs itself' },
];

const PARTNER_TAGS = [
  'BFSI — banks & NBFCs', 'Payroll & HRMS', 'VCs', 'Accelerators', 'Incubators',
  'Coworking spaces', 'Government & associations', 'Fortune 1000 enterprises',
  'Global Capability Centres',
];

const WRITING: [string, string][] = [
  ['Context engineering', 'What Context Engineering Actually Meant For Me'],
  ['AI-native', 'Marketing Will Work This Way by 2027. I Already Do.'],
  ['Recognition', 'Top 25 Emerging Leaders, 2024'],
];

export default function Home() {
  return (
    <div className="container">
      {/* Hero — the why. No numbers yet. */}
      <section className="hero">
        <div>
          <span className="avail">
            Open to the right role
            <span className="avail-year">2026</span>
          </span>
          <h1>
            I got impatient with what one marketer could do.{' '}
            <em>So I taught myself to build.</em>
          </h1>
          <p className="lead">
            Six years in B2B marketing and partnerships — a NASDAQ company, a Tiger
            Global–backed insurtech, a fintech. Real work, real numbers. But I kept hitting
            the ceiling of what one marketer could do while waiting on someone else to build
            the thing.
          </p>
          <p className="lead">
            So I stopped waiting. I learned to code and shipped Currly, an AI workflow
            platform, on my own.
          </p>
          <p className="lead">
            I&rsquo;m two things that don&rsquo;t usually sit in one person: the marketer who
            takes a product to market, and the one who can build it. I want a role where
            those are the same job.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <a className="pill pill-primary" href={CAL} target="_blank" rel="noopener noreferrer">Book a call ↗</a>
          </div>
        </div>
        <figure className="hero-figure">
          <img src="/rohit.webp" alt="Rohit Mallavarapu" width={520} height={440} />
        </figure>
      </section>

      {/* Currly card — moved up: the surprising proof. */}
      <section className="section">
        <div className="ccard">
          <div className="ccard-head">
            <div>
              <span className="eyebrow faint">Now building</span>
              <p className="ccard-lead">This is the part people don&rsquo;t expect. So I put it first.</p>
              <h3 className="ccard-title">Currly — in production</h3>
            </div>
            <span className="live">LIVE ●</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            {CURRLY_ROWS.map((row) => (
              <div className="crow" key={row.label}>
                <span className="crow-chip" />
                <span className="crow-label">{row.label}</span>
                <span className="crow-bar"><span style={{ width: row.width }} /></span>
                <span className="crow-val">{row.val}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 22 }}>
            <Link className="pill pill-ghost" href="/currly">The full build ▸</Link>
          </div>
        </div>
      </section>

      {/* Through-line — the rare-both case, in plain words. */}
      <section className="section">
        <div className="through-head">
          <span className="eyebrow faint">Built across three disciplines</span>
          <h2>Everything in <span className="ital">one story.</span></h2>
          <div className="through-intro">
            <p>Most people in my field are one thing — a partnerships person, a demand-gen marketer, a builder. I ended up all three because I got restless staying in one lane, and it turns out they compound: partnerships taught me how buyers actually decide, marketing taught me how to move them, and building the product taught me what&rsquo;s true underneath both.</p>
          </div>
        </div>
        <div className="disc-3">
          {DISCIPLINES.map((d) => (
            <div className="disc" key={d.label}>
              <span className="disc-num">{d.num}</span>
              <span className="disc-label">{d.label}</span>
              <p className="disc-stat">{d.stat}</p>
              <p className="disc-body">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stat band — now it pays off the story. */}
      <section className="section">
        <div className="band">
          {STATS.map(([num, label]) => (
            <div className="band-item" key={label}>
              <p className="band-num">{num}</p>
              <p className="band-label">{label}</p>
            </div>
          ))}
          <span className="band-mark">✷</span>
        </div>
      </section>

      {/* Career arc */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow faint">The arc, in order</span>
            <h2 className="serif" style={{ fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.04, margin: '10px 0 0' }}>
              Six years, <span className="ital">four chapters.</span>
            </h2>
          </div>
          <Link className="pill pill-ghost" href="/work">See the full work →</Link>
        </div>
        <div className="arc-wrap">
          <div className="arc-line" />
          {ARC.map((a) => (
            <Link className="arc" href={a.href} key={a.co}>
              <span className="yr">{a.yr}</span>
              <span className="co">{a.co}</span>
              <span className="sec">{a.sec}</span>
              <span className="met">{a.met}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="section" style={{ paddingBottom: 'clamp(40px,6vw,72px)' }}>
        <div className="section-head" style={{ marginBottom: 28 }}>
          <div>
            <span className="eyebrow faint">References</span>
            <h2 className="serif" style={{ fontSize: 'clamp(30px,3.4vw,44px)', lineHeight: 1.04, margin: '10px 0 0' }}>
              What they <span className="ital">say.</span>
            </h2>
          </div>
          <Link className="pill pill-ghost" href="/proof">All references &amp; events →</Link>
        </div>
        <ReferencesRail />
      </section>

      {/* Partnerships across */}
      <section className="section" style={{ paddingBottom: 'clamp(40px,5vw,60px)' }}>
        <span className="mini-eyebrow">Partnerships built across</span>
        <div className="tagrow">
          {PARTNER_TAGS.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      </section>

      {/* Events */}
      <section style={{ borderTop: '1px solid var(--line)', padding: 'clamp(40px,5vw,64px) 0' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 8 }}>Selected appearances</span>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.06, margin: '0 0 26px' }}>
          Events, hosted <span className="ital">end to end.</span>
        </h2>
        <div className="events">
          {EVENTS.map((ev) => (
            <a className="ev" href={ev.href} target="_blank" rel="noopener noreferrer" key={ev.title}>
              <span className="evthumb"><img src={ev.photo} alt="" loading="lazy" /></span>
              <span className="ev-title">{ev.title}</span>
              <span className="evgo">↗</span>
            </a>
          ))}
        </div>

        {/* Full photo set — aspect-ratio masonry so nothing is cropped. */}
        <div className="gallery-masonry">
          {GALLERY.map((g) => (
            <a className="gmoment" href={g.href} target="_blank" rel="noopener noreferrer" key={g.src}>
              <img src={g.src} width={g.w} height={g.h} alt={g.caption} loading="lazy" />
              <span className="cap">
                <span className="gt">{g.tag}</span>
                <span className="gc">{g.caption}</span>
              </span>
            </a>
          ))}
        </div>

        <p style={{ fontFamily: 'var(--body)', fontSize: 14, margin: '22px 0 0' }}>
          <a href={LINKEDIN_ACTIVITY} target="_blank" rel="noopener noreferrer">See more on LinkedIn →</a>
        </p>
      </section>

      {/* Latest writing — "how I think" */}
      <section className="section" style={{ paddingBottom: 'clamp(30px,4vw,56px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid var(--line)', paddingTop: 24 }}>
          <span className="eyebrow faint">How I think</span>
          <Link className="navlink" href="/writing" style={{ fontSize: 14 }}>All posts →</Link>
        </div>
        <div className="writing-3" style={{ marginTop: 26 }}>
          {WRITING.map(([cat, title]) => (
            <Link className="card-hover wcard" href="/writing" key={title}>
              <span className="cat">{cat}</span>
              <h4>{title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
