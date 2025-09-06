"use client";

import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { hideAlert } from '@/lib/features/alertSlice';
import { Button } from '@/components/ui/button';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';

// A lightweight, accessible modal for global alerts
export default function GlobalAlert() {
  const dispatch = useAppDispatch();
  const { isOpen, title, message, variant } = useAppSelector((s) => s.alert);

  const onClose = useCallback(() => dispatch(hideAlert()), [dispatch]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const iconByVariant: Record<string, React.ReactNode> = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="global-alert-title"
        aria-describedby="global-alert-message"
        className="relative mx-4 w-full max-w-sm rounded-lg border bg-background p-4 shadow-lg"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0">{iconByVariant[variant ?? 'info']}</div>
          <div className="flex-1">
            <h2 id="global-alert-title" className="text-base font-semibold text-foreground">
              {title ?? 'Notice'}
            </h2>
            <p id="global-alert-message" className="mt-1 text-sm text-muted-foreground">
              {message ?? 'Something happened.'}
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
