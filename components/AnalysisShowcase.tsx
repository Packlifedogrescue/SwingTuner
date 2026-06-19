import { Check } from 'lucide-react'

const CHECKLIST = [
  'Replay from face-on, down-the-line, or overhead',
  'Track 17 body keypoints automatically',
  'See exactly what changed between swings',
  'Get drills built for your exact faults',
]

export default function AnalysisShowcase() {
  return (
    <div className="rounded-3xl border border-paper/10 bg-paper/[0.02] px-6 py-12 text-center sm:px-10 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
        3D analysis like never before.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper/55">
        Your 3D avatar and on-device AI surface insights you can&rsquo;t get from watching
        raw video alone.
      </p>
      <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
        {CHECKLIST.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-paper/70">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
