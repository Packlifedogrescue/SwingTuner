'use client'

import { useState, type FormEvent } from 'react'
import { Check, Mail } from 'lucide-react'

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
        <p className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold-dark">
          <Check className="h-4 w-4 shrink-0" aria-hidden />
          {message}
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Mail
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/30"
            aria-hidden
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-lg border border-paper/10 bg-paper/5 py-3 pl-10 pr-4 text-sm text-paper placeholder-paper/40 outline-none transition focus:border-gold/60 focus:bg-paper/[0.07]"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-lg bg-gradient-to-b from-gold-light to-gold px-5 py-3 text-sm font-semibold text-ink shadow-[0_8px_24px_-8px_rgba(217,173,67,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-6px_rgba(217,173,67,0.85)] disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </form>
      {status === 'error' && <p className="mt-2 text-sm text-bad">{message}</p>}
    </div>
  )
}
