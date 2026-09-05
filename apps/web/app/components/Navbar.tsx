'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(0px)',
    borderColor: 'rgba(224, 224, 224, 0)',
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    borderColor: 'rgba(224, 224, 224, 1)',
  },
};

const mobileMenuVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 60);
  });

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial="top"
        animate={isScrolled ? 'scrolled' : 'top'}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        variants={navbarVariants}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="HERE OPEN home">
              <div
                className="logo-glow w-8 h-8 rounded-lg flex items-center justify-center transition-shadow shadow-green group-hover:shadow-green"
                style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)' }}
                aria-hidden="true"
              >
                <span className="font-display font-bold" style={{ fontSize: '0.9rem', color: '#080C10' }}>H</span>
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
                    className={`nav-link py-2 px-3.5 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
                      isActive ? 'nav-link-active text-green-action' : 'text-neutral-700 hover:text-black'
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
                href="/#waitlist"
                className="btn-shimmer inline-flex items-center px-5 py-2.5 bg-green-action text-white text-[13px] font-bold rounded-lg hover:bg-green-forest transition-all shadow-green hover:shadow-green"
              >
                Get Early Access
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-black transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — slides down with height animation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 lg:hidden overflow-hidden"
          >
            <div className="bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-green-lg pb-6">
              <div className="container-site py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'text-green-action bg-green-action/[0.08]'
                          : 'text-neutral-700 hover:text-black hover:bg-green-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="container-site pt-2">
                <Link
                  href="/#waitlist"
                  className="btn-shimmer block text-center py-3 bg-green-action text-white text-sm font-bold rounded-lg shadow-green"
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}