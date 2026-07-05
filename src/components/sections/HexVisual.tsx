export default function HexVisual() {
  const nodes: [number, number][] = [[200,40],[340,120],[340,280],[200,360],[60,280],[60,120]];
  return (
    <div style={{ position:"relative", aspectRatio:"1", maxWidth:460, margin:"0 auto" }}>
      <svg viewBox="0 0 400 400" style={{ width:"100%" }}>
        <defs>
          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C6FF"/><stop offset="100%" stopColor="#0072FF"/>
          </linearGradient>
          <linearGradient id="hexFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#0072FF" stopOpacity="0.05"/>
          </linearGradient>
          <radialGradient id="hexHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#00C6FF" stopOpacity="0.25"/>
            <stop offset="70%" stopColor="#0072FF" stopOpacity="0"/>
          </radialGradient>
        </defs>

        <circle className="tpa-core-glow" cx="200" cy="200" r="150" fill="url(#hexHalo)"/>

        <g className="tpa-orbit-1">
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(0,198,255,0.18)" className="tpa-path"/>
          <circle cx="380" cy="200" r="3" fill="#00C6FF"/>
        </g>
        <g className="tpa-orbit-2">
          <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(127,0,255,0.15)" strokeDasharray="2 6"/>
          <circle cx="60"  cy="200" r="2.5" fill="#7F00FF"/>
          <circle cx="340" cy="200" r="2.5" fill="#7F00FF"/>
        </g>

        <g className="tpa-hex-float">
          <polygon points="200,40 340,120 340,280 200,360 60,280 60,120"   fill="url(#hexFill)" stroke="url(#hexGrad)" strokeWidth="1.5" opacity="0.5"/>
          <polygon points="200,90 295,145 295,255 200,310 105,255 105,145" fill="url(#hexFill)" stroke="url(#hexGrad)" strokeWidth="2"/>
          <polygon points="200,140 250,170 250,230 200,260 150,230 150,170" fill="url(#hexGrad)" opacity="0.85"/>
          <rect x="175" y="195" width="50" height="10" rx="5" fill="white"/>
          <rect x="195" y="175" width="10" height="50" rx="5" fill="white"/>
          {nodes.map(([x,y],i) => (
            <g key={i} className="tpa-node" style={{ transformOrigin:`${x}px ${y}px` }}>
              <circle cx={x} cy={y} r="10" fill="#0A0E1A" stroke="url(#hexGrad)" strokeWidth="2"/>
              <circle cx={x} cy={y} r="4"  fill={i%3===2?"#7F00FF":"#00C6FF"}/>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
