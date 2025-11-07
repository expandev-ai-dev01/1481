import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Loading spinner component with old money styling
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  return (
    <div className={getLoadingSpinnerClassName({ size, className })}>
      <div className="animate-spin rounded-full border-4 border-oldMoney-gold border-t-transparent" />
    </div>
  );
};
