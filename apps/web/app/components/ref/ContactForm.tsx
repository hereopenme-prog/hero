'use client';

import { ArrowRightIcon } from './Icons';

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const company = String(form.get('company') ?? '');
    const email = String(form.get('email') ?? '');
    const message = String(form.get('message') ?? '');

    const subject = `HERE OPEN enquiry${name ? ` — ${name}` : ''}`;
    const body = [
      `Name: ${name}`,
      company ? `Organisation: ${company}` : '',
      email ? `Email: ${email}` : '',
      '',
      message,
    ]
      .filter((line) => line.length > 0)
      .join('\n');

    window.location.href = `mailto:contact@hereopen.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Start a conversation.</h3>
      <p>Tell us a little about your organisation.</p>
      <div className="form-row">
        <label>
          Your name
          <input autoComplete="name" required maxLength={100} name="name" />
        </label>
        <label>
          Organisation
          <input autoComplete="organization" maxLength={160} name="company" />
        </label>
      </div>
      <label>
        Work email
        <input type="email" autoComplete="email" required maxLength={160} name="email" />
      </label>
      <label>
        How can we help?
        <textarea
          name="message"
          rows={4}
          required
          maxLength={2000}
          placeholder="I’d like to discuss a bank partnership…"
        />
      </label>
      <button type="submit" className="button contact-submit" aria-describedby="contact-submit-help">
        Submit
        <ArrowRightIcon />
      </button>
      <p id="contact-submit-help" className="form-help">
        Submit opens an email draft. Review and send it in your email app.
      </p>
    </form>
  );
}