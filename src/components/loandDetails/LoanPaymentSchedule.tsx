"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HandCoins } from "lucide-react";
import { formatCurrency } from "@/lib/helper/currency";

export type LoanPayment = {
  month: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
};

export type LoanScheduleItem = {
  dueDateISO: string;
  status: "Paid" | "Pending";
};

export type LoanPaymentScheduleProps = {
  payments: LoanPayment[];
  schedule?: LoanScheduleItem[];
  endOfToday: Date;
  handlePayClick: (
    idx: number,
    amount: number,
    label: string,
  ) => React.MouseEventHandler<HTMLButtonElement>;
};

export default function LoanPaymentSchedule({
  payments,
  schedule,
  endOfToday,
  handlePayClick,
}: LoanPaymentScheduleProps) {
  return (
    <div className="mt-6">
      <h2 className="mb-3 text-lg font-semibold">Payment Schedule</h2>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <ul className="divide-y">
            {payments.map((p, idx) => {
              const sched = Array.isArray(schedule) ? schedule[idx] : undefined;
              const isOverdue = !!sched && sched.status === "Pending" && new Date(sched.dueDateISO) <= endOfToday;
              const label = p.status === "Pending" && isOverdue ? "Overdue" : p.status;
              const badgeClass =
                label === "Paid"
                  ? "rounded bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700"
                  : label === "Overdue"
                  ? "rounded bg-red-100 px-2 py-0.5 text-xs text-red-700"
                  : "rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-700";

              return (
                <li key={idx}>
                  <div className="hover:bg-accent/40 flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition">
                    <div>
                      <div className="text-sm font-medium">{p.month}</div>
                      <div className="text-muted-foreground text-xs">{p.date}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <span className={badgeClass}>{label}</span>
                        <div className="text-sm font-semibold">{formatCurrency(p.amount)}</div>
                      </div>
                      <button
                        type="button"
                        title={label === "Paid" ? "Already paid" : "Pay now"}
                        onClick={handlePayClick(idx, p.amount, label)}
                        disabled={label === "Paid"}
                        aria-disabled={label === "Paid"}
                        className={
                          label === "Paid"
                            ? "text-muted-foreground inline-flex cursor-not-allowed items-center gap-1 rounded border px-2 py-1 text-xs opacity-40"
                            : "text-muted-foreground hover:bg-accent/40 hover:text-foreground hover:border-foreground/20 inline-flex items-center gap-1 rounded border px-2 py-1 text-xs transition-colors duration-150"
                        }
                      >
                        <HandCoins className="h-4 w-4" />
                        <span>Pay now</span>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
