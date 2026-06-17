import URLInput from './URLInput';
import AdBanner from '@/components/ui/AdBanner';

const STATS = [
  { value: '15+', label: 'Platforms' },
  { value: '4K', label: 'Max Quality' },
  { value: '100%', label: 'Free' },
  { value: '0', label: 'Sign-ups' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4" aria-label="Hero section">
      {/* Ad banner - header */}
      <div className="w-full max-w-3xl mb-6">
        <AdBanner slot="1234567890" format="leaderboard" height={90} />
      </div>

      <div className="text-center mb-8 max-w-3xl mx-auto animate-fade-in-up">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          Free · Fast · No Registration
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Download Videos from{' '}
          <span className="gradient-text">Any Platform</span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
          Save YouTube, Instagram, TikTok, Twitter, and 11+ more platforms.
          HD quality. No watermarks. Instant download.
        </p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Works on Android, iPhone, and Desktop browsers.
        </p>
      </div>

      {/* Main download widget */}
      <div className="w-full max-w-3xl px-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <URLInput />
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-4 gap-4 sm:gap-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
            <div className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Supported platform pills */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {['YouTube', 'Instagram', 'TikTok', 'Twitter/X', 'Facebook', 'Vimeo', 'Twitch', '+8 more'].map((p) => (
          <span
            key={p}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(255,255,255,0.07)', color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
