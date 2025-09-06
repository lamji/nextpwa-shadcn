'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

type LoanNotFoundProps = {
  id: string;
  onBack: () => void;
};

export default function LoanNotFound({ id, onBack }: LoanNotFoundProps) {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-4 flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onBack} aria-label="Back">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Loan not found</h1>
      </div>
      <p className="text-muted-foreground">No loan matches the ID: {id}</p>
    </div>
  );
}
