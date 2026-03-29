import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          50: '#fdf8f6',  
          100: '#f8ece7', 
          200: '#eed6cc', 
          300: '#e1b7a6', 
          400: '#d1927a',
          500: '#c27355', // Cor primária (Botões)
          600: '#b45a3f', // Hover
          700: '#964834',
          800: '#7d3e2e', // Textos importantes
          900: '#3d1d15', // Textos base
        }
      },
    },
  },
  plugins: [],
}
export default config