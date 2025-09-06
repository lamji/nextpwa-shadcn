export type TransactionType = 'loan' | 'payment' | 'fee' | 'refund' | 'adjustment' | string;
export type TransactionStatus = 'completed' | 'pending' | 'failed' | string;

export interface TransactionUser {
  _id: string;
  name: string;
  email: string;
}

export interface TransactionDebt {
  _id: string;
  bankName: string;
  totalLoanAmount?: number | null;
  totalPaidPercentage?: number | null;
  isOverdue?: boolean | null;
  remainingBalance?: number | null;
  id: string;
}

export interface TransactionDetails {
  debt?: TransactionDebt;
  paymentScheduleIndex?: number;
  bankReference?: string;
  paymentMethod?: string;
}

export interface TransactionItem {
  _id: string;
  id: string;
  type: TransactionType;
  amount: number;
  description?: string;
  status: TransactionStatus;
  user?: TransactionUser;
  transactionDate?: string; // ISO
  createdAt?: string; // ISO
  updatedAt?: string; // ISO
  __v?: number;
  formattedAmount?: string;
  details?: TransactionDetails;
}

export interface TransactionsApiResponse {
  success: boolean;
  count: number;
  total: number;
  pagination?: {
    page: number;
    limit: number;
    pages: number;
  };
  data: TransactionItem[];
}
