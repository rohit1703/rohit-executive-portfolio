import './globals.css';
import type { Metadata } from 'next';
import { serif, sans, body } from '@/lib/fonts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BottomBar from '@/components/BottomBar';

export const metadata: Metadata = {
  title: 'Rohit Mallavarapu — Builder-Marketer',
  description:
    'Six years in B2B marketing and partnerships — and now I build the product too. Currly, the AI workflow platform I designed and shipped solo.',
  icons: { icon: '/favicon.svg' },
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
      </body>
    </html>
  );
}
