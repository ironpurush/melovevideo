import Link from 'next/link';
import { PLATFORMS } from '@/lib/constants';

export default function PlatformsSection() {
  return (
    <section className="py-16 px-4" aria-labelledby="platforms-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="platforms-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Supported Platforms</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Download from your favourite social media and video platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className={`glass-card p-4 sm:p-5 transition-all hover:-translate-y-1 ${
                platform.supported ? 'cursor-default' : 'opacity-60'
              }`}
              id={`platform-${platform.id}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold mb-3"
                style={{ background: `${platform.color}22`, color: platform.color }}
              >
                {platform.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{platform.name}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{platform.description}</p>
              {!platform.supported && (
                <span
                  className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'var(--text-secondary)' }}
                >
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/platforms"
            className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
          >
            View All Platforms →
          </Link>
        </div>
      </div>
    </section>
  );
}
