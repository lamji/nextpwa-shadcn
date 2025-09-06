import type { UserResponseApi } from '@/types/user';

export const userApi: UserResponseApi = {
  success: true,
  user: {
    id: '68a16e7bee19bfdf95031b6a',
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'user',
    lastLogin: '2025-09-03T11:07:06.887Z',
    createdAt: '2025-08-17T05:54:03.647Z',
    subscription: {
      plan: 'pro',
      status: 'active',
      nextDueAt: '2025-10-01T00:00:00.000Z',
    },
  },
};
