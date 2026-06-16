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
        fairway: {
          light: '#5a9b72',
          DEFAULT: '#2f6b46',
          dark: '#1c4530',
        },
        paper: '#faf8f2',
        ink: '#13140f',
        bad: '#dc2626',
      },
    },
  },
  plugins: [],
}
export default config
