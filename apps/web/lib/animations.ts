import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0 },
  },
};

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1, opacity: 1,
    transition: { pathLength: { duration: 1.2, ease: 'easeInOut' }, opacity: { duration: 0.2 } },
  },
};