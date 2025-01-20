'use client';
import FadeIn from '../Animation/FadeIn';

export default function Infrastructure() {
  const features = [
    {
      title: 'Avaliação e Planejamento Estratégico',
      description: 'Realizamos um diagnóstico completo da sua infraestrutura atual.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Path simplificado
    },
    {
      title: 'Implementação e Modernização',
      description: 'Projetamos e implementamos soluções modernas.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7', // Path simplificado
    },
    {
      title: 'Segurança e Compliance',
      description: 'Desenvolvemos estratégias para proteger seus dados e operações.',
      icon: 'M12 15v2m-6 4h12a2 2 0...', // SVG path
    },
    {
      title: 'Monitoramento e Suporte',
      description: 'Oferecemos suporte e monitoramento proativos para manter sua infraestrutura.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2...', // SVG path
    },
  ];

  return (
    <section id="infrastructure" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center">Consultoria em Infraestrutura</h2>
          <p className="text-lg mb-12 text-center text-gray-300">
            Ajudamos empresas a otimizar, modernizar e escalar suas infraestruturas de TI para atender às demandas de um
            mundo cada vez mais conectado.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div
                className="bg-background/50 h-full p-6 rounded-lg border border-primary/20 
                            hover:border-primary/40 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-12 p-6 bg-background/50 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-primary text-center">Por Que Escolher a 8KSOFT?</h3>
            <p className="text-gray-300 text-center">
              Combinamos expertise técnica, anos de experiência e uma abordagem orientada a resultados. Nosso objetivo é
              transformar sua infraestrutura em um pilar estratégico para o sucesso do seu negócio.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
