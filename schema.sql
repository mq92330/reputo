-- =============================================
-- REPUTO — Schéma Supabase v2
-- À exécuter dans Supabase > SQL Editor
-- =============================================

-- 1. PROFILES
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  cabinet_name text not null default '',
  google_review_url text default '',
  sms_template text default '',
  greeting_format text default 'prenom',
  profession text default 'medecin',
  praticien_name text default '',
  star_threshold integer default 4 check (star_threshold between 1 and 5),
  credits integer default 20, -- 20 SMS offerts à l'inscription
  subscription_status text default 'active',
  created_at timestamptz default now()
);

alter table profiles enable row level security;
create policy "own profile select" on profiles for select using (auth.uid() = id);
create policy "own profile update" on profiles for update using (auth.uid() = id);
create policy "own profile insert" on profiles for insert with check (auth.uid() = id);

-- 2. SMS LOGS
create table sms_logs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  phone text not null,
  patient_name text,
  message text,
  status text default 'sent',
  token uuid,
  stars integer,
  feedback_type text, -- 'google' | 'private' | null
  sent_at timestamptz default now()
);

alter table sms_logs enable row level security;
create policy "own logs select" on sms_logs for select using (auth.uid() = user_id);
create policy "own logs insert" on sms_logs for insert with check (auth.uid() = user_id);

-- 3. FEEDBACK TOKENS (lien patient → page étoiles)
create table feedback_tokens (
  token uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  patient_name text,
  phone text,
  star_threshold integer default 4,
  google_url text default '',
  cabinet_name text default '',
  used boolean default false,
  stars integer,
  responded_at timestamptz,
  expires_at timestamptz not null,
  created_at timestamptz default now()
);

-- Public access for feedback page (no auth needed)
alter table feedback_tokens enable row level security;
create policy "public read token" on feedback_tokens for select using (true);
create policy "public update token" on feedback_tokens for update using (true);

-- 4. PATIENT FEEDBACKS (avis privés)
create table patient_feedbacks (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  token uuid references feedback_tokens(token),
  stars integer not null,
  feedback_text text,
  patient_name text,
  phone text,
  read boolean default false,
  created_at timestamptz default now()
);

alter table patient_feedbacks enable row level security;
create policy "own feedbacks select" on patient_feedbacks for select using (auth.uid() = user_id);
create policy "service feedbacks insert" on patient_feedbacks for insert with check (true);

-- 5. CREDIT PURCHASES (log des achats)
create table credit_purchases (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  credits_added integer not null,
  product_name text,
  amount_paid integer, -- en centimes
  purchased_at timestamptz default now()
);

alter table credit_purchases enable row level security;
create policy "own purchases select" on credit_purchases for select using (auth.uid() = user_id);

-- INDEXES
create index sms_logs_user_id on sms_logs(user_id);
create index sms_logs_sent_at on sms_logs(sent_at desc);
create index feedback_tokens_user_id on feedback_tokens(user_id);
create index patient_feedbacks_user_id on patient_feedbacks(user_id);
create index patient_feedbacks_read on patient_feedbacks(user_id, read);
