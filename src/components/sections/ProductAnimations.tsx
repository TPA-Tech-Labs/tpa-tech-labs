"use client";
import { useEffect, useState } from "react";

/* ──────────────────────────────────────────
   TPA Upgrade — animated migration progress
   ────────────────────────────────────────── */
export function UpgradeAnimation() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(id); setDone(true); return 100; }
        return p + 1.4;
      });
    }, 28);
    return () => clearInterval(id);
  }, []);

  // Reset & loop
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => { setProgress(0); setDone(false); }, 2000);
    return () => clearTimeout(t);
  }, [done]);

  const pct = Math.min(100, Math.round(progress));
  const files = Math.round((pct / 100) * 847);

  return (
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#A8C8F0" }}>
      <div style={{ marginBottom: 6, display: "flex", justifyContent: "space-between", color: "#64748B", fontSize: 10 }}>
        <span>Migrating files</span>
        <span style={{ color: pct === 100 ? "#10B981" : "#0072FF" }}>{files} / 847</span>
      </div>
      {/* Bar */}
      <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden", marginBottom: 10 }}>
        <div style={{
          height: "100%", borderRadius: 99,
          background: pct === 100 ? "#10B981" : "linear-gradient(90deg,#00C6FF,#0072FF)",
          width: `${pct}%`, transition: "width 0.1s linear",
          boxShadow: pct < 100 ? "0 0 8px rgba(0,198,255,0.6)" : "none",
        }} />
      </div>
      {/* Mini file list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {["OrderService.java", "PaymentProcessor.java", "UserRepository.java"].map((f, i) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 6, opacity: pct > i * 34 ? 1 : 0.25, transition: "opacity 0.3s" }}>
            <span style={{ color: pct > (i + 1) * 34 ? "#10B981" : "#0072FF", fontSize: 10 }}>
              {pct > (i + 1) * 34 ? "✓" : "→"}
            </span>
            <span style={{ color: "#64748B", fontSize: 10 }}>{f}</span>
          </div>
        ))}
      </div>
      {pct === 100 && (
        <div style={{ marginTop: 8, fontSize: 10, color: "#10B981", animation: "fadeUp 0.4s ease" }}>
          ✓ Build successful — Java 21
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────
   Scheduler — animated calendar + meeting slots
   ────────────────────────────────────────── */
export function SchedulerAnimation() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 8), 900);
    return () => clearInterval(id);
  }, []);

  const slots = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:00"];
  const statuses = ["booked", "free", "free", "booked", "free", "free"];

  return (
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 10, color: "#64748B" }}>
        <span>April 2026</span>
        <span style={{ color: "#00C6FF" }}>3 meetings today</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
        {slots.map((s, i) => {
          const isActive = tick % slots.length === i;
          const booked = statuses[i] === "booked";
          return (
            <div key={s} style={{
              padding: "4px 8px", borderRadius: 6, fontSize: 10,
              border: `1px solid ${booked ? "rgba(0,114,255,0.4)" : isActive ? "rgba(0,198,255,0.4)" : "rgba(255,255,255,0.06)"}`,
              background: booked ? "rgba(0,114,255,0.12)" : isActive ? "rgba(0,198,255,0.08)" : "transparent",
              color: booked ? "#70B8FF" : isActive ? "#00C6FF" : "#334155",
              transition: "all 0.3s",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span>{s}</span>
              {booked && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#0072FF", display: "inline-block" }} />}
              {isActive && !booked && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00C6FF", animation: "ping 1s infinite", display: "inline-block" }} />}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 8, padding: "4px 8px", borderRadius: 6, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", fontSize: 10, color: "#10B981" }}>
        ↑ 23% fewer scheduling conflicts
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Agent Studio — animated conversation flow
   ────────────────────────────────────────── */
const MESSAGES = [
  { from: "user", text: "Summarise open P0 tickets", delay: 0 },
  { from: "agent", text: "Fetching from Linear…", delay: 900 },
  { from: "agent", text: "Found 3 P0s. Drafting summary.", delay: 1800 },
  { from: "agent", text: "✓ Posted to #engineering-alerts", delay: 2700 },
];

export function AgentAnimation() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    setVisible(0);
    let t: ReturnType<typeof setTimeout>;
    MESSAGES.forEach((m, i) => {
      t = setTimeout(() => setVisible(i + 1), m.delay + 300);
    });
    const reset = setTimeout(() => setVisible(0), 4200);
    return () => { clearTimeout(t); clearTimeout(reset); };
  }, []);

  // Loop
  const [loop, setLoop] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setLoop(l => l + 1), 5000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => { setVisible(0); }, [loop]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "'Inter',sans-serif", fontSize: 11 }}>
      {MESSAGES.slice(0, visible).map((m, i) => (
        <div key={i} style={{
          display: "flex", gap: 6, alignItems: "flex-start",
          justifyContent: m.from === "user" ? "flex-end" : "flex-start",
          animation: "slideIn 0.25s ease",
        }}>
          {m.from === "agent" && (
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "linear-gradient(135deg,#00C6FF,#0072FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "white", flexShrink: 0, marginTop: 2 }}>A</div>
          )}
          <div style={{
            padding: "5px 10px", borderRadius: 10,
            maxWidth: "80%",
            background: m.from === "user" ? "rgba(0,114,255,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${m.from === "user" ? "rgba(0,114,255,0.3)" : "rgba(255,255,255,0.08)"}`,
            color: m.from === "user" ? "#70B8FF" : "#A8C8F0",
            fontSize: 10, lineHeight: 1.4,
          }}>
            {m.text}
          </div>
          {m.from === "user" && (
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(127,0,255,0.3)", border: "1px solid rgba(127,0,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#AE75FF", flexShrink: 0, marginTop: 2 }}>U</div>
          )}
        </div>
      ))}
      {visible > 0 && visible < MESSAGES.length && (
        <div style={{ display: "flex", gap: 4, padding: "4px 10px", alignItems: "center" }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "#0072FF", animation: `ping 1.2s ${i * 0.2}s ease-in-out infinite` }} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────
   Observatory — animated metrics / anomaly
   ────────────────────────────────────────── */
const METRICS = [
  { label: "p99 latency", val: 142, unit: "ms", max: 400, color: "#00C6FF" },
  { label: "error rate", val: 0.4, unit: "%", max: 5, color: "#10B981" },
  { label: "req/s", val: 3240, unit: "", max: 5000, color: "#AE75FF" },
];

export function ObservatoryAnimation() {
  const [tick, setTick] = useState(0);
  const [spike, setSpike] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTick(t => {
        const next = t + 1;
        if (next % 12 === 0) setSpike(true);
        else if (next % 12 === 2) setSpike(false);
        return next;
      });
    }, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ color: "#64748B" }}>Live metrics</span>
        <span style={{ color: "#10B981", animation: "chartPulse 2s ease-in-out infinite" }}>● Live</span>
      </div>
      {METRICS.map((m, i) => {
        const pct = Math.min(100, ((spike && i === 0 ? m.val * 2.8 : m.val) / m.max) * 100);
        const isSpike = spike && i === 0;
        return (
          <div key={m.label} style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3, color: "#64748B" }}>
              <span>{m.label}</span>
              <span style={{ color: isSpike ? "#EF4444" : m.color, transition: "color 0.3s" }}>
                {isSpike ? (m.val * 2.8).toFixed(0) : m.val}{m.unit}
                {isSpike && <span style={{ color: "#EF4444", marginLeft: 4 }}>↑</span>}
              </span>
            </div>
            <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
              <div style={{
                height: "100%", borderRadius: 99,
                background: isSpike ? "#EF4444" : m.color,
                width: `${pct}%`,
                transition: "width 0.4s ease, background 0.3s",
                boxShadow: isSpike ? "0 0 8px rgba(239,68,68,0.6)" : "none",
              }} />
            </div>
          </div>
        );
      })}
      {spike && (
        <div style={{ marginTop: 4, padding: "4px 8px", borderRadius: 6, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#EF4444", fontSize: 9, animation: "fadeUp 0.3s ease" }}>
          ⚡ Anomaly detected — p99 spike · investigating
        </div>
      )}
      {!spike && (
        <div style={{ marginTop: 4, padding: "4px 8px", borderRadius: 6, background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", color: "#10B981", fontSize: 9 }}>
          ✓ All systems nominal
        </div>
      )}
    </div>
  );
}


/* ══════════════════════════════════════════════════════════════════════════
   PRODUCT ARCHITECTURE DIAGRAMS
   ══════════════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────
   TPA Upgrade — Architecture Diagram
   ────────────────────────────────────────── */
export function UpgradeDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, fontFamily: "'Inter',sans-serif" }}>
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, color: "white", margin: 0 }}>
          Migration Pipeline
        </h4>
        <p style={{ fontSize: 13, color: "#64748B", marginTop: 8 }}>
          Automated Java modernization workflow
        </p>
      </div>

      {/* Flow diagram */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        {/* Step 1 */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, margin: "0 auto", borderRadius: 16, background: "rgba(0,198,255,0.1)", border: "2px solid rgba(0,198,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 32 }}>📁</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>Legacy Code</div>
          <div style={{ fontSize: 11, color: "#64748B" }}>Java 8 codebase</div>
        </div>

        {/* Arrow */}
        <div style={{ color: "#00C6FF", fontSize: 24 }}>→</div>

        {/* Step 2 */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, margin: "0 auto", borderRadius: 16, background: "rgba(0,114,255,0.1)", border: "2px solid rgba(0,114,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 32 }}>🤖</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>AI Analysis</div>
          <div style={{ fontSize: 11, color: "#64748B" }}>Pattern detection</div>
        </div>

        {/* Arrow */}
        <div style={{ color: "#00C6FF", fontSize: 24 }}>→</div>

        {/* Step 3 */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, margin: "0 auto", borderRadius: 16, background: "rgba(127,0,255,0.1)", border: "2px solid rgba(127,0,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 32 }}>⚡</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>Refactoring</div>
          <div style={{ fontSize: 11, color: "#64748B" }}>Auto-migration</div>
        </div>

        {/* Arrow */}
        <div style={{ color: "#00C6FF", fontSize: 24 }}>→</div>

        {/* Step 4 */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, margin: "0 auto", borderRadius: 16, background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 32 }}>✓</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>Modern Code</div>
          <div style={{ fontSize: 11, color: "#64748B" }}>Java 21 ready</div>
        </div>
      </div>

      {/* Features list */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 16 }}>
        {[
          { icon: "🔍", label: "AST Analysis" },
          { icon: "🧪", label: "Test Generation" },
          { icon: "📦", label: "Dependency Updates" },
        ].map((item, i) => (
          <div key={i} style={{
            padding: 16,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontSize: 12, color: "#A8C8F0", fontWeight: 600 }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Scheduler — Architecture Diagram
   ────────────────────────────────────────── */
export function SchedulerDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, fontFamily: "'Inter',sans-serif" }}>
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, color: "white", margin: 0 }}>
          Intelligent Scheduling Engine
        </h4>
        <p style={{ fontSize: 13, color: "#64748B", marginTop: 8 }}>
          AI-powered calendar optimization
        </p>
      </div>

      {/* Central hub diagram */}
      <div style={{ position: "relative", height: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Center node */}
        <div style={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#00C6FF,#0072FF)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 40px rgba(0,198,255,0.4)",
          zIndex: 10,
        }}>
          <span style={{ fontSize: 32, marginBottom: 4 }}>🧠</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "white" }}>AI Engine</span>
        </div>

        {/* Surrounding nodes */}
        {[
          { icon: "📅", label: "Calendars", angle: 0, color: "#00C6FF" },
          { icon: "🌍", label: "Timezones", angle: 72, color: "#0072FF" },
          { icon: "👥", label: "Teams", angle: 144, color: "#7F00FF" },
          { icon: "⏰", label: "Preferences", angle: 216, color: "#AE75FF" },
          { icon: "📊", label: "Analytics", angle: 288, color: "#10B981" },
        ].map((node, i) => {
          const radius = 110;
          const x = Math.cos((node.angle - 90) * Math.PI / 180) * radius;
          const y = Math.sin((node.angle - 90) * Math.PI / 180) * radius;

          return (
            <div key={i}>
              {/* Connection line */}
              <svg style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 240,
                height: 240,
                marginLeft: -120,
                marginTop: -120,
                pointerEvents: "none",
              }}>
                <line
                  x1="120"
                  y1="120"
                  x2={120 + x}
                  y2={120 + y}
                  stroke={node.color}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
              </svg>

              {/* Node */}
              <div style={{
                position: "absolute",
                width: 70,
                height: 70,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: `2px solid ${node.color}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}>
                <span style={{ fontSize: 20, marginBottom: 2 }}>{node.icon}</span>
                <span style={{ fontSize: 9, color: "#A8C8F0", fontWeight: 600 }}>{node.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        {[
          { value: "23%", label: "Fewer conflicts" },
          { value: "8hrs", label: "Saved per week" },
          { value: "100%", label: "Team satisfaction" },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: 16,
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 12,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#10B981", fontFamily: "'Space Grotesk',sans-serif", marginBottom: 4 }}>{stat.value}</div>
            <div style={{ fontSize: 11, color: "#64748B" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Agent Studio — Architecture Diagram
   ────────────────────────────────────────── */
export function AgentStudioDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, fontFamily: "'Inter',sans-serif" }}>
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, color: "white", margin: 0 }}>
          Agent Development Lifecycle
        </h4>
        <p style={{ fontSize: 13, color: "#64748B", marginTop: 8 }}>
          From design to production in minutes
        </p>
      </div>

      {/* Workflow stages */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {[
          { stage: "Design", icon: "✏️", desc: "Visual workflow builder", color: "#00C6FF" },
          { stage: "Test", icon: "🧪", desc: "Built-in evaluation suite", color: "#0072FF" },
          { stage: "Deploy", icon: "🚀", desc: "One-click deployment", color: "#7F00FF" },
          { stage: "Monitor", icon: "📊", desc: "Real-time analytics", color: "#AE75FF" },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Step number */}
            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: step.color,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              flexShrink: 0,
            }}>
              {i + 1}
            </div>

            {/* Step content */}
            <div style={{
              flex: 1,
              padding: 20,
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${step.color}40`,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}>
              <span style={{ fontSize: 28 }}>{step.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 4 }}>{step.stage}</div>
                <div style={{ fontSize: 12, color: "#64748B" }}>{step.desc}</div>
              </div>
              <div style={{
                padding: "4px 12px",
                background: `${step.color}20`,
                border: `1px solid ${step.color}40`,
                borderRadius: 6,
                fontSize: 10,
                fontWeight: 700,
                color: step.color,
              }}>
                {i < 3 ? "→" : "✓"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Model support */}
      <div style={{
        padding: 20,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
      }}>
        <div style={{ fontSize: 12, color: "#64748B", marginBottom: 12, fontWeight: 600 }}>SUPPORTED MODELS</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["GPT-4", "Claude", "Gemini", "Llama", "Custom"].map((model, i) => (
            <span key={i} style={{
              padding: "6px 12px",
              background: "rgba(0,198,255,0.1)",
              border: "1px solid rgba(0,198,255,0.2)",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 600,
              color: "#00C6FF",
              fontFamily: "'JetBrains Mono',monospace",
            }}>
              {model}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Observatory — Architecture Diagram
   ────────────────────────────────────────── */
export function ObservatoryDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, fontFamily: "'Inter',sans-serif" }}>
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, color: "white", margin: 0 }}>
          AI-Powered Observability Stack
        </h4>
        <p style={{ fontSize: 13, color: "#64748B", marginTop: 8 }}>
          From data collection to intelligent insights
        </p>
      </div>

      {/* Layered architecture */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Layer 1: Data Sources */}
        <div>
          <div style={{ fontSize: 11, color: "#64748B", marginBottom: 8, fontWeight: 700, letterSpacing: "0.1em" }}>DATA SOURCES</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {[
              { icon: "📊", label: "Metrics" },
              { icon: "📝", label: "Logs" },
              { icon: "🔗", label: "Traces" },
              { icon: "⚠️", label: "Events" },
            ].map((source, i) => (
              <div key={i} style={{
                padding: 16,
                background: "rgba(100,116,139,0.1)",
                border: "1px solid rgba(100,116,139,0.2)",
                borderRadius: 10,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{source.icon}</div>
                <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600 }}>{source.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div style={{ textAlign: "center", color: "#00C6FF", fontSize: 20 }}>↓</div>

        {/* Layer 2: AI Processing */}
        <div>
          <div style={{ fontSize: 11, color: "#64748B", marginBottom: 8, fontWeight: 700, letterSpacing: "0.1em" }}>AI PROCESSING</div>
          <div style={{
            padding: 24,
            background: "linear-gradient(135deg,rgba(0,198,255,0.1),rgba(0,114,255,0.1))",
            border: "2px solid rgba(0,198,255,0.3)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
            {[
              { icon: "🤖", label: "ML Models" },
              { icon: "🔍", label: "Anomaly Detection" },
              { icon: "🧠", label: "Root Cause AI" },
            ].map((proc, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{proc.icon}</div>
                <div style={{ fontSize: 12, color: "#00C6FF", fontWeight: 700 }}>{proc.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div style={{ textAlign: "center", color: "#00C6FF", fontSize: 20 }}>↓</div>

        {/* Layer 3: Insights */}
        <div>
          <div style={{ fontSize: 11, color: "#64748B", marginBottom: 8, fontWeight: 700, letterSpacing: "0.1em" }}>INTELLIGENT INSIGHTS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            {[
              { icon: "⚡", label: "Instant Alerts", color: "#EF4444" },
              { icon: "🎯", label: "Predictions", color: "#F59E0B" },
              { icon: "💡", label: "Recommendations", color: "#10B981" },
            ].map((insight, i) => (
              <div key={i} style={{
                padding: 16,
                background: `${insight.color}15`,
                border: `1px solid ${insight.color}40`,
                borderRadius: 10,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{insight.icon}</div>
                <div style={{ fontSize: 11, color: insight.color, fontWeight: 700 }}>{insight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance metrics */}
      <div style={{
        padding: 20,
        background: "rgba(16,185,129,0.08)",
        border: "1px solid rgba(16,185,129,0.2)",
        borderRadius: 12,
        display: "flex",
        justifyContent: "space-around",
      }}>
        {[
          { value: "12min", label: "Faster detection" },
          { value: "67%", label: "Reduced MTTR" },
          { value: "40%", label: "Auto-resolved" },
        ].map((metric, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#10B981", fontFamily: "'Space Grotesk',sans-serif", marginBottom: 4 }}>{metric.value}</div>
            <div style={{ fontSize: 11, color: "#64748B" }}>{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
