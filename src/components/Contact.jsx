import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ text: '', kind: '' });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus({ text: 'Please fill in every field.', kind: 'err' });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus({ text: 'Please enter a valid email address.', kind: 'err' });
      return;
    }
    if (message.length > 2000) {
      setStatus({ text: 'Message is too long.', kind: 'err' });
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ text: 'Contact form is not configured yet.', kind: 'err' });
      return;
    }

    setSending(true);
    setStatus({ text: 'Sending…', kind: '' });
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, from_email: email, subject, message, to_email: 'mustaqhussainm@gmail.com' },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ text: 'MESSAGE SENT SUCCESSFULLY.', kind: 'ok' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ text: 'Something went wrong. Please try again.', kind: 'err' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <Reveal as="p" className="section-eyebrow">Let's Connect</Reveal>
      <Reveal as="h2" className="section-statement">Let's build something useful.</Reveal>
      <Reveal as="p" className="contact-lead">
        Have a project, product, or idea that needs a strong digital experience? Let's connect.
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-details">
          <a href="mailto:mustaqhussainm@gmail.com" data-cursor="Open">mustaqhussainm@gmail.com</a>
          <a href="tel:+919940357486" data-cursor="Open">+91&nbsp;9940357486</a>
          <a href="https://github.com/MustaqHussain123" target="_blank" rel="noopener noreferrer" data-cursor="Open">
            github.com/MustaqHussain123
          </a>
        </Reveal>

        <Reveal as="form" className="contact-form glass-panel" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" maxLength={100} value={form.name} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" maxLength={150} value={form.email} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" maxLength={150} value={form.subject} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} maxLength={2000} value={form.message} onChange={onChange} required />
          </div>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            <span className="btn-label">Send message</span>
          </button>
          <p className={`form-status${status.kind ? ' ' + status.kind : ''}`} role="status" aria-live="polite">
            {status.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
