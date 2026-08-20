import type { Metadata } from 'next';
import { REFERENCES } from '@/lib/content';
import { highlightQuote } from '@/lib/highlight';

export const metadata: Metadata = { title: 'Proof — Rohit Mallavarapu' };

const BAND: [string, string][] = [
  ['54', 'Partnerships, from zero'],
  ['$7M', 'Channel revenue · 20x'],
  ['$3M+', 'Key accounts at Plum'],
  ['150K', 'Consumers reached'],
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
          {REFERENCES.map((r) => (
            <figure key={r.name}>
              <blockquote>&ldquo;{highlightQuote(r.q, r.hls)}&rdquo;</blockquote>
              <figcaption><strong>{r.name}</strong> — {r.title}, {r.company}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
