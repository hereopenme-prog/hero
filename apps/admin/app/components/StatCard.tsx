import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: string;
}

export function StatCard({ icon, label, value, change }: StatCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action">
          {icon}
        </div>
        {change && (
          <span className="text-[12px] text-green-action flex items-center gap-1 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            {change}
          </span>
        )}
      </div>
      <p className="text-[28px] font-extrabold text-black leading-tight">{value}</p>
      <p className="text-[13px] text-neutral-500 mt-1">{label}</p>
    </div>
  );
}
