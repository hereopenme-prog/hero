'use client';

import { motion, type Variants } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  size?: 'md' | 'lg';
  accent?: 'green' | 'mint' | 'light';
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
  size = 'md',
  accent = 'green',
  className = '',
}: SectionHeadingProps) {
  const titleWords = title.split(' ');
  const accentWords = titleAccent ? titleAccent.split(' ') : [];

  const isMint = accent === 'mint';
  const isLight = accent === 'light';
  const accentHex = isLight ? 'var(--brand-accent)' : isMint ? 'var(--accent-2)' : 'var(--accent)';
  const accentFade = isLight ? '#00B4D8' : isMint ? 'var(--accent-2)' : '#00B4D8';
  const titleColorCls = isLight ? 'text-[var(--brand-ink)]' : 'text-[var(--accent)]';

  const titleClasses =
    size === 'lg'
      ? 'mt-7 font-display font-bold text-[2.35rem] leading-[1.08] tracking-[-0.025em] sm:text-[2.7rem] lg:text-[3.3rem]'
      : 'mt-6 font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em]';
  const descClasses =
    size === 'lg'
      ? `mt-6 font-body text-lg lg:text-xl ${isLight ? 'text-[var(--brand-ink-muted)]' : 'text-[var(--ink-muted)]'} leading-relaxed max-w-[660px]`
      : `mt-5 font-body text-base lg:text-[1.0625rem] ${isLight ? 'text-[var(--brand-ink-muted)]' : 'text-[var(--ink-muted)]'} leading-relaxed max-w-[620px]`;

  return (
    <div className={`mb-16 lg:mb-20 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border ${
            align === 'center' ? 'mx-auto' : ''
          }`}
          style={{
            background: isLight ? 'var(--brand-a20)' : isMint ? 'var(--a2-12)' : 'var(--a20)',
            borderColor: isLight ? 'var(--brand-a40)' : isMint ? 'var(--a2-36)' : 'var(--a40)',
          }}
        >
          <span
            className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: accentHex }}
          />
          <span
            className="font-body font-semibold text-xs tracking-wide"
            style={{ color: accentHex }}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={headingContainer}
        className={`${titleClasses} ${titleColorCls} leading-tight ${
          align === 'center' ? 'mx-auto max-w-[820px]' : ''
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
            <motion.span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${accentHex}, ${accentFade})` }}>
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
          className={`${descClasses} ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}