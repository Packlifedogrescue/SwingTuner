import Image from 'next/image'
import WaitlistForm from '@/components/WaitlistForm'
import logoLockup from '@/public/logo-lockup.png'

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-6 py-8 text-center sm:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="animate-fade-up flex flex-col items-center">
          <div className="relative w-32 sm:w-40 md:w-48">
            <Image src={logoLockup} alt="SwingTuner" priority className="h-auto w-full" />
            <div
              className="logo-shine pointer-events-none absolute inset-0"
              style={{
                maskImage: 'url(/logo-lockup.png)',
                WebkitMaskImage: 'url(/logo-lockup.png)',
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            />
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-paper sm:mt-8 sm:text-5xl md:text-6xl">
            <span className="text-gold-gradient">Coming Soon.</span>
          </h1>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-paper/60 sm:mt-5 sm:max-w-md sm:text-lg">
            The most advanced golf swing analyzer. Be the first to know when SwingTuner
            launches.
          </p>

          <div className="mt-8 w-full max-w-xs sm:mt-10 sm:max-w-md">
            <WaitlistForm />
            <p className="mt-3 text-xs text-paper/40">
              One email when we launch. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <p className="shrink-0 pt-6 font-mono text-xs text-paper/30">
        &copy; {new Date().getFullYear()} SwingTuner
      </p>
    </main>
  )
}
