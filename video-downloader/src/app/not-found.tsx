import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-md animate-fade-in-up">
        <div
          className="text-8xl font-black mb-6 gradient-text"
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Page Not Found
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to downloading videos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-gradient px-6 py-3 rounded-xl font-semibold text-sm">
            ← Back to Home
          </Link>
          <Link
            href="/platforms"
            className="px-6 py-3 rounded-xl font-semibold text-sm glass-card transition-all hover:bg-white/10"
            style={{ color: 'var(--text-primary)' }}
          >
            View Platforms
          </Link>
        </div>
      </div>
    </div>
  );
}
