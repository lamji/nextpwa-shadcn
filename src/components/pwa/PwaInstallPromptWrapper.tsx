'use client';

import dynamic from 'next/dynamic';
import { PwaInstallPromptProps } from '@/components/pwa/types';

// Import the PWA install prompt component dynamically with SSR disabled
const PwaInstallPrompt = dynamic(
  () => import('@/components/pwa').then(mod => ({ default: mod.PwaInstallPrompt })),
  { ssr: false }
);

export default function PwaInstallPromptWrapper(props: PwaInstallPromptProps) {
  return <PwaInstallPrompt {...props} />;
}
