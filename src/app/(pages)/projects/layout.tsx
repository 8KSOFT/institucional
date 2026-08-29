import type { Metadata } from 'next';

// Mesmo motivo do layout de /products: a página é client component e não
// pode exportar metadata por conta própria.
export const metadata: Metadata = {
  title: '8KSOFT - Projetos',
  description:
    'Projetos entregues pela 8KSOFT para clientes como Auroque Investimentos e Quebrando as Bancas, em Next.js, Node.js e Oracle Cloud.',
  alternates: { canonical: 'https://8ksoft.com/projects' },
  openGraph: {
    title: '8KSOFT - Projetos',
    description: 'Projetos entregues pela 8KSOFT para seus clientes.',
    url: 'https://8ksoft.com/projects',
    siteName: '8KSOFT',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
