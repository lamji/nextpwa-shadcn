'use client';

import React from 'react';
import { userApi } from '@/lib/data/userResponseApi';

export default function ProfilePage() {
  // Load user profile from mock API
  const user = userApi.user;

  const initials = React.useMemo(() => {
    if (!user?.name) return 'U';
    const parts = user.name.trim().split(/\s+/);
    const letters = (parts[0]?.[0] || '') + (parts[1]?.[0] || '');
    return letters.toUpperCase() || 'U';
  }, [user?.name]);

  const formatDate = React.useCallback((iso?: string) => {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString();
  }, []);

  const subscriptionLabel = React.useMemo(() => {
    const sub = user.subscription;
    if (sub?.status === 'active' && sub.nextDueAt) {
      return `Due: ${formatDate(sub.nextDueAt)}`;
    }
    return 'Free';
  }, [user.subscription, formatDate]);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-3 pt-8 pb-12 md:px-4">
        <section className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-2xl font-semibold text-white">
            {initials}
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl font-semibold tracking-tight">{user.name}</h1>
            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-2 text-sm">
              <span>{user.email}</span>
              <span className="hidden sm:inline">•</span>
              <span className="bg-background inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
                {user.role}
              </span>
            </div>
          </div>

          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <span className="text-foreground font-medium">Subscription:</span>
            <span className="bg-muted inline-flex items-center rounded-full px-2 py-0.5 text-xs">
              {subscriptionLabel}
            </span>
          </div>
          <div className="bg-background w-full max-w-md rounded-xl border p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-left text-base font-semibold">Subscription</h2>
                <p className="text-muted-foreground text-sm">Unlock unlimited features</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$9</div>
                <div className="text-muted-foreground text-xs">per month</div>
              </div>
            </div>
            <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 text-left text-sm">
              <li>No ads</li>
              <li>Priority support</li>
              <li>Export history</li>
            </ul>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none"
            >
              Subscribe
            </button>
            <p className="text-muted-foreground mt-2 text-center text-xs">Cancel anytime.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
