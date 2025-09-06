export type PaymentStatus = 'Paid' | 'Pending';

export interface Payment {
  month: string;
  date: string;
  amount: number;
  status: PaymentStatus;
}

export interface Loan {
  id: string;
  name: string;
  totalLoan: number;
  totalPaid: number;
  payments: Payment[];
  nextDueDateISO?: string;
  // Full schedule retained to compute real-time due amounts
  schedule?: ReadonlyArray<{ dueDateISO: string; amount: number; status: PaymentStatus }>;
}

import response from './response';

type ApiScheduleItem = {
  dueDate: string;
  dueAmount: number;
  status: string;
};

type ApiLoanItem = {
  _id: string;
  bankName: string;
  totalLoanAmount: number;
  totalPaidAmount: number;
  paymentSchedule: ReadonlyArray<ApiScheduleItem>;
};

type ApiResponse = {
  data: ReadonlyArray<ApiLoanItem>;
};

const formatMonthDay = (iso: string) => {
  const d = new Date(iso);
  // e.g., "November 4"
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
};

const getYear = (iso: string) => new Date(iso).getFullYear().toString();

const apiResponse = response as ApiResponse;

export const loansData: Loan[] = Array.isArray(apiResponse.data)
  ? apiResponse.data.map(item => ({
      id: item._id,
      name: item.bankName,
      totalLoan: item.totalLoanAmount,
      totalPaid: item.totalPaidAmount,
      payments: (item.paymentSchedule || []).map((sched: ApiScheduleItem) => ({
        month: formatMonthDay(sched.dueDate),
        date: getYear(sched.dueDate),
        amount: sched.dueAmount,
        status: sched.status.toLowerCase() === 'paid' ? 'Paid' : 'Pending',
      })),
      nextDueDateISO: (item.paymentSchedule || []).find((s: ApiScheduleItem) => s.status.toLowerCase() !== 'paid')?.dueDate,
      schedule: (item.paymentSchedule || []).map((sched: ApiScheduleItem) => ({
        dueDateISO: sched.dueDate,
        amount: sched.dueAmount,
        status: sched.status.toLowerCase() === 'paid' ? 'Paid' : 'Pending',
      })),
    }))
  : [];

