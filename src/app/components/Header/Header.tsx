'use client';

import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { MenuContext } from '@/app/context/MenuProvider';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuDesktop from '../MenuDesktop/MenuDesktop';
import HamburgerIcon from '../HamburgerIcon/HambugerIcon';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
        
        <MenuDesktop />

        {isMobile && <button
          className="w-12 h-12 p-2 z-50"
          onClick={() => toggleMenu()}
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>}
      </nav>
      {isOpen && isMobile && <MenuMobile />}
    </header>
  );
}

export default Header;
