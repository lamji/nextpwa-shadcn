import type { Loan } from '@/lib/data/loan-data';
import { getDueBorderColor, getDueStatus } from '@/lib/helper/dateColors';
import { formatCurrency } from '@/lib/helper/currency';

type Props = {
  loans: Loan[];
  showActive: boolean;
  showClosed: boolean;
  onOpenLoan: (id: string) => void;
};

export function LoanAccountsList({ loans, showActive, showClosed, onOpenLoan }: Props) {
  const filtered = loans.filter((loan: Loan) => {
    const isClosed = loan.totalPaid >= loan.totalLoan;
    const isActive = !isClosed;
    return (showActive && isActive) || (showClosed && isClosed);
  });

  return (
    <div className="w-full space-y-3">
      <p className="text-lg font-bold">Loan List</p>
      {filtered.map((loan: Loan) => (
        <button
          key={loan.id}
          type="button"
          onClick={() => onOpenLoan(loan.id)}
          className={`w-full rounded-lg border border-l-[5px] border-gray-200 ${getDueBorderColor(loan.nextDueDateISO)} bg-white px-4 py-3 text-left transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none`}
        >
          <div className="flex w-full items-center justify-between">
            <span className="text-base font-medium text-gray-900">{loan.name}</span>
            <span className="text-sm font-semibold text-gray-700">
              {formatCurrency(loan.totalLoan - loan.totalPaid)}
            </span>
          </div>
          <div className="mt-0.5">
            {(() => {
              const s = getDueStatus(loan.nextDueDateISO);
              return <span className={`text-xs ${s.className}`}>{s.text}</span>;
            })()}
          </div>
        </button>
      ))}
    </div>
  );
}
