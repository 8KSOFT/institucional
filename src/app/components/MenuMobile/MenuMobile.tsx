'use client';

import { MenuContext } from "@/app/context/MenuProvider";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from 'next/navigation';

const MenuMobile = () => {  
  const { toggleMenu } = useContext(MenuContext);
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
    toggleMenu(); // Close menu after navigation
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const menuItems = [
    { label: "Início", href: "#hero", onClick: () => handleNavigation('hero') },
    { label: "Clientes", href: "#clients", onClick: () => handleNavigation('clients') },
    { label: "Serviços", href: "#services", onClick: () => handleNavigation('services') },
    { label: "Desenvolvimento", href: "#development", onClick: () => handleNavigation('development') },
    { label: "Infraestrutura", href: "#infrastructure", onClick: () => handleNavigation('infrastructure') },
    { label: "Dados", href: "#data", onClick: () => handleNavigation('data') },
    { label: "Sobre", href: "#about", onClick: () => handleNavigation('about') },
    { label: "Contato", href: "#contact", onClick: () => handleNavigation('contact') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full h-[300px] bg-background/80 backdrop-blur-sm z-40"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          {/* Ícone de fechar */}
        </button>
        
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-2 text-lg uppercase text-primary"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full text-center"
            >
              <a 
                onClick={item.onClick}
                className={`block w-full px-2 cursor-pointer ${
                  item.href === '#contact'
                    ? 'px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors'
                    : 'hover:text-primary transition-colors'
                }`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default MenuMobile;