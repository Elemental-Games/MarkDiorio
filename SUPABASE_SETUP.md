# Supabase Setup for Contact Form

This document explains how to set up Supabase to store messages from the contact form.

## 1. Create a Supabase Project

1. Sign up or log in at [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key (you'll need these later)

## 2. Create the Messages Table

1. Go to the SQL Editor in your Supabase dashboard
2. Run the following SQL to create the messages table:

```sql
CREATE TABLE public.messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone
CREATE POLICY "Allow inserts from anyone" ON public.messages 
FOR INSERT WITH CHECK (true);

-- Create a policy that only allows viewing by authenticated users
CREATE POLICY "Allow viewing only by authenticated users" ON public.messages 
FOR SELECT USING (auth.role() = 'authenticated');
```

## 3. Set Up Environment Variables

1. Open the `.env.local` file in your project
2. Replace the placeholder values with your actual Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 4. Restart Your Development Server

After setting up everything, restart your Next.js development server:

```
npm run dev
```

## 5. Testing The Contact Form

Fill out and submit the contact form. The message should be stored in your Supabase 'messages' table.

You can view the messages in the Supabase dashboard under:
Table Editor > messages

## Troubleshooting

If you encounter any issues:

1. Check the browser console for errors
2. Verify your Supabase credentials are correct in `.env.local`
3. Ensure the messages table is created correctly
4. Check Supabase logs in the dashboard 