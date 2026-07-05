"use client";

/* Clean inline-SVG logo — works at any size, no font-loading dependency */
export function LogoLight({ height = 36 }: { height?: number }) {
  const w = height * 3.6;
  return (
    <svg viewBox="0 0 360 100" width={w} height={height} xmlns="http://www.w3.org/2000/svg" style={{ display:"block" }}>
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF"/>
          <stop offset="100%" stopColor="#0072FF"/>
        </linearGradient>
        <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F00FF"/>
          <stop offset="100%" stopColor="#0072FF"/>
        </linearGradient>
        <filter id="gw" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Hexagon icon */}
      <polygon points="46,8 68,20 68,44 46,56 24,44 24,20"
        fill="none" stroke="url(#lg1)" strokeWidth="2.5" filter="url(#gw)"/>
      <polygon points="46,18 61,27 61,37 46,46 31,37 31,27"
        fill="url(#lg1)" opacity="0.13"/>
      {/* T lettermark */}
      <rect x="36" y="26" width="20" height="3" rx="1.5" fill="url(#lg1)" filter="url(#gw)"/>
      <rect x="44.5" y="26" width="3" height="16" rx="1.5" fill="url(#lg1)" filter="url(#gw)"/>
      {/* Vertex dots */}
      {([[46,8],[68,20],[68,44],[46,56],[24,44],[24,20]] as [number,number][]).map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill={i%3===2?"#7F00FF":"#00C6FF"} filter="url(#gw)"/>
      ))}
      {/* Circuit ticks */}
      <line x1="68" y1="32" x2="75" y2="32" stroke="#0072FF" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="77" cy="32" r="1.5" fill="#0072FF" opacity="0.5"/>
      <line x1="24" y1="32" x2="17" y2="32" stroke="#7F00FF" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="15" cy="32" r="1.5" fill="#7F00FF" opacity="0.5"/>

      {/* Wordmark – TPA */}
      <text x="88" y="44"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="38" fontWeight="800" letterSpacing="-1"
        fill="url(#lg1)" filter="url(#gw)">TPA</text>

      {/* Divider */}
      <rect x="88" y="50" width="172" height="1.5" rx="0.75" fill="url(#lg2)" opacity="0.55"/>

      {/* TECH LABS */}
      <text x="90" y="67"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="16" fontWeight="300" letterSpacing="6"
        fill="#334155" opacity="0.9">TECH LABS</text>

      {/* Tagline */}
      <text x="90" y="82"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="8" fontWeight="400" letterSpacing="2"
        fill="#64748B" opacity="0.8">BUILD · INNOVATE · DELIVER</text>
    </svg>
  );
}

export function LogoDark({ height = 36 }: { height?: number }) {
  const w = height * 3.6;
  return (
    <svg viewBox="0 0 360 100" width={w} height={height} xmlns="http://www.w3.org/2000/svg" style={{ display:"block" }}>
      <defs>
        <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF"/>
          <stop offset="100%" stopColor="#0072FF"/>
        </linearGradient>
        <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F00FF"/>
          <stop offset="100%" stopColor="#0072FF"/>
        </linearGradient>
        <filter id="dgw" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <polygon points="46,8 68,20 68,44 46,56 24,44 24,20"
        fill="none" stroke="url(#dg1)" strokeWidth="2.5" filter="url(#dgw)"/>
      <polygon points="46,18 61,27 61,37 46,46 31,37 31,27"
        fill="url(#dg1)" opacity="0.18"/>
      <rect x="36" y="26" width="20" height="3" rx="1.5" fill="url(#dg1)" filter="url(#dgw)"/>
      <rect x="44.5" y="26" width="3" height="16" rx="1.5" fill="url(#dg1)" filter="url(#dgw)"/>
      {([[46,8],[68,20],[68,44],[46,56],[24,44],[24,20]] as [number,number][]).map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill={i%3===2?"#7F00FF":"#00C6FF"} filter="url(#dgw)"/>
      ))}
      <line x1="68" y1="32" x2="75" y2="32" stroke="#0072FF" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="77" cy="32" r="1.5" fill="#0072FF" opacity="0.5"/>
      <line x1="24" y1="32" x2="17" y2="32" stroke="#7F00FF" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="15" cy="32" r="1.5" fill="#7F00FF" opacity="0.5"/>

      <text x="88" y="44"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="38" fontWeight="800" letterSpacing="-1"
        fill="url(#dg1)" filter="url(#dgw)">TPA</text>
      <rect x="88" y="50" width="172" height="1.5" rx="0.75" fill="url(#dg2)" opacity="0.55"/>
      <text x="90" y="67"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="16" fontWeight="300" letterSpacing="6"
        fill="#A8C8F0" opacity="0.95">TECH LABS</text>
      <text x="90" y="82"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="8" fontWeight="400" letterSpacing="2"
        fill="#4A7FA8" opacity="0.9">BUILD · INNOVATE · DELIVER</text>
    </svg>
  );
}
