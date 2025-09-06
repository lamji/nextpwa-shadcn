"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/helper/currency";

export type LoanDetailsHeroProps = {
  remaining: number;
  totalLoan: number;
  totalPaid: number;
  statusLabel: string;
  statusClass: string;
  startedLabel: string;
  nextDueLabel: string;
  dueAmountLabel: string;
  dueAmountDisplay: number;
  percentPaid: number;
  onDelete: () => void;
};

export default function LoanDetailsHero({
  remaining,
  totalLoan,
  totalPaid,
  statusLabel,
  statusClass,
  startedLabel,
  nextDueLabel,
  dueAmountLabel,
  dueAmountDisplay,
  percentPaid,
  onDelete,
}: LoanDetailsHeroProps) {
  return (
    <Card className="mb-4 overflow-hidden border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-sm/5 text-white/90">Remaining Balance</CardTitle>
            <div className="text-3xl font-semibold sm:text-4xl">{formatCurrency(remaining)}</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={statusClass}>{statusLabel}</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={onDelete}
              aria-label="Delete loan"
              className="border-0 bg-white/10 text-white hover:bg-white/20"
            >
              <Trash2 className="mr-1 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="block">
          <div>
            <div className="mt-2 grid w-full grid-cols-2 gap-4 text-white/80">
              <div>
                <div className="text-xs tracking-wide uppercase">Total Loan</div>
                <div className="text-sm font-medium">{formatCurrency(totalLoan)}</div>
              </div>
              <div className="text-right">
                <div className="text-xs tracking-wide uppercase">Total Paid</div>
                <div className="text-sm font-medium">{formatCurrency(totalPaid)}</div>
              </div>
            </div>
          </div>
          <div className="mt-3 grid w-full grid-cols-3 gap-3 rounded bg-white/20 p-3 text-white/80">
            <div>
              <div className="text-[10px] tracking-wide uppercase">Started</div>
              <div className="text-xs font-medium">{startedLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] tracking-wide uppercase">Next Due</div>
              <div className="text-xs font-medium">{nextDueLabel}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] tracking-wide uppercase">{dueAmountLabel}</div>
              <div className="text-xs font-medium">{formatCurrency(dueAmountDisplay)}</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-1 flex items-center justify-between text-xs text-white/80">
              <span className="tracking-wide uppercase">Paid</span>
              <span className="font-medium">{percentPaid.toFixed(0)}%</span>
            </div>
            <Progress value={percentPaid} className="h-2 bg-white/20" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
