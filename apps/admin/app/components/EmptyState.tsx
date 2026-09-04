interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 bg-neutral-100 border border-neutral-200 rounded-2xl flex items-center justify-center text-neutral-500 mb-4">
        {icon}
      </div>
      <h3 className="text-[15px] font-semibold text-green-forest mb-1">{title}</h3>
      <p className="text-[13px] text-neutral-500 max-w-sm mb-6">{description}</p>
      {action}
    </div>
  );
}
