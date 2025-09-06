import { Badge } from '@/components/ui/badge';
import { Payment } from '@/lib/data/loan-data';
import { formatCurrency } from '@/lib/helper/currency';

interface PaymentScheduleTableProps {
  payments: Payment[];
}

export const PaymentScheduleTable = ({ payments }: PaymentScheduleTableProps) => {
  const groupedPayments = payments.reduce((acc, payment) => {
    const year = payment.date;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(payment);
    return acc;
  }, {} as Record<string, Payment[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedPayments).map(([year, yearPayments]) => (
        <div key={year}>
          <h4 className="mb-4 text-lg font-semibold text-white/90">{year}</h4>
          <div className="space-y-3">
            {yearPayments.map((payment, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <p className="font-medium text-white">{payment.month}</p>
                  <p className="text-sm text-white/60">{formatCurrency(payment.amount)}</p>
                </div>
                <Badge variant={payment.status === 'Paid' ? 'success' : 'destructive'}>
                  {payment.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
