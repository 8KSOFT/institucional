'use client';
import FadeIn from '../Animation/FadeIn';
import { motion } from 'framer-motion';
import ClientOnly from '../ClientOnly/ClientOnly';

export default function DataServices() {
  return (
    <section id="data" className="container mx-auto px-4 py-20 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <ClientOnly>
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">Business Intelligence e Engenharia de Dados</h2>
            <p className="text-lg mb-12 text-center text-gray-300">
              Acreditamos que dados são o coração de decisões estratégicas bem-sucedidas.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <motion.div
                className="bg-background/50 p-8 rounded-lg border border-primary/20 h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Engenharia de Dados</h3>
                <p className="text-gray-300 mb-4">
                  Projetamos e implementamos pipelines de dados escaláveis e eficientes.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pipelines de dados otimizados
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Integração de fontes diversas
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Processamento em tempo real
                  </li>
                </ul>
              </motion.div>
            </FadeIn>

            <FadeIn direction="right">
              <motion.div
                className="bg-background/50 p-8 rounded-lg border border-primary/20 h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Business Intelligence</h3>
                <p className="text-gray-300 mb-4">
                  Desenvolvemos painéis interativos e relatórios personalizados para oferecer uma visão clara e
                  detalhada dos indicadores de desempenho.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dashboards interativos
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Análise preditiva
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Relatórios automatizados
                  </li>
                </ul>
              </motion.div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.2}>
            <div className="mt-12 p-6 bg-background/50 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary text-center">
                Por que escolher o setor de BI e Engenharia de Dados da 8KSOFT?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300">Tecnologias de ponta para fluxo eficiente e seguro de dados</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300">Soluções personalizadas para cada cliente</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300">Transformação digital para vantagem competitiva</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </ClientOnly>
      </div>
    </section>
  );
}
