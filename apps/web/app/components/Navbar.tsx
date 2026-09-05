'use client';

import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#problem', label: 'The Problem' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#businesses', label: 'For Businesses' },
  { href: '#customers', label: 'For Customers' },
  { href: '#device', label: 'The Device' },
  { href: '#security', label: 'Safety & Security' },
  { href: '#platform-network', label: 'Platform' },
  { href: '#banks', label: 'For Banks' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
];

const sectionIds = [
  'home', 'problem', 'how-it-works', 'businesses', 'customers', 'device',
  'security', 'platform-network', 'banks', 'vision', 'contact',
];

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  const onDarkChrome = !isScrolled;

  const barChrome = onDarkChrome
    ? 'bg-transparent border-transparent'
    : 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)]';

  const logoTextCls = onDarkChrome ? 'text-white' : 'text-[var(--ink)]';
  const linkCls = (isActive: boolean) =>
    onDarkChrome
      ? `py-2 px-3 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
          isActive ? 'text-white' : 'text-white/70 hover:text-white'
        }`
      : `py-2 px-3 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
          isActive ? 'text-[var(--accent)]' : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
        }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${barChrome}`}
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
                style={{ background: 'linear-gradient(135deg, var(--accent), #00B4D8)' }}
                aria-hidden="true"
              >
                <span className="font-display font-bold" style={{ fontSize: '0.9rem', color: 'var(--accent-ink)' }}>
                  H
                </span>
              </div>
              <span className={`font-display font-bold text-[15px] tracking-tight transition-colors duration-300 ${logoTextCls}`}>
                HERE OPEN
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={linkCls(activeSection === link.href.replace('#', ''))}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA + theme */}
            <div className="hidden xl:flex items-center gap-3">
              <ThemeToggle
                className={
                  onDarkChrome
                    ? 'border-white/25 text-white/80 hover:text-white'
                    : 'border-[var(--border)] text-[var(--ink-2)] hover:text-[var(--ink)]'
                }
              />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="active:scale-[0.97] inline-flex items-center px-6 py-2.5 bg-[var(--accent)] text-[var(--accent-ink)] text-[13px] font-bold rounded-xl hover:brightness-[1.06] transition-all duration-300 shadow-[0_0_24px_var(--a30)]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="xl:hidden flex items-center gap-2">
              <ThemeToggle
                className={
                  onDarkChrome
                    ? 'border-white/25 text-white/80 hover:text-white'
                    : 'border-[var(--border)] text-[var(--ink-2)] hover:text-[var(--ink)]'
                }
              />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`icon-btn p-2 transition-colors ${
                  onDarkChrome ? 'text-white/80 hover:text-white' : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                }`}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

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
            <div className="bg-[var(--menu-bg)] backdrop-blur-md border-b border-[var(--border)] pb-6">
              <div className="container-site py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'text-[var(--accent)] bg-[var(--a0A)]'
                          : 'text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--glass)]'
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
                  className="block text-center py-3 bg-[var(--accent)] text-[var(--accent-ink)] text-sm font-bold rounded-xl shadow-[0_0_24px_var(--a30)]"
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