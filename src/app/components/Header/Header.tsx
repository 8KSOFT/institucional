'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [pathname]);

  const handleNavigation = async (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    {
      label: 'Clientes',
      href: '#clients',
      onClick: () => handleNavigation('clients'),
    },
    {
      label: 'Serviços',
      href: '#services',
      onClick: () => handleNavigation('services'),
    },
    {
      label: 'Desenvolvimento',
      href: '#development',
      onClick: () => handleNavigation('development'),
    },
    {
      label: 'Infraestrutura',
      href: '#infrastructure',
      onClick: () => handleNavigation('infrastructure'),
    },
    {
      label: 'Dados',
      href: '#data',
      onClick: () => handleNavigation('data'),
    },
    {
      label: 'Sobre',
      href: '#about',
      onClick: () => handleNavigation('about'),
    },
    {
      label: 'Contato',
      href: '#contact',
      onClick: () => handleNavigation('contact'),
    },
  ];

  const onHeroClick = () => handleNavigation('hero');

  return (
    <header className="fixed w-[100vw] top-0 bg-background/80 backdrop-blur-sm z-50 border-b border-zinc-800">
      <nav className="h-[60px] text-text container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary flex items-center cursor-pointer">
          <a onClick={onHeroClick}>
            <Image
              src="/images/logotipos/LOGOTIPO-8KSOFT-02.png"
              alt="8KSOFT"
              width={80}
              height={18}
              className="w-[80px] h-[18px]"
            />
          </a>
        </div>
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                onClick={item.onClick}
                className={`cursor-pointer ${
                  item.href === '#contact'
                    ? 'px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors'
                    : 'hover:text-primary transition-colors'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
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
