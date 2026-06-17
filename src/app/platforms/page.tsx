import type { Metadata } from 'next';
import Link from 'next/link';
import { PLATFORMS, SITE_URL } from '@/lib/constants';
import { CheckCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supported Platforms',
  description: 'Video Downloader supports YouTube, Instagram, TikTok, Twitter/X, Facebook, Vimeo, Twitch, Reddit, Dailymotion and more.',
  alternates: { canonical: `${SITE_URL}/platforms` },
};

const HOW_TO_STEPS = [
  { step: '1', title: 'Copy the video URL', description: "Open the video on any supported platform. Copy the URL from your browser or use the app's Share → Copy Link option." },
  { step: '2', title: 'Paste it here', description: 'Go to Video Downloader and paste the URL into the input box on the homepage. You can also tap the Paste button.' },
  { step: '3', title: 'Choose quality', description: "Click Download. We'll fetch available formats. Choose your preferred resolution or audio-only MP3." },
  { step: '4', title: 'Save to device', description: 'Click the quality button and the download begins. The file saves directly to your Downloads folder or camera roll.' },
];

export default function PlatformsPage() {
  const supported = PLATFORMS.filter((p) => p.supported);
  const comingSoon = PLATFORMS.filter((p) => !p.supported);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
            <li style={{ color: 'var(--text-secondary)' }}>/</li>
            <li style={{ color: 'var(--text-primary)' }}>Supported Platforms</li>
          </ol>
        </nav>

        <div className="text-center mb-14 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Supported <span className="gradient-text">Platforms</span></h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Download videos from {supported.length}+ platforms. More added regularly.
          </p>
        </div>

        <section aria-labelledby="supported-heading" className="mb-14">
          <h2 id="supported-heading" className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle size={24} className="text-green-400" /><span>Available Now</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supported.map((platform, i) => (
              <div key={platform.id} id={platform.id} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.04}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0" style={{ background: `${platform.color}22`, color: platform.color }}>{platform.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{platform.name}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-green-400"><CheckCircle size={12} /> Supported</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{platform.description}</p>
                <Link href="/" className="btn-gradient inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold">Download Now →</Link>
              </div>
            ))}
          </div>
        </section>

        {comingSoon.length > 0 && (
          <section aria-labelledby="coming-soon-heading" className="mb-14">
            <h2 id="coming-soon-heading" className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock size={24} className="text-yellow-400" /><span>Coming Soon</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {comingSoon.map((platform) => (
                <div key={platform.id} className="glass-card p-6 opacity-60">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0" style={{ background: `${platform.color}22`, color: platform.color }}>{platform.icon}</div>
                    <div>
                      <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{platform.name}</h3>
                      <span className="inline-flex items-center gap-1 text-xs text-yellow-400"><Clock size={12} /> Coming Soon</span>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{platform.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="how-to-heading" className="mb-14">
          <h2 id="how-to-heading" className="text-3xl font-bold mb-8 text-center">How to <span className="gradient-text">Download Videos</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_TO_STEPS.map((step, i) => (
              <div key={step.step} className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: 'white' }}>{step.step}</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center glass-card p-10 animate-fade-in-up" style={{ border: '1px solid rgba(99,102,241,0.3)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Ready to Download?</h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Paste your video URL and download in seconds. Free. No sign-up.</p>
          <Link href="/" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">Start Downloading →</Link>
        </div>
      </div>
    </div>
  );
}
