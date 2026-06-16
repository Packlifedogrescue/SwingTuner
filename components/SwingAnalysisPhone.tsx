'use client'

import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SwingPathVisual from './SwingPathVisual'
import { CameraIcon, PoseIcon, FlagIcon, CompareIcon, ScoreIcon, CheckIcon } from './icons'

const METRICS = [
  { label: 'X-Factor', value: '32°' },
  { label: 'Tempo Ratio', value: '3.1:1' },
  { label: 'Swing DNA', value: '87' },
]

const TABS = ['Overview', 'Path', 'Tempo']

export default function SwingAnalysisPhone() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative animate-float" style={{ perspective: 1200 }}>
      <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gold/10 blur-3xl" />

      <div className="absolute -right-5 bottom-16 hidden h-32 w-28 rotate-[8deg] rounded-[1.8rem] border border-white/10 bg-[#0a0d12] p-2 shadow-2xl shadow-black/60 sm:block">
        <div className="flex h-full flex-col items-center justify-center gap-2 rounded-[1.3rem] border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent px-2 text-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 text-gold">
            <CheckIcon className="h-4 w-4" />
          </div>
          <p className="text-[9px] font-medium leading-tight text-white">
            Impact
            <br />
            Detected
          </p>
        </div>
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative w-[260px] rounded-[2.25rem] border border-white/10 bg-[#0a0d12] p-3 shadow-2xl shadow-black/50 sm:w-[280px]"
      >
        <div className="rounded-[1.75rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent px-4 pb-5 pt-3">
          <div className="flex items-center justify-between px-1 text-[10px] font-medium text-white/50">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-white">Swing Analysis</span>
            <PoseIcon className="h-4 w-4 text-white/40" />
          </div>

          <div className="mt-3 flex gap-1.5">
            {TABS.map((tab, i) => (
              <span
                key={tab}
                className={
                  i === 0
                    ? 'rounded-full bg-gradient-to-b from-gold-light to-gold px-2.5 py-1 text-[10px] font-semibold text-ink'
                    : 'rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/40'
                }
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="relative mt-4 h-44 overflow-hidden rounded-2xl border border-white/5 bg-black/40">
            <div className="dot-grid absolute inset-0 opacity-60" />
            <div className="absolute inset-x-0 top-0 h-px bg-gold/60 animate-scan" />
            <SwingPathVisual className="absolute inset-0 h-full w-full p-4" />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="font-mono text-[10px] text-white/40">1.23</span>
            <div className="relative h-1 flex-1 rounded-full bg-white/10">
              <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gold" />
              <div className="absolute -top-1 left-2/3 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,90,0.8)]" />
            </div>
            <span className="font-mono text-[10px] text-white/40">240fps</span>
          </div>

          <div className="mt-4 flex justify-between gap-2">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex-1 rounded-xl border border-white/5 bg-white/5 px-2 py-2 text-center"
              >
                <div className="font-mono text-sm font-semibold text-white">{m.value}</div>
                <div className="mt-0.5 text-[8.5px] uppercase tracking-wide text-white/40">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
            <CameraIcon className="h-4 w-4 text-white/25" />
            <PoseIcon className="h-4 w-4 text-gold" />
            <FlagIcon className="h-4 w-4 text-white/25" />
            <CompareIcon className="h-4 w-4 text-white/25" />
            <ScoreIcon className="h-4 w-4 text-white/25" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
