import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE_NAME}. Please read before using our video downloading service.`,
  alternates: { canonical: `${SITE_URL}/terms` },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using Video Downloader ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.',
  },
  {
    title: '2. Permitted Use',
    content: 'Video Downloader may only be used for lawful purposes. You may download videos solely for personal, non-commercial use, such as offline viewing of content you have the right to access. You must not use the Service to infringe on any third party\'s intellectual property rights.',
  },
  {
    title: '3. Prohibited Activities',
    content: 'You agree NOT to: download copyrighted content for redistribution or commercial use; circumvent any DRM (Digital Rights Management) protections; use the Service for mass automated downloading; attempt to reverse-engineer or attack our infrastructure; or use the Service in any way that violates applicable laws.',
  },
  {
    title: '4. Copyright & Intellectual Property',
    content: 'All videos downloaded through this Service remain the intellectual property of their respective owners. Downloading a video does not transfer any copyright or ownership rights to you. You are solely responsible for ensuring your use of downloaded content complies with applicable copyright law and the terms of service of the originating platform.',
  },
  {
    title: '5. Disclaimer of Warranties',
    content: 'The Service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access, error-free operation, or the availability of any specific platform or video. We make no representations regarding the legality of downloading any specific video in your jurisdiction.',
  },
  {
    title: '6. Limitation of Liability',
    content: 'To the maximum extent permitted by law, Video Downloader and its developer (Sagar Jondhale / IronPurush) shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.',
  },
  {
    title: '7. Third-Party Platforms',
    content: 'Video Downloader is an independent tool and is not affiliated with, endorsed by, or connected to YouTube, Instagram, TikTok, Twitter/X, Facebook, or any other platform. Use of those platforms is subject to their own terms of service.',
  },
  {
    title: '8. DMCA Compliance',
    content: 'We respect intellectual property rights and respond to valid DMCA takedown notices. If you believe content is being made available in violation of your copyright, please refer to our DMCA Policy page for instructions on submitting a notice.',
  },
  {
    title: '9. Modifications to Terms',
    content: 'We reserve the right to modify these Terms at any time. Continued use of the Service following the posting of changes constitutes your acceptance of those changes.',
  },
  {
    title: '10. Governing Law',
    content: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the use of the Service shall be subject to the exclusive jurisdiction of courts in India.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
            <li style={{ color: 'var(--text-secondary)' }}>/</li>
            <li style={{ color: 'var(--text-primary)' }}>Terms of Service</li>
          </ol>
        </nav>

        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-3">Terms of <span className="gradient-text">Service</span></h1>
          <p className="text-sm mb-10" style={{ color: 'var(--text-secondary)' }}>Last Updated: January 1, 2025</p>

          <div className="glass-card p-6 mb-8" style={{ border: '1px solid rgba(239,68,68,0.25)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong className="text-red-400">Important:</strong> Only download videos for personal use. Redistribution of copyrighted content is illegal. You are responsible for complying with copyright laws in your country.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <div key={i} className="glass-card p-6">
                <h2 className="font-semibold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{s.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
