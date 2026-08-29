'use client';

import ClientOnly from '@/app/components/ClientOnly/ClientOnly';
import FadeIn from '@/app/components/Animation/FadeIn';
import { motion } from 'framer-motion';

/**
 * Os três cards nasceram só com título — ícone e descrição eram comentários
 * vazios, e em produção apareciam como negrito solto. O conteúdo abaixo
 * amarra o que o parágrafo de abertura já promete (setores financeiro e
 * educacional) aos casos que estão em /projects.
 */
const cards = [
  {
    title: 'Setores de Expertise',
    // Ícone: prédio/instituição
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    description:
      'Educação e mercado financeiro, com sistemas em produção para a Quebrando as Bancas e a Auroque Investimentos — envolvendo IA, gestão de dados e infraestrutura própria.',
  },
  {
    title: 'Soluções Completas',
    // Ícone: servidor/nuvem
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    description:
      'Do código à infraestrutura: desenvolvemos a aplicação e também operamos a nuvem que a mantém no ar, na Oracle Cloud.',
  },
  {
    title: 'Compromisso com Resultados',
    // Ícone: gráfico de crescimento
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    description:
      'Acompanhamos cada projeto depois da entrega, com monitoramento contínuo e evolução conforme o negócio do cliente muda.',
  },
];

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <ClientOnly>
          <FadeIn>
            <div className="bg-background/50 p-8 rounded-lg border border-primary/20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Sobre a 8KSOFT</h2>
                <p className="text-lg mb-6 text-gray-300">
                  Fundada em abril de 2014, a 8KSOFT é uma empresa especializada em soluções tecnológicas voltadas para
                  os setores financeiro e educacional.
                </p>
                <p className="text-lg text-primary/80">
                  Nossa missão é transformar desafios em soluções tecnológicas inovadoras.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-sm:gap-0">
                {cards.map((card) => (
                  <motion.div
                    key={card.title}
                    className="bg-zinc-900/50 p-6 rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center max-sm:hidden">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </ClientOnly>
      </div>
    </section>
  );
}
