import Link from 'next/link';

const platformLinks = [
  { href: '#future', label: 'The solution' },
  { href: '#vision', label: 'Our vision' },
  { href: '#banks', label: 'For Banks' },
  { href: '#msmes', label: 'For Merchants' },
  { href: '#get-involved', label: 'Get involved' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/security', label: 'Security' },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="container-site py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent), #00B4D8)' }}
              >
                <span className="font-display font-bold text-base text-[var(--accent-ink)]">H</span>
              </div>
              <span className="font-display font-bold text-[15px] tracking-tight text-[var(--ink)]">HERE OPEN</span>
            </div>
            <p className="mt-6 font-display font-semibold text-[1.1rem] leading-relaxed text-[var(--ink)]">
              Vocal for local. A stronger India.
            </p>
            <p className="mt-5 font-body text-[0.82rem] text-[var(--ink-2)]">
              <a href="mailto:contact@hereopen.me" className="hover:text-[var(--accent)] transition-colors duration-200">
                contact@hereopen.me
              </a>
              <span className="text-[var(--ink-dim)]"> &nbsp;·&nbsp; WhatsApp: +91 9060038229</span>
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[var(--ink-dim)] mb-4">EXPLORE</p>
              <ul className="space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="font-body text-[0.83rem] text-[var(--ink-2)] hover:text-[var(--accent)] transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[var(--ink-dim)] mb-4">CONTACT</p>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:contact@hereopen.me" className="font-body text-[0.83rem] text-[var(--ink-2)] hover:text-[var(--accent)] transition-colors duration-200">
                    contact@hereopen.me
                  </a>
                </li>
                <li>
                  <span className="font-body text-[0.83rem] text-[var(--ink-2)]">WhatsApp: +91 9060038229</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[var(--ink-dim)] mb-4">LEGAL</p>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-body text-[0.83rem] text-[var(--ink-2)] hover:text-[var(--accent)] transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-8">
          <p className="text-center font-body text-[12px] tracking-wide text-[var(--ink-dim)]">
            ONE DEVICE. DIRECT CONNECTIONS. A STRONGER INDIA.
          </p>
        </div>
      </div>
    </footer>
  );
}