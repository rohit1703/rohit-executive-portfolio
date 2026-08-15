'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { CAL, NAV_LINKS } from '@/lib/site';

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">✷ ROHIT</Link>
      <div className="nav-desktop">
        {NAV_LINKS.map(([href, label]) => (
          <Link key={href} href={href} className="navlink" data-here={path === href ? '1' : undefined}>
            {label}
          </Link>
        ))}
        <ThemeToggle />
        <a className="pill pill-primary" href={CAL} target="_blank" rel="noopener noreferrer">
          Book a call ↗
        </a>
      </div>
      <div className="nav-mobile-actions">
        <ThemeToggle />
      </div>
    </nav>
  );
}
