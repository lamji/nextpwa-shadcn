import { MutableRefObject } from 'react';
import { Filter, History, Plus } from 'lucide-react';

export type QuickActionsProps = {
  filterRef: MutableRefObject<HTMLDivElement | null>;
  filterOpen: boolean;
  setFilterOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  showActive: boolean;
  setShowActive: (v: boolean) => void;
  showClosed: boolean;
  setShowClosed: (v: boolean) => void;
  onHistory: () => void;
  onAdd: () => void;
};

export function QuickActions({
  filterRef,
  filterOpen,
  setFilterOpen,
  showActive,
  setShowActive,
  showClosed,
  setShowClosed,
  onHistory,
  onAdd,
}: QuickActionsProps) {
  return (
    <>
      {/* Quick Actions */}
      <span className="text-sm font-medium text-gray-700">Quick Actions</span>
      <div className="mb-4 flex items-center justify-between gap-3">
        {/* Left: Label + Filter (with text) */}
        <div className="flex items-center gap-3">
          <div className="relative" ref={filterRef}>
            <button
              type="button"
              aria-label="Filter loans"
              title="Filter loans"
              onClick={() => setFilterOpen(v => !v)}
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 text-primary" />
              Filter
            </button>
            {filterOpen && (
              <div className="absolute left-0 z-20 mt-2 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-md">
                <label className="flex items-center gap-2 rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-50">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                  />
                  Active loans
                </label>
                <label className="mt-1 flex items-center gap-2 rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-50">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={showClosed}
                    onChange={e => setShowClosed(e.target.checked)}
                  />
                  Closed loans
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Right: History + Add (icons only) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="View history"
            title="View history"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white hover:opacity-90"
            onClick={onHistory}
          >
            <History className="h-4 w-4 text-white" />
            <span className="sr-only">History</span>
          </button>
          <button
            type="button"
            aria-label="Add loan"
            title="Add loan"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white hover:opacity-90"
            onClick={onAdd}
          >
            <Plus className="h-4 w-4 text-white" />
            <span className="sr-only">Add</span>
          </button>
        </div>
      </div>
    </>
  );
}
