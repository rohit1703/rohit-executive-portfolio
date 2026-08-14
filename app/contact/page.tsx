import type { Metadata } from 'next';
import { CAL, EMAIL, PHONE, PHONE_HREF, LINKEDIN, RESUME } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact — Rohit Mallavarapu' };

export default function ContactPage() {
  return (
    <div className="container">
      <section style={{ padding: 'clamp(48px,7vw,104px) 0 clamp(30px,4vw,56px)' }}>
        <figure className="pull">
          <blockquote>
            &ldquo;I&rsquo;m looking for the one role where marketing the product and <em>building it</em> are the same job.&rdquo;
          </blockquote>
        </figure>
        <span className="mini-eyebrow" style={{ letterSpacing: '.16em', marginBottom: 16 }}>Get in touch</span>
        <h1 className="serif" style={{ fontWeight: 600, fontSize: 'clamp(42px,6vw,80px)', lineHeight: 1, letterSpacing: '-.02em', margin: 0 }}>
          Open to the <span className="ital">right role.</span>
        </h1>
        <p className="lead" style={{ maxWidth: '54ch' }}>
          Six years in B2B marketing and partnerships, and an AI platform I build solo. I want a
          role that uses both. I can start immediately — book a time below, or just email me.
        </p>
        <div style={{ marginTop: 28 }}>
          <a className="pill pill-primary" href={CAL} target="_blank" rel="noopener noreferrer">Book a call ↗</a>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 'clamp(44px,6vw,80px)' }}>
        <div className="contact-rows">
          <a className="contact-row" href={`mailto:${EMAIL}`}><span className="k">Email</span><span className="v">{EMAIL}</span></a>
          <a className="contact-row" href={PHONE_HREF}><span className="k">Phone</span><span className="v tnum">{PHONE}</span></a>
          <a className="contact-row" href={LINKEDIN} target="_blank" rel="noopener noreferrer"><span className="k">LinkedIn</span><span className="v">in/rohitmallavarapu17</span></a>
          <a className="contact-row" href={RESUME}><span className="k">Résumé</span><span className="v">Download PDF</span></a>
          <div className="contact-row b"><span className="k">Location</span><span className="v">Bengaluru · open to remote &amp; relocation</span></div>
          <div className="contact-row b"><span className="k">Languages</span><span className="v">English · Hindi · Telugu</span></div>
        </div>
      </section>
    </div>
  );
}
