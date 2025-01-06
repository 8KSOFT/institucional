import Header from './components/Header/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="container mx-auto px-4 pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
            <div className="text-left md:w-1/2">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                8KSOFT
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary/80">Technology Consulting & Software Development</h2>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border-2 border-primary rounded-full animate-pulse [animation-delay:0.2s]"></div>
                <div className="absolute inset-8 border-2 border-primary rounded-full animate-pulse [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Desenvolvimento', 'Projetos', 'Ferramentas', 'Consultoria'].map((service) => (
              <div key={service} className="card">
                <div className="icon-circle">
                  <div className="w-8 h-8 bg-primary/20"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-400">Soluções tecnológicas personalizadas para seu negócio</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
