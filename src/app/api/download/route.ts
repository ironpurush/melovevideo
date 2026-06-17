import { NextRequest, NextResponse } from 'next/server';
import { validateURL, sanitizeInput } from '@/lib/utils';

// In-memory rate limiter (per IP, resets each deployment — use Redis for production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10; // requests
const RATE_WINDOW = 60_000; // 1 minute

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!getRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute before trying again.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }

  // Parse body
  let body: { url?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (typeof body.url !== 'string') {
    return NextResponse.json({ error: 'URL is required.' }, { status: 400 });
  }

  // Sanitise & validate
  const url = sanitizeInput(body.url);
  const { valid, platform } = validateURL(url);

  if (!valid) {
    return NextResponse.json(
      { error: 'Unsupported URL. Please check our supported platforms list.' },
      { status: 422 }
    );
  }

  // TODO: Integrate real download backend here (e.g., yt-dlp microservice)
  // This mock response demonstrates the expected API contract
  const mockFormats = [
    { quality: '2160p', format: 'mp4', label: '4K · MP4', size: '850 MB' },
    { quality: '1080p', format: 'mp4', label: '1080p · MP4', size: '320 MB' },
    { quality: '720p', format: 'mp4', label: '720p · MP4', size: '150 MB' },
    { quality: '480p', format: 'mp4', label: '480p · MP4', size: '70 MB' },
    { quality: '360p', format: 'mp4', label: '360p · MP4', size: '35 MB' },
    { quality: 'audio', format: 'mp3', label: 'Audio Only · MP3', size: '5 MB' },
  ];

  return NextResponse.json(
    {
      success: true,
      platform,
      videoInfo: {
        title: `Video from ${platform}`,
        thumbnail: null,
        duration: 'N/A',
        platform,
        formats: mockFormats,
      },
    },
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    }
  );
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
