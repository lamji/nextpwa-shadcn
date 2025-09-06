'use client';
import { loansData } from '@/lib/data/loan-data';
import { useRouter } from 'next/navigation';
import useActionsModel from '@/components/loans/useActionsModel';
import { QuickActions } from '@/components/loans/QuickActions';
import { LoanHeader } from '@/components/loans/LoanHeader';
import { LoanAccountsList } from '@/components/loans/LoanAccountsList';

export const LoanDashboard = () => {
  const router = useRouter();
  const {
    filterOpen,
    setFilterOpen,
    showActive,
    setShowActive,
    showClosed,
    setShowClosed,
    filterRef,
    totalLoans,
    totalRemaining,
    totalMonthlyAmortization,
    percentPaid,
  } = useActionsModel();

  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto p-4 md:h-[calc(100vh-var(--app-header-h))] md:overflow-hidden md:p-8">
        <div className="grid gap-6 md:h-full md:grid-cols-12">
          {/* Right column on desktop/tablet, first on mobile: Header + Quick Actions */}
          <div className="md:bg-secondary md:sticky md:top-[var(--app-header-h)] md:order-2 md:col-span-5 md:h-[calc(100vh-var(--app-header-h))] md:self-start md:overflow-y-auto md:rounded-2xl md:p-4">
            <div className="flex flex-col gap-4">
              {/* Quick actions on top for desktop/tablet; below header on mobile */}
              <div className="order-2 md:order-1">
                <QuickActions
                  filterRef={filterRef}
                  filterOpen={filterOpen}
                  setFilterOpen={setFilterOpen}
                  showActive={showActive}
                  setShowActive={setShowActive}
                  showClosed={showClosed}
                  setShowClosed={setShowClosed}
                  onHistory={() => router.push('/history')}
                  onAdd={() => router.push('/add')}
                />
              </div>

              {/* Wallet/Banking style header (light) */}
              <div className="order-1 md:order-2">
                <LoanHeader
                  totalRemaining={totalRemaining}
                  totalLoans={totalLoans}
                  totalMonthlyAmortization={totalMonthlyAmortization}
                  percentPaid={percentPaid}
                />
              </div>
            </div>
          </div>

          {/* Left column on desktop/tablet, second on mobile: Loan Accounts List */}
          <div className="md:order-1 md:col-span-7 md:h-full md:overflow-y-auto">
            {/* Loan Accounts List (navigates on click) */}
            <LoanAccountsList
              loans={loansData}
              showActive={showActive}
              showClosed={showClosed}
              onOpenLoan={(id: string) => router.push(`/loans/${id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
