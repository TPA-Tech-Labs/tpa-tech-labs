"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
  fontFamily:"'Inter',sans-serif", fontSize:14, padding:"10px 14px",
  border:"1px solid #CBD5E1", borderRadius:10, background:"white", color:"#0F1A2E",
  outline:"none", width:"100%", boxShadow:"inset 0 1px 2px rgba(15,26,46,0.04)",
  transition:"border-color 150ms",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section style={{ padding:"80px 32px", background:"white", minHeight:"70vh" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80 }}>
        {/* Left */}
        <div>
          <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#0072FF" }}>Contact</div>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:52, fontWeight:700, letterSpacing:"-0.03em", marginTop:12, color:"#0F1A2E", lineHeight:1.05 }}>
            Let&apos;s talk.
          </h1>
          <p style={{ fontSize:17, color:"#475569", marginTop:20, lineHeight:1.6 }}>
            Tell us a bit about your project. An engineer (not a salesperson) will reply within one business day.
          </p>
          <div style={{ marginTop:40, display:"flex", flexDirection:"column", gap:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:44, height:44, borderRadius:12, background:"#EBF5FF", display:"flex", alignItems:"center", justifyContent:"center", color:"#0072FF", flexShrink:0 }}>
                <Icon name="mail" size={20} />
              </div>
              <div>
                <div style={{ fontSize:13, color:"#64748B" }}>Email</div>
                <a href="mailto:hello@tpatechlabs.com" style={{ fontSize:15, fontWeight:600, color:"#0F1A2E", fontFamily:"'JetBrains Mono',monospace", textDecoration:"none" }}>hello@tpatechlabs.com</a>
              </div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:44, height:44, borderRadius:12, background:"#F3EBFF", display:"flex", alignItems:"center", justifyContent:"center", color:"#7F00FF", flexShrink:0 }}>
                <Icon name="calendar" size={20} />
              </div>
              <div>
                <div style={{ fontSize:13, color:"#64748B" }}>Schedule</div>
                <Link href="/schedule" style={{ fontSize:15, fontWeight:600, color:"#0F1A2E", textDecoration:"none" }}>Book a 30-min call →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div style={{ background:"#F8FAFC", borderRadius:20, padding:40, border:"1px solid #E2E8F0", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", gap:16 }}>
            <div style={{ width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg,#00C6FF,#0072FF)", display:"flex", alignItems:"center", justifyContent:"center", color:"white" }}>
              <Icon name="check" size={28} stroke={3} />
            </div>
            <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:24, fontWeight:700, color:"#0F1A2E", margin:0 }}>Message sent!</h3>
            <p style={{ fontSize:15, color:"#475569", margin:0 }}>We&apos;ll reply within one business day.</p>
          </div>
        ) : (
          <form style={{ background:"#F8FAFC", borderRadius:20, padding:32, border:"1px solid #E2E8F0" }} onSubmit={handleSubmit}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
              <div><label style={{ fontSize:12, fontWeight:500, color:"#334155", display:"block", marginBottom:6 }}>Name</label><input type="text" required placeholder="Your name" style={inputStyle}/></div>
              <div><label style={{ fontSize:12, fontWeight:500, color:"#334155", display:"block", marginBottom:6 }}>Company</label><input type="text" placeholder="Acme Inc" style={inputStyle}/></div>
            </div>
            <div style={{ marginBottom:14 }}><label style={{ fontSize:12, fontWeight:500, color:"#334155", display:"block", marginBottom:6 }}>Email</label><input type="email" required placeholder="you@company.com" style={inputStyle}/></div>
            <div style={{ marginBottom:14 }}>
              <label style={{ fontSize:12, fontWeight:500, color:"#334155", display:"block", marginBottom:6 }}>Service</label>
              <select style={{ ...inputStyle, cursor:"pointer" }}>
                <option>Web Development</option>
                <option>Mobile Apps</option>
                <option>Cloud &amp; DevOps</option>
                <option>AI Agents</option>
                <option>Model Training</option>
                <option>Java Modernization</option>
              </select>
            </div>
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:12, fontWeight:500, color:"#334155", display:"block", marginBottom:6 }}>Project brief</label>
              <textarea rows={4} required placeholder="Tell us about your project…" style={{ ...inputStyle, resize:"none" }}/>
            </div>
            <button type="submit" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, width:"100%", padding:"14px 24px", fontSize:16, fontWeight:600, background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white", border:"none", borderRadius:12, cursor:"pointer", fontFamily:"'Inter',sans-serif", boxShadow:"0 6px 20px -6px rgba(0,114,255,0.5)" }}>
              Send message <Icon name="arrow" size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
