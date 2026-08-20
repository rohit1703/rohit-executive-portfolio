import type { ReactNode } from 'react';

// Wrap each highlighted phrase in a quote with .hl (accent italic). Shared by the
// Home references rail and the /proof page so both render from one source.
export function highlightQuote(q: string, hls?: string[]): ReactNode {
  if (!hls || !hls.length) return q;
  const re = new RegExp('(' + hls.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'g');
  return q.split(re).map((seg, i) =>
    hls.includes(seg) ? <span className="hl" key={i}>{seg}</span> : <span key={i}>{seg}</span>,
  );
}
