/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add env variables explicitly
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  // Fix image configuration for deployment
  images: {
    unoptimized: true,
  },
  // Enable static exports for better compatibility
  output: 'standalone',
};

module.exports = nextConfig; 