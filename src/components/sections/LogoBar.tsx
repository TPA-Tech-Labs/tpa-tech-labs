const CLIENTS = ["STRIPE","ACME INC","NORTHWIND","TRIVALLEY","KAPPA LABS","ORION CO"];

export default function LogoBar() {
  return (
    <section style={{ padding:"48px 32px", borderBottom:"1px solid #E2E8F0", background:"linear-gradient(90deg,#F3FAFF 0%,#FFFFFF 50%,#F8F3FF 100%)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", textAlign:"center" }}>
        <div style={{ fontSize:12, color:"#64748B", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:600, marginBottom:24 }}>
          Trusted by teams shipping real software
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:32, flexWrap:"wrap" }}>
          {CLIENTS.map(c => (
            <div key={c} style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700, color:"#94A3B8", letterSpacing:"-0.01em" }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
