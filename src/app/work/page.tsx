import type { Metadata } from "next";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Our Work — Case Studies",
  description:
    "40+ projects shipped: Java 8 to 21 migration in 5 weeks, AI agents automating 40% of support tickets, developer platforms from zero to production in 12 weeks.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work | TPA Tech Labs",
    description:
      "Case studies: Java modernization, production AI agents, and full-stack platforms.",
    url: "/work",
  },
};

const CASE_STUDIES = [
  { company:"Trivally", industry:"SaaS", tag:"Java Modernization", headline:"Java 8 → 21 in 5 weeks",        body:"A 700K LOC billing engine was blocking the company from Java 21 features. We migrated the entire codebase, maintained 100% test coverage, and shipped to production on schedule.",  metric:"5 wks", metricLabel:"vs. 2-year manual attempt" },
  { company:"Orion Co", industry:"Fintech", tag:"AI Agents",       headline:"40% of support tickets automated", body:"We built a domain-trained agent that reads support tickets, queries the internal knowledge base, and resolves them end-to-end — no human handoff for 40% of volume.",           metric:"40%",   metricLabel:"tickets handled autonomously" },
  { company:"Kappa Labs", industry:"Dev Tools", tag:"Web Dev",     headline:"0→1 developer platform in 12 weeks", body:"Full-stack developer tooling platform: custom auth, GitHub integration, CI pipeline, and real-time collaboration. Shipped to 500 beta users on day one.",                    metric:"12 wks", metricLabel:"zero to production" },
];

export default function WorkPage() {
  return (
    <>
      <section style={{ padding:"80px 32px 56px", background:"linear-gradient(180deg,#F8FAFC 0%,#fff 100%)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#0072FF" }}>Our work</div>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:56, fontWeight:700, letterSpacing:"-0.035em", marginTop:12, color:"#0F1A2E" }}>
            Built by engineers.<br/>Trusted by teams.
          </h1>
          <p style={{ fontSize:18, color:"#475569", maxWidth:640, marginTop:16, lineHeight:1.6 }}>
            40+ projects shipped. Here are a few that stood out.
          </p>
        </div>
      </section>

      <section style={{ padding:"0 32px 80px", background:"white" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"flex", flexDirection:"column", gap:24 }}>
          {CASE_STUDIES.map(c => (
            <div key={c.company} style={{ display:"grid", gridTemplateColumns:"1fr 2fr 1fr", gap:40, padding:36, border:"1px solid #E2E8F0", borderRadius:20, alignItems:"center", boxShadow:"0 1px 3px rgba(15,26,46,0.04)", background:"white", transition:"all 200ms" }}>
              <div>
                <span style={{ fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"3px 8px", borderRadius:999, background:"#EBF5FF", color:"#0048A8" }}>{c.tag}</span>
                <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:28, fontWeight:700, color:"#0F1A2E", margin:"12px 0 4px", letterSpacing:"-0.02em" }}>{c.company}</h3>
                <div style={{ fontSize:13, color:"#64748B" }}>{c.industry}</div>
              </div>
              <div>
                <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:20, fontWeight:700, color:"#0F1A2E", margin:"0 0 10px" }}>{c.headline}</h4>
                <p style={{ fontSize:15, color:"#475569", lineHeight:1.65, margin:0 }}>{c.body}</p>
              </div>
              <div style={{ textAlign:"center", padding:24, background:"linear-gradient(135deg,#0A0E1A,#0D1528)", borderRadius:16, position:"relative", overflow:"hidden" }}>
                <svg viewBox="0 0 200 80" preserveAspectRatio="none" style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.35 }} aria-hidden>
                  <path d="M0 66 C 30 62, 45 54, 70 50 S 120 34, 150 24 S 185 12, 200 8" fill="none" stroke="#00C6FF" strokeWidth="2" className="tpa-draw" />
                  <path d="M0 74 C 40 72, 70 64, 100 58 S 160 44, 200 30" fill="none" stroke="#7F00FF" strokeWidth="1.5" strokeDasharray="4 6" className="tpa-flow-slow" opacity="0.7" />
                </svg>
                <div style={{ position:"relative" }}>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:40, fontWeight:800, background:"linear-gradient(135deg,#00C6FF,#0072FF)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>{c.metric}</div>
                  <div style={{ fontSize:12, color:"#A8C8F0", marginTop:6, lineHeight:1.4 }}>{c.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section style={{ padding:"80px 32px", background:"#F8FAFC", textAlign:"center" }}>
        <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:36, fontWeight:700, color:"#0F1A2E", margin:0 }}>Ready to be next?</h2>
        <p style={{ fontSize:16, color:"#475569", marginTop:12, marginBottom:28 }}>Free 30-minute call. No pitch, just scoping.</p>
        <Link href="/schedule" style={{
          display:"inline-flex", alignItems:"center", gap:8,
          padding:"14px 28px", fontSize:16, fontWeight:700,
          background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white",
          borderRadius:12, textDecoration:"none", fontFamily:"'Inter',sans-serif",
          boxShadow:"0 10px 40px -8px rgba(0,114,255,0.4)",
        }}>
          Book a call <Icon name="arrow" size={16} />
        </Link>
      </section>
    </>
  );
}
