import type { Metadata } from 'next';
import { LINKEDIN_ACTIVITY } from '@/lib/site';

export const metadata: Metadata = { title: 'Writing — Rohit Mallavarapu' };

const FEATURED: { cat: string; title: string; ex: string; href: string }[] = [
  { cat: 'Context engineering', title: 'What Context Engineering Actually Meant For Me',
    ex: "I ran ~250 million tokens building a platform. Over 95% of it was input — the context I re-loaded every session. Here's what the term actually means once you've lived it.",
    href: 'https://www.linkedin.com/posts/rohitmallavarapu17_contextengineering-ai-aiagents-ugcPost-7477600314964152324-LcAB' },
  { cat: 'AI-native', title: 'Marketing Will Work This Way by 2027. I Already Do.',
    ex: 'The autonomous-marketing whitepapers all draw the same five-stage roadmap. I got there in eighteen months, alone, mostly by breaking things — and they get the texture completely wrong.',
    href: 'https://www.linkedin.com/posts/rohitmallavarapu17_ai-aiagents-marketingleadership-ugcPost-7479997114245292032-jaOe' },
  { cat: 'Recognition', title: 'Top 25 Emerging Leaders, 2024',
    ex: "Named to the Indian Startup Times' Top 25 Emerging Leaders — a list for operators building from zero.",
    href: 'https://www.linkedin.com/posts/rohitmallavarapu17_the-new-wave-meet-the-25-emerging-community-activity-7185479454809305088-uJcV' },
];

const MORE: { cat: string; title: string; href: string }[] = [
  { cat: 'Milestone', title: 'One Year at Grid Dynamics', href: 'https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-preparetogrow-marketingleadership-activity-7351868351813505025-rrLn' },
  { cat: 'Community', title: 'The GrowthX Founders Masterclass', href: 'https://www.linkedin.com/posts/rohitmallavarapu17_raised-funds-on-a-piece-of-paper-proud-activity-7196057769240584192-K6v-' },
  { cat: 'CSR', title: 'Digital Empowerment with Nirmaan', href: 'https://www.linkedin.com/posts/rohitmallavarapu17_digitalempowerment-aiforgood-futureready-activity-7354100901751517184-QvaT' },
];

export default function WritingPage() {
  return (
    <div className="container">
      <section className="page-hero" style={{ maxWidth: '64ch' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>Notes from building</span>
        <h1>Selected <span className="ital">writing.</span></h1>
        <p className="lead">I write about building product as a marketer — what I&rsquo;m actually learning shipping Currly, and where the &ldquo;future of marketing&rdquo; whitepapers get it wrong. This is the most honest thing on the site.</p>
      </section>

      <section className="section" style={{ paddingBottom: 'clamp(40px,5vw,60px)' }}>
        <div className="feat-grid">
          {FEATURED.map((f) => (
            <a className="feat" href={f.href} target="_blank" rel="noopener noreferrer" key={f.title}>
              <span className="cat">{f.cat}</span>
              <h2>{f.title}</h2>
              <p className="ex">&ldquo;{f.ex}&rdquo;</p>
              <span className="read">Read on LinkedIn ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-top">
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>More posts</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {MORE.map((m, i) => (
            <a className={`link-row${i === MORE.length - 1 ? ' last' : ''}`} href={m.href} target="_blank" rel="noopener noreferrer" key={m.title}>
              <span><span className="link-cat">{m.cat}</span><span className="link-title">{m.title}</span></span>
              <span className="lgo">↗</span>
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--body)', fontSize: 14, margin: '22px 0 0' }}>
          <a href={LINKEDIN_ACTIVITY} target="_blank" rel="noopener noreferrer">Read more on LinkedIn →</a>
        </p>
      </section>
    </div>
  );
}
