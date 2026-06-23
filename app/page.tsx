import Image from 'next/image'
import WaitlistForm from '@/components/WaitlistForm'
import logoLockup from '@/public/logo-lockup.png'

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]" />

      <div className="animate-fade-up flex flex-col items-center">
        <Image src={logoLockup} alt="SwingTuner" priority className="h-auto w-40 sm:w-48" />

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-paper sm:text-6xl">
          <span className="text-gold-gradient">Coming Soon.</span>
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/60">
          The most advanced golf swing analyzer. Be the first to know when SwingTuner
          launches.
        </p>

        <div className="mt-10 w-full max-w-md">
          <WaitlistForm />
          <p className="mt-3 text-xs text-paper/40">
            One email when we launch. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>

      <p className="absolute bottom-8 font-mono text-xs text-paper/30">
        &copy; {new Date().getFullYear()} SwingTuner
      </p>
    </main>
  )
}
