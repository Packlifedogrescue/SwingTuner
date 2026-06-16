const SCORE = 87
const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const OFFSET = CIRCUMFERENCE * (1 - SCORE / 100)
const RECENT_SWINGS = [62, 70, 65, 81, 87]

export default function PhoneMock() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-good/10 blur-3xl" />

      <div className="w-[260px] rounded-[2.25rem] border border-white/10 bg-[#0a0d12] p-3 shadow-2xl shadow-black/50 sm:w-[280px]">
        <div className="rounded-[1.75rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent px-5 pb-6 pt-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
              Today&rsquo;s Swing
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/60">
              Driver
            </span>
          </div>

          <div className="relative mx-auto mt-6 h-36 w-36">
            <svg viewBox="0 0 132 132" className="h-full w-full -rotate-90">
              <circle cx="66" cy="66" r={RADIUS} fill="none" stroke="#ffffff14" strokeWidth="10" />
              <circle
                cx="66"
                cy="66"
                r={RADIUS}
                fill="none"
                stroke="#34d399"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={OFFSET}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-3xl font-semibold text-white">{SCORE}</span>
              <span className="text-[10px] uppercase tracking-wider text-white/40">
                DNA Score
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-2">
            <div className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-center">
              <div className="font-mono text-sm text-white">3.2:1</div>
              <div className="text-[10px] text-white/40">Tempo</div>
            </div>
            <div className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-center">
              <div className="font-mono text-sm text-white">42&deg;</div>
              <div className="text-[10px] text-white/40">X-Factor</div>
            </div>
          </div>

          <div className="mt-6 flex h-10 items-end justify-between gap-1.5">
            {RECENT_SWINGS.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-good/40"
                style={{ height: `${v * 0.45}px` }}
              />
            ))}
          </div>
          <div className="mt-1.5 text-center text-[10px] text-white/30">Last 5 swings</div>
        </div>
      </div>
    </div>
  )
}
