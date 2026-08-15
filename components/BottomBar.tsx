'use client';

import { CAL, EMAIL, LINKEDIN } from '@/lib/site';

/** Fixed mobile action bar (≤820px); replaces the top nav links on small screens. */
export default function BottomBar() {
  return (
    <div className="bottombar">
      <a className="primary" href={CAL} target="_blank" rel="noopener noreferrer" aria-label="Book a call">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="16.5" rx="2" /><path d="M3 9.5h18M8 2.5v4M16 2.5v4" /></svg>
        <span>Book a call</span>
      </a>
      <a href={`mailto:${EMAIL}`} aria-label="Email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
        <span>Email</span>
      </a>
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7.5 0h3.84v2.19h.05c.53-1 1.84-2.19 3.79-2.19 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.87c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V24h-4V8Z" /></svg>
        <span>LinkedIn</span>
      </a>
      <a href="#top" aria-label="Back to top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6M6 12l6-6 6 6" /></svg>
        <span>Top</span>
      </a>
    </div>
  );
}
