import type { Metadata } from "next";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TPA Tech Labs is an engineering-first software studio. No account managers — the person you talk to writes the code. Fixed-scope honesty, battle-tested tech, shipped features.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | TPA Tech Labs",
    description:
      "An engineering-first software studio. The person you talk to writes the code.",
    url: "/about",
  },
};

const TEAM_VALUES = [
  { icon:"code",    title:"Engineers first",    desc:"We don't have account managers. The person you talk to writes code. Every engagement starts with a technical conversation." },
  { icon:"shield",  title:"Fixed scope honesty", desc:"If something will take 6 weeks, we say 6 weeks — not 3 weeks and then two \"change requests\"." },
  { icon:"sparkle", title:"Ship or it didn't happen", desc:"We measure success in deployed features, not story points closed. No demo-only deliverables." },
  { icon:"git",     title:"Boring tech stack",   desc:"We reach for battle-tested tools. Not because we can't learn new ones, but because we're accountable for what we ship." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:"80px 32px", background:"linear-gradient(135deg,#0A0E1A 0%,#0A2E6B 60%,#0A0E1A 100%)", color:"white", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(168,200,240,0.1) 1px, transparent 1px)", backgroundSize:"16px 16px", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative" }}>
          <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#00C6FF" }}>About</div>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:64, fontWeight:800, letterSpacing:"-0.035em", marginTop:12, lineHeight:1, maxWidth:800 }}>
            We&apos;re an engineering studio,<br/>not an agency.
          </h1>
          <p style={{ fontSize:18, color:"#A8C8F0", marginTop:24, maxWidth:600, lineHeight:1.6 }}>
            TPA Tech Labs is a small team of ~12 engineers who build custom software, AI agents, and cloud platforms for companies that need real engineering — not PowerPoint deliverables.
          </p>
          <div style={{ display:"flex", gap:48, marginTop:56, paddingTop:40, borderTop:"1px solid rgba(168,200,240,0.15)" }}>
            {[["2020","Founded"],["40+","Projects shipped"],["12","Engineers"],["3","Countries"]].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:36, fontWeight:800, background:"linear-gradient(135deg,#00C6FF,#0072FF)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>{v}</div>
                <div style={{ fontSize:13, color:"#A8C8F0", marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding:"100px 32px", background:"linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#7F00FF" }}>How we think</div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:44, fontWeight:700, letterSpacing:"-0.03em", marginTop:12, color:"#0F1A2E" }}>
              Four things we actually believe.
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:24 }}>
            {TEAM_VALUES.map(v => (
              <div key={v.title} style={{ padding:32, border:"1px solid #E2E8F0", borderRadius:16, background:"linear-gradient(145deg,#F4F9FF 0%,#FAF4FF 100%)" }}>
                <div style={{ width:48, height:48, borderRadius:12, background:"linear-gradient(135deg,#EBF5FF,#D6EBFF)", display:"flex", alignItems:"center", justifyContent:"center", color:"#0072FF", marginBottom:20 }}>
                  <Icon name={v.icon as Parameters<typeof Icon>[0]["name"]} size={22} />
                </div>
                <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700, color:"#0F1A2E", margin:"0 0 12px", letterSpacing:"-0.015em" }}>{v.title}</h3>
                <p style={{ fontSize:15, color:"#475569", lineHeight:1.6, margin:0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section style={{ padding:"80px 32px", background:"linear-gradient(160deg,#EAF4FF 0%,#F8F0FF 55%,#E9FAFF 100%)", textAlign:"center" }}>
        <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:36, fontWeight:700, color:"#0F1A2E", margin:0 }}>Want to work with us?</h2>
        <p style={{ fontSize:16, color:"#475569", marginTop:12, marginBottom:28 }}>Let&apos;s start with a conversation.</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
          <Link href="/schedule" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", fontSize:16, fontWeight:700, background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white", borderRadius:12, textDecoration:"none", fontFamily:"'Inter',sans-serif", boxShadow:"0 10px 40px -8px rgba(0,114,255,0.4)" }}>
            Book a call <Icon name="arrow" size={16} />
          </Link>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", fontSize:16, fontWeight:600, background:"white", color:"#0F1A2E", border:"1px solid #CBD5E1", borderRadius:12, textDecoration:"none", fontFamily:"'Inter',sans-serif" }}>
            Send a message
          </Link>
        </div>
      </section>
    </>
  );
}
