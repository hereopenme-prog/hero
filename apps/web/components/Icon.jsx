const paths = {
  fintech: <><rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4m-9-5-3 3h4l-3 3"/></>,
  bank: <><path d="m3 9 9-6 9 6H3Zm2 12h14M6 12v6m6-6v6m6-6v6"/></>,
  shop: <><path d="M4 10v11h16V10M3 8l2-5h14l2 5M3 8v2a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0V8M9 21v-7h6v7"/></>,
  people: <><circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-17a3 3 0 0 1 0 6m2 5a5 5 0 0 1 3 4v2"/></>,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/></>,
  shield: <><path d="m12 2 9 4-1 9-8 7-8-7-1-9 9-4Z"/><path d="m7 12 3 3 6-7"/></>,
  lock: <><rect x="4" y="10" width="16" height="12" rx="3"/><path d="M7 10V7a5 5 0 0 1 10 0v3m-5 5v2"/></>,
  fire: <path d="M12 2c0 7-5 6-4 11-3-1-3-4-3-4-6 12 12 18 15 6 1-5-4-7-8-13Zm0 11c5 5 2 8 0 8s-4-3 0-8Z"/>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,
  location: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  chart: <><path d="M4 21V12m8 9V7m8 14V3M2 21h20"/></>,
  credit: <><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M6 15h4"/></>,
  link: <><path d="m9 15 6-6m-7 9-1 1a4 4 0 0 1-6-6l6-6a4 4 0 0 1 6 0m-2-1 1-1a4 4 0 0 1 6 6l-6 6a4 4 0 0 1-6 0"/></>,
  megaphone: <><path d="m3 9 6 0 10-6v18L9 15H3V9Zm3 6 2 7h4l-2-7m12-7v8"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></>,
  tag: <><path d="M3 3h8l11 11-8 8L3 11V3Z"/><circle cx="7.5" cy="7.5" r="1"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M9 20a3 3 0 0 0 6 0"/></>,
  device: <><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M8 6h8v8H8zM8 18h8"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  close: <path d="m5 5 14 14M19 5 5 19"/>,
  moon: <path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z"/>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></>
};
export default function Icon({ name = 'check', className = '', ...props }) {
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`icon ${className}`} {...props}>{paths[name] || paths.check}</svg>;
}
