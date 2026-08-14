import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Proof — Rohit Mallavarapu' };

const BAND: [string, string][] = [
  ['54', 'Partnerships, from zero'],
  ['₹7M', 'Channel revenue · 20x'],
  ['$3M+', 'Key accounts at Plum'],
  ['150K', 'Consumers reached'],
];

const QUOTES: { q: string; name: string; cap: string }[] = [
  { q: 'Rohit was the driving force behind many key initiatives at Plum, bringing innovative ideas and exceptional execution to the table.', name: 'Abhishek Poddar', cap: 'Co-Founder & CEO, Plum Benefits' },
  { q: 'The go-to person and the load balance between internal customers and external stakeholders. He pushed the whole team towards newer possibilities and use cases.', name: 'Adwitiya Singh', cap: 'Head BFSI, Payroll, Corp Alliances, Clear' },
  { q: 'Rohit approaches work like a sport, always playing as a team player. A natural community builder, from partnerships to experiential marketing.', name: 'Saurabh Arora', cap: 'Co-Founder & CTO, Plum Benefits' },
  { q: "Rohit's energy and grit is unmatched. He ideates, executes, and achieves all of his goals — aligning internal teams and managing external stakeholders to make each a success.", name: 'Shriya Shah', cap: 'Performance Lead, Plum Benefits' },
  { q: 'Rohit consistently went above and beyond, spearheading multiple high-impact campaigns with remarkable success. His infectious energy was a driving force behind our results.', name: 'Prerit Bajaj', cap: 'Associate Director, ABM, Plum Benefits' },
  { q: 'Impressed by his ability to handle even the toughest client effortlessly — a skill that often takes years. He leads by example and always kept team morale up.', name: 'Tanushree Upadhyay', cap: 'Account Management, Clear' },
  { q: 'Great zeal and enthusiasm towards challenging tasks, closing them with the best possible solution. An asset to any company he works for.', name: 'Akshay Bhatt', cap: 'Strategic Alliances & Growth, Clear' },
  { q: "One of the most hardworking and dedicated people I have worked with — the all-rounder of the team. I'd love the chance to work with him again.", name: 'Abhishek Srivastava', cap: 'Partnerships, Clear' },
  { q: 'A wonderful professional, always on point, always innovating his way of working and delivering super fast and accurate. Any employer would be lucky to have him in their team.', name: 'Petrisor Guta', cap: 'Senior Comms & Social Strategist, Grid Dynamics' },
];

export default function ProofPage() {
  return (
    <div className="container">
      <section className="page-hero" style={{ maxWidth: '62ch' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>The record</span>
        <h1>Proof of <span className="ital">work.</span></h1>
        <p className="lead">Channels built from zero and run with accountability. The numbers first, then the people I built them with.</p>
      </section>

      <section className="section" style={{ paddingBottom: 'clamp(30px,4vw,44px)' }}>
        <div className="band no-mark">
          {BAND.map(([n, l]) => (
            <div className="band-item" key={l}>
              <p className="band-num">{n}</p>
              <p className="band-label">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-top">
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 8 }}>References</span>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.06, margin: '0 0 30px' }}>
          What they <span className="ital">say.</span>
        </h2>
        <div className="proof-refs">
          {QUOTES.map((r) => (
            <figure key={r.name}>
              <blockquote>&ldquo;{r.q}&rdquo;</blockquote>
              <figcaption><strong>{r.name}</strong> — {r.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
