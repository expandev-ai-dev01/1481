import { Component, ReactNode, ErrorInfo } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

/**
 * @component ErrorBoundary
 * @summary Error boundary for graceful error handling
 * @domain core
 * @type utility-component
 * @category error-handling
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-oldMoney-cream">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border-2 border-oldMoney-gold">
              <h2 className="text-2xl font-serif font-bold text-oldMoney-brown mb-4">
                Algo deu errado
              </h2>
              <p className="text-oldMoney-darkBrown mb-6">Pedimos desculpas pelo inconveniente.</p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-2 bg-oldMoney-gold text-white rounded hover:bg-oldMoney-darkGold transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
