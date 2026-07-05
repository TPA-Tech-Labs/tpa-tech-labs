import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function CTABand() {
  return (
    <section style={{ padding:"80px 32px", background:"#0A0E1A", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(168,200,240,0.08) 1px, transparent 1px)", backgroundSize:"20px 20px", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", top:"-20%", left:"20%", width:500, height:500, background:"radial-gradient(circle,rgba(0,114,255,0.25),transparent 60%)", filter:"blur(60px)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:"-30%", right:"15%", width:400, height:400, background:"radial-gradient(circle,rgba(0,198,255,0.18),transparent 60%)", filter:"blur(50px)", pointerEvents:"none" }}/>

      <div style={{ maxWidth:1000, margin:"0 auto", textAlign:"center", position:"relative" }}>
        <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:52, fontWeight:800, letterSpacing:"-0.035em", color:"white", margin:0, lineHeight:1.05 }}>
          Let&apos;s build something{" "}
          <span style={{ background:"linear-gradient(135deg,#00C6FF,#0072FF)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>real.</span>
        </h2>
        <p style={{ fontSize:18, color:"#A8C8F0", marginTop:18, maxWidth:620, marginLeft:"auto", marginRight:"auto", lineHeight:1.6 }}>
          30-minute scoping call with an engineer. No pipeline, no slides — we&apos;ll just look at what you need.
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", marginTop:36 }}>
          <Link href="/schedule" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            padding:"14px 28px", fontSize:16, fontWeight:700,
            background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white",
            borderRadius:12, textDecoration:"none", fontFamily:"'Inter',sans-serif",
            boxShadow:"0 10px 40px -8px rgba(0,114,255,0.55)",
          }}>
            Book a call <Icon name="arrow" size={16} />
          </Link>
          <a href="mailto:hello@tpatechlabs.com" style={{
            display:"inline-flex", alignItems:"center",
            padding:"14px 28px", fontSize:16, fontWeight:600,
            background:"rgba(255,255,255,0.06)", color:"white",
            border:"1px solid rgba(168,200,240,0.25)",
            borderRadius:12, textDecoration:"none", fontFamily:"'Inter',sans-serif",
            backdropFilter:"blur(8px)",
          }}>
            hello@tpatechlabs.com
          </a>
        </div>
      </div>
    </section>
  );
}
