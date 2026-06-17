'use client';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'leaderboard' | 'banner';
  className?: string;
  height?: number;
}

export default function AdBanner({ slot, format = 'auto', className = '', height = 90 }: AdBannerProps) {
  // TODO: Replace this placeholder with real AdSense code, e.g.:
  // <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot={slot} data-ad-format={format} data-full-width-responsive="true" />
  return (
    <div
      className={`ad-placeholder w-full ${className}`}
      style={{ height }}
      aria-label="Advertisement"
      role="complementary"
      data-ad-slot={slot}
      data-ad-format={format}
    >
      <span>Ad · {format}</span>
    </div>
  );
}
