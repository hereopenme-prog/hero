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
      <h2 className="font-display font-extrabold tracking-tight text-green-forest text-display-lg">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-green-action">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-body-lg text-black max-w-content leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
