'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to know about Video Downloader.
          </p>
        </div>

        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold pr-4 text-sm sm:text-base" itemProp="name" style={{ color: 'var(--text-primary)' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: 'var(--text-secondary)',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-5 pb-5 text-sm leading-relaxed animate-fade-in-up"
                  style={{ color: 'var(--text-secondary)' }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
