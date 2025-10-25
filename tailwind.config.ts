import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8'
        }
      },
      boxShadow: {
        card: '0 15px 35px rgba(15, 23, 42, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
