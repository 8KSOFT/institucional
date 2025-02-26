import type { Metadata } from 'next';

import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Header from './components/Header/Header';

import './globals.css';

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
        <ScrollProgress />
        <Header />
        {children}
      </body>
    </html>
  );
}
