'use client';

import FadeIn from '../Animation/FadeIn';
import ClientOnly from '../ClientOnly/ClientOnly';

const services = [
  {
    title: 'Desenvolvimento de Software',
    description: 'Sistemas modernos e aplicativos personalizados com Node.js, Next.js e Flutter.',
    features: ['Sistemas Web Modernos', 'Aplicativos iOS e Android', 'Websites Responsivos', 'Arquitetura Escalável'],
  },
  {
    title: 'Consultoria em Infraestrutura',
    description: 'Soluções personalizadas que garantem alta performance, segurança e escalabilidade.',
    features: ['Avaliação Estratégica', 'Modernização de TI', 'Segurança e Compliance', 'Monitoramento 24/7'],
  },
  {
    title: 'Business Intelligence',
    description: 'Transforme dados em insights acionáveis com nossas soluções de BI.',
    features: ['Engenharia de Dados', 'Modelagem e Otimização', 'Painéis Interativos', 'Análise Avançada'],
  },
  {
    title: 'Oracle Cloud',
    description: 'Especialistas em migração e gerenciamento na nuvem Oracle.',
    features: ['Migração de Dados', 'Integração de Sistemas', 'Otimização de Custos', 'Gestão de Recursos'],
  },
];

export default function Services() {
  return (
    <ClientOnly>
      <section id="services" className="container mx-auto px-4 py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-lg text-center text-gray-300 mb-12">
            Uma gama completa de serviços tecnológicos projetados para atender às demandas de empresas modernas.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div
                className="bg-background/50 p-6 rounded-lg border border-primary/20 
                          hover:border-primary/40 transition-all group"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </ClientOnly>
  );
}
