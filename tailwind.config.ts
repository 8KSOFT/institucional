import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
