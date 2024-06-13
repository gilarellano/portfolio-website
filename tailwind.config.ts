import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        'background-start': 'var(--background-start-rgb)',
        'background-end': 'var(--background-end-rgb)',
      },
      fontFamily: {
        primary: ['var(--font-family)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

export default config
