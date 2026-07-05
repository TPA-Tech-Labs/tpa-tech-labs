import React from "react";

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

export default function LegalPage({ kicker, title, updated, intro, sections }: {
  kicker: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section style={{ padding: "80px 32px 48px", background: "linear-gradient(135deg,#E8F4FF 0%,#FFFFFF 45%,#F4ECFF 100%)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#0072FF" }}>{kicker}</div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 12, color: "#0F1A2E" }}>
            {title}
          </h1>
          <p style={{ fontSize: 13, color: "#64748B", marginTop: 12, fontFamily: "'JetBrains Mono',monospace" }}>Last updated: {updated}</p>
        </div>
      </section>

      <section style={{ padding: "48px 32px 100px", background: "linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontSize: 17, color: "#334155", lineHeight: 1.7 }}>{intro}</p>
          {sections.map(s => (
            <div key={s.heading} style={{ marginTop: 40 }}>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 700, color: "#0F1A2E", marginBottom: 12, letterSpacing: "-0.015em" }}>
                {s.heading}
              </h2>
              <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>{s.body}</div>
            </div>
          ))}
          <div style={{ marginTop: 56, padding: 24, background: "white", border: "1px solid #E2E8F0", borderRadius: 14 }}>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: 0 }}>
              Questions? Reach us at{" "}
              <a href="mailto:hello@tpatechlabs.com" style={{ color: "#0072FF", fontWeight: 600, textDecoration: "none" }}>hello@tpatechlabs.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
