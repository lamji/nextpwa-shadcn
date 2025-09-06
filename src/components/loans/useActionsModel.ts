import { useEffect, useRef, useState } from 'react';
import { loansData } from '@/lib/data/loan-data';

export default function useActionsModel() {
  // Filter dropdown state and ref
  const [filterOpen, setFilterOpen] = useState(false);
  const [showActive, setShowActive] = useState(true);
  const [showClosed, setShowClosed] = useState(true);
  const filterRef = useRef<HTMLDivElement | null>(null);

  // Close filter menu when clicking outside
  useEffect(() => {
    if (!filterOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (filterRef.current && target && !filterRef.current.contains(target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [filterOpen]);

  // Derived totals
  const totalLoans = loansData.reduce((acc, loan) => acc + loan.totalLoan, 0);
  const totalPaid = loansData.reduce((acc, loan) => acc + loan.totalPaid, 0);
  const totalRemaining = totalLoans - totalPaid;
  const totalMonthlyAmortization = loansData.reduce((acc, loan) => {
    const pendingPayment = loan.payments.find(p => p.status === 'Pending');
    return acc + (pendingPayment ? pendingPayment.amount : 0);
  }, 0);
  const percentPaid = totalLoans ? (totalPaid / totalLoans) * 100 : 0;

  return {
    // filter state
    filterOpen,
    setFilterOpen,
    showActive,
    setShowActive,
    showClosed,
    setShowClosed,
    filterRef,
    // derived values
    totalLoans,
    totalPaid,
    totalRemaining,
    totalMonthlyAmortization,
    percentPaid,
  };
}
