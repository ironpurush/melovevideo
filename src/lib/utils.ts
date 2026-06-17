import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function validateURL(url: string): { valid: boolean; platform: string | null } {
  try {
    const u = new URL(url.trim());
    const host = u.hostname.replace('www.', '');
    const platformMap: Record<string, string> = {
      'youtube.com': 'YouTube',
      'youtu.be': 'YouTube',
      'instagram.com': 'Instagram',
      'twitter.com': 'Twitter/X',
      'x.com': 'Twitter/X',
      'facebook.com': 'Facebook',
      'fb.watch': 'Facebook',
      'tiktok.com': 'TikTok',
      'vimeo.com': 'Vimeo',
      'dailymotion.com': 'Dailymotion',
      'twitch.tv': 'Twitch',
      'reddit.com': 'Reddit',
      'pinterest.com': 'Pinterest',
      'linkedin.com': 'LinkedIn',
    };
    const platform = platformMap[host] || null;
    return { valid: !!platform, platform };
  } catch {
    return { valid: false, platform: null };
  }
}

export function sanitizeInput(input: string): string {
  return input.replace(/[<>'"]/g, '').trim().slice(0, 2048);
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}
