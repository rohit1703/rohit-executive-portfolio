import { Cormorant_Garamond, Archivo, Lora } from 'next/font/google';

// Font-family CSS variables consumed by globals.css (--serif/--sans/--body).
export const serif = Cormorant_Garamond({
  subsets: ['latin'], weight: ['400', '500', '600'],
  style: ['normal', 'italic'], variable: '--serif', display: 'swap',
});
export const sans = Archivo({
  subsets: ['latin'], weight: ['500', '600', '700', '800'],
  variable: '--sans', display: 'swap',
});
export const body = Lora({
  subsets: ['latin'], weight: ['400', '500', '600'],
  variable: '--body', display: 'swap',
});
