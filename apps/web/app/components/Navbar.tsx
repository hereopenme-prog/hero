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
            ? 'bg-surface-0/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="HERE OPEN home">
              <div className="w-9 h-9 bg-neon rounded-lg flex items-center justify-center shadow-glow-sm transition-shadow group-hover:shadow-glow">
                <span className="text-surface-0 font-bold text-base">H</span>
              </div>
              <span className="font-bold text-[15px] tracking-tight text-white">
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
                        ? 'text-neon bg-neon/[0.08]'
                        : 'text-muted-light hover:text-white hover:bg-white/[0.04]'
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
                className="px-5 py-2.5 bg-neon text-surface-0 text-[13px] font-bold rounded-lg hover:bg-neon-600 transition-all shadow-glow-sm hover:shadow-glow"
              >
                Download App
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-muted-light hover:text-white transition-colors"
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
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-surface-1 border-l border-white/[0.06] transform transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-[72px] px-5 border-b border-white/[0.06]">
            <span className="font-bold text-sm text-white">Menu</span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 text-muted-light hover:text-white"
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
                      ? 'text-neon bg-neon/[0.08]'
                      : 'text-muted-light hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/[0.06]">
            <Link
              href="/download"
              className="block text-center py-3 bg-neon text-surface-0 text-sm font-bold rounded-lg"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
