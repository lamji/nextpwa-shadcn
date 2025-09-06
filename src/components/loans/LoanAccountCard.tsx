import { Loan } from '@/lib/data/loan-data';
import { PaymentScheduleTable } from './PaymentScheduleTable';
import { Progress } from '@/components/ui/progress';
import { formatCurrency } from '@/lib/helper/currency';

interface LoanAccountCardProps {
  loan: Loan;
}

export const LoanAccountCard = ({ loan }: LoanAccountCardProps) => {
  const progress = (loan.totalPaid / loan.totalLoan) * 100;

  return (
    <>
      <div className="space-y-2 mb-6">
        <Progress value={progress} className="h-2 bg-white/20" />
        <div className="flex justify-between text-sm font-medium text-white/80">
          <span>{formatCurrency(loan.totalPaid)} Paid</span>
          <span>{formatCurrency(loan.totalLoan)} Total</span>
        </div>
      </div>
      <PaymentScheduleTable payments={loan.payments} />
    </>
  );
};
