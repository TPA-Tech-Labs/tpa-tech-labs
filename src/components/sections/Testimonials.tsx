const ITEMS = [
  { q:"They migrated our Java 8 monolith to 21 in 5 weeks. Our team spent two years trying.", a:"Priya Raman",  r:"VP Engineering, Trivally", initials:"PR", rating:5 },
  { q:"The AI agent they built for our support team handles 40% of tickets end-to-end. It just works.", a:"Marcus Heinz",  r:"CTO, Orion Co",          initials:"MH", rating:5 },
  { q:"Engineers who actually talk to you. The PR reviews alone were worth the engagement.",  a:"Sofia Alvarez", r:"Founder, Kappa Labs",    initials:"SA", rating:5 },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section style={{ padding:"100px 32px", background:"linear-gradient(160deg,#EAF4FF 0%,#F8F0FF 55%,#E9FAFF 100%)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#0072FF" }}>Client work</div>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:44, fontWeight:700, letterSpacing:"-0.03em", marginTop:12, color:"#0F1A2E" }}>
            Teams who trusted us to ship.
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {ITEMS.map((t) => (
            <div key={t.a} style={{ background:"white", borderRadius:16, padding:28, border:"1px solid #E2E8F0", boxShadow:"0 1px 3px rgba(15,26,46,0.04)" }}>
              <div style={{ display:"flex", gap:3, marginBottom:18 }}>
                {Array(t.rating).fill(0).map((_,i) => <StarIcon key={i} />)}
              </div>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:18, fontWeight:500, color:"#0F1A2E", lineHeight:1.45, letterSpacing:"-0.01em" }}>
                &ldquo;{t.q}&rdquo;
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:24, paddingTop:20, borderTop:"1px solid #E2E8F0" }}>
                <div style={{
                  width:40, height:40, borderRadius:"50%",
                  background:"linear-gradient(135deg,#00C6FF,#0072FF)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color:"white", fontWeight:700, fontSize:14, flexShrink:0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:600, color:"#0F1A2E" }}>{t.a}</div>
                  <div style={{ fontSize:12, color:"#64748B" }}>{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
