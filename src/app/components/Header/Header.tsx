import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="fixed w-full top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-zinc-800">
      <nav className="h-[60px] container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary flex items-center">
          <Image src="/logo.png" alt="8KSOFT" width={50} height={50} />
          <span className="ml-2">8KSOFT</span>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#services" className="hover:text-primary transition-colors">
              Serviços
            </a>
          </li>
          <li>
            <a href="#development" className="hover:text-primary transition-colors">
              Desenvolvimento
            </a>
          </li>
          <li>
            <a href="#infrastructure" className="hover:text-primary transition-colors">
              Infraestrutura
            </a>
          </li>
          <li>
            <a href="#data" className="hover:text-primary transition-colors">
              Dados
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Menu Mobile - Pode ser expandido em um componente separado */}
        <button className="md:hidden text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
