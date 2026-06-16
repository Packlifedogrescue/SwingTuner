function polar(angleDeg: number, r: number, cx = 100, cy = 100) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) }
}

const TICK_ANGLES = [0, 30, 60, 90, 120, 150, 180]
const NEEDLE_ANGLE = 47 // 0deg = dialed in, 180deg = needs work

export default function TunerGauge() {
  const tip = polar(NEEDLE_ANGLE, 70)
  const tail = polar(NEEDLE_ANGLE + 180, 16)

  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <svg viewBox="0 0 200 122" className="w-full drop-shadow-[0_0_40px_rgba(99,102,241,0.15)]">
          <defs>
            <linearGradient id="arc-gradient" x1="0" y1="0" x2="200" y2="0">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>

          <path
            d="M20,100 A80,80 0 0 1 180,100"
            fill="none"
            stroke="#161a22"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M20,100 A80,80 0 0 1 180,100"
            fill="none"
            stroke="url(#arc-gradient)"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.85"
          />

          {TICK_ANGLES.map((angle) => {
            const outer = polar(angle, 80)
            const inner = polar(angle, 65)
            return (
              <line
                key={angle}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="#05070a"
                strokeWidth="3"
              />
            )
          })}

          <g className="animate-needle">
            <line
              x1={tail.x}
              y1={tail.y}
              x2={tip.x}
              y2={tip.y}
              stroke="#f8fafc"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="100" r="5.5" fill="#f8fafc" />
          </g>
        </svg>

        <div className="absolute inset-x-0 top-[58%] flex flex-col items-center">
          <span className="font-mono text-4xl font-medium leading-none text-white">87</span>
          <span className="mt-2 rounded-full bg-good/15 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-good">
            DRIVER · ON PLANE
          </span>
        </div>
      </div>

      <div className="mt-1 flex justify-between px-2 font-mono text-xs uppercase tracking-wider text-white/40">
        <span>Needs work</span>
        <span>Dialed in</span>
      </div>
    </div>
  )
}
