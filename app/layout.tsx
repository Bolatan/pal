import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { LanguageProvider } from '@/components/language-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ile-Ife Platform — The Source of Yoruba Civilization',
    template: '%s | Ile-Ife Platform',
  },
  description:
    'The official digital home of Ile-Ife, the ancestral cradle of the Yoruba people. Explore the palace of the Ooni, community news, cultural heritage, development projects, and the marketplace.',
  openGraph: {
    title: 'Ile-Ife Platform — The Source of Yoruba Civilization',
    description:
      'The official digital home of Ile-Ife — palace, community, heritage, development, and marketplace.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} font-body`}>
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
