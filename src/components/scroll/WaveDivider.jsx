import { useId } from 'react';

/** Curved gradient wave between sections — trendy section break */
export default function WaveDivider({ flip = false, className = '' }) {
  const id = useId().replace(/:/g, '');

  return (
    <div className={`pointer-events-none relative -mt-px h-12 w-full overflow-hidden sm:h-16 ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id={`wave-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#25D366" stopOpacity="0.15" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.12" />
            <stop offset="65%" stopColor="#a78bfa" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          fill={`url(#wave-${id})`}
        />
      </svg>
    </div>
  );
}
