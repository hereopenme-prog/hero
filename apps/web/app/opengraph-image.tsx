import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HERE OPEN — Real-Time Shop Visibility';
export const size = { width: 1200, height: 630 };

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'var(--bg)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            color: 'var(--accent)',
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '24px',
            letterSpacing: '0.1em',
          }}
        >
          HERE OPEN
        </div>
        <div
          style={{
            color: 'var(--ink)',
            fontSize: '56px',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          Real-Time Shop Visibility &amp; 24/7 Safety
        </div>
        <div
          style={{
            color: 'var(--ink-dim)',
            fontSize: '24px',
            marginTop: '24px',
            textAlign: 'center',
          }}
        >
          One tap. Know every shop status instantly.
        </div>
        <div
          style={{
            marginTop: '40px',
            background: 'var(--accent)',
            color: 'var(--bg)',
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: '10px',
            fontSize: '18px',
          }}
        >
          hereopen.in
        </div>
      </div>
    ),
    { ...size }
  );
}