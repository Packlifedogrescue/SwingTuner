import Image from 'next/image'
import WaitlistForm from '@/components/WaitlistForm'
import logoLockup from '@/public/logo-lockup.png'

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-6 py-8 text-center sm:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-glow bg-glow-a absolute -left-16 -top-24 h-72 w-72 bg-gold/30 sm:h-[26rem] sm:w-[26rem]" />
        <div className="bg-glow bg-glow-b absolute -bottom-24 -right-12 h-72 w-72 bg-gold-light/20 sm:h-[24rem] sm:w-[24rem]" />
        <div className="dot-grid absolute inset-0" />
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 sm:h-[30rem] sm:w-[30rem]">
          <div className="orbit-ring h-full w-full rounded-full border border-gold/15">
            <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px_3px_rgba(217,173,67,0.7)]" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="animate-fade-up flex flex-col items-center">
          <Image
            src={logoLockup}
            alt="SwingTuner"
            priority
            className="h-auto w-32 sm:w-40 md:w-48"
          />

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
