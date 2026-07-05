"use client";
import Icon from "@/components/ui/Icon";
import Link from "next/link";
import { useState } from "react";
import { SERVICE_VISUALS } from "@/components/sections/ServiceVisuals";

const SERVICES = [
  {
    id: "web-development",
    icon: "code" as const,
    title: "Web Development",
    tagline: "Production-grade web applications built for scale",
    stack: "React, Next.js, TypeScript, Node, Python, PostgreSQL",
    description: "We build modern web applications that handle real traffic. From MVPs to enterprise platforms, our full-stack expertise covers frontend, backend, databases, and everything in between.",
    capabilities: [
      { title: "Frontend Development", desc: "React, Next.js, TypeScript with modern UI/UX patterns", icon: "palette" },
      { title: "Backend APIs", desc: "RESTful and GraphQL APIs with Node.js, Python, or Go", icon: "gear" },
      { title: "Database Design", desc: "PostgreSQL, MongoDB, Redis - optimized for your use case", icon: "database" },
      { title: "Performance Optimization", desc: "Sub-second load times, CDN setup, caching strategies", icon: "zap" },
    ],
    deliverables: [
      "Fully responsive web application",
      "Admin dashboard and user portal",
      "API documentation",
      "Deployment pipeline",
      "Performance monitoring",
    ],
    timeline: "8-16 weeks for MVP",
    pricing: "Starting at $40K",
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
      { title: "Cross-Platform", desc: "React Native for iOS + Android from single codebase", icon: "phone" },
      { title: "Native Development", desc: "Swift for iOS, Kotlin for Android when performance matters", icon: "rocket" },
      { title: "Offline-First", desc: "Apps that work without internet, sync when connected", icon: "refresh" },
      { title: "Push Notifications", desc: "Real-time alerts and engagement features", icon: "bell" },
    ],
    deliverables: [
      "iOS and Android apps",
      "App Store submissions",
      "Backend API integration",
      "Analytics and crash reporting",
      "CI/CD for mobile releases",
    ],
    timeline: "10-20 weeks for MVP",
    pricing: "Starting at $50K",
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
      { title: "Cloud Architecture", desc: "AWS, GCP, or Azure - designed for your workload", icon: "cloud" },
      { title: "Infrastructure as Code", desc: "Terraform, CloudFormation - version controlled infra", icon: "file" },
      { title: "Container Orchestration", desc: "Kubernetes, ECS, Docker - for microservices", icon: "package" },
      { title: "CI/CD Pipelines", desc: "GitHub Actions, GitLab CI - automated testing & deployment", icon: "refresh" },
    ],
    deliverables: [
      "Cloud infrastructure setup",
      "Automated deployment pipeline",
      "Monitoring and alerting",
      "Security hardening",
      "Documentation and runbooks",
    ],
    timeline: "4-8 weeks",
    pricing: "Starting at $25K",
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
      { title: "Custom Agent Development", desc: "Agents trained on your domain, data, and workflows", icon: "bot" },
      { title: "Tool Integration", desc: "Connect to GitHub, Jira, Slack, databases, APIs", icon: "link" },
      { title: "Multi-Agent Systems", desc: "Orchestrate multiple specialized agents working together", icon: "users" },
      { title: "On-Premise Deployment", desc: "Run agents in your infrastructure, data never leaves", icon: "lock" },
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
    pricing: "Starting at $15K per agent",
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
      { title: "Fine-Tuning", desc: "Adapt GPT-4, Claude, Llama to your domain and style", icon: "target" },
      { title: "RAG Systems", desc: "Retrieval-augmented generation with your knowledge base", icon: "book" },
      { title: "Model Evaluation", desc: "Automated evals to measure accuracy and quality", icon: "chart" },
      { title: "MLOps Pipeline", desc: "Training, versioning, deployment, monitoring", icon: "refresh" },
    ],
    deliverables: [
      "Fine-tuned or RAG model",
      "Evaluation framework",
      "Training pipeline",
      "API endpoint for inference",
      "Monitoring and retraining setup",
    ],
    timeline: "6-12 weeks",
    pricing: "Starting at $35K",
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
      { title: "Automated Migration", desc: "AI analyzes and refactors code automatically", icon: "bot" },
      { title: "Spring Boot Upgrade", desc: "Migrate to Spring Boot 3 with minimal changes", icon: "leaf" },
      { title: "Dependency Updates", desc: "Update all libraries to compatible versions", icon: "package" },
      { title: "Test Coverage", desc: "Generate tests to verify migration correctness", icon: "flask" },
    ],
    deliverables: [
      "Migrated codebase (Java 21 + Spring Boot 3)",
      "Updated dependencies",
      "Test suite with maintained/improved coverage",
      "Migration report and documentation",
      "CI/CD pipeline updates",
    ],
    timeline: "6 weeks for 500K LOC",
    pricing: "Starting at $30K",
    examples: [
      { title: "Enterprise Monolith", desc: "500K LOC migrated in 3 weeks" },
      { title: "Microservices Fleet", desc: "47 services upgraded, zero production issues" },
      { title: "Legacy Banking System", desc: "15-year-old codebase, Java 8 → 21 in 6 weeks" },
    ],
  },
] as const;

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <>
      {/* Header */}
      <section style={{ padding: "80px 32px 64px", background: "linear-gradient(180deg,#F8FAFC 0%,#fff 100%)" }}>
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
      <section style={{ padding: "0 32px 80px", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setExpandedService(expandedService === s.id ? null : s.id)}
                style={{
                  background: "white",
                  border: expandedService === s.id ? "2px solid #0072FF" : "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: 28,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  boxShadow: expandedService === s.id ? "0 8px 24px rgba(0,114,255,0.15)" : "0 1px 3px rgba(15,26,46,0.04)",
                  transition: "all 200ms",
                  cursor: "pointer",
                  textAlign: "left",
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
                    {expandedService === s.id ? "Hide details ↑" : "View details →"}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {SERVICES.map((service, idx) => (
        expandedService === service.id && (
          <section
            key={service.id}
            id={service.id}
            style={{
              padding: "100px 32px",
              background: idx % 2 === 0 ? "#F8FAFC" : "white",
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              {/* Service Header */}
              <div style={{ marginBottom: 48 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#00C6FF,#0072FF)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <Icon name={service.icon} size={32} />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 42, fontWeight: 700, color: "#0F1A2E", margin: 0, letterSpacing: "-0.025em" }}>
                      {service.title}
                    </h2>
                    <p style={{ fontSize: 18, color: "#0072FF", margin: "4px 0 0", fontWeight: 600 }}>{service.tagline}</p>
                  </div>
                </div>
                <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.6, maxWidth: 800 }}>{service.description}</p>
              </div>

              {/* Live service visual */}
              <div style={{ marginBottom: 64 }}>
                {SERVICE_VISUALS[service.id]}
              </div>

              {/* Capabilities Grid */}
              <div style={{ marginBottom: 64 }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, color: "#0F1A2E", marginBottom: 24 }}>
                  What We Do
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
                  {service.capabilities.map((cap, i) => (
                    <div key={i} style={{ padding: 24, background: "white", border: "1px solid #E2E8F0", borderRadius: 12 }}>
                      <div className="tpa-icon-tile" style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,#00C6FF,#0072FF)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: 14, animationDelay: `${i * 0.45}s` }}>
                        <Icon name={cap.icon as Parameters<typeof Icon>[0]["name"]} size={22} />
                      </div>
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
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <Icon name="bulb" size={18} style={{ color: "#0072FF" }} /> Custom Agent Ideas?
                      </span>
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

              {/* Deliverables & Pricing */}
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
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#0048A8", marginBottom: 8, letterSpacing: "0.1em" }}>PRICING</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#0F1A2E", fontFamily: "'Space Grotesk',sans-serif" }}>
                      {service.pricing}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      ))}

      {/* CTA Section */}
      <section style={{ padding: "0 32px 80px", background: "white" }}>
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
