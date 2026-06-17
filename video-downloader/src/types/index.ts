export interface Platform {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  supported: boolean;
}

export interface DownloadFormat {
  quality: string;
  format: string;
  size?: string;
  url?: string;
}

export interface VideoInfo {
  title: string;
  thumbnail: string;
  duration: string;
  platform: string;
  formats: DownloadFormat[];
}

export interface DownloadState {
  status: 'idle' | 'loading' | 'success' | 'error';
  videoInfo: VideoInfo | null;
  error: string | null;
  progress: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
