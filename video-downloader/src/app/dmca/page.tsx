import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy',
  description: `DMCA and copyright policy for ${SITE_NAME}. How to submit a takedown notice and our commitment to intellectual property rights.`,
  alternates: { canonical: `${SITE_URL}/dmca` },
};

export default function DMCAPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
            <li style={{ color: 'var(--text-secondary)' }}>/</li>
            <li style={{ color: 'var(--text-primary)' }}>DMCA Policy</li>
          </ol>
        </nav>

        <div className="animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(99,102,241,0.15)' }}>
              <Shield size={28} className="text-indigo-400" />
            </div>
            <h1 className="text-4xl font-bold">DMCA & <span className="gradient-text">Copyright Policy</span></h1>
          </div>
          <p className="text-sm mb-10" style={{ color: 'var(--text-secondary)' }}>Last Updated: January 1, 2025</p>

          {/* Disclaimer */}
          <div className="glass-card p-6 mb-8 flex gap-4" style={{ border: '1px solid rgba(251,191,36,0.3)' }}>
            <AlertTriangle size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong className="text-yellow-400">Important Disclaimer:</strong> Video Downloader does not host, store, or distribute any video content. We are a tool that helps users download publicly accessible content they have the legal right to download. We do not circumvent DRM protections or provide access to paywalled or private content.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: '1. Our Stance on Copyright',
                content: 'We deeply respect intellectual property rights and the creative work of content creators, studios, musicians, and publishers. Video Downloader is designed for personal, lawful use only. We prohibit using our service to infringe on any third party\'s copyright, trademark, or other intellectual property rights.',
              },
              {
                title: '2. DMCA Compliance',
                content: 'Video Downloader complies with the Digital Millennium Copyright Act (DMCA) and analogous international copyright laws. We respond promptly to valid notices of alleged infringement. Upon receiving a valid DMCA notice, we will take appropriate action as required by law.',
              },
              {
                title: '3. How to Submit a DMCA Takedown Notice',
                content: `To submit a DMCA notice, please send the following information to our designated copyright agent:

(a) A physical or electronic signature of the copyright owner or authorised agent.
(b) Identification of the copyrighted work claimed to have been infringed.
(c) Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material.
(d) Your contact information (address, telephone number, and email address).
(e) A statement that you have a good-faith belief that use of the material in the manner complained of is not authorised by the copyright owner.
(f) A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorised to act on behalf of the copyright owner.

Send to: dmca@videodownloader.com`,
              },
              {
                title: '4. Counter-Notification',
                content: 'If you believe your content was wrongly removed, you may submit a counter-notification with: your physical or electronic signature; identification of the removed material and its location before removal; a statement under penalty of perjury that the material was removed by mistake; your name, address, phone number, email, and consent to jurisdiction.',
              },
              {
                title: '5. Repeat Infringer Policy',
                content: 'We will terminate access to our service for users who are repeat infringers, in appropriate circumstances and at our sole discretion, in accordance with the DMCA.',
              },
              {
                title: '6. User Responsibility',
                content: 'By using Video Downloader, you agree that you will only download content you have the legal right to download, for personal, non-commercial use. You are solely responsible for your use of any downloaded content and any resulting copyright infringement claims.',
              },
            ].map((s, i) => (
              <div key={i} className="glass-card p-6">
                <h2 className="font-semibold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>{s.title}</h2>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>{s.content}</p>
              </div>
            ))}
          </div>

          {/* Action card */}
          <div className="glass-card p-6 mt-8 text-center" style={{ border: '1px solid rgba(99,102,241,0.3)' }}>
            <CheckCircle size={40} className="text-green-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Submit a DMCA Notice</h2>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>We take copyright seriously and respond within 48 hours.</p>
            <Link href="/contact" className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
              Contact Our Copyright Team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
