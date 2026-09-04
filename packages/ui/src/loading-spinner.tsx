import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './utils';

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-4 h-4 border-2',
      md: 'w-6 h-6 border-2',
      lg: 'w-8 h-8 border-3',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-full border-neutral-200 border-t-green-action animate-spin',
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';