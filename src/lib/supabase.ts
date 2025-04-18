import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Initialize the Supabase client with hard-coded fallbacks if env vars are not available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://votrtjubwsueaxijcjcz.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdHJ0anVid3N1ZWF4aWpjamN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MTgwMjAsImV4cCI6MjA2MDQ5NDAyMH0.A7ETA4Q5LbOrBRoHPEKgYISfgK_yXUEMGZc-bCqWPt4'

// Add a try/catch to handle any URL issues
let supabase: SupabaseClient;
try {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} catch (error) {
  console.error('Error initializing Supabase client:', error)
  // Create a mock client that does nothing for fallback
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ error: null }),
      select: () => Promise.resolve({ data: [] }),
    }),
    auth: {
      signIn: () => Promise.resolve({ error: null }),
      signOut: () => Promise.resolve({ error: null }),
    }
  } as unknown as SupabaseClient
}

export { supabase } 