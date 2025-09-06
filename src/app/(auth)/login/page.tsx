'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { cn } from '@/lib/utils';
import { useLogin } from '@/lib/hooks/useLogin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginPage() {
  const [formError, setFormError] = useState<string | null>(null);
  const { handleLogin, isLoading } = useLogin();

  type LoginValues = { email: string; password: string };

  const formik = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Enter a valid email').required('Email is required'),
      password: Yup.string().min(8, 'Min 8 characters').required('Password is required'),
    }),
    onSubmit: async (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
      setFormError(null);
      try {
        await handleLogin(values.email, values.password);
      } catch {
        setFormError('Login failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-background flex min-h-[100dvh] items-center justify-center px-4 py-8">
      <Card className="w-full max-w-sm border-0 shadow-none">
        <CardHeader className="text-center">
          <div className="mb-2 flex flex-col items-center gap-2">
            <Image
              src="/icons/apple-touch-icon.png"
              alt="Loan Management logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <CardTitle className="text-2xl">Loan Management</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          {formError ? (
            <div className="border-destructive/40 bg-destructive/5 text-destructive mb-4 rounded-md border px-3 py-2 text-sm">
              {formError}
            </div>
          ) : null}

          <form onSubmit={formik.handleSubmit} noValidate className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                placeholder="you@example.com"
                className={cn(
                  formik.touched.email &&
                    formik.errors.email &&
                    'border-destructive focus-visible:ring-destructive/30',
                )}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-destructive text-xs">{formik.errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                minLength={8}
                placeholder="••••••••"
                className={cn(
                  formik.touched.password &&
                    formik.errors.password &&
                    'border-destructive focus-visible:ring-destructive/30',
                )}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-destructive text-xs">{formik.errors.password}</p>
              )}
            </div>

            <Button type="submit" disabled={formik.isSubmitting || isLoading} className="w-full">
              {formik.isSubmitting || isLoading ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-muted-foreground text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-primary underline-offset-4 hover:underline">
              Create one
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
