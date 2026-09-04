import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: string;
}

export function StatCard({ icon, label, value, change }: StatCardProps) {
  return (
    <div className="bg-surface-3 border border-white/[0.06] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 bg-neon/8 border border-neon/15 rounded-xl flex items-center justify-center text-neon">
          {icon}
        </div>
        {change && (
          <span className="text-[12px] text-neon flex items-center gap-1 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            {change}
          </span>
        )}
      </div>
      <p className="text-[28px] font-extrabold text-white leading-tight">{value}</p>
      <p className="text-[13px] text-muted mt-1">{label}</p>
    </div>
  );
}
