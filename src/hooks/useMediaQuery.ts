'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Definir valor inicial
    setMatches(media.matches);

    // Criar listener
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    
    // Adicionar listener
    media.addEventListener('change', listener);
    
    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}