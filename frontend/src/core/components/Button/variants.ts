import { clsx } from 'clsx';

export interface ButtonVariantProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export function getButtonClassName(props: ButtonVariantProps): string {
  const { variant = 'primary', size = 'md', fullWidth = false, className } = props;

  return clsx(
    'inline-flex items-center justify-center rounded font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none font-sans',
    {
      'bg-oldMoney-gold text-white hover:bg-oldMoney-darkGold focus-visible:ring-oldMoney-gold':
        variant === 'primary',
      'bg-oldMoney-brown text-oldMoney-cream hover:bg-oldMoney-darkBrown focus-visible:ring-oldMoney-brown':
        variant === 'secondary',
      'border-2 border-oldMoney-gold text-oldMoney-gold hover:bg-oldMoney-gold hover:text-white focus-visible:ring-oldMoney-gold':
        variant === 'outline',
      'bg-transparent hover:bg-oldMoney-cream text-oldMoney-brown focus-visible:ring-oldMoney-gold':
        variant === 'ghost',
    },
    {
      'h-8 px-3 text-sm': size === 'sm',
      'h-10 px-4 text-base': size === 'md',
      'h-12 px-6 text-lg': size === 'lg',
    },
    {
      'w-full': fullWidth,
    },
    className
  );
}
