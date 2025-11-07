import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';

/**
 * @component RootLayout
 * @summary Root layout wrapper for all pages
 * @domain core
 * @type layout-component
 * @category layout
 */
export const RootLayout = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-oldMoney-cream">
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};
