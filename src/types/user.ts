export interface UserResponseApi {
  success: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    lastLogin: string; // ISO date string
    createdAt: string; // ISO date string
    subscription?: {
      plan: 'free' | 'pro' | 'enterprise';
      status: 'none' | 'active' | 'canceled' | 'past_due';
      nextDueAt?: string; // ISO date string
    };
  };
}
