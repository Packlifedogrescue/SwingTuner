import WaitlistForm from '@/components/WaitlistForm'
import SwingAnalysisPhone from '@/components/SwingAnalysisPhone'
import AnalysisShowcase from '@/components/AnalysisShowcase'
import Reveal from '@/components/Reveal'
import Logo from '@/components/Logo'
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

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#analysis', label: '3D Analysis' },
]

const HIGHLIGHTS = [
  { icon: CameraIcon, label: '240fps Capture' },
  { icon: PoseIcon, label: '19 Keypoints' },
  { icon: CubeIcon, label: '3D Avatar Replay' },
  { icon: FlagIcon, label: 'AI Swing Coach' },
  { icon: ScoreIcon, label: 'Swing DNA Score' },
  { icon: WatchIcon, label: 'Apple Watch Auto' },
]

const STEPS = [
  {
    n: '01',
    icon: CameraIcon,
    title: 'Record',
    body: 'Film your swing at 240fps. Your Apple Watch detects impact automatically and clips the exact moment.',
  },
  {
    n: '02',
    icon: PoseIcon,
    title: 'Analyze',
    body: 'Our AI tracks 19 body keypoints and builds your 3D avatar replay in seconds — no markers, no manual tagging.',
  },
  {
    n: '03',
    icon: FlagIcon,
    title: 'Improve',
    body: 'Get plain-English coaching from your AI Swing Coach, with drills built for your exact faults.',
  },
]

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
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Logo className="text-base" />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
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

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Coming soon to iPhone &amp; Apple Watch
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            See your swing.
            <br />
            <span className="text-gold-gradient">Perfect your game.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">
            Record your swing in 240fps slow motion. SwingTuner tracks 19 body keypoints,
            replays it on a 3D avatar, and your AI Swing Coach tells you exactly what to fix
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
          <SwingAnalysisPhone />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal className="flex flex-wrap justify-center gap-x-10 gap-y-8 rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-8 sm:gap-x-14">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="flex w-20 flex-col items-center gap-2.5 text-center">
              <div className="inline-flex rounded-full border border-gold/30 bg-gold/10 p-3 text-gold">
                <h.icon className="h-5 w-5" />
              </div>
              <span className="text-xs leading-tight text-white/55">{h.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-gold">
            How It Works
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            3 simple steps. Better golf.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-full border border-gold/30 bg-gold/10 p-3 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-white/30">{s.n}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.body}</p>
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
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Everything you need to improve.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-white/50">
            Capture, analysis, and coaching built into one app &mdash; no separate camera
            rig, no guesswork.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-gold/30 hover:bg-white/[0.05]">
                <div className="inline-flex rounded-full border border-gold/30 bg-gold/10 p-2.5 text-gold">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-12 text-center">
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
                className="rounded-full border border-gold/20 bg-gold/5 px-4 py-2 font-mono text-sm text-white/70 transition hover:border-gold/40"
              >
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-8 py-14 text-center sm:flex-row sm:text-left">
          <div className="relative h-20 w-20 shrink-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#ffffff,#e4e5e8_45%,#b9bbc1_75%,#8d8f96)] shadow-[inset_-6px_-6px_14px_rgba(0,0,0,0.25),0_10px_30px_-8px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 rounded-full opacity-40 [background-image:radial-gradient(circle,rgba(0,0,0,0.18)_1px,transparent_1.4px)] [background-size:7px_7px]" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Don&rsquo;t miss the launch.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/55 sm:mx-0">
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
        <p className="font-mono text-xs text-white/30">
          &copy; {new Date().getFullYear()} SwingTuner. Analyze. Improve. Repeat.
        </p>
      </footer>
    </main>
  )
}
