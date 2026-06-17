import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Millions</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            What our users say about Video Downloader.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-card p-5 flex flex-col gap-3"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex text-yellow-400 gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} aria-hidden="true">★</span>
                ))}
                <span className="sr-only">{t.rating} out of 5 stars</span>
              </div>
              <p className="text-sm leading-relaxed italic" style={{ color: 'var(--text-secondary)' }} itemProp="reviewBody">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: 'white' }}
                  aria-hidden="true"
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }} itemProp="author">{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
