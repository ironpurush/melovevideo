import { Platform, FAQItem, Testimonial } from '@/types';

export const SITE_NAME = 'Video Downloader';
export const SITE_URL = 'https://videodownloader.ironpurush.com';
export const SITE_DESCRIPTION = 'Download videos from YouTube, Instagram, TikTok, Twitter, Facebook and 15+ platforms. Fast, free, and no registration required.';
export const AUTHOR = 'Sagar Jondhale (IronPurush)';

export const PLATFORMS: Platform[] = [
  { id: 'youtube', name: 'YouTube', icon: '▶', color: '#FF0000', description: 'Download YouTube videos in 4K, 1080p, 720p and more', supported: true },
  { id: 'instagram', name: 'Instagram', icon: '📸', color: '#E1306C', description: 'Save Instagram Reels, Stories and posts', supported: true },
  { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#010101', description: 'Download TikTok videos without watermark', supported: true },
  { id: 'twitter', name: 'Twitter/X', icon: '𝕏', color: '#1DA1F2', description: 'Download Twitter/X videos and GIFs', supported: true },
  { id: 'facebook', name: 'Facebook', icon: 'f', color: '#1877F2', description: 'Download Facebook videos and Reels', supported: true },
  { id: 'vimeo', name: 'Vimeo', icon: '🎬', color: '#1AB7EA', description: 'Download Vimeo videos in high quality', supported: true },
  { id: 'dailymotion', name: 'Dailymotion', icon: '🎥', color: '#0066DC', description: 'Download Dailymotion videos easily', supported: true },
  { id: 'twitch', name: 'Twitch', icon: '🟣', color: '#9146FF', description: 'Download Twitch clips and VODs', supported: true },
  { id: 'reddit', name: 'Reddit', icon: '🔴', color: '#FF4500', description: 'Download Reddit videos and GIFs', supported: true },
  { id: 'pinterest', name: 'Pinterest', icon: '📌', color: '#E60023', description: 'Download Pinterest videos', supported: true },
  { id: 'linkedin', name: 'LinkedIn', icon: 'in', color: '#0A66C2', description: 'Download LinkedIn videos', supported: true },
  { id: 'snapchat', name: 'Snapchat', icon: '👻', color: '#FFFC00', description: 'Download Snapchat videos (coming soon)', supported: false },
];

export const FAQS: FAQItem[] = [
  { question: 'Is Video Downloader free to use?', answer: 'Yes! Video Downloader is completely free. No registration, no hidden charges, no limits on downloads.' },
  { question: 'Which video formats are supported for download?', answer: 'We support MP4, WebM, and MP3 (audio only). Quality options range from 144p to 4K depending on the original video.' },
  { question: 'Is it legal to download videos?', answer: 'Downloading videos for personal, offline use is generally permitted. However, redistributing copyrighted content without permission is illegal. Always respect copyright laws and platform terms of service.' },
  { question: 'Why is my download not working?', answer: 'Check that the URL is correct and the video is publicly accessible. Private, age-restricted, or geo-blocked videos may not be downloadable. Try refreshing and pasting the URL again.' },
  { question: 'Do I need to install any software?', answer: 'No installation required! Video Downloader works entirely in your browser on any device — desktop, Android, or iPhone.' },
  { question: 'How do I download Instagram Reels?', answer: 'Open Instagram, tap the share icon on the Reel, copy the link, paste it in the input box above, then click Download.' },
  { question: 'Can I download YouTube playlists?', answer: 'Currently we support individual YouTube videos. Playlist support is on our roadmap and will be available soon.' },
  { question: 'What is the maximum video quality available?', answer: 'We support up to 4K (2160p) for YouTube videos when available. Other platforms are limited by the original upload quality.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Arjun Mehta', role: 'Content Creator', content: 'Fastest video downloader I have used. Works perfectly for Instagram Reels and YouTube videos on my phone.', rating: 5 },
  { name: 'Priya Sharma', role: 'Digital Marketer', content: 'Saved me so much time! I use this daily to download reference videos for my marketing campaigns.', rating: 5 },
  { name: 'Rahul Singh', role: 'Video Editor', content: 'Clean interface, multiple quality options, no annoying pop-ups. Exactly what a downloader should be.', rating: 5 },
  { name: 'Sneha Patel', role: 'Student', content: 'Works on my iPhone without any app download needed. Perfect for saving educational videos offline.', rating: 5 },
  { name: 'Vikram Das', role: 'Blogger', content: 'I appreciate that it supports so many platforms. TikTok downloads without watermark is a game-changer!', rating: 5 },
  { name: 'Ananya Rao', role: 'Filmmaker', content: 'Reliable, fast, and respects user privacy. No sign-up needed. Highly recommended for professionals.', rating: 5 },
];

export const FEATURES = [
  { title: 'Lightning Fast', description: 'Download videos in seconds with our optimized servers and CDN technology.', icon: '⚡' },
  { title: 'No Registration', description: 'Zero sign-ups, zero accounts. Just paste, click, and download instantly.', icon: '🔓' },
  { title: '15+ Platforms', description: 'YouTube, Instagram, TikTok, Twitter and many more platforms supported.', icon: '🌐' },
  { title: 'Multiple Qualities', description: 'Choose from 144p to 4K. Download audio-only MP3 as well.', icon: '🎯' },
  { title: '100% Free', description: 'No hidden fees, no premium tiers. All features free, forever.', icon: '✨' },
  { title: 'Mobile First', description: 'Designed for Android and iPhone. Works perfectly on any screen size.', icon: '📱' },
  { title: 'Privacy Safe', description: 'We never store your URLs or personal data. Your downloads stay private.', icon: '🔒' },
  { title: 'No Watermarks', description: 'Download TikTok and other platform videos without watermarks.', icon: '🎬' },
];
