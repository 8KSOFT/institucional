'use client';
import ClientOnly from '../ClientOnly/ClientOnly';
import FadeIn from '../Animation/FadeIn';
import BinaryAnimation from '../BinaryAnimation/BinaryAnimation';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <ClientOnly>
        <div className="h-[400px] flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="pt-5 w-full h-full flex flex-col justify-between text-left md:w-1/2">
            <FadeIn direction="up">
              <div className="flex items-center justify-start text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                <Image src="/logo.png" alt="8KSOFT" width={150} height={150} />
              </div>
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
          <FadeIn direction="up" delay={0.3} className="md:w-1/2 relative">
            <div className="w-full relative h-full flex justify-start">
              <BinaryAnimation />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-background/80 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </ClientOnly>
    </section>
  );
}
