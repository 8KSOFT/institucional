import React from 'react';

function Header() {
  return (
    <header className="fixed w-full top-0 bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">8KSOFT</div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#services" className="hover:text-primary transition-colors">
              Serviços
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projetos
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
