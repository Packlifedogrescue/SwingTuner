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
        good: '#34d399',
        warn: '#fbbf24',
        bad: '#fb7185',
        ink: '#05070a',
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.18), transparent 60%)',
      },
    },
  },
  plugins: [],
}
export default config
