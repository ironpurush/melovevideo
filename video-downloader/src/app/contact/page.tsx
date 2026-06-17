'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { sanitizeInput } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const SUBJECTS = [
  'General Enquiry',
  'Bug Report',
  'Feature Request',
  'DMCA / Copyright Issue',
  'Partnership / Business',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject) e.subject = 'Please select a subject';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    // Simulate API call — replace with real form endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: sanitizeInput(value) }));
    setErrors((e) => ({ ...e, [field]: '' }));
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center max-w-md animate-fade-in-up">
          <CheckCircle size={64} className="text-green-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Message Sent!</h1>
          <p className="text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
            Thanks for reaching out, {form.name}! We&apos;ll reply to <strong>{form.email}</strong> within 2–3 business days.
          </p>
          <button onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setStatus('idle'); }} className="btn-gradient px-6 py-3 rounded-xl font-semibold">
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
            <li style={{ color: 'var(--text-secondary)' }}>/</li>
            <li style={{ color: 'var(--text-primary)' }}>Contact Us</li>
          </ol>
        </nav>

        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Have a question, bug report, or partnership idea? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: <Mail size={20} />, label: 'Email', value: 'contact@videodownloader.com' },
            { icon: <MessageSquare size={20} />, label: 'Response Time', value: '2–3 business days' },
          ].map((c) => (
            <div key={c.label} className="glass-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(99,102,241,0.15)', color: '#6366f1' }}>
                {c.icon}
              </div>
              <div>
                <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-secondary)' }}>{c.label}</div>
                <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} noValidate className="glass-card p-6 sm:p-8 space-y-5 animate-fade-in-up" aria-label="Contact form">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Full Name *</label>
            <input
              id="name" type="text" autoComplete="name"
              value={form.name} onChange={(e) => update('name', e.target.value)}
              placeholder="Sagar Jondhale"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: errors.name ? '1px solid #f87171' : '1px solid rgba(255,255,255,0.12)', color: 'var(--text-primary)' }}
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p id="name-error" className="text-xs text-red-400 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Email Address *</label>
            <input
              id="email" type="email" autoComplete="email"
              value={form.email} onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: errors.email ? '1px solid #f87171' : '1px solid rgba(255,255,255,0.12)', color: 'var(--text-primary)' }}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p id="email-error" className="text-xs text-red-400 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Subject *</label>
            <select
              id="subject"
              value={form.subject} onChange={(e) => update('subject', e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
              style={{ background: 'rgba(255,255,255,0.06)', border: errors.subject ? '1px solid #f87171' : '1px solid rgba(255,255,255,0.12)', color: form.subject ? 'var(--text-primary)' : 'var(--text-secondary)' }}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              aria-invalid={!!errors.subject}
            >
              <option value="">Select a subject...</option>
              {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.subject && <p id="subject-error" className="text-xs text-red-400 mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Message *</label>
            <textarea
              id="message" rows={5}
              value={form.message} onChange={(e) => update('message', e.target.value)}
              placeholder="Describe your issue or question in detail..."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: errors.message ? '1px solid #f87171' : '1px solid rgba(255,255,255,0.12)', color: 'var(--text-primary)' }}
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={!!errors.message}
            />
            <div className="flex justify-between items-start mt-1">
              {errors.message
                ? <p id="message-error" className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>
                : <span />}
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{form.message.length}/2000</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-gradient w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm disabled:opacity-70"
          >
            {status === 'loading' ? (
              <><span className="animate-spin">⟳</span> Sending...</>
            ) : (
              <><Send size={16} /> Send Message</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
