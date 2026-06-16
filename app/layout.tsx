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
  title: 'SwingTuner — The most advanced AI golf swing analyzer.',
  description:
    'Record your swing in 240fps slow motion. SwingTuner tracks 19 body keypoints, replays it on a 3D avatar, and your AI caddie tells you exactly what to fix.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">{children}</body>
    </html>
  )
}
