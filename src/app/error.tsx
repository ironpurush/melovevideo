'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-md animate-fade-in-up">
        <div className="text-6xl mb-6" aria-hidden="true">⚠️</div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Something went wrong
        </h1>
        <p className="text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
          An unexpected error occurred. Please try again — if the issue persists, contact our support team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-gradient px-6 py-3 rounded-xl font-semibold text-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-semibold text-sm glass-card transition-all hover:bg-white/10"
            style={{ color: 'var(--text-primary)' }}
          >
            ← Back to Home
          </Link>
        </div>
        {error.digest && (
          <p className="text-xs mt-6" style={{ color: 'var(--text-secondary)' }}>
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
