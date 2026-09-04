type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'default';

const variants: Record<BadgeVariant, string> = {
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  danger: 'bg-red-500/10 text-red-400 border-red-500/20',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  default: 'bg-white/5 text-muted-light border-white/[0.08]',
};

interface StatusBadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export function StatusBadge({ label, variant = 'default' }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${variants[variant]}`}>
      {label}
    </span>
  );
}

export function getStatusVariant(status: string): BadgeVariant {
  const s = status.toLowerCase();
  if (['active', 'online', 'open', 'resolved', 'success'].includes(s)) return 'success';
  if (['warning', 'investigating', 'pending'].includes(s)) return 'warning';
  if (['critical', 'offline', 'closed', 'inactive', 'error', 'disabled'].includes(s)) return 'danger';
  if (['info', 'new'].includes(s)) return 'info';
  return 'default';
}
