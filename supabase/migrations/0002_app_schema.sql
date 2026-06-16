-- SwingTuner Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- =====================
-- USERS PROFILE TABLE
-- =====================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  handicap integer,
  dominant_hand text default 'right',
  default_club text default '7-Iron',
  avatar_gender text default 'male',
  is_pro boolean default false,
  free_swings_used integer default 0,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- =====================
-- SWINGS TABLE
-- =====================
create table if not exists public.swings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  club text not null default '7-Iron',
  shot_type text not null default 'drive', -- drive, chip, putt

  -- Video
  video_url text,
  video_duration_seconds double precision,
  fps integer default 240,

  -- Swing DNA Score
  dna_score integer default 0,

  -- Key Metrics
  x_factor_at_top double precision default 0,
  x_factor_at_impact double precision default 0,
  tempo_ratio double precision default 0,
  backswing_duration double precision default 0,
  downswing_duration double precision default 0,
  spine_angle_address double precision default 0,
  spine_angle_impact double precision default 0,
  spine_tilt_loss double precision default 0,
  shoulder_tilt_address double precision default 0,
  shoulder_tilt_impact double precision default 0,
  hip_tilt_address double precision default 0,
  hip_tilt_impact double precision default 0,
  weight_shift_magnitude double precision default 0,
  weight_shift_direction text default 'Target',
  head_movement_range double precision default 0,
  left_knee_flex double precision default 0,
  right_knee_flex double precision default 0,
  peak_shoulder_rotation double precision default 0,
  peak_hip_rotation double precision default 0,

  -- Watch Data
  club_speed_estimate double precision default 0,
  transition_force double precision default 0,
  watch_tempo_ratio double precision default 0,

  -- AI Coaching
  ai_summary text,
  ai_priority_fix text,
  ai_strengths jsonb default '[]',
  ai_faults jsonb default '[]',
  ai_drills jsonb default '[]',

  -- Metadata
  notes text,
  is_favorite boolean default false,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- =====================
-- SWING FRAMES TABLE
-- (stores per-frame keypoint data for detailed replay)
-- =====================
create table if not exists public.swing_frames (
  id uuid default uuid_generate_v4() primary key,
  swing_id uuid references public.swings(id) on delete cascade not null,
  frame_index integer not null,
  timestamp_seconds double precision not null,
  phase text not null default 'address',

  -- Keypoints (normalized 0-1)
  left_shoulder_x double precision,
  left_shoulder_y double precision,
  right_shoulder_x double precision,
  right_shoulder_y double precision,
  left_elbow_x double precision,
  left_elbow_y double precision,
  right_elbow_x double precision,
  right_elbow_y double precision,
  left_wrist_x double precision,
  left_wrist_y double precision,
  right_wrist_x double precision,
  right_wrist_y double precision,
  left_hip_x double precision,
  left_hip_y double precision,
  right_hip_x double precision,
  right_hip_y double precision,
  left_knee_x double precision,
  left_knee_y double precision,
  right_knee_x double precision,
  right_knee_y double precision,
  left_ankle_x double precision,
  left_ankle_y double precision,
  right_ankle_x double precision,
  right_ankle_y double precision,
  nose_x double precision,
  nose_y double precision,

  -- Frame metrics
  spine_tilt double precision,
  shoulder_tilt double precision,
  hip_tilt double precision,
  x_factor double precision,

  created_at timestamp with time zone default timezone('utc', now())
);

-- =====================
-- SUBSCRIPTIONS TABLE
-- =====================
create table if not exists public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null unique,
  revenuecat_user_id text,
  product_id text,
  is_active boolean default false,
  expires_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- =====================
-- STORAGE BUCKETS
-- =====================
insert into storage.buckets (id, name, public)
values ('swing-videos', 'swing-videos', false)
on conflict do nothing;

insert into storage.buckets (id, name, public)
values ('swing-thumbnails', 'swing-thumbnails', true)
on conflict do nothing;

-- =====================
-- ROW LEVEL SECURITY
-- =====================
alter table public.profiles enable row level security;
alter table public.swings enable row level security;
alter table public.swing_frames enable row level security;
alter table public.subscriptions enable row level security;

-- Profiles: users can only see/edit their own
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Swings: users can only see/edit their own
create policy "Users can view own swings"
  on public.swings for select
  using (auth.uid() = user_id);

create policy "Users can insert own swings"
  on public.swings for insert
  with check (auth.uid() = user_id);

create policy "Users can update own swings"
  on public.swings for update
  using (auth.uid() = user_id);

create policy "Users can delete own swings"
  on public.swings for delete
  using (auth.uid() = user_id);

-- Swing frames: tied to swing ownership
create policy "Users can view own swing frames"
  on public.swing_frames for select
  using (
    auth.uid() = (
      select user_id from public.swings where id = swing_id
    )
  );

create policy "Users can insert own swing frames"
  on public.swing_frames for insert
  with check (
    auth.uid() = (
      select user_id from public.swings where id = swing_id
    )
  );

-- Subscriptions
create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- =====================
-- STORAGE POLICIES
-- =====================
create policy "Users can upload own videos"
  on storage.objects for insert
  with check (
    bucket_id = 'swing-videos' and
    auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can view own videos"
  on storage.objects for select
  using (
    bucket_id = 'swing-videos' and
    auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can delete own videos"
  on storage.objects for delete
  using (
    bucket_id = 'swing-videos' and
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- =====================
-- INDEXES
-- =====================
create index if not exists swings_user_id_idx on public.swings(user_id);
create index if not exists swings_created_at_idx on public.swings(created_at desc);
create index if not exists swing_frames_swing_id_idx on public.swing_frames(swing_id);
create index if not exists swing_frames_frame_index_idx on public.swing_frames(swing_id, frame_index);
