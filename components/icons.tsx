type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-1.5h7L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z" />
      <circle cx="12" cy="13" r="3.25" />
    </svg>
  )
}

export function PoseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 7v6" />
      <path d="M12 9.5 8 8" />
      <path d="M12 9.5 16 8" />
      <path d="M12 13 8.5 19" />
      <path d="M12 13 15.5 19" />
      <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CubeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 4 7v10l8 4 8-4V7Z" />
      <path d="M4 7 12 11l8-4" />
      <path d="M12 11v10" />
    </svg>
  )
}

export function WatchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="6" width="10" height="12" rx="3" />
      <path d="M9.5 6V4h5v2" />
      <path d="M9.5 18v2h5v-2" />
      <path d="M17 9.5h1.5v2H17" />
    </svg>
  )
}

export function ScoreIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 4.5a7.5 7.5 0 0 1 5.3 12.8" strokeWidth={2} />
    </svg>
  )
}

export function CompareIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="7" height="14" rx="1.5" />
      <rect x="13.5" y="5" width="7" height="14" rx="1.5" />
    </svg>
  )
}

export function PenIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 5.5 18.5 9.5 8 20H4v-4Z" />
      <path d="M13 7 17 11" />
    </svg>
  )
}

export function FlagIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3v18" />
      <path d="M6 4.5 17 7.5 6 10.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8.25 12.5 10.8 15l5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GolfBallIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="9" cy="9.5" r="0.9" fill="currentColor" />
      <circle cx="13.2" cy="8" r="0.9" fill="currentColor" />
      <circle cx="16" cy="11.5" r="0.9" fill="currentColor" />
      <circle cx="8" cy="13.2" r="0.9" fill="currentColor" />
      <circle cx="11.8" cy="13.8" r="0.9" fill="currentColor" />
      <circle cx="15.2" cy="15.3" r="0.9" fill="currentColor" />
      <circle cx="10.3" cy="17" r="0.9" fill="currentColor" />
    </svg>
  )
}
