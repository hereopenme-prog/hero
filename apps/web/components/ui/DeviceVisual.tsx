'use client';

interface DeviceVisualProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  brand?: string;
  showQr?: boolean;
  showNotif?: boolean;
  amount?: string;
  notifLabel?: string;
  online?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { w: 'w-40', h: 'h-56', radius: 'rounded-[20px]', grille: 'w-10', gap: 'gap-1' },
  md: { w: 'w-48', h: 'h-64', radius: 'rounded-[24px]', grille: 'w-12', gap: 'gap-1.5' },
  lg: { w: 'w-56', h: 'h-72', radius: 'rounded-[26px]', grille: 'w-14', gap: 'gap-1.5' },
  xl: { w: 'w-64', h: 'h-[21rem]', radius: 'rounded-[28px]', grille: 'w-16', gap: 'gap-2' },
};

const qrPattern = [
  '1111101011',
  '1010001101',
  '1101010110',
  '1110101110',
  '0011011011',
  '1101010101',
  '1011100110',
  '1100110111',
  '1010111011',
  '1111110101',
];

export function DeviceVisual({
  size = 'md',
  brand,
  showQr = false,
  showNotif = false,
  amount = '₹1,250',
  notifLabel = 'PAYMENT RECEIVED',
  online = true,
  className = '',
}: DeviceVisualProps) {
  const s = sizeMap[size];

  return (
    <div
      className={`relative ${s.w} ${s.h} ${s.radius} border border-[#1C2A38] bg-gradient-to-b from-[#0F1923] to-[#080C10] shadow-[0_0_60px_#00D08414,0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden ${className}`}
    >
      {/* Speaker grille */}
      <div className={`pt-6 pb-2 flex flex-col items-center ${s.gap}`}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`${s.grille} h-[2px] rounded-full bg-[#1C2A38]`} />
        ))}
      </div>

      {/* Status LED */}
      <div className="flex justify-center mt-2">
        <span
          className={`w-2 h-2 rounded-full ${
            online ? 'bg-[#00D084] shadow-[0_0_8px_#00D084,0_0_16px_#00D08480] animate-pulse' : 'bg-[#3D4F5E]'
          }`}
        />
      </div>

      {/* Brand wordmark */}
      <div className="flex flex-col items-center mt-4">
        {brand ? (
          <span className="font-display font-bold text-xs text-[#E8EDF2] tracking-[0.18em] text-center px-2 leading-snug">
            {brand}
          </span>
        ) : (
          <>
            <span className="font-display font-bold text-sm text-[#E8EDF2] tracking-[0.2em]">HERE</span>
            <span className="font-display font-bold text-sm text-[#00D084] tracking-[0.2em]">OPEN</span>
          </>
        )}
        <span className="mt-1 font-body text-[0.5rem] tracking-[0.3em] text-[#3D4F5E]">
          SMART MERCHANT DEVICE
        </span>
      </div>

      {/* Notification display */}
      {showNotif && (
        <div className="mt-4 px-4 flex flex-col items-center">
          <div className="text-center rounded-lg border border-[#00D08430] bg-[#00D0840A] px-3 py-2.5 w-full">
            <p className="font-display font-extrabold text-lg text-[#00D084] drop-shadow-[0_0_16px_#00D08450]">
              {amount}
            </p>
            <p className="mt-0.5 font-body text-[0.55rem] font-bold tracking-wider text-[#A5B4C4]">{notifLabel}</p>
          </div>
        </div>
      )}

      {/* QR block */}
      {showQr && (
        <div className="mt-4 flex justify-center">
          <div
            className="p-1.5 bg-[#0A0F14] border border-[#1C2A38] rounded-md"
            style={{ width: 56, height: 56 }}
          >
            <div className="grid grid-cols-10 gap-[1px] w-full h-full">
              {qrPattern.flatMap((row, ri) =>
                row.split('').map((cell, ci) => (
                  <span
                    key={`${ri}-${ci}`}
                    className={cell === '1' ? 'bg-[#00D084]' : 'bg-[#0A0F14]'}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D08460] to-transparent" />
    </div>
  );
}