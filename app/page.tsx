import WaitlistForm from '@/components/WaitlistForm'
import PhoneMock from '@/components/PhoneMock'
import {
  CameraIcon,
  PoseIcon,
  CubeIcon,
  WatchIcon,
  FlagIcon,
  ScoreIcon,
  CompareIcon,
  PenIcon,
} from '@/components/icons'

const FEATURES = [
  {
    icon: CameraIcon,
    title: '240fps Slow-Motion Capture',
    body: 'Film at 240 frames per second and see every detail of your swing you’ve never seen before.',
  },
  {
    icon: PoseIcon,
    title: 'AI Body Pose Detection',
    body: '19 body keypoints tracked across every frame — spine tilt, shoulder rotation, hip turn, X-Factor, knee flex, head stability — measured automatically.',
  },
  {
    icon: CubeIcon,
    title: '3D Avatar Replay',
    body: 'Watch your swing replayed on a 3D avatar — face-on, down the line, or overhead. Rotate and analyze from any angle.',
  },
  {
    icon: WatchIcon,
    title: 'Apple Watch Auto-Detect',
    body: 'Wear your Watch while you swing. It detects impact automatically and clips the exact moment — no tapping required.',
  },
  {
    icon: FlagIcon,
    title: 'AI Swing Coach',
    body: 'Plain-English feedback based on your actual numbers, not generic tips — with priority fixes and drills built for your exact faults.',
  },
  {
    icon: ScoreIcon,
    title: 'Swing DNA Score',
    body: 'Every swing gets a 0–100 score built from tempo, X-Factor, spine consistency, head stability, and weight shift.',
  },
  {
    icon: CompareIcon,
    title: 'Side-by-Side Comparison',
    body: 'Compare any two swings frame by frame and see exactly what changed — and what didn’t.',
  },
  {
    icon: PenIcon,
    title: 'Drawing Tools',
    body: 'Pause on any frame and draw lines, angles, and circles directly on your slow-mo footage.',
  },
]

const METRICS = [
  'X-Factor',
  'Tempo Ratio',
  'Spine Tilt',
  'Shoulder Tilt',
  'Pelvis Rotation',
  'Head Movement',
  'Weight Shift',
  'Knee Flex',
  'Hand Path',
  'Attack Angle',
]

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="fairway-stripes pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="flex items-center gap-2 font-mono text-sm font-medium tracking-wide text-white">
          <FlagIcon className="h-4 w-4 text-good" />
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
            Coming soon to iPhone &amp; Apple Watch
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            The most advanced AI swing analyzer ever built.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">
            Record your swing in 240fps slow motion. SwingTuner tracks 19 body keypoints,
            replays it on a 3D avatar, and your AI caddie tells you exactly what to fix
            &mdash; in plain English.
          </p>

          <div id="waitlist" className="mt-8 max-w-md">
            <WaitlistForm />
            <p className="mt-3 text-xs text-white/40">
              One email when we launch. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMock />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Everything your swing has been hiding.
        </h2>
        <p className="mt-2 max-w-xl text-sm text-white/50">
          Capture, analysis, and coaching built into one app &mdash; no separate camera
          rig, no guesswork.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5 text-good">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-12 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Ten metrics, every swing.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/50">
            Computed automatically from your slow-motion capture &mdash; no markers, no
            manual tagging.
          </p>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {METRICS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-sm text-white/70"
              >
                {m}
              </span>
            ))}
          </div>
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
          &copy; {new Date().getFullYear()} SwingTuner. Analyze. Improve. Repeat.
        </p>
      </footer>
    </main>
  )
}
