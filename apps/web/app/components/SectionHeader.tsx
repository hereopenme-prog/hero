interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`eyebrow mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display font-extrabold tracking-tight text-white text-display-lg">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-gradient-neon">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-body-lg text-muted-light max-w-content leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
