import { createClient } from '@supabase/supabase-js'

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL 
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create client if URL is available
export const supabase = supabaseUrl 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null 