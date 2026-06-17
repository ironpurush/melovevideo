import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_NAME}. Learn how we handle your data — spoiler: we barely collect any.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect minimal data necessary to operate the service. This includes: anonymous usage analytics (page views, general location by country, device type), error logs for debugging, and temporarily processed video URLs you submit. We do NOT collect names, email addresses, or any personally identifiable information unless you contact us voluntarily.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `The data we collect is used solely to: improve service performance and reliability, detect and prevent abuse or misuse, generate aggregate (anonymous) analytics to understand feature usage, and respond to support enquiries you initiate.`,
  },
  {
    title: '3. Cookies & Local Storage',
    content: `We use essential cookies only: session management, dark/light mode preference, and consent tracking. We do not use tracking cookies or cross-site behavioural tracking. Third-party ad partners (Google AdSense) may set their own cookies; please refer to Google's Privacy Policy for details.`,
  },
  {
    title: '4. Third-Party Services',
    content: `We use Google AdSense to display advertisements. Google may collect and use data pursuant to their own privacy policy. We use Vercel for hosting, which may log IP addresses for security purposes. We do not sell or rent your data to any third party.`,
  },
  {
    title: '5. Data Retention',
    content: `Video URLs you submit are processed in memory only and are NOT stored in any database or log file after the request completes. Analytics data is retained for up to 13 months. Support emails are retained for up to 2 years.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your jurisdiction, you may have the right to access, correct, or delete personal data we hold about you. To make a request, contact us at the email listed on our Contact page. We will respond within 30 days.`,
  },
  {
    title: '7. Children\'s Privacy',
    content: `Video Downloader is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us personal data, please contact us immediately.`,
  },
  {
    title: '8. Security',
    content: `We implement industry-standard security measures including HTTPS encryption, Content Security Policy headers, input sanitisation, and rate limiting to protect our service and its users.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the service after changes constitutes acceptance of the new policy.`,
  },
  {
    title: '10. Contact',
    content: `For privacy-related questions or data requests, please use our Contact page. We aim to respond within 5 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
            <li style={{ color: 'var(--text-secondary)' }}>/</li>
            <li style={{ color: 'var(--text-primary)' }}>Privacy Policy</li>
          </ol>
        </nav>

        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-3">Privacy <span className="gradient-text">Policy</span></h1>
          <p className="text-sm mb-10" style={{ color: 'var(--text-secondary)' }}>
            Last Updated: January 1, 2025 · Effective: January 1, 2025
          </p>

          <div className="glass-card p-6 mb-8" style={{ border: '1px solid rgba(99,102,241,0.25)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong className="text-indigo-400">TL;DR:</strong> We don&apos;t store the video URLs you paste. We don&apos;t sell your data. We use anonymous analytics and Google AdSense. That&apos;s basically it.
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
