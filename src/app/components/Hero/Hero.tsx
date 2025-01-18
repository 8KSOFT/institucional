'use client';
import ClientOnly from '../ClientOnly/ClientOnly';
import FadeIn from '../Animation/FadeIn';
import BinaryAnimation from '../BinaryAnimation/BinaryAnimation';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <ClientOnly>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
          <div className="text-left md:w-1/2">
            <FadeIn direction="up">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                8KSOFT
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-2xl md:text-3xl text-primary/80">
                Tecnologia segura, robusta e inovadora para o seu negócio.
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Soluções digitais modernas e personalizadas que atendem às necessidades específicas de cada cliente.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="mt-8 flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Fale Conosco
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 border border-primary/20 text-primary rounded-lg hover:border-primary/40 transition-colors"
                >
                  Nossos Serviços
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2} className="md:w-1/2 flex justify-center">
            <BinaryAnimation />
          </FadeIn>
        </div>
      </ClientOnly>
    </section>
  );
}
