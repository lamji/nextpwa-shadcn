import type { LucideIcon } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export const SummaryCard = ({ title, value, icon: Icon }: SummaryCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/20 bg-black/25 p-6 backdrop-blur-xl shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-lg bg-white/10">
          <Icon className="size-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-white/70">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
};
