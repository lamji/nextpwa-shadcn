import React from 'react';
import { getDueStatus } from '@/lib/helper/dateColors';
import type { Loan } from '@/lib/data/loan-data';
import { useDeleteData } from 'plugandplay-react-query-hooks';
import { useAppDispatch } from '@/lib/store';
import { showAlert } from '@/lib/features/alertSlice';
import { getErrorMessage } from '@/lib/helper/errors';
import { showLoading, hideLoading } from '@/lib/features/loadingSlice';
import { useRouter } from 'next/navigation';

export default function useActionModel({ id }: { id: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const dispatch = useAppDispatch();
  const router = useRouter();

  const goHome = () => router.push('/');
  const goBack = () => router.back();

  const { mutateAsync: deleteLoan, isPending } = useDeleteData<void>({
    baseUrl,
    endpoint: `/debts/${id}`,
    invalidateQueryKey: ['users'],
    options: {
      onSuccess: () => {
        dispatch(
          showAlert({
            title: 'Delete successful',
            message: 'Loan deleted successfully',
            variant: 'success',
          }),
        );
        router.push('/');
      },
      onError: error => {
        dispatch(
          showAlert({
            title: 'Delete failed',
            message: getErrorMessage(error),
            variant: 'error',
          }),
        );
      },
    },
  });

  React.useEffect(() => {
    if (isPending) {
      dispatch(showLoading({ message: 'Processing delete…' }));
    } else {
      dispatch(hideLoading());
    }
    return () => {
      dispatch(hideLoading());
    };
  }, [isPending, dispatch]);

  const handlePayClick =
    (idx: number, amount: number, label: string) =>
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      try {
        if (label === 'Paid') return;
        // TODO: trigger payment flow here
        console.log('Pay clicked', { index: idx, amount });
      } catch (error) {
        console.error('Payment action failed', error);
      }
    };

  const computeHeaderMeta = (loan: Loan) => {
    const remaining = Math.max(loan.totalLoan - loan.totalPaid, 0);
    const percentPaid = Math.min(100, Math.max(0, (loan.totalPaid / loan.totalLoan) * 100));
    const firstPayment = loan.payments?.[0];
    const startedDate =
      Array.isArray(loan.schedule) && loan.schedule.length > 0
        ? new Date(loan.schedule[0].dueDateISO)
        : undefined;
    const startedLabel = startedDate
      ? startedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : firstPayment
        ? `${firstPayment.month} ${firstPayment.date}`
        : '-';

    const today = new Date();
    const dueDay = loan.nextDueDateISO ? new Date(loan.nextDueDateISO).getDate() : undefined;
    const computedNextDue: Date | undefined = (() => {
      if (!dueDay) return loan.nextDueDateISO ? new Date(loan.nextDueDateISO) : undefined;
      const candidate = new Date(today.getFullYear(), today.getMonth(), dueDay);
      return today > candidate
        ? new Date(today.getFullYear(), today.getMonth() + 1, dueDay)
        : candidate;
    })();
    const nextDueLabel = computedNextDue
      ? computedNextDue.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : '-';

    return {
      remaining,
      percentPaid,
      startedLabel,
      today,
      computedNextDue,
      nextDueLabel,
    };
  };

  const computeDueMeta = (params: {
    loan: Loan;
    today: Date;
    computedNextDue?: Date;
    remaining: number;
  }) => {
    const { loan, today, computedNextDue, remaining } = params;

    const firstPayment = loan.payments?.[0];
    const pendingPayment = loan.payments?.find(p => p.status === 'Pending');
    const monthlyDueAmount = pendingPayment?.amount ?? firstPayment?.amount ?? 0;

    const endOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
      999,
    );

    const dueAmountNow = Array.isArray(loan.schedule)
      ? loan.schedule
          .filter(s => s.status === 'Pending' && new Date(s.dueDateISO) <= endOfToday)
          .reduce((sum, s) => sum + s.amount, 0)
      : monthlyDueAmount;

    const overduePendingCount = Array.isArray(loan.schedule)
      ? loan.schedule.filter(s => s.status === 'Pending' && new Date(s.dueDateISO) <= endOfToday)
          .length
      : 0;

    const dueAmountLabel = overduePendingCount > 0 ? 'Due Now' : 'Monthly Due';
    const dueAmountDisplay = overduePendingCount > 0 ? dueAmountNow : monthlyDueAmount;

    const dueStatus =
      remaining <= 0
        ? { text: 'Closed', className: 'text-white' }
        : overduePendingCount > 0
          ? { text: 'Overdue', className: 'text-red-600' }
          : getDueStatus(computedNextDue?.toISOString());

    const statusLabel = remaining <= 0 ? 'Closed' : dueStatus.text;
    const statusClass = `rounded px-2 py-0.5 text-xs font-medium border border-white/20 bg-white/10 ${
      remaining <= 0 ? 'text-white' : dueStatus.className
    }`;

    return {
      monthlyDueAmount,
      endOfToday,
      dueAmountNow,
      overduePendingCount,
      dueAmountLabel,
      dueAmountDisplay,
      dueStatus,
      statusLabel,
      statusClass,
      isPending,
    };
  };

  return {
    handlePayClick,
    computeDueMeta,
    computeHeaderMeta,
    deleteLoan,
    goHome,
    goBack,
  };
}
