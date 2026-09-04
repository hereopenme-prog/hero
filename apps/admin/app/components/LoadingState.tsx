export function LoadingState({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-8 h-8 border-2 border-neutral-200 border-t-green-action rounded-full animate-spin mb-3" />
      <p className="text-[13px] text-neutral-500">{text}</p>
    </div>
  );
}
