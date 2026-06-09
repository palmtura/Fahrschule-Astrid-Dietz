import type {Metadata} from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import CookieBanner from '@/components/CookieBanner';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Fahrschule Astrid Dietz | Fahrschule Gründau',
  description: 'Deine moderne Fahrschule in Gründau, Gelnhausen, Hailer, Linsengericht, Büdingen, Hanau & Wächtersbach. Erfolgreich und mit Spaß zum Führerschein.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-800" suppressHydrationWarning>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
