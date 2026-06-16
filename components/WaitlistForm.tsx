'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistForm({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong.')
        return
      }

      setStatus('success')
      setMessage(data.alreadyJoined ? "You're already on the list." : "You're on the list.")
    } catch {
      setStatus('error')
      setMessage('Network error. Try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={className}>
        <p className="flex items-center gap-2 rounded-lg border border-good/30 bg-good/10 px-4 py-3 text-sm text-good">
          <span aria-hidden>✓</span> {message}
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-400/60 focus:bg-white/[0.07] sm:flex-1"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white/90 disabled:opacity-60"
        >
          {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </form>
      {status === 'error' && <p className="mt-2 text-sm text-bad">{message}</p>}
    </div>
  )
}
