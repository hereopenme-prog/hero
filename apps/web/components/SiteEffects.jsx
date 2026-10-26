'use client';

import { useEffect } from 'react';

export default function SiteEffects() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
    const targets = [...document.querySelectorAll('.section-label, .comparison-heading, .how-simple-heading, .dimension-bank, .dimension-small, .audience-card, .simple-vision-hero-grid, .vision-scale-card, .vision-purpose-card, .partnership-flow, .faq-list details, .contact-form, .original-device, .audience-orb, .partner-feature-column article')];
    let frame = 0;
    let activeId = '';
    let stopped = false;

    const update = () => {
      frame = 0;
      if (stopped || !header) return;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
      header.style.setProperty('--scroll-progress', String(progress));
      header.classList.toggle('header-scrolled', window.scrollY > 16);
      const threshold = header.offsetHeight + Math.min(window.innerHeight * .2, 150);
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }
      if (current !== activeId) {
        activeId = current;
        links.forEach(link => {
          if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    };
    const schedule = () => { if (!frame && !stopped) frame = requestAnimationFrame(update); };

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fx-entered');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .12 });
      targets.forEach((target, index) => {
        target.style.setProperty('--fx-delay', `${(index % 3) * 60}ms`);
        observer.observe(target);
      });
    }
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null;
    resizeObserver?.observe(document.querySelector('main'));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    // Pointer effects are decorative and never intercept taps or keyboard input.
    const preference = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const surfaces = [...document.querySelectorAll('.original-art-graphic, .partner-feature-column article, .audience-orb, .original-device')];
    const cleanups = surfaces.map(surface => {
      let pointerFrame = 0;
      let pointerX = .5;
      let pointerY = .5;
      const paint = () => {
        pointerFrame = 0;
        surface.style.setProperty('--pointer-x', `${pointerX * 100}%`);
        surface.style.setProperty('--pointer-y', `${pointerY * 100}%`);
        surface.style.setProperty('--tilt-x', `${(pointerY - .5) * -7}deg`);
        surface.style.setProperty('--tilt-y', `${(pointerX - .5) * 7}deg`);
        surface.classList.add('pointer-lit');
      };
      const move = event => {
        if (!preference.matches || event.pointerType === 'touch') return;
        const rect = surface.getBoundingClientRect();
        pointerX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        pointerY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        if (!pointerFrame) pointerFrame = requestAnimationFrame(paint);
      };
      const reset = () => {
        cancelAnimationFrame(pointerFrame);
        pointerFrame = 0;
        surface.classList.remove('pointer-lit');
        ['--pointer-x', '--pointer-y', '--tilt-x', '--tilt-y'].forEach(property => surface.style.removeProperty(property));
      };
      const changePreference = () => { if (!preference.matches) reset(); };
      surface.addEventListener('pointermove', move, { passive: true });
      surface.addEventListener('pointerleave', reset);
      surface.addEventListener('pointercancel', reset);
      preference.addEventListener('change', changePreference);
      return () => {
        reset();
        surface.removeEventListener('pointermove', move);
        surface.removeEventListener('pointerleave', reset);
        surface.removeEventListener('pointercancel', reset);
        preference.removeEventListener('change', changePreference);
      };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);

  return null;
}
