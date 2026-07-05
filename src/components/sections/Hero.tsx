import Link from "next/link";
import Icon from "@/components/ui/Icon";
import TerminalHero from "./TerminalHero";

export default function Hero() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg,#0A0E1A 0%,#0A2E6B 45%,#0A0E1A 100%)",
      color: "white", paddingTop: 100, paddingBottom: 120,
    }}>
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(168,200,240,0.12) 1px, transparent 1px)", backgroundSize: "16px 16px", pointerEvents: "none" }} />
      {/* Glows */}
      <div style={{ position: "absolute", top: "20%", right: "-8%", width: 500, height: 500, background: "radial-gradient(circle,rgba(0,198,255,0.25),transparent 60%)", filter: "blur(40px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400, background: "radial-gradient(circle,rgba(127,0,255,0.2),transparent 60%)", filter: "blur(40px)", pointerEvents: "none" }} />

      <div className="hero-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          {/* Pill */}
          <div className="hero-pill" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "6px 14px 6px 6px",
            background: "rgba(0,198,255,0.08)", border: "1px solid rgba(0,198,255,0.25)",
            borderRadius: 999, fontSize: 12, color: "#A8C8F0", marginBottom: 28,
          }}>
            <span style={{ padding: "2px 8px", background: "linear-gradient(135deg,#00C6FF,#0072FF)", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>New</span>
            Java 8 → 21 migrations with AI agents
          </div>

          <h1 className="hero-title" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 72, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1, margin: 0 }}>
            Build smarter.<br />
            <span style={{ background: "linear-gradient(135deg,#00C6FF 0%,#0072FF 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              Ship faster.
            </span><br />
            Scale confidently.
          </h1>

          <p className="hero-text" style={{ fontSize: 18, color: "#A8C8F0", lineHeight: 1.6, marginTop: 28, maxWidth: 560 }}>
            We&apos;re an engineering studio building custom software, AI agents, and cloud platforms for small businesses and technical teams. Engineers you can actually talk to.
          </p>

          <div className="hero-cta" style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <Link href="/schedule" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 24px", fontSize: 16, fontWeight: 700,
              background: "linear-gradient(135deg,#00C6FF,#0072FF)", color: "white",
              borderRadius: 12, textDecoration: "none", fontFamily: "'Inter',sans-serif",
              boxShadow: "0 10px 40px -8px rgba(0,114,255,0.55)",
            }}>
              Book a 30-min call <Icon name="arrow" size={16} />
            </Link>
            <Link href="/products" className="hero-secondary-btn" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 24px", fontSize: 16, fontWeight: 600,
              background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 12, textDecoration: "none", fontFamily: "'Inter',sans-serif",
            }}>
              <Icon name="play" size={16} fill="currentColor" stroke={0} /> Watch a demo
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ display: "flex", gap: 32, marginTop: 48, paddingTop: 28, borderTop: "1px solid rgba(168,200,240,0.15)" }}>
            {[["40+", "Projects shipped"], ["12", "Engineers"], ["6 wks", "Avg. migration"]].map(([val, lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, background: "linear-gradient(135deg,#00C6FF,#0072FF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  {val}
                </div>
                <div style={{ fontSize: 12, color: "#A8C8F0", letterSpacing: "0.05em", marginTop: 4 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-terminal">
          <TerminalHero />
        </div>
      </div>
    </section>
  );
}
