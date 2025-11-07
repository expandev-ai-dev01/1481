import { clsx } from 'clsx';

export interface LoadingSpinnerVariantProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function getLoadingSpinnerClassName(props: LoadingSpinnerVariantProps): string {
  const { size = 'md', className } = props;

  return clsx(
    'flex items-center justify-center',
    {
      'h-8 w-8': size === 'sm',
      'h-12 w-12': size === 'md',
      'h-16 w-16': size === 'lg',
    },
    className
  );
}
