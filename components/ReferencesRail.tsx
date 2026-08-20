'use client';

import { useState } from 'react';
import { REFERENCES } from '@/lib/content';

// Render a quote's segments, wrapping highlighted phrases in .hl. Falls back to
// the single-highlight pre/hl/post shape for references not split into parts.
function renderQuote(r: { pre?: string; hl?: string; post?: string; parts?: { t: string; hl?: boolean }[] }) {
  if (r.parts) {
    return r.parts.map((p, i) =>
      p.hl ? <span className="hl" key={i}>{p.t}</span> : <span key={i}>{p.t}</span>,
    );
  }
  return (
    <>
      {r.pre}
      <span className="hl">{r.hl}</span>
      {r.post}
    </>
  );
}

/**
 * Desktop: a featured quote + a rail of names; hovering/clicking a name swaps
 * the featured quote. Mobile (≤900): an accordion — tapping a name reveals its
 * quote inline right below it (the featured column is hidden), so touch users
 * see the result of their tap.
 */
export default function ReferencesRail() {
  const [active, setActive] = useState(0);
  const r = REFERENCES[active];

  return (
    <div className="refs">
      <div className="refs-featured">
        <blockquote className="feat-q">{renderQuote(r)}</blockquote>
        <p className="feat-c">
          <strong>{r.name}</strong> — {r.title}, {r.company}
        </p>
      </div>
      <div className="refs-rail">
        {REFERENCES.map((ref, i) => (
          <div className="railitem" key={ref.name}>
            <button
              className="railbtn"
              data-active={i === active ? '1' : undefined}
              aria-expanded={i === active}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="rn">{ref.name}</span>
              <span className="rt">{ref.title} · {ref.company}</span>
            </button>
            <blockquote className="railquote" data-open={i === active ? '1' : undefined}>{renderQuote(ref)}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
