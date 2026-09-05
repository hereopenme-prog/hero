import Link from 'next/link';

const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-site py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-action rounded-lg flex items-center justify-center shadow-green">
              <span className="text-white font-bold text-base">H</span>
            </div>
            <div>
              <span className="block font-bold text-[15px] tracking-tight text-black">HERE OPEN</span>
              <span className="block text-[11px] text-black mt-0.5">One Tap. Know Every Shop Status Instantly.</span>
            </div>
          </div>

          {/* Nav — same as navbar */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-1">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-hover-x px-3.5 py-2 rounded-lg text-[13px] font-medium text-black hover:text-green-action hover:bg-green-light transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-black">
            &copy; {new Date().getFullYear()} HERE OPEN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="link-hover-x text-caption text-black hover:text-green-action transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/#waitlist" className="active:scale-[0.97] px-4 py-2 bg-green-action text-white text-[12px] font-bold rounded-lg hover:bg-green-forest transition-all duration-200 shadow-green">
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}