import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let email: string | undefined
  try {
    const body = await req.json()
    email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : undefined
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  try {
    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from('waitlist_signups').insert({ email })

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ ok: true, alreadyJoined: true })
      }
      throw error
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('waitlist signup failed', err)
    return NextResponse.json(
      { error: 'Something went wrong. Try again in a bit.' },
      { status: 500 },
    )
  }
}
