'use client';

import { motion, type Variants } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const headingWord: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const titleWords = title.split(' ');
  const accentWords = titleAccent ? titleAccent.split(' ') : [];

  return (
    <div className={`mb-14 lg:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-[#00D08420] border border-[#00D08440] ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          <span className="font-body font-semibold text-xs text-[#00D084] tracking-wide">{eyebrow}</span>
        </div>
      )}

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={headingContainer}
        className={`mt-6 font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight ${
          align === 'center' ? 'mx-auto max-w-[800px]' : ''
        }`}
      >
        {titleWords.map((w, i) => (
          <motion.span key={`t${i}`} variants={headingWord} className="inline-block">
            {w}
            {i < titleWords.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
        {titleAccent && (
          <>
            <br />
            <motion.span className="text-[#00D084]">
              {accentWords.map((w, i) => (
                <motion.span key={`a${i}`} variants={headingWord} className="inline-block">
                  {w}
                  {i < accentWords.length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))}
            </motion.span>
          </>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-5 font-body text-base lg:text-[1.0625rem] text-[#8A9BAE] leading-relaxed max-w-[620px] ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}