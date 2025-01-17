import './globals.css';
// import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '8KSoft - Technology Consulting',
  description: 'Consultoria em tecnologia e desenvolvimento de software',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative bg-background">{children}</body>
    </html>
  );
}
