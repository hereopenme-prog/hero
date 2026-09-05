'use client';

import { useState, useCallback, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'hereopen-theme';

export function getCurrentTheme(): 'navy' | 'dark' {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'navy';
  }
  return 'navy';
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'navy' | 'dark'>(() => getCurrentTheme());

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const toggle = useCallback(() => {
    const next = getCurrentTheme() === 'dark' ? 'navy' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  }, []);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to Navy (light) theme' : 'Switch to dark theme'}
      title={isDark ? 'Navy light theme' : 'Dark theme'}
      className={`icon-btn inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-300 ${className}`}
    >
      <Sun size={16} className={isDark ? 'opacity-0 w-0 h-0' : 'opacity-100 w-4 h-4'} />
      <Moon size={16} className={isDark ? 'opacity-100 w-4 h-4' : 'opacity-0 w-0 h-0'} />
    </button>
  );
}