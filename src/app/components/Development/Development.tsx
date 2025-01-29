'use client';
import FadeIn from '../Animation/FadeIn';

export default function Development() {
  return (
    <section id="development" className="container mx-auto px-4 py-20 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center">Desenvolvimento de Software e Aplicativos Sob Medida</h2>
          <p className="text-lg mb-12 text-center text-gray-300">
            Na 8KSOFT, desenvolvemos soluções digitais modernas e personalizadas que atendem às necessidades específicas
            de cada cliente.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn direction="up" delay={0.1}>
            <div className="group">
              <div
                className="bg-background/50 p-6 rounded-lg border border-primary/20 
                            hover:border-primary/40 transition-all h-full"
              >
                <div
                  className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center 
                              group-hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Sistemas Modernos</h3>
                <p className="text-gray-300">
                  Criamos sistemas completos e escaláveis utilizando JavaScript com Node.js no backend e Next.js no
                  frontend.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="group">
              <div
                className="bg-background/50 p-6 rounded-lg border border-primary/20 
                            hover:border-primary/40 transition-all h-full"
              >
                <div
                  className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center 
                              group-hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Aplicativos iOS e Android</h3>
                <p className="text-gray-300">
                  Desenvolvemos aplicativos nativos e cross-platform com Flutter, oferecendo desempenho de alto nível e
                  uma experiência de usuário intuitiva e funcional.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="group">
              <div
                className="bg-background/50 p-6 rounded-lg border border-primary/20 
                            hover:border-primary/40 transition-all h-full"
              >
                <div
                  className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center 
                              group-hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Desenvolvimento de Websites</h3>
                <p className="text-gray-300">
                  Projetamos e implementamos websites modernos e responsivos usando Next.js, integrando sistemas
                  personalizados diretamente ao site para uma experiência totalmente conectada e eficiente.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-12 text-center">
            <a
              href="/projects"
              className="inline-block px-6 py-3 border border-primary/20 text-primary rounded-lg 
                        hover:border-primary/40 transition-colors"
            >
              Ver Nossos Projetos
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
