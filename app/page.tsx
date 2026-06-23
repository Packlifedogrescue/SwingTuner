import WaitlistForm from '@/components/WaitlistForm'
import Logo from '@/components/Logo'

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]" />

      <div className="animate-fade-up flex flex-col items-center">
        <Logo className="text-lg" />

        <span className="mt-10 font-mono text-xs font-medium uppercase tracking-widest text-gold">
          Launching Soon
        </span>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-paper sm:text-6xl">
          <span className="text-gold-gradient">Coming Soon.</span>
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/60">
          The most advanced AI golf swing analyzer. Be the first to know when SwingTuner
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
