import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { LogoDark } from "@/components/ui/Logo";

const COLS = [
  {
    title: "Services", links: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Cloud & DevOps", href: "/services" },
      { label: "AI Agents", href: "/services" },
      { label: "Model Training", href: "/services" },
      { label: "Java Modernization", href: "/services" },
    ]
  },
  {
    title: "Products", links: [
      { label: "TPA Upgrade", href: "/products" },
      { label: "Scheduler", href: "/products" },
      { label: "Agent Studio", href: "/products" },
      { label: "Observatory", href: "/products" },
    ]
  },
  {
    title: "Company", links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "/contact" },
      { label: "Careers", href: "/contact" },
      { label: "Press", href: "/about" },
    ]
  },
  {
    title: "Contact", links: [
      { label: "Book a call", href: "/schedule" },
      { label: "hello@tpatechlabs.com", href: "mailto:hello@tpatechlabs.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/tpa-tech-labs" },
      { label: "GitHub", href: "https://github.com/tpa-tech-labs" },
    ]
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0E1A", color: "white", paddingTop: 72, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(168,200,240,0.08) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4,1fr)", gap: 48, marginBottom: 56 }}>
          {/* Brand col */}
          <div>
            <LogoDark height={44} />
            <p style={{ fontSize: 14, color: "#A8C8F0", marginTop: 20, lineHeight: 1.6, maxWidth: 280 }}>
              Custom software for small businesses. AI agents, cloud infrastructure, and Java modernization — built by engineers, not salespeople.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {([
                { name: "linkedin" as const, href: "https://www.linkedin.com/company/tpa-tech-labs" },
                { name: "github" as const, href: "https://github.com/tpa-tech-labs" },
                { name: "mail" as const, href: "mailto:hello@tpatechlabs.com" },
              ]).map(({ name, href }) => (
                <a key={name} href={href} target={name !== "mail" ? "_blank" : undefined} rel="noopener noreferrer" style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(0,198,255,0.1)", border: "1px solid rgba(0,198,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#00C6FF", cursor: "pointer",
                  transition: "all 150ms", textDecoration: "none",
                }}>
                  <Icon name={name} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {COLS.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#00C6FF", marginBottom: 16 }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(link => (
                  <Link key={link.label} href={link.href} style={{ fontSize: 13, color: "#A8C8F0", textDecoration: "none", transition: "color 150ms" }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(168,200,240,0.15)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "#4A7FA8", fontFamily: "'JetBrains Mono',monospace" }}>
          <div>© 2026 TPA TECH LABS · BUILD · INNOVATE · DELIVER</div>
          <div className="footer-links" style={{ display: "flex", gap: 24 }}>
            {([
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Security", href: "/contact" },
            ]).map(({ label, href }) => (
              <Link key={label} href={href} style={{ color: "#4A7FA8", textDecoration: "none", cursor: "pointer" }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
