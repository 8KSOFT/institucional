'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  const menuItems = [
    {
      label: 'Serviços',
      href: '#services',
      redirect: () => {
        if (window.location.pathname !== '/') {
          router.push('/');
        }
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: 'Desenvolvimento',
      href: '#development',
      redirect: () => {
        if (window.location.pathname !== '/') {
          router.push('/#development');
        }
        const developmentSection = document.getElementById('development');
        if (developmentSection) {
          developmentSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: 'Infraestrutura',
      href: '#infrastructure',
      redirect: () => {
        if (window.location.pathname !== '/') {
          router.push('/#infrastructure');
        }
        const infrastructureSection = document.getElementById('infrastructure');
        if (infrastructureSection) {
          infrastructureSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: 'Dados',
      href: '#data',
      redirect: () => {
        if (window.location.pathname !== '/') {
          router.push('/#data');
        }
        const dataSection = document.getElementById('data');
        if (dataSection) {
          dataSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: 'Sobre',
      href: '#about',
      redirect: () => {
        if (window.location.pathname !== '/') {
          router.push('/#about');
        }
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: 'Contato',
      href: '#contact',
      redirect: () => {
        if (window.location.pathname !== '/') {
          router.push('/#contact');
        }
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  ];

  const onHeroClick = () => {
    if (window.location.pathname !== '/') {
      router.push('/#hero');
    }
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                onClick={item.redirect}
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
