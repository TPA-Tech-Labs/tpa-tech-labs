/*
 * Animated SVG scenes for each service. Pure SVG + CSS/SMIL — packets travel
 * along real paths, curves draw themselves, nodes breathe. No timers, no emoji.
 */
import React from "react";

const MONO = "'JetBrains Mono',monospace";

function Panel({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div style={{
      background: "#0A0E1A",
      border: "1px solid rgba(0,198,255,0.15)",
      borderRadius: 16,
      padding: "20px 20px 12px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(168,200,240,0.05) 1px, transparent 1px)", backgroundSize: "16px 16px", pointerEvents: "none" }} />
      {label && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, position: "relative" }}>
          <span className="tpa-blip" style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
          <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", color: "#64748B", textTransform: "uppercase" }}>{label}</span>
        </div>
      )}
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}

/* Traveling packet along an SVG path */
function Packet({ path, dur, color = "#00C6FF", r = 3, begin = "0s" }: {
  path: string; dur: string; color?: string; r?: number; begin?: string;
}) {
  return (
    <circle r={r} fill={color}>
      <animateMotion dur={dur} repeatCount="indefinite" path={path} begin={begin} />
    </circle>
  );
}

/* ── Web Development — browser builds itself, code ships through the pipeline ── */
export function WebDevVisual() {
  return (
    <Panel label="deploy — production">
      <svg viewBox="0 0 520 220" style={{ width: "100%", display: "block" }} role="img" aria-label="Web application build and deploy pipeline">
        <defs>
          <linearGradient id="wd-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C6FF" /><stop offset="100%" stopColor="#0072FF" />
          </linearGradient>
        </defs>
        {/* Browser window */}
        <rect x="14" y="14" width="240" height="160" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(0,198,255,0.25)" />
        <circle cx="32" cy="30" r="3.5" fill="#EF4444" opacity="0.7" />
        <circle cx="46" cy="30" r="3.5" fill="#F59E0B" opacity="0.7" />
        <circle cx="60" cy="30" r="3.5" fill="#10B981" opacity="0.7" />
        <rect x="76" y="24" width="160" height="12" rx="6" fill="rgba(255,255,255,0.06)" />
        {/* Hero block shimmer */}
        <rect x="30" y="50" width="130" height="14" rx="4" fill="url(#wd-g)" opacity="0.85" />
        <rect x="30" y="72" width="200" height="7" rx="3.5" fill="rgba(168,200,240,0.35)" />
        <rect x="30" y="86" width="170" height="7" rx="3.5" fill="rgba(168,200,240,0.2)" />
        {/* Card skeletons breathing in sequence */}
        {[0, 1, 2].map(i => (
          <g key={i} className="tpa-blip" style={{ animationDelay: `${i * 0.4}s` }}>
            <rect x={30 + i * 72} y="106" width="62" height="52" rx="6" fill="rgba(0,114,255,0.12)" stroke="rgba(0,198,255,0.3)" />
            <rect x={38 + i * 72} y="116" width="30" height="6" rx="3" fill="rgba(0,198,255,0.6)" />
            <rect x={38 + i * 72} y="128" width="46" height="5" rx="2.5" fill="rgba(168,200,240,0.3)" />
            <rect x={38 + i * 72} y="138" width="40" height="5" rx="2.5" fill="rgba(168,200,240,0.2)" />
          </g>
        ))}
        {/* Pipeline: commit → CI → edge */}
        <path id="wd-pipe" d="M280 60 C 330 60, 330 60, 380 60 S 460 60, 500 60" fill="none" stroke="rgba(0,198,255,0.2)" strokeWidth="1.5" />
        <path d="M280 60 H 500" fill="none" stroke="rgba(0,198,255,0.35)" strokeWidth="1.5" className="tpa-flow-line" />
        <Packet path="M280 60 H 500" dur="2.6s" />
        <Packet path="M280 60 H 500" dur="2.6s" begin="1.3s" color="#7F00FF" r={2.5} />
        {/* Stage nodes */}
        {[
          { x: 280, label: "commit" },
          { x: 390, label: "ci · tests" },
          { x: 500, label: "edge" },
        ].map((s, i) => (
          <g key={s.label}>
            <circle cx={s.x} cy="60" r="10" fill="#0A0E1A" stroke="url(#wd-g)" strokeWidth="2" className="tpa-svg-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
            <circle cx={s.x} cy="60" r="3.5" fill={i === 2 ? "#10B981" : "#00C6FF"} />
            <text x={s.x} y="88" textAnchor="middle" fontFamily={MONO} fontSize="9" fill="#64748B">{s.label}</text>
          </g>
        ))}
        {/* Lighthouse gauge */}
        <g transform="translate(390,150)">
          <path d="M-36 18 A 40 40 0 0 1 36 18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" strokeLinecap="round" />
          <path d="M-36 18 A 40 40 0 0 1 36 18" fill="none" stroke="#10B981" strokeWidth="7" strokeLinecap="round" strokeDasharray="126" className="tpa-draw" />
          <text x="0" y="14" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="22" fontWeight="700" fill="#10B981">98</text>
          <text x="0" y="34" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="#64748B">LIGHTHOUSE · LCP 0.9s</text>
        </g>
      </svg>
    </Panel>
  );
}

/* ── Mobile Apps — device syncing with the cloud, notifications land live ── */
export function MobileVisual() {
  return (
    <Panel label="app — release channel">
      <svg viewBox="0 0 520 220" style={{ width: "100%", display: "block" }} role="img" aria-label="Mobile app syncing with cloud services">
        <defs>
          <linearGradient id="mb-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C6FF" /><stop offset="100%" stopColor="#0072FF" />
          </linearGradient>
        </defs>
        {/* Phone */}
        <g className="tpa-svg-float">
          <rect x="40" y="18" width="96" height="186" rx="16" fill="rgba(255,255,255,0.03)" stroke="url(#mb-g)" strokeWidth="1.5" />
          <rect x="72" y="26" width="32" height="6" rx="3" fill="rgba(168,200,240,0.25)" />
          {/* Screen: feed cards */}
          <rect x="52" y="44" width="72" height="26" rx="6" fill="rgba(0,114,255,0.18)" stroke="rgba(0,198,255,0.35)" />
          <rect x="58" y="51" width="34" height="5" rx="2.5" fill="rgba(0,198,255,0.7)" />
          <rect x="58" y="60" width="52" height="4" rx="2" fill="rgba(168,200,240,0.3)" />
          {[0, 1, 2].map(i => (
            <g key={i} className="tpa-blip" style={{ animationDelay: `${0.5 + i * 0.4}s` }}>
              <rect x="52" y={78 + i * 32} width="72" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
              <circle cx="63" cy={91 + i * 32} r="6" fill="rgba(127,0,255,0.4)" />
              <rect x="74" y={85 + i * 32} width="40" height="4.5" rx="2" fill="rgba(168,200,240,0.4)" />
              <rect x="74" y={94 + i * 32} width="30" height="4" rx="2" fill="rgba(168,200,240,0.2)" />
            </g>
          ))}
          <rect x="52" y="182" width="72" height="12" rx="6" fill="rgba(0,198,255,0.15)" />
        </g>
        {/* Notification ping */}
        <g>
          <circle cx="136" cy="34" r="7" fill="#EF4444" />
          <circle cx="136" cy="34" r="7" fill="none" stroke="#EF4444" strokeWidth="2" className="tpa-svg-pulse" />
          <text x="136" y="37.5" textAnchor="middle" fontFamily={MONO} fontSize="9" fontWeight="700" fill="white">3</text>
        </g>
        {/* Sync paths phone ↔ cloud */}
        <path d="M150 110 C 220 110, 240 70, 305 70" fill="none" stroke="rgba(0,198,255,0.3)" strokeWidth="1.5" className="tpa-flow-line" />
        <path d="M305 130 C 240 130, 220 150, 150 150" fill="none" stroke="rgba(127,0,255,0.3)" strokeWidth="1.5" className="tpa-flow-line" />
        <Packet path="M150 110 C 220 110, 240 70, 305 70" dur="2.2s" />
        <Packet path="M305 130 C 240 130, 220 150, 150 150" dur="2.8s" color="#AE75FF" />
        <text x="228" y="96" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="#64748B">sync ↑</text>
        <text x="228" y="146" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="#64748B">push ↓</text>
        {/* Cloud/API node */}
        <g className="tpa-svg-float" style={{ animationDelay: "1s" }}>
          <path d="M340 96 a20 20 0 0 1 38 -8 a15 15 0 0 1 6 29 h-48 a14 14 0 0 1 4 -21z" fill="rgba(0,114,255,0.12)" stroke="url(#mb-g)" strokeWidth="1.5" transform="translate(-24,-14)" />
          <text x="338" y="102" textAnchor="middle" fontFamily={MONO} fontSize="9" fill="#A8C8F0">api</text>
        </g>
        {/* Store cards */}
        {[
          { y: 30, name: "App Store", status: "● live", color: "#10B981" },
          { y: 92, name: "Play Store", status: "● live", color: "#10B981" },
          { y: 154, name: "TestFlight", status: "◌ beta 42", color: "#F59E0B" },
        ].map((s, i) => (
          <g key={s.name} className="tpa-blip" style={{ animationDelay: `${i * 0.6}s` }}>
            <rect x="400" y={s.y} width="106" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
            <text x="412" y={s.y + 19} fontFamily="'Inter',sans-serif" fontSize="11" fontWeight="600" fill="#E2E8F0">{s.name}</text>
            <text x="412" y={s.y + 34} fontFamily={MONO} fontSize="9" fill={s.color}>{s.status}</text>
          </g>
        ))}
        <path d="M382 110 H 400" stroke="rgba(0,198,255,0.3)" strokeWidth="1.5" className="tpa-flow-slow" />
      </svg>
    </Panel>
  );
}

/* ── Cloud & DevOps — traffic flows through LB → services → data ── */
export function CloudVisual() {
  return (
    <Panel label="infra — us-east-1 · eu-west-1">
      <svg viewBox="0 0 520 220" style={{ width: "100%", display: "block" }} role="img" aria-label="Cloud infrastructure with flowing traffic">
        <defs>
          <linearGradient id="cd-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C6FF" /><stop offset="100%" stopColor="#0072FF" />
          </linearGradient>
        </defs>
        {/* Ingress */}
        <g>
          <circle cx="46" cy="110" r="16" fill="rgba(0,198,255,0.1)" stroke="url(#cd-g)" strokeWidth="1.5" className="tpa-svg-pulse" />
          <path d="M39 110 h14 M46 103 v14" stroke="#00C6FF" strokeWidth="1.5" />
          <text x="46" y="142" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="#64748B">traffic</text>
        </g>
        {/* LB */}
        <rect x="108" y="88" width="64" height="44" rx="8" fill="rgba(0,114,255,0.12)" stroke="url(#cd-g)" strokeWidth="1.5" />
        <text x="140" y="107" textAnchor="middle" fontFamily={MONO} fontSize="9" fill="#A8C8F0">ingress</text>
        <text x="140" y="120" textAnchor="middle" fontFamily={MONO} fontSize="8" fill="#64748B">nginx · TLS</text>
        <path d="M62 110 H 108" stroke="rgba(0,198,255,0.35)" strokeWidth="1.5" className="tpa-flow-line" />
        <Packet path="M62 110 H 108" dur="1.6s" />
        {/* Fan-out to service pods */}
        {[
          { y: 40, name: "api-7f9c", cpu: "34%" },
          { y: 96, name: "api-2b1d", cpu: "41%" },
          { y: 152, name: "worker-x1", cpu: "12%" },
        ].map((p, i) => (
          <g key={p.name}>
            <path d={`M172 110 C 210 110, 214 ${p.y + 22}, 248 ${p.y + 22}`} fill="none" stroke="rgba(0,198,255,0.25)" strokeWidth="1.5" className="tpa-flow-slow" />
            <Packet path={`M172 110 C 210 110, 214 ${p.y + 22}, 248 ${p.y + 22}`} dur={`${1.8 + i * 0.5}s`} begin={`${i * 0.4}s`} r={2.5} />
            <rect x="248" y={p.y} width="88" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(0,198,255,0.3)" className="tpa-blip" style={{ animationDelay: `${i * 0.5}s` }} />
            <circle cx="262" cy={p.y + 15} r="3.5" fill="#10B981" />
            <text x="272" y={p.y + 19} fontFamily={MONO} fontSize="9" fill="#E2E8F0">{p.name}</text>
            <rect x="262" y={p.y + 27} width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
            <rect x="262" y={p.y + 27} width={parseInt(p.cpu) * 0.6} height="4" rx="2" fill="url(#cd-g)" />
            <text x="330" y={p.y + 33} textAnchor="end" fontFamily={MONO} fontSize="7.5" fill="#64748B">{p.cpu}</text>
          </g>
        ))}
        {/* Data layer */}
        <g>
          <path d="M336 62 C 380 62, 384 90, 420 90" fill="none" stroke="rgba(127,0,255,0.3)" strokeWidth="1.5" className="tpa-flow-slow" />
          <path d="M336 118 C 380 118, 384 104, 420 100" fill="none" stroke="rgba(127,0,255,0.3)" strokeWidth="1.5" className="tpa-flow-slow" />
          <Packet path="M336 62 C 380 62, 384 90, 420 90" dur="2.4s" color="#AE75FF" r={2.5} />
          <ellipse cx="448" cy="78" rx="28" ry="9" fill="rgba(127,0,255,0.15)" stroke="#AE75FF" strokeWidth="1.2" />
          <path d="M420 78 v28 a28 9 0 0 0 56 0 v-28" fill="rgba(127,0,255,0.08)" stroke="#AE75FF" strokeWidth="1.2" />
          <text x="448" y="130" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="#64748B">postgres · HA</text>
        </g>
        {/* Uptime ribbon */}
        <g transform="translate(360,168)">
          <rect x="0" y="0" width="146" height="34" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" />
          {Array.from({ length: 24 }).map((_, i) => (
            <rect key={i} x={10 + i * 5.2} y="9" width="3.2" height="16" rx="1.6"
              fill={i === 9 ? "#F59E0B" : "#10B981"} opacity={0.85}
              className="tpa-blip" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
          <text x="73" y="30" textAnchor="middle" fontFamily={MONO} fontSize="7.5" fill="#10B981" opacity="0"> </text>
        </g>
        <text x="433" y="163" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="#10B981">uptime 99.99%</text>
      </svg>
    </Panel>
  );
}

/* ── AI Agents — agent core orchestrating real tools ── */
export function AgentsVisual() {
  const tools = [
    { x: 60, y: 40, label: "github", sub: "PR #482" },
    { x: 60, y: 170, label: "jira", sub: "OPS-291" },
    { x: 460, y: 40, label: "slack", sub: "#alerts" },
    { x: 460, y: 170, label: "postgres", sub: "read-only" },
  ];
  return (
    <Panel label="agent — running · 3 tools active">
      <svg viewBox="0 0 520 220" style={{ width: "100%", display: "block" }} role="img" aria-label="AI agent orchestrating tools">
        <defs>
          <linearGradient id="ag-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C6FF" /><stop offset="100%" stopColor="#7F00FF" />
          </linearGradient>
          <radialGradient id="ag-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0072FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0072FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="260" cy="108" r="80" fill="url(#ag-halo)" className="tpa-svg-glow" />
        {/* Connections + packets both directions */}
        {tools.map((t, i) => {
          const path = `M${t.x < 260 ? t.x + 44 : t.x - 44} ${t.y + 14} C ${(t.x + 260) / 2} ${t.y + 14}, ${(t.x + 260) / 2} 108, ${t.x < 260 ? 218 : 302} 108`;
          return (
            <g key={t.label}>
              <path d={path} fill="none" stroke="rgba(0,198,255,0.22)" strokeWidth="1.5" className="tpa-flow-slow" />
              <Packet path={path} dur={`${2 + i * 0.4}s`} begin={`${i * 0.5}s`} r={2.5}
                color={i % 2 ? "#AE75FF" : "#00C6FF"} />
            </g>
          );
        })}
        {/* Tool nodes */}
        {tools.map((t, i) => (
          <g key={t.label} className="tpa-blip" style={{ animationDelay: `${i * 0.4}s` }}>
            <rect x={t.x - 44} y={t.y - 8} width="88" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(0,198,255,0.3)" />
            <text x={t.x} y={t.y + 9} textAnchor="middle" fontFamily={MONO} fontSize="10" fontWeight="600" fill="#E2E8F0">{t.label}</text>
            <text x={t.x} y={t.y + 24} textAnchor="middle" fontFamily={MONO} fontSize="8" fill="#64748B">{t.sub}</text>
          </g>
        ))}
        {/* Agent core — hexagon */}
        <g className="tpa-svg-float">
          <polygon points="260,66 296,87 296,129 260,150 224,129 224,87" fill="rgba(0,114,255,0.15)" stroke="url(#ag-g)" strokeWidth="2" />
          <polygon points="260,84 281,96 281,120 260,132 239,120 239,96" fill="url(#ag-g)" opacity="0.25" />
          <text x="260" y="104" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="12" fontWeight="700" fill="white">AGENT</text>
          <text x="260" y="120" textAnchor="middle" fontFamily={MONO} fontSize="7.5" fill="#A8C8F0">plan · act · verify</text>
        </g>
        {/* Reasoning ticker */}
        <g transform="translate(150,186)">
          <rect x="0" y="0" width="220" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
          <text x="10" y="16" fontFamily={MONO} fontSize="9" fill="#10B981">✓</text>
          <text x="24" y="16" fontFamily={MONO} fontSize="9" fill="#A8C8F0">
            triaged 3 P0s → posted summary
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          </text>
        </g>
      </svg>
    </Panel>
  );
}

/* ── AI Model Training — loss curve draws itself, eval score climbs ── */
export function TrainingVisual() {
  return (
    <Panel label="train — run #147 · epoch 12/20">
      <svg viewBox="0 0 520 220" style={{ width: "100%", display: "block" }} role="img" aria-label="Model training loss and accuracy curves">
        <defs>
          <linearGradient id="tr-loss" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C6FF" /><stop offset="100%" stopColor="#0072FF" />
          </linearGradient>
          <linearGradient id="tr-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0072FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0072FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid */}
        {[40, 80, 120, 160].map(y => (
          <line key={y} x1="46" y1={y} x2="330" y2={y} stroke="rgba(255,255,255,0.05)" />
        ))}
        <line x1="46" y1="176" x2="330" y2="176" stroke="rgba(168,200,240,0.25)" />
        <line x1="46" y1="24" x2="46" y2="176" stroke="rgba(168,200,240,0.25)" />
        <text x="38" y="44" textAnchor="end" fontFamily={MONO} fontSize="8" fill="#64748B">2.4</text>
        <text x="38" y="124" textAnchor="end" fontFamily={MONO} fontSize="8" fill="#64748B">1.2</text>
        <text x="38" y="178" textAnchor="end" fontFamily={MONO} fontSize="8" fill="#64748B">0</text>
        {/* Loss curve draws in, area fades in */}
        <path d="M46 40 C 100 60, 120 110, 170 130 S 280 158, 330 162 L 330 176 L 46 176 Z" fill="url(#tr-fill)">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.15;0.6;0.9;1" dur="6s" repeatCount="indefinite" />
        </path>
        <path d="M46 40 C 100 60, 120 110, 170 130 S 280 158, 330 162" fill="none" stroke="url(#tr-loss)" strokeWidth="2.5" strokeLinecap="round" className="tpa-draw" />
        {/* Eval accuracy curve (dashed, rising) */}
        <path d="M46 160 C 110 150, 150 90, 210 70 S 300 46, 330 42" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" opacity="0.8" className="tpa-flow-slow" />
        <circle cx="330" cy="42" r="4" fill="#10B981" className="tpa-svg-pulse" />
        <circle cx="330" cy="162" r="4" fill="#0072FF" className="tpa-svg-pulse" />
        <text x="326" y="30" textAnchor="end" fontFamily={MONO} fontSize="9" fill="#10B981">eval 94.2%</text>
        <text x="326" y="152" textAnchor="end" fontFamily={MONO} fontSize="9" fill="#70B8FF">loss 0.31</text>
        <text x="188" y="196" textAnchor="middle" fontFamily={MONO} fontSize="8" fill="#64748B">steps →</text>
        {/* Right rail: pipeline stages */}
        {[
          { y: 24, label: "dataset", sub: "84K samples", on: true },
          { y: 66, label: "fine-tune", sub: "LoRA r=16", on: true },
          { y: 108, label: "evals", sub: "MMLU · domain", on: true },
          { y: 150, label: "deploy", sub: "vLLM · A100", on: false },
        ].map((s, i) => (
          <g key={s.label}>
            {i < 3 && <line x1="380" y1={s.y + 32} x2="380" y2={s.y + 42} stroke="rgba(0,198,255,0.35)" strokeWidth="1.5" className="tpa-flow-slow" />}
            <rect x="356" y={s.y} width="150" height="32" rx="8"
              fill={s.on ? "rgba(0,114,255,0.1)" : "rgba(255,255,255,0.02)"}
              stroke={s.on ? "rgba(0,198,255,0.35)" : "rgba(255,255,255,0.08)"}
              className="tpa-blip" style={{ animationDelay: `${i * 0.5}s` }} />
            <circle cx="370" cy={s.y + 16} r="3" fill={s.on ? "#10B981" : "#334155"} />
            <text x="382" y={s.y + 14} fontFamily={MONO} fontSize="9" fontWeight="600" fill={s.on ? "#E2E8F0" : "#64748B"}>{s.label}</text>
            <text x="382" y={s.y + 26} fontFamily={MONO} fontSize="7.5" fill="#64748B">{s.sub}</text>
          </g>
        ))}
      </svg>
    </Panel>
  );
}

/* ── Java Modernization — legacy code flows through the analyzer into Java 21 ── */
export function JavaVisual() {
  return (
    <Panel label="migrate — 847 files · java 8 → 21">
      <svg viewBox="0 0 520 220" style={{ width: "100%", display: "block" }} role="img" aria-label="Java modernization pipeline">
        <defs>
          <linearGradient id="jv-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C6FF" /><stop offset="100%" stopColor="#0072FF" />
          </linearGradient>
        </defs>
        {/* Legacy panel */}
        <rect x="14" y="30" width="150" height="130" rx="10" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.3)" />
        <text x="26" y="50" fontFamily={MONO} fontSize="9" fontWeight="700" fill="#EF4444">JAVA 8 · legacy</text>
        {[62, 76, 90, 104, 118, 132].map((y, i) => (
          <rect key={y} x="26" y={y} width={[110, 84, 122, 70, 96, 60][i]} height="6" rx="3"
            fill={i === 2 ? "rgba(239,68,68,0.5)" : "rgba(252,165,165,0.25)"} />
        ))}
        <text x="26" y="152" fontFamily={MONO} fontSize="7.5" fill="#7F1D1D">SimpleDateFormat · Vector · finalize()</text>
        {/* Analyzer core */}
        <g className="tpa-svg-float">
          <rect x="212" y="62" width="96" height="66" rx="12" fill="rgba(0,114,255,0.12)" stroke="url(#jv-g)" strokeWidth="2" />
          <text x="260" y="88" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="12" fontWeight="700" fill="white">AST engine</text>
          <text x="260" y="104" textAnchor="middle" fontFamily={MONO} fontSize="7.5" fill="#A8C8F0">parse → rewrite → test</text>
          {/* scanning line inside */}
          <line x1="222" y1="116" x2="298" y2="116" stroke="#00C6FF" strokeWidth="1.5" opacity="0.7" className="tpa-flow-line" />
        </g>
        {/* Flows in / out */}
        <path d="M164 95 H 212" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" className="tpa-flow-line" />
        <path d="M308 95 H 356" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" className="tpa-flow-line" />
        <Packet path="M164 95 H 212" dur="1.8s" color="#FCA5A5" r={2.5} />
        <Packet path="M308 95 H 356" dur="1.8s" begin="0.9s" color="#10B981" r={2.5} />
        {/* Modern panel */}
        <rect x="356" y="30" width="150" height="130" rx="10" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.35)" />
        <text x="368" y="50" fontFamily={MONO} fontSize="9" fontWeight="700" fill="#10B981">JAVA 21 · records + virtual threads</text>
        {[62, 76, 90, 104, 118, 132].map((y, i) => (
          <rect key={y} x="368" y={y} width={[100, 76, 112, 64, 88, 52][i]} height="6" rx="3"
            fill="rgba(110,231,183,0.3)" className="tpa-blip" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
        <text x="368" y="152" fontFamily={MONO} fontSize="7.5" fill="#065F46">DateTimeFormatter · sealed · switch patterns</text>
        {/* Progress + tests footer */}
        <rect x="14" y="178" width="492" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
        <rect x="14" y="178" width="492" height="8" rx="4" fill="url(#jv-g)">
          <animate attributeName="width" values="0;492;492" keyTimes="0;0.7;1" dur="5s" repeatCount="indefinite" />
        </rect>
        <text x="14" y="204" fontFamily={MONO} fontSize="9" fill="#64748B">tests</text>
        <text x="52" y="204" fontFamily={MONO} fontSize="9" fill="#10B981">1,420 passed</text>
        <text x="506" y="204" textAnchor="end" fontFamily={MONO} fontSize="9" fill="#70B8FF">build ✓ java 21</text>
      </svg>
    </Panel>
  );
}

export const SERVICE_VISUALS: Record<string, React.ReactNode> = {
  "web-development": <WebDevVisual />,
  "mobile-apps": <MobileVisual />,
  "cloud-devops": <CloudVisual />,
  "ai-agents": <AgentsVisual />,
  "ai-training": <TrainingVisual />,
  "java-modernization": <JavaVisual />,
};
