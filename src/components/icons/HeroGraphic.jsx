/** Decorative pure-SVG hero graphic — phone + automation flow */

export default function HeroGraphic({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 360"
      className={`w-full max-w-md ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="hg-green" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#25D366" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="hg-sky" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="hg-violet" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="hg-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Background rings */}
      <circle cx="200" cy="180" r="140" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.6" />
      <circle cx="200" cy="180" r="100" stroke="#d1fae5" strokeWidth="2" opacity="0.8" />

      {/* Center phone */}
      <g filter="url(#hg-shadow)">
        <rect x="155" y="70" width="90" height="160" rx="18" fill="#0f172a" />
        <rect x="162" y="82" width="76" height="130" rx="10" fill="#f8fafc" />
        <rect x="172" y="98" width="40" height="12" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
        <rect x="180" y="118" width="48" height="22" rx="8" fill="url(#hg-green)" />
        <circle cx="200" cy="78" r="3" fill="#64748b" />
      </g>

      {/* Orbiting icon nodes */}
      <g className="animate-float" style={{ transformOrigin: '200px 180px' }}>
        <circle cx="80" cy="120" r="36" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#hg-shadow)" />
        <path d="M68 120h24M80 108v24" stroke="url(#hg-sky)" strokeWidth="3" strokeLinecap="round" />
        <text x="80" y="168" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Connect</text>
      </g>

      <g className="animate-float" style={{ transformOrigin: '200px 180px', animationDelay: '0.5s' }}>
        <circle cx="320" cy="120" r="36" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#hg-shadow)" />
        <path d="M308 120c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="url(#hg-violet)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="320" cy="124" r="4" fill="url(#hg-violet)" />
        <text x="320" y="168" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Auto-reply</text>
      </g>

      <g className="animate-float" style={{ transformOrigin: '200px 180px', animationDelay: '1s' }}>
        <circle cx="80" cy="250" r="36" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#hg-shadow)" />
        <rect x="66" y="242" width="28" height="20" rx="4" stroke="url(#hg-green)" strokeWidth="2.5" fill="none" />
        <path d="M72 252h16M72 256h10" stroke="url(#hg-green)" strokeWidth="2" strokeLinecap="round" />
        <text x="80" y="298" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Inbox</text>
      </g>

      <g className="animate-float" style={{ transformOrigin: '200px 180px', animationDelay: '1.5s' }}>
        <circle cx="320" cy="250" r="36" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="url(#hg-shadow)" />
        <path d="M308 250l8 8 16-16" stroke="url(#hg-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="320" y="298" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Go live</text>
      </g>

      {/* Connection lines */}
      <path d="M116 120 Q155 130 155 130" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M284 120 Q245 130 245 130" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M116 250 Q155 220 162 212" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M284 250 Q245 220 238 212" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>
  );
}
