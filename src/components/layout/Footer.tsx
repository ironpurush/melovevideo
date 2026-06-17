import Link from 'next/link';
import { Download, Heart } from 'lucide-react';

const footerLinks = {
  'Legal': [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/dmca', label: 'DMCA Policy' },
  ],
  'Product': [
    { href: '/platforms', label: 'Supported Platforms' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
  'Platforms': [
    { href: '/platforms#youtube', label: 'YouTube Downloader' },
    { href: '/platforms#instagram', label: 'Instagram Downloader' },
    { href: '/platforms#tiktok', label: 'TikTok Downloader' },
    { href: '/platforms#twitter', label: 'Twitter Downloader' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
      {/* Ad placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="ad-placeholder h-16 w-full">Advertisement</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Download size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">Video Downloader</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Fast, free, and reliable video downloading from 15+ platforms. No registration required.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-indigo-400"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--glass-border)' }}
        >
          <p className="text-sm flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Video Downloader. Developed with
            <Heart size={14} className="text-red-500 fill-red-500 mx-1" />
            by <span className="text-indigo-400 font-medium ml-1">Sagar Jondhale (IronPurush)</span>
          </p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            For personal use only. Respect copyright laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
