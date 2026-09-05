import Link from 'next/link';

const platformLinks = [
  { href: '#home', label: 'Home' },
  { href: '#problem', label: 'The Problem' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#device', label: 'The Device' },
  { href: '#security', label: 'Safety & Security' },
  { href: '#platform-network', label: 'Platform' },
  { href: '#vision', label: 'Vision' },
];

const ecosystemLinks = [
  { href: '#businesses', label: 'For Businesses' },
  { href: '#customers', label: 'For Customers' },
  { href: '#banks', label: 'For Banks & Partners' },
  { href: '#merchant-value', label: 'Merchant Value' },
  { href: '#market', label: 'Market Opportunity' },
  { href: '#contact', label: 'Contact' },
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
              <div>
                <span className="block font-display font-bold text-[15px] tracking-tight text-[var(--ink)]">HERE OPEN</span>
              </div>
            </div>
            <p className="mt-4 font-body text-[0.85rem] leading-relaxed text-[var(--ink-dim)]">
              A connected smart business ecosystem that brings businesses, customers and devices together — real-time visibility, communication, safety and intelligent business connectivity.
            </p>
            <p className="mt-4 font-body text-[0.78rem] text-[var(--ink-dim)]">
              WhatsApp: +91 9060038229 &nbsp;·&nbsp; contact@hereopen.me
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[var(--ink-dim)] mb-4">PLATFORM</p>
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
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[var(--ink-dim)] mb-4">ECOSYSTEM</p>
              <ul className="space-y-2.5">
                {ecosystemLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="font-body text-[0.83rem] text-[var(--ink-2)] hover:text-[var(--accent)] transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
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

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.78rem] text-[var(--ink-dim)]">
            &copy; {new Date().getFullYear()} HERE OPEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}