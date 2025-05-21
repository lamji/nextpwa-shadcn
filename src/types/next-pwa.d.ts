interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
    appinstalled: Event;
  }
}

declare module 'next-pwa' {
  import { NextConfig } from 'next';
  
  export interface PWAConfig {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    scope?: string;
    sw?: string;
    runtimeCaching?: Array<{
    urlPattern: RegExp | string;
    handler: string;
    options?: {
      cacheName?: string;
      expiration?: {
        maxEntries?: number;
        maxAgeSeconds?: number;
      };
      cacheableResponse?: {
        statuses?: number[];
        headers?: Record<string, string>;
      };
      networkTimeoutSeconds?: number;
      backgroundSync?: {
        name: string;
        options?: {
          maxRetentionTime?: number;
        };
      };
    };
  }>;
    buildExcludes?: Array<string | RegExp>;
    publicExcludes?: Array<string | RegExp>;
  }
  
  export default function withPWA(config?: PWAConfig): (nextConfig: NextConfig) => NextConfig;
}
