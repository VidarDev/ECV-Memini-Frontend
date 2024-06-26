import { Raleway as FontRaleway, Playfair_Display as FontPangaia } from 'next/font/google';

export const fontRaleway = FontRaleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
export const fontPangaia = FontPangaia({
  subsets: ['latin'],
  variable: '--font-pangaia',
});
