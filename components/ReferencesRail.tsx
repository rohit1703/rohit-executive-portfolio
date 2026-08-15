'use client';

import { useState } from 'react';
import { REFERENCES } from '@/lib/content';

export default function ReferencesRail() {
  const [active, setActive] = useState(0);
  const r = REFERENCES[active];

  return (
    <div className="refs">
      <div>
        <blockquote className="feat-q">
          {r.pre}
          <span className="hl">{r.hl}</span>
          {r.post}
        </blockquote>
        <p className="feat-c">
          <strong>{r.name}</strong> — {r.title}, {r.company}
        </p>
      </div>
      <div>
        {REFERENCES.map((ref, i) => (
          <button
            key={ref.name}
            className="railbtn"
            data-active={i === active ? '1' : undefined}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="rn">{ref.name}</span>
            <span className="rt">{ref.title} · {ref.company}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
