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
          light: '#f3da93',
          DEFAULT: '#d4af5a',
          dark: '#9c7a2e',
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
