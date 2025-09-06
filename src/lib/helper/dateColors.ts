export function getDueBorderColor(dueIso?: string, now: Date = new Date()): string {
  if (!dueIso) return 'border-l-gray-300';
  const due = new Date(dueIso);
  const diffMs = due.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) return 'border-l-red-500'; // overdue
  if (diffDays <= 7) return 'border-l-amber-500'; // due within a week
  return 'border-l-emerald-500'; // safely in the future
}

export function getDueStatus(
  dueIso?: string,
  now: Date = new Date()
): { text: string; className: string } {
  if (!dueIso) return { text: 'No upcoming due', className: 'text-gray-500' };
  const due = new Date(dueIso);
  const diffMs = due.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) {
    return { text: 'Overdue', className: 'text-red-600' };
  }
  if (diffDays <= 7) {
    return {
      text: `Due in ${diffDays} day${diffDays === 1 ? '' : 's'}`,
      className: 'text-amber-600',
    };
  }
  const pretty = due.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  return { text: `Next due ${pretty}`, className: 'text-emerald-700' };
}
