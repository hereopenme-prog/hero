import Link from 'next/link';

const platformLinks = [
  { href: '#home', label: 'Home' },
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#businesses', label: 'For Businesses' },
  { href: '#customers', label: 'For Customers' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const productLinks = [
  { href: '#payment-experience', label: 'Payments' },
  { href: '#shop-status', label: 'Shop Status' },
  { href: '#customer-experience', label: 'Customer Experience' },
  { href: '#smart-alerts', label: 'Smart Alerts' },
  { href: '#device', label: 'The Device' },
  { href: '#software', label: 'Software Platform' },
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
              A smart business device that brings payment notifications, shop visibility, customer connectivity and configurable smart features together.
            </p>
            <p className="mt-4 font-body text-[0.78rem] text-[#3D4F5E]">
              WhatsApp: +91 9060038229 &nbsp;·&nbsp; contact@hereopen.me
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[#6B7C8E] mb-4">PLATFORM</p>
              <ul className="space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="font-body text-[0.83rem] text-[#A5B4C4] hover:text-[#00D084] transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[#6B7C8E] mb-4">PRODUCT</p>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="font-body text-[0.83rem] text-[#A5B4C4] hover:text-[#00D084] transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-semibold text-[0.72rem] tracking-[0.2em] text-[#6B7C8E] mb-4">LEGAL</p>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
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
        </div>
      </div>
    </footer>
  );
}