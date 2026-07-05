"use client";
import FeatureSplit from "@/components/sections/FeatureSplit";
import Icon from "@/components/ui/Icon";
import Link from "next/link";
import {
  UpgradeAnimation,
  SchedulerAnimation,
  AgentAnimation,
  ObservatoryAnimation,
  UpgradeDiagram,
  SchedulerDiagram,
  AgentStudioDiagram,
  ObservatoryDiagram,
} from "@/components/sections/ProductAnimations";

const PRODUCTS = [
  {
    id: "upgrade",
    icon: "git" as const,
    name: "TPA Upgrade",
    tag: "GA",
    tagColor: { bg: "#D1FAE5", fg: "#065F46" },
    desc: "AI-assisted Java modernization. Migrate 500K LOC from Java 8 → 21 in weeks, not months.",
    animation: <UpgradeAnimation />,
    diagram: <UpgradeDiagram />,
    longDesc: "Transform legacy Java codebases with AI-powered modernization. TPA Upgrade analyzes your entire codebase, identifies migration patterns, and automatically refactors code while maintaining business logic integrity.",
    features: [
      { title: "Automated Refactoring", desc: "AI identifies and updates deprecated APIs, patterns, and syntax across your entire codebase" },
      { title: "Zero Downtime Migration", desc: "Incremental migration strategy allows you to upgrade modules independently" },
      { title: "Test Generation", desc: "Automatically generates unit tests to verify migration correctness" },
      { title: "Dependency Resolution", desc: "Smart dependency analyzer updates libraries and resolves conflicts" },
    ],
    useCases: [
      { title: "Enterprise Migration", metric: "500K+ LOC", result: "Migrated in 3 weeks" },
      { title: "Microservices Fleet", metric: "47 services", result: "Zero production issues" },
      { title: "Legacy Monolith", metric: "15 years old", result: "Java 8 → 21 in 6 weeks" },
    ],
    techStack: ["Java 8-21", "Spring Boot", "Maven/Gradle", "JUnit", "Mockito"],
  },
  {
    id: "scheduler",
    icon: "calendar" as const,
    name: "Scheduler",
    tag: "Beta",
    tagColor: { bg: "#EBF5FF", fg: "#0048A8" },
    desc: "Intelligent scheduling for engineering teams. AI resolves conflicts before they happen.",
    animation: <SchedulerAnimation />,
    diagram: <SchedulerDiagram />,
    longDesc: "Stop wasting time on scheduling coordination. Scheduler uses AI to understand team availability, preferences, and work patterns to automatically find optimal meeting times and prevent calendar conflicts.",
    features: [
      { title: "Smart Conflict Detection", desc: "Predicts and prevents double-bookings before they happen" },
      { title: "Team Timezone Intelligence", desc: "Automatically finds times that work across global teams" },
      { title: "Focus Time Protection", desc: "Learns your deep work patterns and blocks calendar accordingly" },
      { title: "Meeting Analytics", desc: "Insights on meeting load, patterns, and optimization opportunities" },
    ],
    useCases: [
      { title: "Engineering Team", metric: "23% fewer conflicts", result: "Saved 8hrs/week" },
      { title: "Global Distributed", metric: "12 timezones", result: "100% attendance rate" },
      { title: "Product Org", metric: "200+ people", result: "Reduced meeting overhead 40%" },
    ],
    techStack: ["Google Calendar", "Outlook", "Slack", "Linear", "Jira"],
  },
  {
    id: "agent-studio",
    icon: "bot" as const,
    name: "Agent Studio",
    tag: "Preview",
    tagColor: { bg: "#F3EBFF", fg: "#4A0099" },
    desc: "Build, test, and deploy custom AI agents with a visual editor and built-in evals.",
    animation: <AgentAnimation />,
    diagram: <AgentStudioDiagram />,
    longDesc: "Create production-ready AI agents without writing boilerplate. Agent Studio provides a visual workflow builder, integrated testing framework, and deployment pipeline for custom automation agents.",
    features: [
      { title: "Visual Workflow Builder", desc: "Drag-and-drop interface for designing agent logic and decision trees" },
      { title: "Built-in Evaluations", desc: "Automated testing suite validates agent behavior before deployment" },
      { title: "Multi-Model Support", desc: "Switch between GPT-4, Claude, Gemini, or custom models seamlessly" },
      { title: "Production Monitoring", desc: "Real-time dashboards track agent performance and costs" },
    ],
    useCases: [
      { title: "Support Automation", metric: "85% ticket deflection", result: "Saved $240K/year" },
      { title: "Code Review Agent", metric: "100% PR coverage", result: "Caught 47 bugs pre-merge" },
      { title: "Data Pipeline", metric: "24/7 monitoring", result: "Zero manual intervention" },
    ],
    techStack: ["OpenAI", "Anthropic", "Google AI", "LangChain", "Vector DBs"],
  },
  {
    id: "observatory",
    icon: "sparkle" as const,
    name: "Observatory",
    tag: "Preview",
    tagColor: { bg: "#F3EBFF", fg: "#4A0099" },
    desc: "AI-powered observability. Anomaly detection and root-cause analysis in real time.",
    animation: <ObservatoryAnimation />,
    diagram: <ObservatoryDiagram />,
    longDesc: "Stop drowning in metrics and alerts. Observatory uses machine learning to detect anomalies, correlate events, and automatically identify root causes before they impact users.",
    features: [
      { title: "Anomaly Detection", desc: "ML models learn normal behavior and alert on deviations automatically" },
      { title: "Root Cause Analysis", desc: "AI correlates logs, metrics, and traces to pinpoint issues instantly" },
      { title: "Predictive Alerts", desc: "Forecasts potential issues before they become incidents" },
      { title: "Natural Language Queries", desc: "Ask questions about your system in plain English" },
    ],
    useCases: [
      { title: "E-commerce Platform", metric: "99.99% uptime", result: "Detected issues 12min faster" },
      { title: "SaaS Application", metric: "50K req/s", result: "Reduced MTTR by 67%" },
      { title: "Microservices", metric: "200+ services", result: "Auto-resolved 40% of alerts" },
    ],
    techStack: ["Prometheus", "Grafana", "Datadog", "New Relic", "OpenTelemetry"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "80px 32px 64px", background: "linear-gradient(180deg,#F8FAFC 0%,#fff 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#7F00FF" }}>Products</div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 56, fontWeight: 700, letterSpacing: "-0.035em", marginTop: 12, color: "#0F1A2E" }}>
            Built for engineers,<br />by engineers.
          </h1>
          <p style={{ fontSize: 18, color: "#475569", maxWidth: 640, marginTop: 16, lineHeight: 1.6 }}>
            Tools we built because we needed them. Now available to everyone.
          </p>
        </div>
      </section>

      {/* Animated product cards */}
      <section style={{ padding: "0 32px 80px", background: "linear-gradient(180deg,#fff 0%,#F8FAFC 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {PRODUCTS.map(p => (
            <a key={p.name} href={`#${p.id}`} style={{
              background: "#0A0E1A",
              border: "1px solid rgba(0,198,255,0.12)",
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 20px 60px -16px rgba(0,0,0,0.4)",
              transition: "transform 220ms cubic-bezier(0.16,1,0.3,1), box-shadow 220ms",
              textDecoration: "none",
              display: "block",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 70px -12px rgba(0,114,255,0.25)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px -16px rgba(0,0,0,0.4)";
              }}
            >
              {/* Card header */}
              <div style={{ padding: "24px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,198,255,0.1)", border: "1px solid rgba(0,198,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#00C6FF" }}>
                    <Icon name={p.icon} size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: "white", margin: 0, letterSpacing: "-0.015em" }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 13, color: "#64748B", margin: "4px 0 0", lineHeight: 1.5, maxWidth: 280 }}>{p.desc}</p>
                  </div>
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 999, background: p.tagColor.bg, color: p.tagColor.fg, flexShrink: 0 }}>
                  {p.tag}
                </span>
              </div>

              {/* Animation area */}
              <div style={{
                margin: "20px 24px 24px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 12, padding: 16,
                border: "1px solid rgba(255,255,255,0.06)",
                minHeight: 110,
              }}>
                {p.animation}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Detailed Product Sections */}
      {PRODUCTS.map((product, idx) => (
        <section key={product.id} id={product.id} style={{
          padding: "120px 32px",
          background: idx % 2 === 0 ? "#ffffff" : "#F8FAFC",
        }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            {/* Product Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#00C6FF,#0072FF)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                <Icon name={product.icon} size={32} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 42, fontWeight: 700, color: "#0F1A2E", margin: 0, letterSpacing: "-0.025em" }}>
                    {product.name}
                  </h2>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999, background: product.tagColor.bg, color: product.tagColor.fg }}>
                    {product.tag}
                  </span>
                </div>
                <p style={{ fontSize: 20, color: "#475569", margin: "8px 0 0", maxWidth: 720 }}>{product.longDesc}</p>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div style={{
              background: "#0A0E1A",
              border: "1px solid rgba(0,198,255,0.15)",
              borderRadius: 20,
              padding: 48,
              marginBottom: 64,
              boxShadow: "0 20px 60px -16px rgba(0,0,0,0.3)",
            }}>
              {product.diagram}
            </div>

            {/* Features Grid */}
            <div style={{ marginBottom: 64 }}>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, color: "#0F1A2E", marginBottom: 32 }}>
                Key Features
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
                {product.features.map((feature, i) => (
                  <div key={i} style={{
                    padding: 32,
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: 16,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  }}>
                    <div className="tpa-icon-tile" style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,rgba(0,198,255,0.1),rgba(0,114,255,0.1))", border: "1px solid rgba(0,198,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: "#0072FF", animationDelay: `${i * 0.45}s` }}>
                      <Icon name={i === 0 ? "zap" : i === 1 ? "target" : i === 2 ? "flask" : "chart"} size={24} />
                    </div>
                    <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: "#0F1A2E", marginBottom: 8 }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div style={{ marginBottom: 64 }}>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, color: "#0F1A2E", marginBottom: 32 }}>
                Real-World Results
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                {product.useCases.map((useCase, i) => (
                  <div key={i} style={{
                    padding: 32,
                    background: "linear-gradient(135deg,#0A0E1A,#0D1528)",
                    border: "1px solid rgba(0,198,255,0.15)",
                    borderRadius: 16,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  }}>
                    <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700, color: "white", marginBottom: 16 }}>
                      {useCase.title}
                    </h4>
                    <div style={{ fontSize: 32, fontWeight: 700, color: "#00C6FF", marginBottom: 8, fontFamily: "'Space Grotesk',sans-serif" }}>
                      {useCase.metric}
                    </div>
                    <p style={{ fontSize: 14, color: "#A8C8F0", margin: 0 }}>
                      {useCase.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, color: "#0F1A2E", marginBottom: 16 }}>
                Integrations & Tech Stack
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {product.techStack.map((tech, i) => (
                  <span key={i} style={{
                    padding: "8px 16px",
                    background: "#F1F5F9",
                    border: "1px solid #E2E8F0",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#475569",
                    fontFamily: "'JetBrains Mono',monospace",
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA strip */}
      <section style={{ padding: "0 32px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px", background: "linear-gradient(135deg,#0A0E1A,#0D1528)", borderRadius: 24, display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid rgba(0,198,255,0.12)" }}>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, color: "white", margin: 0 }}>Want early access?</h3>
            <p style={{ fontSize: 15, color: "#A8C8F0", margin: "8px 0 0" }}>All products ship with dedicated onboarding from the team that built them.</p>
          </div>
          <Link href="/schedule" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", fontSize: 15, fontWeight: 700, background: "linear-gradient(135deg,#00C6FF,#0072FF)", color: "white", borderRadius: 12, textDecoration: "none", fontFamily: "'Inter',sans-serif", boxShadow: "0 8px 28px -6px rgba(0,114,255,0.5)" }}>
            Book a demo <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      <FeatureSplit />
    </>
  );
}
