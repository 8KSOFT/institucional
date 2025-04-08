'use client';

import { createContext, useMemo, useState } from "react";

export const MenuContext = createContext({
  isOpen: false,
  toggleMenu: () => {},
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const value = useMemo(() => ({
    isOpen,
    toggleMenu,
  }), [isOpen]);

  return (
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  );
};
