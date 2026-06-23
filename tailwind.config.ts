import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      colors: {
        gold: {
          light: '#edd9ab',
          DEFAULT: '#d9ad43',
          dark: '#8d6b1b',
        },
        paper: '#faf8f2',
        ink: '#13140f',
        bad: '#fb7185',
      },
    },
  },
  plugins: [],
}
export default config
