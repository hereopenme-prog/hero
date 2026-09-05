'use client';

import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#businesses', label: 'For Businesses' },
  { href: '#customers', label: 'For Customers' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const sectionIds = ['home', 'product', 'how-it-works', 'features', 'businesses', 'customers', 'about', 'contact'];

const mobileLinks = navLinks;

const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(8, 12, 16, 0)',
    backdropFilter: 'blur(0px)',
    borderColor: 'rgba(28, 42, 56, 0)',
  },
  scrolled: {
    backgroundColor: 'rgba(8, 12, 16, 0.82)',
    backdropFilter: 'blur(16px)',
    borderColor: 'rgba(28, 42, 56, 1)',
  },
};

const mobileMenuVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 60);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    if (!id || id === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial="top"
        animate={isScrolled ? 'scrolled' : 'top'}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        variants={navbarVariants}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
              aria-label="HERE OPEN home"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)' }}
                aria-hidden="true"
              >
                <span className="font-display font-bold" style={{ fontSize: '0.9rem', color: '#080C10' }}>H</span>
              </div>
              <span className="font-display font-bold text-[15px] tracking-tight text-[#E8EDF2]">
                HERE OPEN
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2 px-3 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
                      isActive ? 'text-[#00D084]' : 'text-[#A5B4C4] hover:text-[#E8EDF2]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="active:scale-[0.97] inline-flex items-center px-6 py-2.5 bg-[#00D084] text-[#080C10] text-[13px] font-bold rounded-xl hover:brightness-[1.06] transition-all duration-300 shadow-[0_0_24px_#00D08430]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden icon-btn p-2 text-[#A5B4C4] hover:text-[#E8EDF2] transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 xl:hidden overflow-hidden"
          >
            <div className="bg-[#0F1923F2] backdrop-blur-md border-b border-[#1C2A38] pb-6">
              <div className="container-site py-4 space-y-1">
                {mobileLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'text-[#00D084] bg-[#00D0840F]'
                          : 'text-[#A5B4C4] hover:text-[#E8EDF2] hover:bg-[#00D0840A]'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <div className="container-site pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block text-center py-3 bg-[#00D084] text-[#080C10] text-sm font-bold rounded-xl shadow-[0_0_24px_#00D08430]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}