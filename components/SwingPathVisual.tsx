const NODES = [
  { x: 22, y: 118, active: false },
  { x: 52, y: 64, active: false },
  { x: 100, y: 28, active: true },
  { x: 148, y: 64, active: false },
  { x: 178, y: 108, active: false },
]

export default function SwingPathVisual({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="path-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9c7a2e" />
          <stop offset="50%" stopColor="#f3da93" />
          <stop offset="100%" stopColor="#9c7a2e" />
        </linearGradient>
        <filter id="path-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <line x1="10" y1="120" x2="190" y2="120" stroke="#ffffff" strokeOpacity="0.08" />
      <line x1="10" y1="90" x2="190" y2="90" stroke="#ffffff" strokeOpacity="0.05" />
      <line x1="10" y1="60" x2="190" y2="60" stroke="#ffffff" strokeOpacity="0.05" />

      <path
        d="M22,118 C58,28 142,28 178,108"
        stroke="#d4af5a"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.35"
        filter="url(#path-glow)"
      />
      <path d="M22,118 C58,28 142,28 178,108" stroke="url(#path-gradient)" strokeWidth="2" strokeLinecap="round" />

      {NODES.map((n) => (
        <g key={`${n.x}-${n.y}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.active ? 6 : 3.6}
            fill="#d4af5a"
            opacity={0.45}
            filter="url(#path-glow)"
            className={n.active ? 'animate-pulse-glow' : ''}
          />
          <circle cx={n.x} cy={n.y} r={n.active ? 3 : 2} fill="#fbe7b5" />
        </g>
      ))}
    </svg>
  )
}
