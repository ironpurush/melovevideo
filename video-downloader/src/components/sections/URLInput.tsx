'use client';

import { useState, useRef } from 'react';
import { Clipboard, Download, X, Loader2, CheckCircle, AlertCircle, Link2 } from 'lucide-react';
import { validateURL, sanitizeInput } from '@/lib/utils';
import { useClipboard } from '@/hooks/useClipboard';

interface DownloadOption {
  quality: string;
  format: string;
  label: string;
}

const MOCK_OPTIONS: DownloadOption[] = [
  { quality: '2160p', format: 'mp4', label: '4K · MP4' },
  { quality: '1080p', format: 'mp4', label: '1080p · MP4' },
  { quality: '720p', format: 'mp4', label: '720p · MP4' },
  { quality: '480p', format: 'mp4', label: '480p · MP4' },
  { quality: '360p', format: 'mp4', label: '360p · MP4' },
  { quality: 'audio', format: 'mp3', label: 'Audio Only · MP3' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function URLInput() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [platform, setPlatform] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { paste } = useClipboard();

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const handlePaste = async () => {
    const text = await paste();
    if (text) {
      setUrl(text);
      inputRef.current?.focus();
      showNotification('URL pasted from clipboard!');
    } else {
      inputRef.current?.focus();
      showNotification('Paste shortcut: Ctrl+V or ⌘+V');
    }
  };

  const handleClear = () => {
    setUrl('');
    setStatus('idle');
    setError('');
    setPlatform(null);
    inputRef.current?.focus();
  };

  const handleDownload = async () => {
    const clean = sanitizeInput(url);
    if (!clean) {
      setError('Please enter a video URL.');
      return;
    }
    const { valid, platform: p } = validateURL(clean);
    if (!valid) {
      setError('This URL is not supported. Please check our supported platforms list.');
      setStatus('error');
      return;
    }
    setPlatform(p);
    setStatus('loading');
    setError('');

    // Simulate API call (replace with real backend)
    await new Promise((r) => setTimeout(r, 2000));
    setStatus('success');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleDownload();
  };

  return (
    <section className="w-full max-w-3xl mx-auto" aria-label="Video download tool">
      {/* Notification toast */}
      {notification && (
        <div
          className="mb-4 px-4 py-3 rounded-xl text-sm font-medium text-center animate-fade-in-up"
          style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}
          role="alert"
        >
          {notification}
        </div>
      )}

      {/* Input card */}
      <div className="glass-card p-5 sm:p-6">
        <div className="flex flex-col gap-3">
          {/* URL input row */}
          <div
            className="flex items-center gap-2 rounded-xl px-4 py-3 transition-all"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <Link2 size={18} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
            <input
              ref={inputRef}
              type="url"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setError(''); setStatus('idle'); }}
              onKeyDown={handleKeyDown}
              placeholder="Paste YouTube, Instagram, TikTok URL here..."
              className="flex-1 bg-transparent text-sm outline-none min-w-0"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Video URL input"
              autoComplete="off"
              spellCheck={false}
            />
            {url && (
              <button onClick={handleClear} className="p-1 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0" aria-label="Clear input">
                <X size={16} style={{ color: 'var(--text-secondary)' }} />
              </button>
            )}
          </div>

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-2 text-sm text-red-400 animate-fade-in-up" role="alert">
              <AlertCircle size={15} />
              <span>{error}</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePaste}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium glass-card transition-all hover:bg-white/10 flex-shrink-0"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Paste from clipboard"
            >
              <Clipboard size={16} />
              <span className="hidden sm:inline">Paste</span>
            </button>

            <button
              onClick={handleDownload}
              disabled={status === 'loading'}
              className="btn-gradient flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold disabled:opacity-70 pulse-glow"
              aria-label="Download video"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Download size={18} />
                  <span>Download</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Loading progress */}
      {status === 'loading' && (
        <div className="mt-4 glass-card p-4 animate-fade-in-up">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Fetching video info...</span>
            <Loader2 size={16} className="animate-spin" style={{ color: '#6366f1' }} />
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: '60%',
                background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                animation: 'progress 2s ease-in-out',
              }}
            />
          </div>
        </div>
      )}

      {/* Success - download options */}
      {status === 'success' && (
        <div className="mt-4 glass-card p-5 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={18} className="text-green-400" />
            <span className="font-semibold text-green-400">Video found on {platform}!</span>
          </div>
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            Select quality and format to download:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {MOCK_OPTIONS.map((opt) => (
              <button
                key={opt.quality}
                className="glass-card px-3 py-3 rounded-xl text-sm font-medium hover:border-indigo-500/50 transition-all text-left"
                style={{ color: 'var(--text-primary)', border: '1px solid var(--glass-border)' }}
                onClick={() => showNotification(`Starting ${opt.label} download...`)}
              >
                <span className="block font-semibold">{opt.quality === 'audio' ? '🎵' : '📹'} {opt.label.split(' · ')[0]}</span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{opt.format.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--text-secondary)' }}>
            ⚠️ Download for personal use only. Respect copyright.
          </p>
        </div>
      )}
    </section>
  );
}
