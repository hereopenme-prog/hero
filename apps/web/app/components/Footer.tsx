import Link from 'next/link';

const footerLinks = {
  platform: [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/for-businesses', label: 'For Businesses' },
    { href: '/for-customers', label: 'For Customers' },
    { href: '/security', label: 'Security' },
    { href: '/technology', label: 'Technology' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/market', label: 'Market' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-green-action rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-sm tracking-tight text-black">HERE OPEN</span>
            </Link>
            <p className="text-body-sm text-black leading-relaxed max-w-[280px]">
              One Tap. Know Every Shop Status Instantly. Real-time IoT visibility for every shop.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-caption text-black uppercase tracking-widest mb-5">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-black hover:text-black transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-caption text-black uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-black hover:text-black transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-caption text-black uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-black hover:text-black transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-black">
            &copy; {new Date().getFullYear()} HERE OPEN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/download" className="text-caption text-black hover:text-black transition-colors">
              Download App
            </Link>
            <Link href="/contact" className="text-caption text-black hover:text-black transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
