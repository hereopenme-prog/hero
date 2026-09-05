'use client';

import { motion, type Variants } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const headerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const headerWord: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const titleWords = title.split(' ');
  const accentWords = titleAccent ? titleAccent.split(' ') : [];

  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`eyebrow mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
          {eyebrow}
        </div>
      )}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={headerContainer}
        className="font-display font-extrabold tracking-tight text-green-forest text-display-lg"
      >
        {titleWords.map((w, i) => (
          <motion.span key={`t${i}`} variants={headerWord} className="inline-block">
            {w}
            {i < titleWords.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
        {titleAccent && (
          <>
            <br />
            <span className="text-green-action">
              {accentWords.map((w, i) => (
                <motion.span key={`a${i}`} variants={headerWord} className="inline-block">
                  {w}
                  {i < accentWords.length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))}
            </span>
          </>
        )}
      </motion.h2>
      {description && (
        <p className="mt-5 text-body-lg text-black max-w-content leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}