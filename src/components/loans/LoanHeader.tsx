import { Landmark, CalendarClock, Wallet } from 'lucide-react';
import { formatCurrency } from '@/lib/helper/currency';

export type LoanHeaderProps = {
  totalRemaining: number;
  totalLoans: number;
  totalMonthlyAmortization: number;
  percentPaid: number;
};

export function LoanHeader({
  totalRemaining,
  totalLoans,
  totalMonthlyAmortization,
  percentPaid,
}: LoanHeaderProps) {
  return (
    <div className="bg-primary relative mb-12 overflow-hidden rounded-2xl border border-gray-200 p-6 shadow-lg">
      {/* Background decorative icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Wallet className="absolute -top-6 -right-4 h-40 w-40 text-white/10" />
        <Landmark className="absolute right-10 bottom-6 h-28 w-28 text-white/10" />
        <CalendarClock className="absolute -bottom-5 -left-4 h-32 w-32 text-white/10" />
      </div>
      <div className="relative z-10 flex items-start justify-between gap-6">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            <Wallet className="h-4 w-4 text-gray-700" /> Loan Wallet
          </div>
          <h2 className="text-sm text-white">Total Remaining Balance</h2>
          <p className="mt-1 text-4xl font-extrabold tracking-tight text-white">
            {formatCurrency(totalRemaining)}
          </p>
          <div className="mt-3">
            <div className="mb-1 flex items-center justify-between text-xs text-white">
              <span>Paid</span>
              <span className="font-semibold">{percentPaid.toFixed(1)}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/30">
              <div className="h-2 rounded-full bg-white" style={{ width: `${percentPaid}%` }} />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="w-full rounded-lg border border-transparent bg-[var(--primary-foreground)] px-3 py-2 text-sm text-white">
              <div className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-white" />
                <span>Total Loans</span>
              </div>
              <div className="mt-1 font-semibold text-white">{formatCurrency(totalLoans)}</div>
            </div>
            <div className="w-full rounded-lg border border-transparent bg-[var(--primary-foreground)] px-3 py-2 text-sm text-white">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-white" />
                <span>Monthly Amortization</span>
              </div>
              <div className="mt-1 font-semibold text-white">
                {formatCurrency(totalMonthlyAmortization)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
