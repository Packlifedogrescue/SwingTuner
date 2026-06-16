import WaitlistForm from '@/components/WaitlistForm'
import AnalysisShowcase from '@/components/AnalysisShowcase'
import Reveal from '@/components/Reveal'
import Logo from '@/components/Logo'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#analysis', label: '3D Analysis' },
]

const HIGHLIGHTS = [
  '240fps Capture',
  '17 Keypoints',
  '3D Avatar Replay',
  'AI Swing Coach',
  'Swing DNA Score',
  'Apple Watch Auto',
]

const STEPS = [
  {
    n: '01',
    title: 'Record',
    body: 'Film your swing at 240fps. Your Apple Watch detects impact automatically and clips the exact moment.',
  },
  {
    n: '02',
    title: 'Analyze',
    body: 'Our AI tracks 17 body keypoints and builds your 3D avatar replay in seconds — no markers, no manual tagging.',
  },
  {
    n: '03',
    title: 'Improve',
    body: 'Get plain-English coaching from your AI Swing Coach, with drills built for your exact faults.',
  },
]

const FEATURES = [
  {
    title: '240fps Slow-Motion Capture',
    body: 'Film at 240 frames per second and see every detail of your swing you’ve never seen before.',
  },
  {
    title: 'AI Body Pose Detection',
    body: '17 body keypoints tracked across every frame — spine tilt, shoulder rotation, hip turn, X-Factor, knee flex, head stability — measured automatically.',
  },
  {
    title: '3D Avatar Replay',
    body: 'Watch your swing replayed on a 3D avatar — face-on, down the line, or overhead. Rotate and analyze from any angle.',
  },
  {
    title: 'Apple Watch Auto-Detect',
    body: 'Wear your Watch while you swing. It detects impact automatically and clips the exact moment — no tapping required.',
  },
  {
    title: 'AI Swing Coach',
    body: 'Plain-English feedback based on your actual numbers, not generic tips — with priority fixes and drills built for your exact faults.',
  },
  {
    title: 'Swing DNA Score',
    body: 'Every swing gets a 0–100 score built from tempo, X-Factor, spine consistency, head stability, and weight shift.',
  },
  {
    title: 'Side-by-Side Comparison',
    body: 'Compare any two swings frame by frame and see exactly what changed — and what didn’t.',
  },
  {
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
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Logo className="text-base" />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/60 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-gradient-to-b from-gold-light to-gold px-4 py-1.5 text-xs font-semibold text-ink shadow-[0_6px_18px_-6px_rgba(212,175,90,0.7)] transition hover:shadow-[0_6px_22px_-4px_rgba(212,175,90,0.9)]"
        >
          Join the waitlist
        </a>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-24 pt-10 text-center">
        <div className="animate-fade-up flex flex-col items-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            See your swing.
            <br />
            <span className="text-gold-gradient">Perfect your game.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/60">
            Record your swing in 240fps slow motion. SwingTuner tracks 17 body keypoints,
            replays it on a 3D avatar, and your AI Swing Coach tells you exactly what to fix
            &mdash; in plain English.
          </p>

          <div id="waitlist" className="mt-8 w-full max-w-md">
            <WaitlistForm />
            <p className="mt-3 text-xs text-ink/40">
              One email when we launch. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 rounded-3xl border border-ink/10 bg-ink/[0.02] px-8 py-7">
          {HIGHLIGHTS.map((h, i) => (
            <span key={h} className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-wide text-ink/55">{h}</span>
              {i < HIGHLIGHTS.length - 1 && <span className="h-1 w-1 rounded-full bg-gold/50" />}
            </span>
          ))}
        </Reveal>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-gold">
            How It Works
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            3 simple steps. Better golf.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <span className="font-mono text-3xl font-semibold text-gold-dark">{s.n}</span>
              <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="analysis" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <AnalysisShowcase />
        </Reveal>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Everything you need to improve.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/50">
            Capture, analysis, and coaching built into one app &mdash; no separate camera
            rig, no guesswork.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-ink/10 bg-ink/[0.03] p-6 transition hover:border-gold/30 hover:bg-ink/[0.05]">
                <span className="block h-1 w-8 rounded-full bg-gradient-to-r from-gold-light to-gold" />
                <h3 className="mt-4 text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="rounded-3xl border border-ink/10 bg-ink/[0.02] px-8 py-12 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Ten metrics, every swing.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/50">
            Computed automatically from your slow-motion capture &mdash; no markers, no
            manual tagging.
          </p>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {METRICS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-fairway/25 bg-fairway/5 px-4 py-2 font-mono text-sm text-ink/70 transition hover:border-fairway/50"
              >
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="flex flex-col items-center gap-8 rounded-3xl border border-ink/10 bg-gradient-to-br from-ink/[0.06] to-transparent px-8 py-14 text-center sm:flex-row sm:text-left">
          <div className="relative h-20 w-20 shrink-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#ffffff,#eceee7_45%,#cfd1c5_75%,#a3a596)] shadow-[inset_-6px_-6px_14px_rgba(0,0,0,0.10),0_14px_28px_-10px_rgba(19,20,15,0.35)] ring-1 ring-ink/10">
            <div className="absolute inset-0 rounded-full opacity-40 [background-image:radial-gradient(circle,rgba(0,0,0,0.18)_1px,transparent_1.4px)] [background-size:7px_7px]" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Don&rsquo;t miss the launch.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink/55 sm:mx-0">
              Drop your email and we&rsquo;ll send one note when SwingTuner is live.
            </p>
          </div>

          <div className="w-full max-w-md shrink-0">
            <WaitlistForm />
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center">
        <Logo className="text-sm" />
        <p className="font-mono text-xs text-ink/30">
          &copy; {new Date().getFullYear()} SwingTuner. Analyze. Improve. Repeat.
        </p>
      </footer>
    </main>
  )
}
