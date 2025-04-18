/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add env variables explicitly
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  // Add image domains if needed
  images: {
    domains: ['votrtjubwsueaxijcjcz.supabase.co'],
    unoptimized: true,
  },
  // Enable static exports
  output: 'standalone',
};

module.exports = nextConfig; 