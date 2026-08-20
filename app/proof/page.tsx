import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Proof — Rohit Mallavarapu' };

const BAND: [string, string][] = [
  ['54', 'Partnerships, from zero'],
  ['$7M', 'Channel revenue · 20x'],
  ['$3M+', 'Key accounts at Plum'],
  ['150K', 'Consumers reached'],
];

const QUOTES: { q: string; name: string; cap: string }[] = [
  { q: "I managed Rohit for two years at Grid Dynamics, across client, talent, and brand marketing. He earns trust and respect by saying what he means and doing what he says — you knew where you stood, you knew he would follow through, and you knew he cared about getting the work right. He is an effective marketer, a trusted colleague, and an exceptional human being.", name: 'Cary Savas', cap: 'Brand & Demand Leader, Grid Dynamics' },
  { q: 'Rohit approaches work like a sport, always playing as a team player. A natural community builder, he has taken on various roles at Plum, from building partnerships to experiential marketing.', name: 'Saurabh Arora', cap: 'Co-Founder & CTO, Plum Benefits' },
  { q: 'Rohit is the go-to person and the load balance between internal customers and external stakeholders. Managing him was easy when he was hitting his goals, and rewarding when he pushed the whole team toward newer possibilities and use cases.', name: 'Adwitiya Singh', cap: 'Head, BFSI & Payroll, Clear' },
  { q: "I had the pleasure of working with Rohit at Plum, and he's one of the most high-energy people I've worked with. He was the driving force behind many key initiatives, bringing innovative ideas and exceptional execution to the table.", name: 'Abhishek Poddar', cap: 'Co-Founder & CEO, Plum Benefits' },
  { q: "Rohit's energy and grit is unmatched. He ideates, executes, and achieves his goals. He picked up new initiatives, aligned internal teams, managed external stakeholders, and made all of them a success.", name: 'Shriya Shah', cap: 'Performance Lead, Plum Benefits' },
  { q: 'Rohit consistently went above and beyond, leading multiple high-impact campaigns with real success. His ability to stay upbeat and focused is rare. I wish him all the best.', name: 'Prerit Bajaj', cap: 'Associate Director, ABM, Plum Benefits' },
  { q: "During my internship I was struck by how effortlessly Rohit handled even the toughest client — a skill that usually takes years. He was always helpful, led by example, and kept the team's morale up.", name: 'Tanushree Upadhyay', cap: 'Account Management, Clear' },
  { q: "Rohit was an integral part of the team, with real zeal for challenging tasks and closing them with the best solution. His dedication is tremendous. He's an asset to any company he works for.", name: 'Akshay Bhatt', cap: 'Strategic Alliances & Growth, Clear' },
  { q: "One of the most hardworking, dedicated people I've worked with — basically the all-rounder of the team, across every vertical. I'd love the chance to work with him again.", name: 'Abhishek Srivastava', cap: 'Partnerships, Clear' },
  { q: 'I have had an immense honour to work alongside Rohit, although we are on opposite sides of the planet. He is a memorable colleague and a wonderful professional — always on point, always innovating his way of working and delivering super fast and accurate. Any employer would be lucky to have him in their team.', name: 'Petrisor Guta', cap: 'Senior Comms & Social Strategist, Grid Dynamics' },
];

export default function ProofPage() {
  return (
    <div className="container">
      <section className="page-hero" style={{ maxWidth: '62ch' }}>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 18 }}>The record</span>
        <h1>Proof of <span className="ital">work.</span></h1>
        <p className="lead">I build channels from zero and run them like I own the outcome. The numbers first — then the people I built them with.</p>
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
