import type { Metadata } from "next";
import Link from "next/link";

import { BLOG_POSTS as POSTS_BY_SLUG } from "@/lib/blog-data";

// Newest first, derived from the shared content store in src/lib/blog-data.ts
const BLOG_POSTS = Object.entries(POSTS_BY_SLUG)
    .map(([slug, post]) => ({ slug, ...post }))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

const CATEGORIES = ["All", "AI Agents", "Java", "DevOps", "Case Studies"];

export default function BlogPage() {
    return (
        <>
            {/* Header */}
            <section style={{ padding: "80px 32px 64px", background: "linear-gradient(135deg,#E8F4FF 0%,#FFFFFF 45%,#F4ECFF 100%)" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#7F00FF" }}>Blog</div>
                    <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 56, fontWeight: 700, letterSpacing: "-0.035em", marginTop: 12, color: "#0F1A2E" }}>
                        Engineering insights<br />from the field.
                    </h1>
                    <p style={{ fontSize: 18, color: "#475569", maxWidth: 640, marginTop: 16, lineHeight: 1.6 }}>
                        Real-world lessons from building AI agents, modernizing Java applications, and shipping production software.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section style={{ padding: "0 32px 40px", background: "linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                style={{
                                    padding: "8px 20px",
                                    background: cat === "All" ? "#0072FF" : "white",
                                    border: `1px solid ${cat === "All" ? "#0072FF" : "#E2E8F0"}`,
                                    borderRadius: 999,
                                    color: cat === "All" ? "white" : "#475569",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    fontFamily: "'Inter',sans-serif",
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section style={{ padding: "0 32px 100px", background: "linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                style={{
                                    display: "block",
                                    background: "white",
                                    border: "1px solid #E2E8F0",
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                    boxShadow: "0 1px 3px rgba(15,26,46,0.04)",
                                }}
                            >
                                {/* Category Badge */}
                                <div style={{ padding: "20px 20px 0" }}>
                                    <span style={{
                                        display: "inline-block",
                                        padding: "4px 12px",
                                        background: "#EBF5FF",
                                        color: "#0072FF",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        borderRadius: 6,
                                        letterSpacing: "0.05em",
                                        textTransform: "uppercase",
                                    }}>
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div style={{ padding: "16px 20px 20px" }}>
                                    <h3 style={{
                                        fontFamily: "'Space Grotesk',sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#0F1A2E",
                                        marginBottom: 12,
                                        lineHeight: 1.3,
                                        letterSpacing: "-0.015em",
                                    }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid #F1F5F9" }}>
                                        <div style={{ fontSize: 12, color: "#94A3B8" }}>
                                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                        </div>
                                        <div style={{ fontSize: 12, color: "#94A3B8" }}>{post.readTime}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section style={{ padding: "0 32px 80px", background: "linear-gradient(160deg,#FFFFFF 0%,#EFF7FF 55%,#F7F0FF 100%)" }}>
                <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <div style={{
                        padding: "48px",
                        background: "linear-gradient(135deg,#0A0E1A,#0D1528)",
                        borderRadius: 24,
                        border: "1px solid rgba(0,198,255,0.2)",
                        textAlign: "center",
                    }}>
                        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 32, fontWeight: 700, color: "white", marginBottom: 12 }}>
                            Get engineering insights in your inbox
                        </h2>
                        <p style={{ fontSize: 16, color: "#A8C8F0", marginBottom: 28, maxWidth: 560, margin: "0 auto 28px" }}>
                            Weekly articles on AI agents, Java modernization, and building production software. No fluff, just practical insights.
                        </p>
                        <div style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto" }}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                style={{
                                    flex: 1,
                                    padding: "12px 20px",
                                    fontSize: 15,
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: 10,
                                    background: "rgba(255,255,255,0.05)",
                                    color: "white",
                                    fontFamily: "'Inter',sans-serif",
                                }}
                            />
                            <button style={{
                                padding: "12px 24px",
                                fontSize: 15,
                                fontWeight: 700,
                                background: "linear-gradient(135deg,#00C6FF,#0072FF)",
                                color: "white",
                                border: "none",
                                borderRadius: 10,
                                cursor: "pointer",
                                fontFamily: "'Inter',sans-serif",
                            }}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export const metadata: Metadata = {
    title: "Blog — AI Agents, Java Modernization & Engineering Insights",
    description:
        "Technical articles on building AI agents, modernizing Java applications, DevOps practices, and production software development from the TPA Tech Labs engineering team.",
    keywords: [
        "AI agents", "Java migration", "Spring Boot", "DevOps",
        "software engineering", "technical blog", "AI automation", "legacy modernization",
    ],
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Blog | TPA Tech Labs",
        description:
            "Engineering insights from the field: AI agents, Java modernization, and production software.",
        url: "/blog",
    },
};
