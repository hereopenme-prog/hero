'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

// Content remains visible without JavaScript. Motion runs once when it enters view.
export function Reveal({ children, className = '', repeat = false }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      if (repeat) {
        entries.forEach(entry => ref.current?.classList.toggle('visual-entered', entry.isIntersecting && entry.intersectionRatio >= .12));
      } else if (entries.some(entry => entry.isIntersecting)) {
        ref.current?.classList.add('visual-entered');
        observer.disconnect();
      }
    }, { threshold: [0, .12] });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [repeat]);
  return <div ref={ref} className={`visual-reveal ${className}`}>{children}</div>;
}

export function ArtworkPreview({ src, alt, width, height }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    const element = dialog.current;
    const restore = () => { document.body.style.overflow = ''; setZoomed(false); trigger.current?.focus(); };
    element.addEventListener('close', restore);
    return () => { element.removeEventListener('close', restore); document.body.style.overflow = ''; };
  }, []);
  return <>
    <button ref={trigger} type="button" className="artwork-preview" aria-label="Enlarge product illustration" onClick={() => { dialog.current.showModal(); document.body.style.overflow = 'hidden'; }}>
      <img src={src} alt={alt} width={width} height={height} fetchPriority="high"/>
      <span className="artwork-enlarge">View full illustration <Icon name="arrow"/></span>
    </button>
    <dialog ref={dialog} className="artwork-dialog" aria-label="Product illustration" onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}>
      <div className="artwork-toolbar"><strong>Here Open · Product illustration</strong><button type="button" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? 'Fit to screen' : 'Zoom in'}</button><button type="button" onClick={() => dialog.current.close()} autoFocus>Close <span aria-hidden="true">×</span></button></div>
      <div className={`artwork-scroll${zoomed ? ' is-zoomed' : ''}`} tabIndex="0" aria-label="Illustration; scroll to explore when zoomed"><img src={src} alt={alt} width={width} height={height}/></div>
    </dialog>
  </>;
}
