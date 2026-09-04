'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/for-businesses', label: 'For Businesses' },
  { href: '/for-customers', label: 'For Customers' },
  { href: '/security', label: 'Security' },
  { href: '/technology', label: 'Technology' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="HERE OPEN home">
              <div className="w-9 h-9 bg-green-action rounded-lg flex items-center justify-center shadow-green transition-shadow group-hover:shadow-green">
                <span className="text-white font-bold text-base">H</span>
              </div>
              <span className="font-bold text-[15px] tracking-tight text-black">
                HERE OPEN
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-green-action bg-green-action/[0.08]'
                        : 'text-neutral-500 hover:text-black hover:bg-green-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/download"
                className="px-5 py-2.5 bg-green-action text-white text-[13px] font-bold rounded-lg hover:bg-green-forest transition-all shadow-green hover:shadow-green"
              >
                Download App
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-neutral-500 hover:text-black transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-neutral-50 border-l border-neutral-200 transform transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-[72px] px-5 border-b border-neutral-200">
            <span className="font-bold text-sm text-black">Menu</span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 text-neutral-500 hover:text-black"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-5 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-green-action bg-green-action/[0.08]'
                      : 'text-neutral-500 hover:text-black hover:bg-green-light'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-neutral-200">
            <Link
              href="/download"
              className="block text-center py-3 bg-green-action text-white text-sm font-bold rounded-lg"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
