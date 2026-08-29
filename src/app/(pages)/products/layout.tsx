import type { Metadata } from 'next';

// A página é client component ('use client') e por isso não pode exportar
// metadata. Este layout existe só para isso: sem ele a rota herda o título e
// a descrição do layout raiz e aparece na busca como "8KSOFT - Technology
// Consulting", igual à home.
export const metadata: Metadata = {
  title: '8KSOFT - Produtos',
  description:
    'Produtos próprios da 8KSOFT, como o NixVetApp — sistema de gestão para clínicas veterinárias com prontuário, agenda, financeiro e atendimento no WhatsApp.',
  alternates: { canonical: 'https://8ksoft.com/products' },
  openGraph: {
    title: '8KSOFT - Produtos',
    description: 'Produtos próprios da 8KSOFT para gestão e automação de negócios.',
    url: 'https://8ksoft.com/products',
    siteName: '8KSOFT',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
