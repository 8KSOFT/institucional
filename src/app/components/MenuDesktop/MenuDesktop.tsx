'use client';

import { useRouter, usePathname } from 'next/navigation';

const MenuDesktop = () => {
  const router = useRouter();
  const pathname = usePathname();

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

  return (
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
  );
};

export default MenuDesktop;