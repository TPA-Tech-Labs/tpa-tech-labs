"use client";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

const SERVICES = [
  {
    id: "web-development",
    icon: "code" as const,
    title: "Web Development",
    tagline: "Production-grade web applications built for scale",
    stack: "React, Next.js, TypeScript, Node, Python, PostgreSQL",
    description: "We build modern web applications that handle real traffic. From MVPs to enterprise platforms, our full-stack expertise covers frontend, backend, databases, and everything in between.",
    capabilities: [
      { title: "Frontend Development", desc: "React, Next.js, TypeScript with modern UI/UX patterns", icon: "🎨" },
      { title: "Backend APIs", desc: "RESTful and GraphQL APIs with Node.js, Python, or Go", icon: "⚙️" },
      { title: "Database Design", desc: "PostgreSQL, MongoDB, Redis - optimized for your use case", icon: "💾" },
      { title: "Performance Optimization", desc: "Sub-second load times, CDN setup, caching strategies", icon: "⚡" },
    ],
    deliverables: [
      "Fully responsive web application",
      "Admin dashboard and user portal",
      "API documentation",
      "Deployment pipeline",
      "Performance monitoring",
    ],
    timeline: "8-16 weeks for MVP",
    examples: [
      { title: "SaaS Platform", desc: "Multi-tenant B2B platform with 10K+ users" },
      { title: "E-commerce Site", desc: "Custom storefront with payment integration" },
      { title: "Internal Tools", desc: "Admin dashboards and workflow automation" },
    ],
  },
  {
    id: "mobile-apps",
    icon: "phone" as const,
    title: "Mobile Apps",
    tagline: "Native iOS & Android apps that users love",
    stack: "React Native, Swift, Kotlin, Expo",
    description: "Whether you need cross-platform with React Native or native iOS/Android, we build mobile apps that feel fast, look great, and scale to hundreds of thousands of users.",
    capabilities: [
      { title: "Cross-Platform", desc: "React Native for iOS + Android from single codebase", icon: "📱" },
      { title: "Native Development", desc: "Swift for iOS, Kotlin for Android when performance matters", icon: "🚀" },
      { title: "Offline-First", desc: "Apps that work without internet, sync when connected", icon: "🔄" },
      { title: "Push Notifications", desc: "Real-time alerts and engagement features", icon: "🔔" },
    ],
    deliverables: [
      "iOS and Android apps",
      "App Store submissions",
      "Backend API integration",
      "Analytics and crash reporting",
      "CI/CD for mobile releases",
    ],
    timeline: "10-20 weeks for MVP",
    examples: [
      { title: "Fitness App", desc: "Workout tracking with 50K+ active users" },
      { title: "Delivery Platform", desc: "Real-time GPS tracking and order management" },
      { title: "Social Network", desc: "Photo sharing with messaging features" },
    ],
  },
  {
    id: "cloud-devops",
    icon: "cloud" as const,
    title: "Cloud & DevOps",
    tagline: "Infrastructure that scales, deploys that don't break",
    stack: "AWS, GCP, Terraform, Kubernetes, CI/CD",
    description: "We set up cloud infrastructure that grows with you. Infrastructure as code, automated deployments, monitoring, and everything you need to ship confidently.",
    capabilities: [
      { title: "Cloud Architecture", desc: "AWS, GCP, or Azure - designed for your workload", icon: "☁️" },
      { title: "Infrastructure as Code", desc: "Terraform, CloudFormation - version controlled infra", icon: "📝" },
      { title: "Container Orchestration", desc: "Kubernetes, ECS, Docker - for microservices", icon: "🐳" },
      { title: "CI/CD Pipelines", desc: "GitHub Actions, GitLab CI - automated testing & deployment", icon: "🔄" },
    ],
    deliverables: [
      "Cloud infrastructure setup",
      "Automated deployment pipeline",
      "Monitoring and alerting",
      "Security hardening",
      "Documentation and runbooks",
    ],
    timeline: "4-8 weeks",
    examples: [
      { title: "Microservices Platform", desc: "Kubernetes cluster with 50+ services" },
      { title: "Data Pipeline", desc: "ETL processing 1TB+ daily" },
      { title: "High-Availability Setup", desc: "Multi-region deployment with 99.99% uptime" },
    ],
  },
  {
    id: "ai-agents",
    icon: "bot" as const,
    title: "AI Agents",
    tagline: "Custom AI agents that work inside your systems",
    stack: "LangGraph, OpenAI, Anthropic, custom toolchains, on-prem",
    description: "We build domain-specific AI agents that integrate with your codebase, tickets, databases, and workflows. Not chatbots - actual agents that take actions and get work done.",
    capabilities: [
      { title: "Custom Agent Development", desc: "Agents trained on your domain, data, and workflows", icon: "🤖" },
      { title: "Tool Integration", desc: "Connect to GitHub, Jira, Slack, databases, APIs", icon: "🔗" },
      { title: "Multi-Agent Systems", desc: "Orchestrate multiple specialized agents working together", icon: "🎭" },
      { title: "On-Premise Deployment", desc: "Run agents in your infrastructure, data never leaves", icon: "🔒" },
    ],
    agentTypes: [
      {
        name: "Code Review Agent",
        description: "Reviews PRs, suggests improvements, catches bugs before merge",
        capabilities: ["Static analysis", "Security scanning", "Best practices enforcement"],
        buildTime: "2-3 weeks",
        examples: ["Caught 47 bugs pre-merge", "Reduced review time by 60%"],
      },
      {
        name: "Support Agent",
        description: "Handles customer tickets, escalates complex issues to humans",
        capabilities: ["Ticket triage", "Knowledge base search", "Auto-responses"],
        buildTime: "3-4 weeks",
        examples: ["85% ticket deflection", "Saved $240K/year"],
      },
      {
        name: "Data Analysis Agent",
        description: "Queries databases, generates reports, answers business questions",
        capabilities: ["SQL generation", "Chart creation", "Anomaly detection"],
        buildTime: "2-3 weeks",
        examples: ["Automated 40+ weekly reports", "Reduced analyst workload 70%"],
      },
      {
        name: "DevOps Agent",
        description: "Monitors systems, investigates incidents, suggests fixes",
        capabilities: ["Log analysis", "Metric correlation", "Root cause analysis"],
        buildTime: "3-4 weeks",
        examples: ["Reduced MTTR by 67%", "Auto-resolved 40% of alerts"],
      },
      {
        name: "Documentation Agent",
        description: "Keeps docs up-to-date, answers developer questions",
        capabilities: ["Code-to-docs sync", "API documentation", "Tutorial generation"],
        buildTime: "2-3 weeks",
        examples: ["Docs always current", "Reduced onboarding time 50%"],
      },
      {
        name: "Testing Agent",
        description: "Generates test cases, finds edge cases, maintains test coverage",
        capabilities: ["Test generation", "Coverage analysis", "Regression detection"],
        buildTime: "3-4 weeks",
        examples: ["90%+ test coverage", "Found 23 edge cases humans missed"],
      },
    ],
    deliverables: [
      "Custom AI agent(s) trained on your domain",
      "Integration with your tools and systems",
      "Evaluation framework and metrics",
      "Deployment pipeline",
      "Monitoring dashboard",
      "Documentation and maintenance guide",
    ],
    timeline: "2-4 weeks per agent",
    examples: [
      { title: "Code Review Agent", desc: "Reviews 100% of PRs, caught 47 bugs pre-merge" },
      { title: "Support Agent", desc: "85% ticket deflection, saved $240K/year" },
      { title: "DevOps Agent", desc: "Auto-investigates incidents, reduced MTTR 67%" },
    ],
  },
  {
    id: "ai-training",
    icon: "cpu" as const,
    title: "AI Model Training",
    tagline: "Fine-tuned models that understand your domain",
    stack: "Fine-tuning, RAG, evals, MLOps, Kubeflow, MLflow",
    description: "We train, fine-tune, and deploy AI models for your specific use case. From RAG systems to fully fine-tuned models, we ship production-ready AI that actually works.",
    capabilities: [
      { title: "Fine-Tuning", desc: "Adapt GPT-4, Claude, Llama to your domain and style", icon: "🎯" },
      { title: "RAG Systems", desc: "Retrieval-augmented generation with your knowledge base", icon: "📚" },
      { title: "Model Evaluation", desc: "Automated evals to measure accuracy and quality", icon: "📊" },
      { title: "MLOps Pipeline", desc: "Training, versioning, deployment, monitoring", icon: "🔄" },
    ],
    deliverables: [
      "Fine-tuned or RAG model",
      "Evaluation framework",
      "Training pipeline",
      "API endpoint for inference",
      "Monitoring and retraining setup",
    ],
    timeline: "6-12 weeks",
    examples: [
      { title: "Legal Document Analysis", desc: "Fine-tuned model for contract review" },
      { title: "Customer Support RAG", desc: "Answers from 10K+ support tickets" },
      { title: "Code Generation", desc: "Domain-specific code assistant" },
    ],
  },
  {
    id: "java-modernization",
    icon: "git" as const,
    title: "Java Modernization",
    tagline: "Upgrade legacy Java without the pain",
    stack: "Java 8/11/17 → 21, Spring Boot 3, AI-assisted migration",
    description: "Stuck on Java 8? We migrate legacy Java codebases to modern versions using our AI-powered toolchain. Typically 3× faster than manual migration, with full test coverage maintained.",
    capabilities: [
      { title: "Automated Migration", desc: "AI analyzes and refactors code automatically", icon: "🤖" },
      { title: "Spring Boot Upgrade", desc: "Migrate to Spring Boot 3 with minimal changes", icon: "🍃" },
      { title: "Dependency Updates", desc: "Update all libraries to compatible versions", icon: "📦" },
      { title: "Test Coverage", desc: "Generate tests to verify migration correctness", icon: "🧪" },
    ],
    deliverables: [
      "Migrated codebase (Java 21 + Spring Boot 3)",
      "Updated dependencies",
      "Test suite with maintained/improved coverage",
      "Migration report and documentation",
      "CI/CD pipeline updates",
    ],
    timeline: "6 weeks for 500K LOC",
    examples: [
      { title: "Enterprise Monolith", desc: "500K LOC migrated in 3 weeks" },
      { title: "Microservices Fleet", desc: "47 services upgraded, zero production issues" },
      { title: "Legacy Banking System", desc: "15-year-old codebase, Java 8 → 21 in 6 weeks" },
    ],
  },
] as const;

/* Brand artwork + long-form explanation shown in each service section */
const SERVICE_MEDIA: Record<string, { image: string; details: string[] }> = {
  "web-development": {
    image: "/brand/service-web-development.svg",
    details: [
      "Every build starts with the unglamorous questions: who uses this, how many of them, and what breaks first under load. We design the architecture around those answers — then ship in weekly, deployable increments so you see real software from week one, not a big reveal at the end.",
      "The stack is TypeScript end-to-end: Next.js on the front, Node or Python services behind an API layer, PostgreSQL for data. Every project gets preview deployments on each pull request, automated tests in CI, and performance budgets enforced before launch — sub-second loads aren't a stretch goal, they're the default.",
    ],
  },
  "mobile-apps": {
    image: "/brand/service-mobile-apps.svg",
    details: [
      "Cross-platform or native is a measurement, not a preference. If your app is mostly screens and data, React Native gets you iOS and Android from one codebase at half the cost. If it leans on heavy animation, background processing, or device hardware, we go Swift and Kotlin. We prototype the riskiest screen first and let the numbers decide.",
      "Shipping the app is half the job — the other half is release engineering. We handle App Store and Play Store submissions, phased rollouts, crash reporting, and over-the-air updates for React Native, so a fix reaches users in hours instead of waiting on store review.",
    ],
  },
  "cloud-devops": {
    image: "/brand/service-cloud-devops.svg",
    details: [
      "Everything is infrastructure as code from the first commit: Terraform modules, identical staging and production environments, secrets in a managed vault — never in a wiki. Anyone on your team can see exactly what's running and why, and every change is reviewed like application code.",
      "We pick Kubernetes only when the workload earns it; plenty of systems run better (and cheaper) on managed services or serverless. Either way you get observability wired in from day one — metrics, traces, and alerts that page a human only when something is actually wrong — plus cost budgets and runbooks your team can operate without us.",
    ],
  },
  "ai-agents": {
    image: "/brand/service-ai-agents.svg",
    details: [
      "An agent is only useful if it can act — read the ticket, query the database, open the pull request, post the summary. We build agents wired directly into your systems with scoped permissions and full audit logs, so every action the agent takes is visible, reviewable, and reversible.",
      "Before an agent touches production, it passes an evaluation suite built from your real historical data — actual tickets, actual PRs — and anything below the confidence bar escalates to a human. For sensitive data we deploy fully on-premise, so nothing leaves your infrastructure.",
    ],
  },
  "ai-training": {
    image: "/brand/service-ai-model-training.svg",
    details: [
      "We start with evals, not training runs. First we define what \"good\" means for your use case as a measurable test set — then let the evidence pick the approach. Often a well-built RAG system beats a fine-tune at a tenth of the cost; when fine-tuning wins, we know exactly how much it wins by.",
      "What you get is a production system, not a notebook: versioned datasets and models, a training pipeline you can re-run, an inference endpoint with monitoring, and drift detection that tells you when the model needs retraining — before your users do.",
    ],
  },
  "java-modernization": {
    image: "/brand/service-java-modernization.svg",
    details: [
      "Our AI toolchain parses your entire codebase into an AST and maps every deprecated API, unsafe pattern, and outdated dependency before we change a line. The migration then lands as small, reviewable pull-request batches — with generated tests locking in existing behavior — so your team stays in control the whole way.",
      "A typical engagement takes Java 8 to 21 and Spring Boot to 3.x with zero production downtime, at roughly six weeks per 500K lines. You also get a migration report documenting every transformation, so audits and future upgrades aren't archaeology.",
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "80px 32px 64px", background: "linear-gradient(135deg,#E8F4FF 0%,#FFFFFF 45%,#F4ECFF 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#0072FF" }}>Services</div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 56, fontWeight: 700, letterSpacing: "-0.035em", marginTop: 12, color: "#0F1A2E" }}>
            Everything you need,<br />nothing you don&apos;t.
          </h1>
          <p style={{ fontSize: 18, color: "#475569", maxWidth: 640, marginTop: 16, lineHeight: 1.6 }}>
            Six services, ~12 engineers. We keep the team small so we can stay in the details.
          </p>
        </div>
      </section>

      {/* Service Cards Overview */}
      <section style={{ padding: "0 32px 80px", background: "linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: 28,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  boxShadow: "0 1px 3px rgba(15,26,46,0.04)",
                  transition: "all 200ms",
                  cursor: "pointer",
                  textAlign: "left",
                  textDecoration: "none",
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg,#EBF5FF,#D6EBFF)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0072FF", flexShrink: 0 }}>
                  <Icon name={s.icon} size={26} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, margin: 0, color: "#0F1A2E", letterSpacing: "-0.015em" }}>
                    {s.title}
                  </h3>
                  <div style={{ fontSize: 14, color: "#64748B", marginTop: 8, fontFamily: "'JetBrains Mono',monospace", letterSpacing: "-0.01em" }}>
                    {s.stack}
                  </div>
                  <div style={{ fontSize: 14, color: "#0072FF", marginTop: 12, fontWeight: 600 }}>
                    View details ↓
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {SERVICES.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            style={{
              padding: "100px 32px",
              background: idx % 2 === 0 ? "linear-gradient(160deg,#EAF4FF 0%,#F8F0FF 55%,#E9FAFF 100%)" : "linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)",
              scrollMarginTop: 80,
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              {/* Service Header: explanation + brand artwork */}
              <div className="service-header-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 48, alignItems: "center", marginBottom: 56 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#00C6FF,#0072FF)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
                      <Icon name={service.icon} size={32} />
                    </div>
                    <div>
                      <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 42, fontWeight: 700, color: "#0F1A2E", margin: 0, letterSpacing: "-0.025em" }}>
                        {service.title}
                      </h2>
                      <p style={{ fontSize: 18, color: "#0072FF", margin: "4px 0 0", fontWeight: 600 }}>{service.tagline}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.6 }}>{service.description}</p>
                  {SERVICE_MEDIA[service.id]?.details.map((para) => (
                    <p key={para.slice(0, 32)} style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.75, marginTop: 16 }}>
                      {para}
                    </p>
                  ))}
                </div>
                <div style={{
                  background: "linear-gradient(135deg,#0A0E1A,#0D1528)",
                  border: "1px solid rgba(0,198,255,0.2)",
                  borderRadius: 20,
                  padding: "48px 32px",
                  boxShadow: "0 20px 60px -16px rgba(0,114,255,0.25)",
                  position: "relative",
                  overflow: "hidden",
                  alignSelf: "start",
                }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(168,200,240,0.07) 1px, transparent 1px)", backgroundSize: "16px 16px", pointerEvents: "none" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SERVICE_MEDIA[service.id]?.image}
                    alt={`${service.title} — TPA Tech Labs`}
                    style={{ width: "100%", height: "auto", display: "block", position: "relative" }}
                  />
                  <div style={{ position: "relative", marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(168,200,240,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#64748B" }}>TIMELINE</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#00C6FF", fontFamily: "'Space Grotesk',sans-serif" }}>{service.timeline}</div>
                  </div>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div style={{ marginBottom: 64 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, color: "#0F1A2E", marginBottom: 24 }}>
                  What We Do
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
                  {service.capabilities.map((cap, i) => (
                    <div key={i} style={{ padding: 24, background: "white", border: "1px solid #E2E8F0", borderRadius: 12 }}>
                      <div style={{ fontSize: 32, marginBottom: 12 }}>{cap.icon}</div>
                      <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: "#0F1A2E", marginBottom: 8 }}>
                        {cap.title}
                      </h4>
                      <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Agents Special Section */}
              {service.id === "ai-agents" && service.agentTypes && (
                <div style={{ marginBottom: 64 }}>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, color: "#0F1A2E", marginBottom: 12 }}>
                    Types of AI Agents We Build
                  </h3>
                  <p style={{ fontSize: 16, color: "#64748B", marginBottom: 32, lineHeight: 1.6 }}>
                    We can build virtually any type of AI agent. Here are the most common ones our clients request:
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
                    {service.agentTypes.map((agent, i) => (
                      <div key={i} style={{
                        padding: 28,
                        background: "linear-gradient(135deg,#0A0E1A,#0D1528)",
                        border: "1px solid rgba(0,198,255,0.2)",
                        borderRadius: 16,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                      }}>
                        <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, color: "white", marginBottom: 12 }}>
                          {agent.name}
                        </h4>
                        <p style={{ fontSize: 14, color: "#A8C8F0", lineHeight: 1.6, marginBottom: 16 }}>
                          {agent.description}
                        </p>
                        <div style={{ marginBottom: 16 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", marginBottom: 8, letterSpacing: "0.1em" }}>CAPABILITIES</div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {agent.capabilities.map((cap, j) => (
                              <span key={j} style={{
                                padding: "4px 10px",
                                background: "rgba(0,198,255,0.1)",
                                border: "1px solid rgba(0,198,255,0.2)",
                                borderRadius: 6,
                                fontSize: 11,
                                color: "#00C6FF",
                                fontWeight: 600,
                              }}>
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                          <div>
                            <div style={{ fontSize: 11, color: "#64748B", marginBottom: 4 }}>Build Time</div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: "#00C6FF" }}>{agent.buildTime}</div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: 11, color: "#64748B", marginBottom: 4 }}>Example Results</div>
                            <div style={{ fontSize: 12, color: "#10B981", fontWeight: 600 }}>{agent.examples[0]}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    marginTop: 32,
                    padding: 24,
                    background: "rgba(0,198,255,0.05)",
                    border: "1px solid rgba(0,198,255,0.2)",
                    borderRadius: 12,
                  }}>
                    <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: "#0F1A2E", marginBottom: 8 }}>
                      💡 Custom Agent Ideas?
                    </h4>
                    <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                      Don't see what you need? We build custom agents for any use case. From sales automation to research assistants to workflow orchestration - if it can be automated with AI, we can build it. <Link href="/schedule" style={{ color: "#0072FF", fontWeight: 600 }}>Let's talk about your specific needs →</Link>
                    </p>
                  </div>
                </div>
              )}

              {/* Examples */}
              <div style={{ marginBottom: 64 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, color: "#0F1A2E", marginBottom: 24 }}>
                  Real Projects
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
                  {service.examples.map((example, i) => (
                    <div key={i} style={{ padding: 20, background: "white", border: "1px solid #E2E8F0", borderRadius: 12 }}>
                      <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700, color: "#0F1A2E", marginBottom: 8 }}>
                        {example.title}
                      </h4>
                      <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5, margin: 0 }}>{example.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Timeline */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32 }}>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, fontWeight: 700, color: "#0F1A2E", marginBottom: 16 }}>
                    What You Get
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {service.deliverables.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#334155" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center", color: "#065F46", flexShrink: 0 }}>
                          <Icon name="check" size={12} stroke={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={{ padding: 24, background: "linear-gradient(135deg,#EBF5FF,#D6EBFF)", borderRadius: 12, border: "1px solid #A8D4FF" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#0048A8", marginBottom: 8, letterSpacing: "0.1em" }}>TIMELINE</div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#0F1A2E", marginBottom: 16, fontFamily: "'Space Grotesk',sans-serif" }}>
                      {service.timeline}
                    </div>
                    <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.6, margin: 0 }}>
                      Every project is scoped individually — <Link href="/schedule" style={{ color: "#0072FF", fontWeight: 600 }}>book a free call</Link> for an estimate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      ))}

      {/* CTA Section */}
      <section style={{ padding: "0 32px 80px", background: "linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ padding: "60px 32px", background: "#0A0E1A", borderRadius: 24, position: "relative", overflow: "hidden", textAlign: "center" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(168,200,240,0.08) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 36, fontWeight: 700, color: "white", margin: 0 }}>
                Not sure which service fits?
              </h2>
              <p style={{ fontSize: 16, color: "#A8C8F0", marginTop: 12, marginBottom: 28 }}>
                Book a free 30-min scoping call. We&apos;ll figure it out together.
              </p>
              <Link
                href="/schedule"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  fontSize: 16,
                  fontWeight: 700,
                  background: "linear-gradient(135deg,#00C6FF,#0072FF)",
                  color: "white",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontFamily: "'Inter',sans-serif",
                }}
              >
                Book a call <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
