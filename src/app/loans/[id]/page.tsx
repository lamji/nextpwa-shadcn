'use client';

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { loansData, Loan } from '@/lib/data/loan-data';
import { Button } from '@/components/ui/button';
import useActionModel from './useActionModel';
import LoanNotFound from '@/components/loandDetails/LoanNotFound';
import LoanDetailsHero from '@/components/loandDetails/LoanDetailsHero';
import LoanPaymentSchedule from '@/components/loandDetails/LoanPaymentSchedule';
import ConfirmDialog from '@/components/shared/ConfirmDialog';

export default function LoanDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { handlePayClick, computeDueMeta, computeHeaderMeta, deleteLoan, goHome, goBack } =
    useActionModel({ id });
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const loan: Loan | undefined = React.useMemo(() => loansData.find(l => l.id === id), [id]);

  if (!loan) {
    return <LoanNotFound id={id} onBack={goBack} />;
  }

  const { remaining, percentPaid, startedLabel, today, computedNextDue, nextDueLabel } =
    computeHeaderMeta(loan);
  const { endOfToday, dueAmountLabel, dueAmountDisplay, statusLabel, statusClass } = computeDueMeta(
    { loan, today, computedNextDue, remaining },
  );

  return (
    <div className="bg-background">
      <div className="container mx-auto p-4 md:p-8">
        {/* Top bar */}
        <div className="mb-3 flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={goHome} aria-label="Back">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">{loan.name}</h1>
        </div>

        {/* Wallet Hero */}
        <LoanDetailsHero
          remaining={remaining}
          totalLoan={loan.totalLoan}
          totalPaid={loan.totalPaid}
          statusLabel={statusLabel}
          statusClass={statusClass}
          startedLabel={startedLabel}
          nextDueLabel={nextDueLabel}
          dueAmountLabel={dueAmountLabel}
          dueAmountDisplay={dueAmountDisplay}
          percentPaid={percentPaid}
          onDelete={() => setConfirmOpen(true)}
        />

        {/* Payment Schedule (E-wallet list) */}
        <LoanPaymentSchedule
          payments={loan.payments}
          schedule={Array.isArray(loan.schedule) ? loan.schedule : undefined}
          endOfToday={endOfToday}
          handlePayClick={handlePayClick}
        />
        <ConfirmDialog
          open={confirmOpen}
          title="Delete this loan?"
          message="This action cannot be undone."
          confirmText="Delete"
          destructive
          onCancel={() => setConfirmOpen(false)}
          onConfirm={async () => {
            try {
              await deleteLoan();
              setConfirmOpen(false);
            } catch {
              // error handled by alerts
            }
          }}
        />
      </div>
    </div>
  );
}
