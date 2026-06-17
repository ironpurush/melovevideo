import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQS, SITE_URL } from '@/lib/constants';
import FAQSection from '@/components/sections/FAQSection';
import AdBanner from '@/components/ui/AdBanner';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Find answers to common questions about Video Downloader — how to use it, supported formats, legal questions, troubleshooting, and more.',
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
            <li style={{ color: 'var(--text-secondary)' }}>/</li>
            <li style={{ color: 'var(--text-primary)' }}>FAQ</li>
          </ol>
        </nav>

        <div className="text-center mb-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to know about Video Downloader.
          </p>
        </div>

        <AdBanner slot="9999999999" format="leaderboard" height={90} className="mb-10" />

        <FAQSection />

        <div className="mt-12 glass-card p-8 text-center" style={{ border: '1px solid rgba(99,102,241,0.3)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Still have questions?</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            Our team is happy to help. Reach out via our contact page and we will respond within 2–3 business days.
          </p>
          <Link href="/contact" className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
