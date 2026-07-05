"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";

interface ShowcaseItem {
    id: string;
    title: string;
    description: string;
    visual: React.ReactNode;
    features: string[];
    color: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
    {
        id: "upgrade",
        title: "TPA Upgrade",
        description: "Automated Java modernization with AI-powered code analysis and refactoring",
        color: "#00C6FF",
        features: [
            "AST-based code analysis",
            "Automated dependency updates",
            "Test generation & validation",
            "Zero-downtime migration",
        ],
        visual: <UpgradeVisual />,
    },
    {
        id: "scheduler",
        title: "Scheduler",
        description: "Intelligent calendar management that prevents conflicts before they happen",
        color: "#0072FF",
        features: [
            "AI conflict prediction",
            "Multi-timezone optimization",
            "Focus time protection",
            "Meeting analytics",
        ],
        visual: <SchedulerVisual />,
    },
    {
        id: "agent-studio",
        title: "Agent Studio",
        description: "Build and deploy production-ready AI agents with visual workflows",
        color: "#7F00FF",
        features: [
            "Visual workflow builder",
            "Multi-model support",
            "Built-in evaluations",
            "Real-time monitoring",
        ],
        visual: <AgentStudioVisual />,
    },
    {
        id: "observatory",
        title: "Observatory",
        description: "ML-powered observability with automatic anomaly detection and root cause analysis",
        color: "#AE75FF",
        features: [
            "Anomaly detection",
            "Root cause analysis",
            "Predictive alerts",
            "Natural language queries",
        ],
        visual: <ObservatoryVisual />,
    },
];

export default function ProductShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = SHOWCASE_ITEMS[activeIndex];

    return (
        <section style={{ padding: "100px 32px", background: "#0A0E1A", position: "relative", overflow: "hidden" }}>
            {/* Background effects */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(168,200,240,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "10%", right: "-10%", width: 600, height: 600, background: `radial-gradient(circle,${active.color}20,transparent 60%)`, filter: "blur(60px)", pointerEvents: "none", transition: "all 0.8s ease" }} />

            <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: active.color, transition: "color 0.3s" }}>
                        Product Showcase
                    </div>
                    <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 12, color: "white" }}>
                        See our products in action
                    </h2>
                    <p style={{ fontSize: 17, color: "#A8C8F0", maxWidth: 620, margin: "16px auto 0", lineHeight: 1.6 }}>
                        Interactive demos showing how each product solves real engineering challenges
                    </p>
                </div>

                {/* Tab navigation */}
                <div className="product-tabs" style={{ display: "flex", gap: 12, marginBottom: 48, justifyContent: "center", flexWrap: "wrap" }}>
                    {SHOWCASE_ITEMS.map((item, idx) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                padding: "12px 24px",
                                background: activeIndex === idx ? item.color : "rgba(255,255,255,0.05)",
                                border: `1px solid ${activeIndex === idx ? item.color : "rgba(255,255,255,0.1)"}`,
                                borderRadius: 12,
                                color: activeIndex === idx ? "white" : "#A8C8F0",
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.3s",
                                fontFamily: "'Inter',sans-serif",
                            }}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Content area */}
                <div className="product-showcase-content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                    {/* Left: Description & Features */}
                    <div>
                        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 36, fontWeight: 700, color: "white", marginBottom: 16, letterSpacing: "-0.02em" }}>
                            {active.title}
                        </h3>
                        <p style={{ fontSize: 18, color: "#A8C8F0", lineHeight: 1.6, marginBottom: 32 }}>
                            {active.description}
                        </p>

                        {/* Features list */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {active.features.map((feature, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        padding: 16,
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: 12,
                                        animation: `fadeInLeft 0.4s ease ${i * 0.1}s both`,
                                    }}
                                >
                                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${active.color}20`, border: `1px solid ${active.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: active.color, flexShrink: 0 }}>
                                        <Icon name="check" size={16} stroke={3} />
                                    </div>
                                    <span style={{ fontSize: 15, color: "white", fontWeight: 500 }}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div style={{
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${active.color}40`,
                        borderRadius: 20,
                        padding: 40,
                        boxShadow: `0 20px 60px -12px ${active.color}40`,
                        minHeight: 400,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                    }}>
                        {active.visual}
                    </div>
                </div>
            </div>

        </section>
    );
}

/* ══════════════════════════════════════════════════════════════════════════
   VISUAL COMPONENTS FOR EACH PRODUCT
   ══════════════════════════════════════════════════════════════════════════ */

function UpgradeVisual() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Before/After comparison */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {/* Before */}
                <div style={{ padding: 20, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", marginBottom: 12, letterSpacing: "0.1em" }}>BEFORE</div>
                    <pre style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#FCA5A5", margin: 0, lineHeight: 1.6 }}>
                        {`// Java 8
Date date = new Date();
SimpleDateFormat sdf = 
  new SimpleDateFormat(
    "yyyy-MM-dd"
  );
String formatted = 
  sdf.format(date);`}
                    </pre>
                </div>

                {/* After */}
                <div style={{ padding: 20, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#10B981", marginBottom: 12, letterSpacing: "0.1em" }}>AFTER</div>
                    <pre style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#6EE7B7", margin: 0, lineHeight: 1.6 }}>
                        {`// Java 21
var formatted = 
  LocalDate.now()
    .format(
      DateTimeFormatter
        .ISO_LOCAL_DATE
    );`}
                    </pre>
                </div>
            </div>

            {/* Migration stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {[
                    { label: "Files", value: "847" },
                    { label: "Tests", value: "1,420" },
                    { label: "Time", value: "6 wks" },
                ].map((stat, i) => (
                    <div key={i} style={{ padding: 16, background: "rgba(0,198,255,0.08)", border: "1px solid rgba(0,198,255,0.2)", borderRadius: 10, textAlign: "center" }}>
                        <div style={{ fontSize: 24, fontWeight: 700, color: "#00C6FF", fontFamily: "'Space Grotesk',sans-serif" }}>{stat.value}</div>
                        <div style={{ fontSize: 11, color: "#64748B", marginTop: 4 }}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SchedulerVisual() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Calendar grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8 }}>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} style={{ fontSize: 10, fontWeight: 700, color: "#64748B", textAlign: "center", padding: 8 }}>
                        {day}
                    </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => {
                    const hasEvent = [3, 5, 10, 12, 17, 19, 24].includes(i);
                    const isConflict = [12, 19].includes(i);
                    return (
                        <div
                            key={i}
                            style={{
                                aspectRatio: "1",
                                background: hasEvent ? (isConflict ? "rgba(239,68,68,0.15)" : "rgba(0,198,255,0.15)") : "rgba(255,255,255,0.03)",
                                border: `1px solid ${hasEvent ? (isConflict ? "rgba(239,68,68,0.4)" : "rgba(0,198,255,0.3)") : "rgba(255,255,255,0.08)"}`,
                                borderRadius: 8,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 11,
                                color: hasEvent ? (isConflict ? "#EF4444" : "#00C6FF") : "#64748B",
                                fontWeight: hasEvent ? 700 : 400,
                            }}
                        >
                            {i + 1}
                        </div>
                    );
                })}
            </div>

            {/* Legend */}
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 12, height: 12, borderRadius: 4, background: "rgba(0,198,255,0.3)" }} />
                    <span style={{ fontSize: 11, color: "#A8C8F0" }}>Scheduled</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 12, height: 12, borderRadius: 4, background: "rgba(239,68,68,0.3)" }} />
                    <span style={{ fontSize: 11, color: "#A8C8F0" }}>Conflict detected</span>
                </div>
            </div>
        </div>
    );
}

function AgentStudioVisual() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Workflow nodes */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {[
                    { icon: "📥", label: "Trigger", color: "#00C6FF" },
                    { icon: "🤖", label: "Process", color: "#0072FF" },
                    { icon: "🔍", label: "Validate", color: "#7F00FF" },
                    { icon: "📤", label: "Output", color: "#10B981" },
                ].map((node, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                        <div style={{
                            width: 64,
                            height: 64,
                            borderRadius: 16,
                            background: `${node.color}20`,
                            border: `2px solid ${node.color}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 28,
                        }}>
                            {node.icon}
                        </div>
                        <span style={{ fontSize: 11, color: "#A8C8F0", fontWeight: 600 }}>{node.label}</span>
                        {i < 3 && (
                            <div style={{ position: "absolute", left: "50%", transform: "translateX(50%)", color: node.color, fontSize: 20 }}>
                                →
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 20 }}>
                {[
                    { label: "Agents deployed", value: "47" },
                    { label: "Avg response time", value: "1.2s" },
                    { label: "Success rate", value: "99.8%" },
                    { label: "Cost per run", value: "$0.03" },
                ].map((metric, i) => (
                    <div key={i} style={{ padding: 16, background: "rgba(127,0,255,0.08)", border: "1px solid rgba(127,0,255,0.2)", borderRadius: 10 }}>
                        <div style={{ fontSize: 20, fontWeight: 700, color: "#AE75FF", fontFamily: "'Space Grotesk',sans-serif" }}>{metric.value}</div>
                        <div style={{ fontSize: 11, color: "#64748B", marginTop: 4 }}>{metric.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ObservatoryVisual() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Metrics chart simulation */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120 }}>
                {[40, 45, 42, 48, 85, 90, 88, 50, 46, 44, 42, 45].map((height, i) => {
                    const isAnomaly = i >= 4 && i <= 6;
                    return (
                        <div
                            key={i}
                            style={{
                                flex: 1,
                                height: `${height}%`,
                                background: isAnomaly ? "linear-gradient(180deg,#EF4444,#DC2626)" : "linear-gradient(180deg,#00C6FF,#0072FF)",
                                borderRadius: "4px 4px 0 0",
                                position: "relative",
                                boxShadow: isAnomaly ? "0 0 20px rgba(239,68,68,0.6)" : "none",
                            }}
                        >
                            {isAnomaly && i === 5 && (
                                <div style={{ position: "absolute", top: -24, left: "50%", transform: "translateX(-50%)", fontSize: 16 }}>
                                    ⚠️
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Alert panel */}
            <div style={{ padding: 16, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 16 }}>⚡</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#EF4444" }}>Anomaly Detected</span>
                </div>
                <div style={{ fontSize: 11, color: "#FCA5A5", lineHeight: 1.5 }}>
                    p99 latency spike detected at 14:23 UTC<br />
                    Root cause: Database connection pool exhaustion<br />
                    Recommendation: Increase pool size to 50
                </div>
            </div>

            {/* System status */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {[
                    { label: "Services", value: "200", status: "✓" },
                    { label: "Alerts", value: "1", status: "⚠" },
                    { label: "Uptime", value: "99.9%", status: "✓" },
                ].map((item, i) => (
                    <div key={i} style={{ padding: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, textAlign: "center" }}>
                        <div style={{ fontSize: 18, marginBottom: 4 }}>{item.status}</div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "white", fontFamily: "'Space Grotesk',sans-serif" }}>{item.value}</div>
                        <div style={{ fontSize: 10, color: "#64748B", marginTop: 2 }}>{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
