import type { Metadata } from 'next';

import ScrollProgress from '@/app/components/ScrollProgress/ScrollProgress';
import Header from '@/app/components/Header/Header';
import Analytics from '@/app/components/Analytics/Analytics';
import CookieConsent from '@/app/components/CookieConsent/CookieConsent';
import { MenuProvider } from '@/app/context/MenuProvider';
import { OG_IMAGE, SITE_URL } from '@/app/lib/seo';

import '@/app/globals.css';

// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // metadataBase resolve as URLs relativas de openGraph/twitter para absolutas,
  // que é a única forma que as redes aceitam.
  metadataBase: new URL(SITE_URL),
  title: '8KSOFT - Technology Consulting',
  description: 'Consultoria em tecnologia e desenvolvimento de software',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
  },
  openGraph: {
    title: '8KSOFT - Technology Consulting',
    description: 'Consultoria em tecnologia e desenvolvimento de software',
    url: SITE_URL,
    siteName: '8KSOFT',
    locale: 'pt_BR',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: '8KSOFT - Technology Consulting',
    description: 'Consultoria em tecnologia e desenvolvimento de software',
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative bg-background">
        <MenuProvider>
        <ScrollProgress />
        <Header />
          {children}
        </MenuProvider>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
