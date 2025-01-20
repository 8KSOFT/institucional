'use client';
import ClientOnly from '../ClientOnly/ClientOnly';
import FadeIn from '../Animation/FadeIn';
import BinaryAnimation from '../BinaryAnimation/BinaryAnimation';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-20 md:pt-32 pb-12 md:pb-20 max-sm:w-full">
      <ClientOnly>
        <div className="min-h-[400px] flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto max-sm:w-full">
          <div className="pt-5 w-full h-full flex flex-col justify-between text-left md:w-1/2">
            <FadeIn direction="up">
              <div className="flex items-center justify-start text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text max-sm:w-full">
                <Image
                  src="/logo.png"
                  alt="8KSOFT"
                  width={150}
                  height={100}
                  className="w-[100px] h-[65px] sm:w-[120px] sm:h-[80px] md:w-[150px] md:h-[100px]"
                />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-primary/80">
                Tecnologia segura, robusta e inovadora para o seu negócio.
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300">
                Soluções digitais modernas e personalizadas que atendem às necessidades específicas de cada cliente.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="mt-6 md:mt-8 flex gap-3 md:gap-4">
                <a
                  href="#contact"
                  className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Fale Conosco
                </a>
                <a
                  href="#services"
                  className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base border border-primary/20 text-primary rounded-lg hover:border-primary/40 transition-colors"
                >
                  Nossos Serviços
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.3} className="mt-8 md:mt-0 md:w-1/2 relative max-sm:w-full">
            <div className="relative w-full h-full flex items-center justify-center">
              <BinaryAnimation />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-background/80 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </ClientOnly>
    </section>
  );
}
