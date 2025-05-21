import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  /* config options here */
};

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Enable in development mode for testing
  disable: false,
});

export default pwaConfig(nextConfig);
