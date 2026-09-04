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
              ? 'bg-green-action/10 text-green-action border border-green-action/20'
              : 'bg-neutral-100 text-neutral-500 border border-neutral-200 hover:border-green-action/30 hover:text-black'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
