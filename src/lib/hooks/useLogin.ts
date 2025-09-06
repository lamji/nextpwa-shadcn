"use client";

import { useAppContext, useUnauthenticatedPostData } from "plugandplay-react-query-hooks";
import { useAppDispatch } from '@/lib/store';
import { showAlert } from '@/lib/features/alertSlice';
import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export function useLogin() {
  const { setToken } = useAppContext();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || ""

  // Use unauthenticated mutation for login endpoint
  const { mutateAsync: loginMutateAsync, isPending} = useUnauthenticatedPostData({
    baseUrl,
    endpoint: '/auth/login'
  });

  // Normalize different error shapes (Axios, fetch, custom) to a readable message
  const getErrorMessage = (err: unknown): string => {
    if (typeof err === 'string') return err;
    if (err && typeof err === 'object') {
      const e = err as Record<string, unknown>;
      const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
      const pickString = (v: unknown): string | undefined => (typeof v === 'string' && v) ? v : undefined;

      const response = e['response'];
      if (isObj(response)) {
        const data = response['data'];
        if (isObj(data)) {
          const respMsg = pickString(data['message']) ?? pickString(data['error']);
          if (respMsg) return respMsg;
        }
      }
      const data = e['data'];
      if (isObj(data)) {
        const dataMsg = pickString(data['message']) ?? pickString(data['error']);
        if (dataMsg) return dataMsg;
      }
      const msg = e['message'];
      if (typeof msg === 'string' && msg) return msg;
    }
    return 'An unexpected error occurred. Please try again.';
  };


  // Secure token storage utilities
  const tokenStorage = useMemo(() => ({
    set: (token: string, expiresIn?: number) => {
      const tokenData = {
        token,
        timestamp: Date.now(),
        expiresIn: expiresIn || 30 * 24 * 60 * 60 * 1000, // Default 30 days in ms
      };
      sessionStorage.setItem('auth_token', JSON.stringify(tokenData));
    },
    get: (): string | null => {
      try {
        const stored = sessionStorage.getItem('auth_token');
        if (!stored) return null;
        
        const tokenData = JSON.parse(stored);
        const now = Date.now();
        
        // Check if token is expired
        if (now - tokenData.timestamp > tokenData.expiresIn) {
          sessionStorage.removeItem('auth_token');
          sessionStorage.removeItem('user_data');
          return null;
        }
        
        return tokenData.token;
      } catch {
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('user_data');
        return null;
      }
    },
    remove: () => {
      sessionStorage.removeItem('auth_token');
      sessionStorage.removeItem('user_data');
    }
  }), []);

  // Store user data securely
  const storeUserData = (user: Record<string, unknown>) => {
    if (user) {
      sessionStorage.setItem('user_data', JSON.stringify(user));
    }
  };

  // Extract token and user data from API response
  const extractAuthData = (result: unknown): { token?: string; user?: Record<string, unknown> } => {
    if (result && typeof result === 'object') {
      const obj = result as Record<string, unknown>;
      
      // Handle your API response structure
      if (obj.success && obj.token) {
        return {
          token: obj.token as string,
          user: obj.user as Record<string, unknown>
        };
      }
      
      // Fallback for other response structures
      const directToken = obj['token'];
      if (typeof directToken === 'string') {
        return { 
          token: directToken, 
          user: obj['user'] as Record<string, unknown>
        };
      }
      
      const data = obj['data'];
      if (data && typeof data === 'object') {
        const dataObj = data as Record<string, unknown>;
        const token = dataObj['token'];
        if (typeof token === 'string') {
          return { 
            token, 
            user: dataObj['user'] as Record<string, unknown>
          };
        }
      }
    }
    return {};
  };

  // On component mount, check sessionStorage for existing token
  useEffect(() => {
    const token = tokenStorage.get();
    if (token) {
      setToken(token); // Restore auth state if token exists
    }
  }, [setToken, tokenStorage]);

  // Handle login form submission
  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await loginMutateAsync({ email, password });
      console.log(result);
      
      // Extract token and user data from API response
      const { token, user } = extractAuthData(result);
      
      if (token) {
        // Store token securely with expiration handling
        tokenStorage.set(token);
        setToken(token); // Update auth state
        
        // Also set a cookie so middleware (server-side) can authenticate navigations
        // Cookie name must match middleware `getAuthToken` expectation: 'auth_token'
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
        document.cookie = `auth_token=${encodeURIComponent(token)}; Path=/; Expires=${expires.toUTCString()}; SameSite=Lax` + (location.protocol === 'https:' ? '; Secure' : '');
        
        // Store user data if available
        if (user) {
          storeUserData(user);
        }

        // Redirect to intended route or home
        const redirectTo = searchParams.get('redirect') || '/';
        router.replace(redirectTo);
      }
    } catch (error) {
      console.error('Login failed:', error);
      dispatch(showAlert({
        title: 'Login failed',
        message: getErrorMessage(error),
        variant: 'error',
      }));
    }
  };
  // Logout function to clear tokens and user data
  const handleLogout = () => {
    tokenStorage.remove();
    setToken(null);
  };

  return { handleLogin, handleLogout, isLoading: isPending };
}
