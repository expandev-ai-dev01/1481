import { clsx } from 'clsx';

export interface CardVariantProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function getCardClassName(props: CardVariantProps): string {
  const { variant = 'default', padding = 'md', className } = props;

  return clsx(
    'rounded-lg bg-white',
    {
      'shadow-md': variant === 'default',
      'shadow-xl': variant === 'elevated',
      'border-2 border-oldMoney-gold': variant === 'outlined',
    },
    {
      'p-0': padding === 'none',
      'p-4': padding === 'sm',
      'p-6': padding === 'md',
      'p-8': padding === 'lg',
    },
    className
  );
}
