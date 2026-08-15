import { CAL, EMAIL, PHONE, PHONE_HREF, LINKEDIN, RESUME, NAV_LINKS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Let&rsquo;s build something.</h3>
          <p className="blurb">
            The rare both — I take products to market, and I build them. Looking for a
            role that needs both.
          </p>
          <a className="pill pill-primary" href={CAL} target="_blank" rel="noopener noreferrer" style={{ marginTop: 18 }}>
            Book a call ↗
          </a>
        </div>
        <div>
          <p className="col-h">Contact</p>
          <div className="col-links">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={PHONE_HREF}>{PHONE}</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={RESUME}>Résumé (PDF)</a>
          </div>
        </div>
        <div>
          <p className="col-h">Site</p>
          <div className="col-links">
            {NAV_LINKS.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p>© 2026 Rohit Mallavarapu · Bengaluru, India · English · Hindi · Telugu</p>
      </div>
    </footer>
  );
}
