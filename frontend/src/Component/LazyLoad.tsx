import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  ErrorComponent?: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
}

const DefaultError: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ 
  error, 
  resetErrorBoundary 
}) => (
  <div className="flex flex-col items-center justify-center min-h-[200px] p-4">
    <p className="text-red-500 mb-4">Error loading component: {error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Retry
    </button>
  </div>
);

const DefaultFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full" />
  </div>
);

export const LazyLoad: React.FC<LazyLoadProps> = ({ 
  children, 
  fallback = <DefaultFallback />,
  ErrorComponent = DefaultError
}) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onReset={() => {
        // Reset the error state when retry is clicked
        window.location.reload();
      }}
    >
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};