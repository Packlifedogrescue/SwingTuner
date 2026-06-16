# SwingTuner

Landing page for SwingTuner — record a swing on your phone or a clip-on
sensor and get an instant score on tempo, plane, and impact. The app is in
private beta; this is the marketing + waitlist page in the meantime.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Supabase (Postgres) — stores waitlist signups only

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + service role key
npm run dev
```

Open http://localhost:3000.

### Waitlist storage

Run `supabase/migrations/0001_waitlist_signups.sql` in the Supabase SQL
editor to create the `waitlist_signups` table that `POST /api/waitlist`
writes to. Until the env vars are set, signups will fail with a friendly
error instead of silently disappearing.

## Deploy

Deploy to Vercel and add `NEXT_PUBLIC_SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` as environment variables.
