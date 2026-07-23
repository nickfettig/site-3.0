import { Geist, Geist_Mono } from "next/font/google";

// Body / prose
export const sans = Geist({
  subsets: ['latin'],
  display: 'swap',
});

// Titles, name, nav, tech tags, footer
export const mono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
});
