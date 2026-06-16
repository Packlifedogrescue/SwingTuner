type Point = [number, number]

const JOINTS: Record<string, Point> = {
  head: [76, 26],
  neck: [80, 44],
  chest: [85, 70],
  shoulderL: [65, 56],
  shoulderR: [103, 63],
  elbowL: [47, 78],
  elbowR: [110, 47],
  handL: [65, 95],
  handR: [70, 90],
  pelvis: [88, 126],
  hipL: [73, 123],
  hipR: [103, 129],
  kneeL: [69, 177],
  kneeR: [110, 188],
  ankleL: [65, 229],
  ankleR: [114, 220],
  toeL: [55, 238],
  toeR: [120, 235],
  clubTip: [122, 27],
}

const BONES: [string, string][] = [
  ['head', 'neck'],
  ['neck', 'chest'],
  ['chest', 'pelvis'],
  ['neck', 'shoulderL'],
  ['neck', 'shoulderR'],
  ['shoulderL', 'elbowL'],
  ['elbowL', 'handL'],
  ['shoulderR', 'elbowR'],
  ['elbowR', 'handR'],
  ['pelvis', 'hipL'],
  ['pelvis', 'hipR'],
  ['hipL', 'kneeL'],
  ['kneeL', 'ankleL'],
  ['ankleL', 'toeL'],
  ['hipR', 'kneeR'],
  ['kneeR', 'ankleR'],
  ['ankleR', 'toeR'],
]

export default function PoseSkeleton({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 256" className={className} fill="none" aria-hidden>
      <defs>
        <filter id="joint-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      <ellipse cx="86" cy="244" rx="42" ry="5" fill="#d4af5a" opacity="0.12" />

      <line
        x1={JOINTS.handL[0]}
        y1={JOINTS.handL[1]}
        x2={JOINTS.clubTip[0]}
        y2={JOINTS.clubTip[1]}
        stroke="#e8d9b0"
        strokeWidth={1.4}
        strokeLinecap="round"
        opacity={0.75}
      />

      {BONES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={JOINTS[a][0]}
          y1={JOINTS[a][1]}
          x2={JOINTS[b][0]}
          y2={JOINTS[b][1]}
          stroke="#d4af5a"
          strokeWidth={1.75}
          strokeLinecap="round"
          opacity={0.85}
        />
      ))}

      {Object.entries(JOINTS)
        .filter(([key]) => key !== 'clubTip')
        .map(([key, [x, y]]) => (
          <g key={key}>
            <circle cx={x} cy={y} r={5} fill="#d4af5a" opacity={0.45} filter="url(#joint-glow)" />
            <circle cx={x} cy={y} r={2.3} fill="#fbe7b5" />
          </g>
        ))}
    </svg>
  )
}
