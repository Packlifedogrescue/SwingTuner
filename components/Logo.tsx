function GolfBallDot() {
  return (
    <span className="relative mx-px inline-block h-[0.78em] w-[3px] align-baseline">
      <span className="absolute bottom-0 left-0 h-[0.6em] w-[3px] rounded-full bg-gradient-to-b from-gold-light to-gold-dark" />
      <span className="absolute -top-px left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#d9dade_60%,#9a9ca3)] shadow-[0_0_5px_rgba(255,255,255,0.55)]" />
    </span>
  )
}

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-mono font-semibold tracking-tight ${className}`}>
      <span className="text-gold-gradient">Sw</span>
      <GolfBallDot />
      <span className="text-gold-gradient">ng</span>
      <span className="text-platinum-gradient">Tuner</span>
    </span>
  )
}
