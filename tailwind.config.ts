import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      clipPath: {
        'polygon-cut': 'polygon(20px 0, 100% 0, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0 100%, 0 20px)',
      },
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit-pattern.svg')",
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            borderColor: 'theme(colors.primary / 1)', // Borda totalmente visível e brilhante
            opacity: '1',
          },
          '50%': {
            borderColor: 'theme(colors.primary / 0.1)', // Borda quase invisível
            opacity: '0.2',
          },
        },
        'binary-fade': {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'scale(0.95)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'binary-fade': 'binary-fade 3s ease-in-out infinite',
        blink: 'blink 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
