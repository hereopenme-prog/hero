'use client';

import { useEffect, useState } from 'react';
import { ArrowRightIcon, MenuIcon, MoonIcon } from './Icons';

const NAV_LINKS: Array<[string, string]> = [
  ['Home', '#home'],
  ['The challenge', '#problem'],
  ['Our solution', '#our-solution'],
  ['How it works', '#how-it-works'],
  ['Smart device', '#merchant-overview'],
  ['Our vision', '#vision'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
];

export default function ReferenceHeader() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let dark = false;
    try {
      dark = window.localStorage.getItem('hereopen-theme') === 'dark';
    } catch {
      dark = false;
    }
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const html = document.documentElement;
    if (next) html.setAttribute('data-theme', 'dark');
    else html.removeAttribute('data-theme');
    try {
      window.localStorage.setItem('hereopen-theme', next ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="Here Open home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/assets/hereopen-logo.svg" width={43} height={43} alt="" />
          </span>
          <span>
            HERE OPEN<small>CONNECTED LOCAL BUSINESS</small>
          </span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={menuOpen ? 'nav-links is-open' : 'nav-links'}
        >
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-button theme-button"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
          >
            <MoonIcon />
          </button>
          <a className="button nav-cta" href="#contact">
            Discuss a partnership
            <ArrowRightIcon />
          </a>
          <button
            type="button"
            className="icon-button menu-button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}