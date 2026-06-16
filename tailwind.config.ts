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
        platinum: {
          light: '#f7f7f9',
          DEFAULT: '#d9dade',
          dark: '#9a9ca3',
        },
        bad: '#fb7185',
        ink: '#05070a',
      },
    },
  },
  plugins: [],
}
export default config
