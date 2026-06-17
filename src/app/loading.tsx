export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center animate-fade-in-up">
        <div
          className="w-12 h-12 rounded-full border-2 border-t-transparent mx-auto mb-4 animate-spin"
          style={{ borderColor: '#6366f1', borderTopColor: 'transparent' }}
          aria-label="Loading"
          role="status"
        />
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Loading...</p>
      </div>
    </div>
  );
}
