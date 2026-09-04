import { cn } from './utils';

export interface StatusBadgeProps {
  status: 'OPEN' | 'CLOSED' | 'ONLINE' | 'OFFLINE' | 'WARNING' | 'CRITICAL' | 'ACTIVE' | 'INACTIVE';
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'OPEN':
      case 'ONLINE':
      case 'ACTIVE':
        return {
          bg: 'bg-green-light',
          text: 'text-green-dark',
          dot: 'bg-green-action',
          label: status,
        };
      case 'CLOSED':
      case 'OFFLINE':
      case 'INACTIVE':
        return {
          bg: 'bg-neutral-100',
          text: 'text-body-text',
          dot: 'bg-neutral-400',
          label: status,
        };
      case 'WARNING':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-800',
          dot: 'bg-yellow-500',
          label: 'Warning',
        };
      case 'CRITICAL':
        return {
          bg: 'bg-red-100',
          text: 'text-red-800',
          dot: 'bg-red-500',
          label: 'Critical',
        };
      default:
        return {
          bg: 'bg-neutral-100',
          text: 'text-body-text',
          dot: 'bg-neutral-400',
          label: status,
        };
    }
  };

  const config = getStatusConfig();

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        config.bg,
        config.text,
        {
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
        }
      )}
    >
      <span
        className={cn(
          'rounded-full',
          config.dot,
          {
            'w-1.5 h-1.5 mr-1.5': size === 'sm',
            'w-2 h-2 mr-2': size === 'md',
          }
        )}
      />
      {config.label}
    </span>
  );
}