import Link from 'next/link';

const platformLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#businesses', label: 'For Businesses' },
  { href: '#customers', label: 'For Customers' },
  { href: '#technology', label: 'Technology' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/security', label: 'Security' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1C2A38] bg-[#080C10]">
      <div className="container-site py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)' }}
              >
                <span className="font-display font-bold text-base text-[#080C10]">H</span>
              </div>
              <div>
                <span className="block font-display font-bold text-[15px] tracking-tight text-[#E8EDF2]">HERE OPEN</span>
              </div>
            </div>
            <p className="mt-4 font-body text-[0.85rem] leading-relaxed text-[#6B7C8E]">
              One Tap. Know Every Shop Status Instantly. Real-time shop visibility and smart monitoring for local
              businesses across India.
            </p>
            <p className="mt-4 font-body text-[0.78rem] text-[#3D4F5E]">
              WhatsApp: +91 XXXXXXXXXX &nbsp;·&nbsp; hello@hereopen.in
            </p>
          </div>

          {/* Platform */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[#6B7C8E] mb-4">PLATFORM</p>
              <ul className="space-y-2.5">
                {platformLinks.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="font-body text-[0.83rem] text-[#A5B4C4] hover:text-[#00D084] transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[#6B7C8E] mb-4">DISCOVER</p>
              <ul className="space-y-2.5">
                {platformLinks.slice(6).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="font-body text-[0.83rem] text-[#A5B4C4] hover:text-[#00D084] transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[#6B7C8E] mb-4">EXPLORE</p>
              <ul className="space-y-2.5">
                {[
                  { href: '/technology', label: 'Technology (Legacy)' },
                  { href: '/market', label: 'Market (Legacy)' },
                  { href: '/roadmap', label: 'Roadmap (Legacy)' },
                  { href: '/faq', label: 'FAQ (Legacy)' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-body text-[0.83rem] text-[#A5B4C4] hover:text-[#00D084] transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#1C2A38] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.78rem] text-[#6B7C8E]">
            &copy; {new Date().getFullYear()} HERE OPEN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-body text-[0.78rem] text-[#6B7C8E] hover:text-[#00D084] transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}