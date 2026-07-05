import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import { BLOG_POSTS } from "@/lib/blog-data";
import { renderMarkdown } from "@/lib/markdown";
import { SITE_URL, SITE_NAME, jsonLdScript } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS[slug];

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        authors: [{ name: post.author }],
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
            type: "article",
            title: post.title,
            description: post.excerpt,
            url: `/blog/${slug}`,
            siteName: SITE_NAME,
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS[slug];

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: post.author, url: SITE_URL },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
        keywords: post.tags.join(", "),
        articleSection: post.category,
    };

    const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
            />

            <article style={{ background: "white" }}>
                <div className="post-wrap reveal">
                    <Link href="/blog" className="post-back">
                        <Icon name="arrow" size={14} style={{ transform: "rotate(180deg)" }} /> Back to blog
                    </Link>

                    <div className="post-kicker">{post.category}</div>
                    <h1 className="post-title">{post.title}</h1>
                    <p className="post-subtitle">{post.excerpt}</p>

                    <div className="post-byline">
                        <div className="post-avatar" aria-hidden="true">
                            <svg viewBox="0 0 100 100" width="28" height="28">
                                <defs>
                                    <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00C6FF" />
                                        <stop offset="100%" stopColor="#0072FF" />
                                    </linearGradient>
                                </defs>
                                <polygon points="50,6 84,26 84,66 50,86 16,66 16,26" fill="none" stroke="url(#avatar-grad)" strokeWidth="6" />
                                <polygon points="50,20 72,33 72,59 50,72 28,59 28,33" fill="url(#avatar-grad)" opacity="0.15" />
                                <rect x="32" y="32" width="36" height="7" rx="3.5" fill="url(#avatar-grad)" />
                                <rect x="46.5" y="32" width="7" height="30" rx="3.5" fill="url(#avatar-grad)" />
                                <circle cx="50" cy="6" r="4.5" fill="#00C6FF" />
                                <circle cx="84" cy="26" r="4.5" fill="#0072FF" />
                                <circle cx="84" cy="66" r="4.5" fill="#0072FF" />
                                <circle cx="50" cy="86" r="4.5" fill="#00C6FF" />
                                <circle cx="16" cy="66" r="4.5" fill="#7F00FF" />
                                <circle cx="16" cy="26" r="4.5" fill="#7F00FF" />
                            </svg>
                        </div>
                        <div>
                            <div className="post-byline-name">{post.author}</div>
                            <div className="post-byline-meta">
                                {post.readTime} · {publishedDate}
                            </div>
                        </div>
                    </div>

                    <div
                        className="post-body"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
                    />

                    <div className="post-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="post-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section style={{ padding: "0 24px 88px", background: "white" }}>
                <div style={{ maxWidth: 680, margin: "0 auto" }} className="reveal">
                    <div style={{
                        padding: "40px",
                        background: "linear-gradient(135deg,#EBF5FF,#D6EBFF)",
                        borderRadius: 20,
                        border: "1px solid #A8D4FF",
                        textAlign: "center",
                    }}>
                        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 700, color: "#0F1A2E", marginBottom: 12 }}>
                            Need help with AI agents or Java modernization?
                        </h3>
                        <p style={{ fontSize: 15, color: "#475569", marginBottom: 24 }}>
                            We&apos;ve built 50+ production AI agents and migrated millions of lines of Java code. Let&apos;s talk about your project.
                        </p>
                        <Link href="/schedule" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "12px 24px",
                            fontSize: 15,
                            fontWeight: 700,
                            background: "linear-gradient(135deg,#00C6FF,#0072FF)",
                            color: "white",
                            borderRadius: 10,
                            textDecoration: "none",
                            fontFamily: "'Inter',sans-serif",
                        }}>
                            Book a call <Icon name="arrow" size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
