'use client';

interface FilterBarProps {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
}

export function FilterBar({ filters, active, onChange }: FilterBarProps) {
  return (
    <div className="flex items-center gap-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all ${
            active === f
              ? 'bg-neon/10 text-neon border border-neon/20'
              : 'bg-white/[0.03] text-muted-light border border-white/[0.06] hover:border-white/[0.12] hover:text-white'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
