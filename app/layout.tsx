import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { serif, sans, body } from '@/lib/fonts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BottomBar from '@/components/BottomBar';

const SITE_URL = 'https://rohit-executive-portfolio.vercel.app';
const DESCRIPTION =
  'Six years in B2B marketing and partnerships — and now I build the product too. Currly, the AI workflow platform I designed and shipped solo.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Rohit Mallavarapu — Builder-Marketer',
  description: DESCRIPTION,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Rohit Mallavarapu',
    title: 'Rohit Mallavarapu — Builder-Marketer',
    description: DESCRIPTION,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rohit Mallavarapu — the marketer who ships the product' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Mallavarapu — Builder-Marketer',
    description: DESCRIPTION,
    images: ['/og.png'],
  },
};

// Set the theme before first paint to avoid a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('rohit-theme')||((window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <BottomBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
