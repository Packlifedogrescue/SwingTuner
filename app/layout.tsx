import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'SwingTuner — Coming Soon',
  description:
    'The most advanced AI golf swing analyzer is launching soon. Join the waitlist to be the first to know.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <div className="pointer-events-none fixed inset-3 z-40 border border-paper/[0.08] sm:inset-5" />
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
