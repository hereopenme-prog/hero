'use client';

interface ConnectionLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  active?: boolean;
  dimmed?: boolean;
}

export function ConnectionLine({ from, to, active = false, dimmed = false }: ConnectionLineProps) {
  return (
    <g>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={1}
      />
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={active ? 'rgba(69,245,154,0.8)' : 'rgba(69,245,154,0.35)'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeDasharray="2 12"
        opacity={dimmed ? 0.15 : 1}
        className="animate-data-flow"
      />
    </g>
  );
}