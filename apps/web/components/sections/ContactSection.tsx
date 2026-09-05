'use client';

import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle, Clock, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WaitlistForm } from '@/components/waitlist/WaitlistForm';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3 font-body text-[0.9rem] text-[#E8EDF2] placeholder:text-[#3D4F5E] outline-none transition-colors duration-200 focus:border-[#00D08480]';

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', business: '', message: '' });

  const update = (key: keyof typeof form) => (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: (e.target as HTMLInputElement | HTMLTextAreaElement).value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          contact: form.phone || form.email,
          subject: form.business ? `Business enquiry — ${form.business}` : 'Website enquiry',
          message: [
            form.business && `Business: ${form.business}`,
            form.email && `Email: ${form.email}`,
            form.phone && `Phone: ${form.phone}`,
            form.message,
          ]
            .filter(Boolean)
            .join(' | '),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.error || 'Something went wrong');
      setStatus('success');
      setForm({ name: '', phone: '', email: '', business: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" className="bg-[#0A0F14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#00D0840A_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Talk To The HERE OPEN Team"
          description="Join the waitlist, ask a question, or request a demo — we reply fast."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: info + waitlist */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: <Mail size={16} className="text-[#00D084]" />, label: 'Email', value: 'hello@hereopen.in' },
                { icon: <MessageCircle size={16} className="text-[#00D084]" />, label: 'WhatsApp', value: '+91 XXXXXXXXXX' },
                { icon: <Clock size={16} className="text-[#00D084]" />, label: 'Response', value: 'Within 24 hours' },
              ].map((c) => (
                <div key={c.label} className="rounded-xl border border-[#1C2A38] bg-[#0F1923] p-4">
                  <span className="flex items-center gap-2 mb-1.5">
                    {c.icon}
                    <span className="font-body text-[0.7rem] text-[#6B7C8E] uppercase tracking-wider">{c.label}</span>
                  </span>
                  <p className="font-body font-medium text-[0.82rem] text-[#E8EDF2] break-all">{c.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-[#00D08430] bg-[#0F1923] p-6 lg:p-8">
              <h3 className="font-display font-semibold text-[1.1rem] text-[#E8EDF2] mb-1">Join the Waitlist</h3>
              <p className="font-body text-[0.85rem] text-[#8A9BAE] mb-5">
                Be among the first merchants to get the HERE OPEN device.
              </p>
              <WaitlistForm />
            </div>
          </div>

          {/* Right: contact form */}
          <div className="rounded-3xl border border-[#1C2A38] bg-[#0F1923] p-6 lg:p-8">
            <h3 className="font-display font-semibold text-[1.1rem] text-[#E8EDF2] mb-5">Send us a message</h3>
            <form onSubmit={submit} className="space-y-4">
              {[
                { key: 'name', label: 'Name', type: 'text' as const, placeholder: 'Your full name' },
                { key: 'phone', label: 'Phone', type: 'tel' as const, placeholder: '+91 XXXXX XXXXX' },
                { key: 'email', label: 'Email', type: 'email' as const, placeholder: 'you@example.com' },
                { key: 'business', label: 'Business Name', type: 'text' as const, placeholder: 'Your shop or business' },
              ].map((f) => (
                <div key={f.key}>
                  <label htmlFor={`contact-${f.key}`} className="mb-1.5 block font-body text-[0.75rem] text-[#8A9BAE]">
                    {f.label}
                  </label>
                  <input
                    id={`contact-${f.key}`}
                    type={f.type}
                    value={form[f.key as keyof typeof form]}
                    onChange={update(f.key as keyof typeof form)}
                    placeholder={f.placeholder}
                    className={inputClass}
                    required={f.key === 'name' || (f.key === 'phone')}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block font-body text-[0.75rem] text-[#8A9BAE]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us how we can help"
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D084] px-6 py-3.5 font-display font-bold text-[0.85rem] tracking-wide text-[#080C10] transition-all duration-300 hover:brightness-[1.06] disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
                <Send size={15} />
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 rounded-xl border border-[#00D08440] bg-[#00D08410] px-4 py-3 font-body text-[0.82rem] text-[#00D084]">
                  <CheckCircle2 size={15} /> Message sent! We&apos;ll get back to you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 rounded-xl border border-[#FF444440] bg-[#FF444410] px-4 py-3 font-body text-[0.82rem] text-[#FF6B6B]">
                  <AlertCircle size={15} /> Something went wrong. Please try again or reach us on WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}