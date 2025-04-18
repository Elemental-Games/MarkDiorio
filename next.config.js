/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add env variables explicitly
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://votrtjubwsueaxijcjcz.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdHJ0anVid3N1ZWF4aWpjamN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MTgwMjAsImV4cCI6MjA2MDQ5NDAyMH0.A7ETA4Q5LbOrBRoHPEKgYISfgK_yXUEMGZc-bCqWPt4',
  },
  // Fix image configuration
  images: {
    unoptimized: true,
  },
  // Enable static exports
  output: 'standalone',
};

module.exports = nextConfig; 