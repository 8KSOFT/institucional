'use client';
import ClientOnly from '../ClientOnly/ClientOnly';
import FadeIn from '../Animation/FadeIn';
import { motion } from 'framer-motion';

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

              <div className="grid md:grid-cols-3 gap-8">
                {['Setores de Expertise', 'Soluções Completas', 'Compromisso com Resultados'].map((title) => (
                  <motion.div
                    key={title}
                    className="bg-zinc-900/50 p-6 rounded-lg"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                      {/* ... ícones ... */}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
                    <p className="text-gray-300">{/* ... descrições ... */}</p>
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
