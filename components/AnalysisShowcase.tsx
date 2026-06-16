import SwingPathVisual from './SwingPathVisual'
import { CheckIcon } from './icons'

const LEFT_METRICS = [
  { label: 'X-Factor', value: '32°' },
  { label: 'Shoulder Tilt', value: '12°' },
  { label: 'Spine Tilt', value: '23°' },
]

const RIGHT_METRICS = [
  { label: 'Pelvis Rotation', value: '45°' },
  { label: 'Tempo Ratio', value: '3.1:1' },
  { label: 'Swing DNA', value: '87/100' },
]

const CHECKLIST = [
  'Replay from face-on, down-the-line, or overhead',
  'Track 19 body keypoints automatically',
  'See exactly what changed between swings',
  'Get drills built for your exact faults',
]

export default function AnalysisShowcase() {
  return (
    <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-16">
      <div className="relative mx-auto h-[380px] w-full max-w-md overflow-hidden">
        {LEFT_METRICS.map((m, i) => (
          <div key={m.label} className="absolute left-0 z-10 text-left" style={{ top: `${8 + i * 30}%` }}>
            <div className="text-[10px] uppercase tracking-wide text-white/40">{m.label}</div>
            <div className="font-mono text-lg font-semibold text-white">{m.value}</div>
          </div>
        ))}

        {RIGHT_METRICS.map((m, i) => (
          <div key={m.label} className="absolute right-0 z-10 text-right" style={{ top: `${8 + i * 30}%` }}>
            <div className="text-[10px] uppercase tracking-wide text-white/40">{m.label}</div>
            <div className="font-mono text-lg font-semibold text-white">{m.value}</div>
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 h-36 [perspective:400px]">
          <div
            className="h-full w-full origin-bottom"
            style={{
              transform: 'rotateX(65deg)',
              backgroundImage:
                'linear-gradient(rgba(212,175,90,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,90,0.16) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              maskImage: 'linear-gradient(to top, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
            }}
          />
        </div>

        <div className="absolute inset-0 -z-10 m-auto h-48 w-48 self-center rounded-full bg-gold/10 blur-3xl" />

        <SwingPathVisual className="absolute inset-x-0 top-10 mx-auto h-64 w-auto animate-float" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          3D analysis like never before.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
          Your 3D avatar and on-device AI surface insights you can&rsquo;t get from watching
          raw video alone.
        </p>
        <ul className="mt-6 space-y-3">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
