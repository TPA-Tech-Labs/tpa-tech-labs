const STEPS = [
  { n:"01", t:"Discovery call",  d:"30-min free call with an engineer. We scope, sketch, and share written notes." },
  { n:"02", t:"Proposal & plan", d:"Fixed-price or time-and-materials, clear milestones, shared Linear/Jira board." },
  { n:"03", t:"Build in sprints",d:"2-week sprints with Monday standups, Friday demos. You watch the work happen." },
  { n:"04", t:"Ship & support",  d:"Production deploy, observability, and 30 days of free bug-fix support. Then optional retainer." },
];

export default function ProcessTimeline() {
  return (
    <section style={{ padding:"100px 32px", background:"linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#7F00FF" }}>How we work</div>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:44, fontWeight:700, letterSpacing:"-0.03em", marginTop:12, color:"#0F1A2E" }}>
            A simple, honest process.
          </h2>
        </div>

        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", top:40, left:"8%", right:"8%", height:2, background:"linear-gradient(90deg,#00C6FF,#0072FF,#7F00FF)", borderRadius:1, zIndex:0 }}/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20, position:"relative", zIndex:1 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ textAlign:"center" }}>
                <div style={{
                  width:80, height:80, borderRadius:"50%",
                  background:"white", border:"2px solid #0072FF",
                  display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto",
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:24, fontWeight:700, color:"#0072FF",
                  boxShadow:"0 10px 30px -8px rgba(0,114,255,0.3)",
                }}>
                  {s.n}
                </div>
                <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:20, fontWeight:700, marginTop:20, color:"#0F1A2E", letterSpacing:"-0.015em" }}>
                  {s.t}
                </h4>
                <p style={{ fontSize:14, color:"#475569", marginTop:8, lineHeight:1.6, maxWidth:240, marginLeft:"auto", marginRight:"auto" }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
