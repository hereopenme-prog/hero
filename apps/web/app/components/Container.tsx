interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
}

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`container-site ${className}`}>
      {children}
    </Tag>
  );
}
