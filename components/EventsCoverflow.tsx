'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { CoverflowItem } from '@/lib/content';

/**
 * EventsCoverflow — an auto-rotating 3D coverflow carousel.
 * Cards sit on a disc rotating toward the viewer; the centre card faces front.
 * Autoplays and loops; pauses on hover; steerable via arrows, dots, side cards.
 */
type Props = { items: CoverflowItem[]; interval?: number; seeMoreHref?: string };

export default function EventsCoverflow({ items, interval = 3200, seeMoreHref }: Props) {
  const n = items.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current =
      typeof window !== 'undefined' &&
      !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const go = useCallback((i: number) => setCurrent(((i % n) + n) % n), [n]);
  const next = useCallback(() => go(current + 1), [go, current]);
  const prev = useCallback(() => go(current - 1), [go, current]);

  // Autoplay restarts whenever `current` changes, so manual steps reset the timer.
  useEffect(() => {
    if (paused || reduceMotion.current || n <= 1) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % n), interval);
    return () => clearInterval(id);
  }, [paused, current, interval, n]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { next(); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { prev(); e.preventDefault(); }
  };

  const styleFor = (index: number): React.CSSProperties => {
    let off = index - current;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    const abs = Math.abs(off);
    return {
      transform: `translate(-50%, -50%) translateX(${off * 190}px) translateZ(${-abs * 260}px) rotateY(${off * -42}deg)`,
      opacity: abs > 2 ? 0 : 1 - abs * 0.28,
      zIndex: 100 - abs,
      pointerEvents: abs > 2 ? 'none' : 'auto',
    };
  };

  return (
    <section className="events-cf" aria-roledescription="carousel" aria-label="Selected appearances" onKeyDown={onKeyDown}>
      <span className="cf-eyebrow">Selected appearances</span>
      <h2 className="cf-heading">Events, hosted <em>end to end.</em></h2>

      <div className="cf-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="cf-track">
          {items.map((it, i) => {
            const isCenter = ((((i - current) % n) + n) % n) === 0;
            const card = (
              <>
                <div className="cf-pic"><img src={it.src} alt={it.alt} loading="lazy" style={it.pos ? { objectPosition: it.pos } : undefined} /></div>
                <div className="cf-lbl">
                  <div className="cf-ti">{it.title}</div>
                  <div className="cf-mt">{it.meta}</div>
                </div>
              </>
            );
            return (
              <div
                key={i}
                className={`cf-item${isCenter ? ' is-center' : ''}`}
                style={styleFor(i)}
                aria-hidden={!isCenter}
                onClick={() => { if (!isCenter) go(i); }}
              >
                {it.href && isCenter
                  ? <a href={it.href} target="_blank" rel="noopener noreferrer" className="cf-link">{card}</a>
                  : card}
              </div>
            );
          })}
        </div>
      </div>

      <div className="cf-controls">
        <button type="button" className="cf-nav" aria-label="Previous event" onClick={prev}>‹</button>
        <div className="cf-dots" role="tablist" aria-label="Events">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className="cf-dot"
              role="tab"
              aria-label={`Go to event ${i + 1}`}
              aria-selected={i === current}
              data-on={i === current ? '1' : '0'}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="cf-nav" aria-label="Next event" onClick={next}>›</button>
      </div>

      {seeMoreHref && (
        <p className="cf-more">
          <a href={seeMoreHref} target="_blank" rel="noopener noreferrer">See more on LinkedIn →</a>
        </p>
      )}
    </section>
  );
}
