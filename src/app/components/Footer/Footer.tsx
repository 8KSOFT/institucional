import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start justify-start gap-4">
            <Image src="/images/logotipos/LOGOTIPO-8KSOFT-02.png" alt="8KSOFT" width={150} height={100} />
            <p className="text-gray-400">Tecnologia segura, robusta e inovadora para o seu negócio.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#development" className="text-gray-400 hover:text-primary transition-colors">
                  Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="text-gray-400 hover:text-primary transition-colors">
                  Infraestrutura
                </a>
              </li>
              <li>
                <a href="#data" className="text-gray-400 hover:text-primary transition-colors">
                  Business Intelligence
                </a>
              </li>
              <li>
                <a href="#cloud" className="text-gray-400 hover:text-primary transition-colors">
                  Oracle Cloud
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:contato@8ksoft.com.br" className="hover:text-primary transition-colors">
                  contato@8ksoft.com
                </a>
              </li>
              <li className="text-gray-400">
                <a href="tel:+551199999999" className="hover:text-primary transition-colors">
                  (51) 9-8587-5908
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 8KSOFT. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                GitHub
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
