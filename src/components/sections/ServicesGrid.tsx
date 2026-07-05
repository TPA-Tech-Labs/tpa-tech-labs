import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";

const SERVICES = [
  { icon: "code", title: "Web Development", body: "Production-grade React, Next.js, and backend APIs. Built for scale from day one.", tag: "Most popular", variant: "feature" },
  { icon: "phone", title: "Mobile Apps", body: "Native iOS + Android or cross-platform with React Native. From MVP to 100K users." },
  { icon: "cloud", title: "Cloud & DevOps", body: "AWS, GCP, Azure. Infrastructure as code, CI/CD pipelines, observability wired in." },
  { icon: "bot", title: "AI Agents", body: "Domain-trained agents that work inside your codebase, tickets, and CI. On-prem or cloud.", tag: "New", variant: "dark" },
  { icon: "cpu", title: "AI Model Training", body: "Fine-tune, RAG, evals. We ship models, not demos. Kubeflow + MLflow + everything in between." },
  { icon: "git", title: "Java Modernization", body: "Java 8 → 21, Spring Boot upgrades. Avg. 6 weeks per 500K LOC with our AI toolchain.", tag: "Featured" },
] as const;

export default function ServicesGrid() {
  return (
    <section style={{ padding: "100px 32px", background: "#F8FAFC", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#0072FF" }}>Services</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 12, marginBottom: 16, color: "#0F1A2E" }}>
            Six services. <span style={{ background: "linear-gradient(135deg,#00C6FF,#0072FF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>One team.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#475569", maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>
            From first sketch to production deployment — we cover the full engineering stack so you don&apos;t need to coordinate four vendors.
          </p>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, body, tag, variant }: {
  icon: string; title: string; body: string; tag?: string; variant?: string;
}) {
  const isDark = variant === "dark";
  const isFeature = variant === "feature";

  return (
    <div style={{
      background: isDark ? "linear-gradient(135deg,#0A0E1A,#0D1528)" : isFeature ? "linear-gradient(135deg,#EBF5FF 0%,#fff 70%)" : "white",
      borderRadius: 16, padding: 28,
      border: `1px solid ${isDark ? "rgba(0,198,255,0.2)" : isFeature ? "#A8D4FF" : "#E2E8F0"}`,
      boxShadow: isDark ? "0 20px 50px -12px rgba(0,114,255,0.2)" : "0 1px 3px rgba(15,26,46,0.04)",
      position: "relative", overflow: "hidden",
      transition: "all 220ms cubic-bezier(0.16,1,0.3,1)",
    }}>
      {isDark && <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(168,200,240,0.06) 1px, transparent 1px)", backgroundSize: "14px 14px", pointerEvents: "none" }} />}
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: isDark ? "rgba(0,198,255,0.12)" : "linear-gradient(135deg,#00C6FF,#0072FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: isDark ? "#00C6FF" : "white",
            border: isDark ? "1px solid rgba(0,198,255,0.3)" : "none",
          }}>
            <Icon name={icon as Parameters<typeof Icon>[0]["name"]} size={20} />
          </div>
          {tag && (
            <Badge variant={isDark ? "dark" : tag === "New" ? "purple" : tag === "Featured" ? "cyan" : "brand"}>
              {tag}
            </Badge>
          )}
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: isDark ? "white" : "#0F1A2E", margin: 0, letterSpacing: "-0.015em" }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: isDark ? "#A8C8F0" : "#475569", lineHeight: 1.6, marginTop: 10, marginBottom: 20 }}>
          {body}
        </p>
        <Link href="/services" style={{ fontSize: 13, fontWeight: 600, color: isDark ? "#00C6FF" : "#0072FF", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
          Learn more <Icon name="arrow" size={14} />
        </Link>
      </div>
    </div>
  );
}
