import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL, AUTHOR } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME} — a free, fast online video downloader built by ${AUTHOR}. Download videos from YouTube, Instagram, TikTok and 15+ platforms.`,
  alternates: { canonical: `${SITE_URL}/about` },
};

const TEAM_VALUES = [
  { icon: '🚀', title: 'Speed First', description: 'We optimize every layer — from server response to UI rendering — so you download in seconds, not minutes.' },
  { icon: '🔒', title: 'Privacy by Design', description: 'We never store your URLs or personal data. Every download request is ephemeral and never logged.' },
  { icon: '♿', title: 'Accessibility', description: 'Built to WCAG 2.1 AA standards. Video Downloader works for everyone, on every device and assistive technology.' },
  { icon: '🌍', title: 'Open Access', description: 'Free forever. No paywalls, no account required, no usage limits. We believe in open access to tools.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>/</li>
            <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              <span itemProp="name" style={{ color: 'var(--text-primary)' }}>About Us</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Video Downloader</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Video Downloader is a free, browser-based tool that lets anyone save videos from their favourite platforms — instantly, without any registration or software installation.
          </p>
        </div>

        {/* Story */}
        <div className="glass-card p-8 mb-10 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Our Story</h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              Video Downloader was created by <strong className="text-indigo-400">{AUTHOR}</strong> out of a simple frustration: existing tools were cluttered with pop-ups, fake download buttons, and malware risks. Users deserved something clean, fast, and trustworthy.
            </p>
            <p>
              Built with a mobile-first philosophy, Video Downloader was designed from day one to work seamlessly on Android and iPhone — the devices most people actually use to discover and share content.
            </p>
            <p>
              Today, Video Downloader supports 15+ platforms including YouTube, Instagram, TikTok, Twitter/X, Facebook, Vimeo, and more — all from a single, elegant interface.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our <span className="gradient-text">Core Values</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {TEAM_VALUES.map((v, i) => (
            <div key={i} className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-semibold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.description}</p>
            </div>
          ))}
        </div>

        {/* Developer card */}
        <div className="glass-card p-8 text-center animate-fade-in-up" style={{ border: '1px solid rgba(99,102,241,0.3)' }}>
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: 'white' }}
            aria-hidden="true"
          >
            SJ
          </div>
          <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Sagar Jondhale</h2>
          <p className="text-indigo-400 font-medium mb-3">IronPurush · Developer & Creator</p>
          <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Full-stack developer passionate about building fast, accessible, and privacy-respecting web tools. Video Downloader is built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
