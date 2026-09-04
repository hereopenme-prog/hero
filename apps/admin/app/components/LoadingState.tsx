export function LoadingState({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-8 h-8 border-2 border-white/10 border-t-neon rounded-full animate-spin mb-3" />
      <p className="text-[13px] text-muted">{text}</p>
    </div>
  );
}
