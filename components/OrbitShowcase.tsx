import { Check } from 'lucide-react'

const ARCHITECTURE = [
  'No screw-in post',
  'No shaft penetration',
  'No regripping required',
  'External bayonet lock',
  'Removable for charging',
]

const ATTACH_STEPS = ['Open', 'Close & Latch', 'Align', 'Twist to Lock']

function SensorGraphic() {
  const octagon = {
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  }
  return (
    <div className="relative flex h-44 w-44 shrink-0 items-center justify-center sm:h-52 sm:w-52">
      <div
        style={octagon}
        className="absolute inset-0 bg-gradient-to-br from-paper/15 via-paper/[0.04] to-transparent shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] ring-1 ring-paper/15"
      />
      <div
        style={octagon}
        className="absolute h-[68%] w-[68%] bg-gradient-to-br from-gold-light/30 via-gold/10 to-transparent ring-1 ring-gold/30"
      />
      <span className="absolute h-3 w-3 rounded-full bg-gold shadow-[0_0_14px_3px_rgba(217,173,67,0.65)]" />
    </div>
  )
}

export default function OrbitShowcase() {
  return (
    <div className="rounded-3xl border border-paper/10 bg-paper/[0.02] px-6 py-12 sm:px-10 sm:py-16">
      <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:gap-12 sm:text-left">
        <SensorGraphic />

        <div className="flex-1">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-gold">
            New &middot; Premium Hardware
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            Orbit V1. A 3D sensor that clips on, not in.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper/55 sm:mx-0">
            A hinged split collar and 3-tab bayonet twist-lock clip Orbit V1 onto your grip
            butt in seconds &mdash; quarter-turn, spring detent, done. Attaches externally.
            Locks securely. Never enters the grip.
          </p>

          <span className="mt-7 block font-mono text-xs font-medium uppercase tracking-widest text-paper/40">
            Lower-Risk Architecture
          </span>
          <ul className="mx-auto mt-3 grid max-w-md gap-2.5 sm:mx-0">
            {ARCHITECTURE.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-paper/70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-7 flex max-w-md flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:mx-0 sm:justify-start">
            {ATTACH_STEPS.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="font-mono text-xs text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xs text-paper/60">{step}</span>
                {i < ATTACH_STEPS.length - 1 && (
                  <span className="mx-1 text-paper/30" aria-hidden>
                    &rarr;
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
