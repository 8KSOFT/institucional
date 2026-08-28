import type { Metadata } from 'next';

import ScrollProgress from '@/app/components/ScrollProgress/ScrollProgress';
import Header from '@/app/components/Header/Header';
import Analytics from '@/app/components/Analytics/Analytics';
import CookieConsent from '@/app/components/CookieConsent/CookieConsent';
import { MenuProvider } from '@/app/context/MenuProvider';

import '@/app/globals.css';

// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '8KSOFT - Technology Consulting',
  description: 'Consultoria em tecnologia e desenvolvimento de software',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
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
