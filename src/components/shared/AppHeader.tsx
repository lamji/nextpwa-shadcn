'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, CircleUser, PiggyBank, User, LogOut } from 'lucide-react';
import { useLogin } from '@/lib/hooks/useLogin';

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  notifCount?: number;
}

export const AppHeader = ({
  title = 'Loans',
  subtitle = 'Manage and track your loans in one place.',
  notifCount = 0,
}: AppHeaderProps) => {
  const router = useRouter();
  const { handleLogout } = useLogin();

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!profileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (profileRef.current && target && !profileRef.current.contains(target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileOpen]);

  // Keep a global CSS var with the current header height for sticky layouts
  useEffect(() => {
    const applyHeaderHeightVar = () => {
      const h = headerRef.current?.offsetHeight ?? 64;
      document.documentElement.style.setProperty('--app-header-h', `${h}px`);
    };
    applyHeaderHeightVar();
    window.addEventListener('resize', applyHeaderHeightVar);
    return () => window.removeEventListener('resize', applyHeaderHeightVar);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 mb-0 bg-white/80 backdrop-blur [--app-header-h:64px] supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container mx-auto p-4 pt-4 pb-0 md:p-2">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
            <PiggyBank className="text-primary h-7 w-7" />
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <button
              aria-label="Notifications"
              className="relative rounded-full p-2 hover:bg-gray-100"
              onClick={() => router.push('/notifications')}
            >
              <Bell className="h-5 w-5 text-gray-700" />
              {notifCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-4 text-white ring-2 ring-white">
                  {notifCount > 99 ? '99+' : notifCount}
                </span>
              ) : null}
            </button>
            <div className="relative" ref={profileRef}>
              <button
                aria-label="Profile"
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen(v => !v)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <CircleUser className="h-6 w-6 text-gray-700" />
              </button>
              {profileOpen && (
                <div
                  role="menu"
                  aria-label="Profile menu"
                  className="absolute right-0 z-20 mt-2 w-44 rounded-md border border-gray-200 bg-white p-1 shadow-md"
                >
                  <button
                    role="menuitem"
                    className="w-full rounded px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    onClick={() => {
                      setProfileOpen(false);
                      router.push('/profile');
                    }}
                  >
                    <User className="h-4 w-4 text-gray-600" />
                    <span>Profile</span>
                  </button>
                  <button
                    role="menuitem"
                    className="w-full rounded px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    onClick={() => {
                      setProfileOpen(false);
                      // Clear token from sessionStorage and in-app state
                      handleLogout();
                      // Clear auth cookie set during login
                      document.cookie =
                        'auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax' +
                        (location.protocol === 'https:' ? '; Secure' : '');
                      // Redirect to login
                      router.push('/login');
                    }}
                  >
                    <LogOut className="h-4 w-4 text-gray-600" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {subtitle ? <p className="mt-1 pb-3 text-gray-600">{subtitle}</p> : null}
      </div>
    </header>
  );
};
