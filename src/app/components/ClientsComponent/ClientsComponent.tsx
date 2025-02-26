'use client';

import { motion } from 'framer-motion';
import ClientOnly from '../ClientOnly/ClientOnly';
import FadeIn from '../Animation/FadeIn';
import Image from 'next/image';
// import { useMediaQuery } from '@/hooks/useMediaQuery';

const clients = [
  {
    name: 'Auroque Investimentos',
    logo: '/images/projects/auroque/logo-nobg.png',
    description:
      'Auroque Investimentos é uma empresa de investimentos que oferece soluções de investimento em ações e fundos de investimento.',
  },
  {
    name: 'Quebrando as Bancas',
    logo: '/images/projects/plataforma-qb/logo-qb.png',
    description:
      'A Quebrando as Bancas integra Inteligência Artificial (IA) para corrigir redações e validar questões, oferecendo feedbacks precisos.',
  },
  {
    name: 'sim;paul',
    logo: '/images/projects/sim;paul/logo-simpaul.png',
    description:
      'A sim;paul Investimentos oferece soluções de investimento personalizadas, com foco em retornos consistentes.',
  },
  // Adicione mais clientes conforme necessário
];

export default function Clients() {
  // const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <ClientOnly>
      <section id="clients" className="container mx-auto px-4 py-20 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">Nossos Clientes</h2>
            <p className="text-lg mb-12 text-center text-gray-300">Empresas que confiam em nossas soluções</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <FadeIn key={client.name} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  className="flex flex-col justify-center items-center h-[350px] bg-background/50 p-6 rounded-lg border border-primary/20 
                           hover:border-primary/40 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        maxWidth: '100%',
                        maxHeight: '100%',
                      }}
                      priority={index < 3}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2 text-center">{client.name}</h3>
                  <p className="text-gray-300 text-center text-sm">{client.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </ClientOnly>
  );
}
