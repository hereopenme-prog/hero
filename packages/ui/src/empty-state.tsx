import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './utils';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center justify-center py-12 text-center', className)}
        {...props}
      >
        {icon && (
          <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center text-body-text mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-dark-text mb-2">{title}</h3>
        <p className="text-body-text max-w-sm mb-6">{description}</p>
        {action}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';