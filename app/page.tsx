import WaitlistForm from '@/components/WaitlistForm'
import TunerGauge from '@/components/TunerGauge'

const FEATURES = [
  {
    n: '01',
    title: 'Swing Capture, Two Ways',
    body: 'Record a swing on your phone or pair a clip-on sensor — SwingTuner reads it either way.',
  },
  {
    n: '02',
    title: 'Instant Swing Score',
    body: 'Tempo, plane, and path are broken down into one score you can track round over round.',
  },
  {
    n: '03',
    title: 'Tempo & Plane Feedback',
    body: 'See exactly where your transition rushes or your plane drifts, broken down swing by swing.',
  },
  {
    n: '04',
    title: 'Built to Track Progress',
    body: 'Every session logs to your history, so you can see real improvement — not just one good swing.',
  },
]

const SAMPLE_SWINGS = [
  { club: 'Driver', score: 87, tempo: '3.0:1', tag: 'On Plane' },
  { club: '7 Iron', score: 74, tempo: '2.4:1', tag: 'Early Extension' },
  { club: 'Wedge', score: 91, tempo: '3.1:1', tag: 'On Plane' },
] as const

function scoreTone(score: number) {
  if (score >= 85) return 'bg-good/15 text-good'
  if (score >= 70) return 'bg-warn/15 text-warn'
  return 'bg-bad/15 text-bad'
}

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-mono text-sm font-medium tracking-wide text-white">
          Swing<span className="text-good">Tuner</span>
        </span>
        <a
          href="#waitlist"
          className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white"
        >
          Join the waitlist
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-good" />
            SwingTuner is teeing up
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Tune your swing before it costs you strokes.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">
            Record a swing on your phone or pair a clip-on sensor — SwingTuner reads your
            tempo, plane, and impact, and scores it instantly so every rep makes you better.
          </p>

          <div id="waitlist" className="mt-8 max-w-md">
            <WaitlistForm />
            <p className="mt-3 text-xs text-white/40">
              One email when we launch. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TunerGauge />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.n}>
              <span className="font-mono text-sm text-white/30">{f.n}</span>
              <h3 className="mt-3 text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          What a tuned swing looks like
        </h2>
        <p className="mt-2 text-sm text-white/50">
          A sample session from the app — illustrative, while SwingTuner is in private beta.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {SAMPLE_SWINGS.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col gap-2 px-5 py-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 ${
                i !== 0 ? 'border-t border-white/5' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-medium text-white">{s.club}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-xs font-semibold ${scoreTone(
                    s.score,
                  )}`}
                >
                  {s.score}
                </span>
              </div>
              <span className="font-mono text-sm text-white/70 sm:text-center">
                {s.tempo} tempo
              </span>
              <span className="font-mono text-xs text-white/40 sm:text-right">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-8 py-14 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Don&rsquo;t miss the launch.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/55">
            Drop your email and we&rsquo;ll send one note when SwingTuner is live.
          </p>
          <div className="mx-auto mt-7 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="font-mono text-xs text-white/30">
          © {new Date().getFullYear()} SwingTuner. Built for golfers who want proof, not
          guesses.
        </p>
      </footer>
    </main>
  )
}
