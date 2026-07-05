import Icon from "@/components/ui/Icon";
import Link from "next/link";

const FEATURES = [
  "Java 8, 11, 17 → 21 with Spring Boot 3",
  "500K LOC in ~6 weeks, not 6 months",
  "Full test coverage maintained or improved",
  "Runs on-prem — your code never leaves",
];

export default function FeatureSplit() {
  return (
    <section style={{ padding:"100px 32px", background:"white" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
        <div>
          <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#7F00FF" }}>Our Products</div>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:44, fontWeight:700, letterSpacing:"-0.03em", marginTop:12, color:"#0F1A2E", lineHeight:1.05 }}>
            TPA Upgrade —{" "}
            <span style={{ background:"linear-gradient(135deg,#7F00FF,#0072FF)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>
              AI-assisted Java modernization
            </span>
          </h2>
          <p style={{ fontSize:17, color:"#475569", marginTop:20, lineHeight:1.6 }}>
            Legacy Java codebases get stuck on old versions because upgrades are expensive. Our tool uses domain-trained agents to understand your code, refactor it safely, and ship the upgrade — typically 3× faster than manual.
          </p>
          <ul style={{ listStyle:"none", padding:0, marginTop:28, display:"flex", flexDirection:"column", gap:14 }}>
            {FEATURES.map(f => (
              <li key={f} style={{ display:"flex", alignItems:"center", gap:12, fontSize:15, color:"#334155" }}>
                <div style={{ width:22, height:22, borderRadius:"50%", background:"#D1FAE5", display:"flex", alignItems:"center", justifyContent:"center", color:"#065F46", flexShrink:0 }}>
                  <Icon name="check" size={13} stroke={3} />
                </div>
                {f}
              </li>
            ))}
          </ul>
          <div style={{ display:"flex", gap:12, marginTop:32 }}>
            <Link href="/schedule" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"10px 18px", fontSize:14, fontWeight:600,
              background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white",
              borderRadius:10, textDecoration:"none", fontFamily:"'Inter',sans-serif",
              boxShadow:"0 6px 20px -6px rgba(0,114,255,0.5)",
            }}>
              See a live demo <Icon name="arrow" size={16} />
            </Link>
            <Link href="/work" style={{ display:"inline-flex", alignItems:"center", padding:"10px 18px", fontSize:14, fontWeight:600, background:"white", color:"#0F1A2E", border:"1px solid #CBD5E1", borderRadius:10, textDecoration:"none", fontFamily:"'Inter',sans-serif" }}>
              Read the case study
            </Link>
          </div>
        </div>

        {/* Code panel */}
        <div style={{ background:"#0A0E1A", borderRadius:20, padding:24, boxShadow:"0 30px 80px -20px rgba(0,114,255,0.35)", position:"relative", overflow:"hidden", border:"1px solid rgba(0,198,255,0.2)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:14 }}>
            <div style={{ width:10, height:10, borderRadius:"50%", background:"#EF4444" }}/>
            <div style={{ width:10, height:10, borderRadius:"50%", background:"#F59E0B" }}/>
            <div style={{ width:10, height:10, borderRadius:"50%", background:"#10B981" }}/>
            <div style={{ marginLeft:12, fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#4A7FA8" }}>~/legacy-service/OrderService.java</div>
          </div>
          <pre style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, lineHeight:1.7, color:"#A8C8F0", margin:0, whiteSpace:"pre-wrap" }}>
            <span style={{ color:"#64748B" }}>{`// Java 8 → 21 migration preview`}</span>{"\n"}
            <span style={{ color:"#AE75FF" }}>public</span>{" "}<span style={{ color:"#00C6FF" }}>sealed interface</span>{" "}<span style={{ color:"#fff" }}>OrderStatus</span>{" {"}{"\n"}
            {"  "}<span style={{ color:"#00C6FF" }}>record</span>{" "}<span style={{ color:"#fff" }}>Pending</span>{"() "}<span style={{ color:"#AE75FF" }}>implements</span>{" "}<span style={{ color:"#fff" }}>OrderStatus</span>{" {}"}{"\n"}
            {"  "}<span style={{ color:"#00C6FF" }}>record</span>{" "}<span style={{ color:"#fff" }}>Shipped</span>{"(Instant at) "}<span style={{ color:"#AE75FF" }}>implements</span>{" ..."}{"\n"}
            {"}"}{"\n\n"}
            <span style={{ color:"#10B981" }}>{"✓ 347 files migrated"}</span>{"\n"}
            <span style={{ color:"#10B981" }}>{"✓ 1,420 tests passing"}</span>{"\n"}
            <span style={{ color:"#F59E0B" }}>{"⚠ 3 files need review"}</span>
          </pre>
          <div style={{ position:"absolute", bottom:-40, right:-40, width:200, height:200, background:"radial-gradient(circle,rgba(0,198,255,0.2),transparent 60%)", filter:"blur(40px)", pointerEvents:"none" }}/>
        </div>
      </div>
    </section>
  );
}
