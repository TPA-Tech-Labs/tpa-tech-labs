import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, jsonLdScript } from "@/lib/site";

export const metadata: Metadata = {
    title: "Services — Web, Mobile, Cloud, AI Agents & Java Modernization",
    description:
        "Full-stack engineering services: web development, mobile apps, cloud & DevOps, AI agents, AI model training, and Java modernization. Senior engineers, fixed-scope honesty, production-grade delivery.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: `Services | ${SITE_NAME}`,
        description:
            "Web development, mobile apps, cloud & DevOps, AI agents, AI model training, and Java modernization — delivered by senior engineers.",
        url: "/services",
    },
};

const SERVICES = [
    { name: "Web Development", description: "Frontend, backend APIs, database design, and performance optimization for SaaS platforms, e-commerce, and internal tools." },
    { name: "Mobile Apps", description: "Cross-platform and native mobile development with offline-first architecture and push notifications." },
    { name: "Cloud & DevOps", description: "Cloud architecture, infrastructure as code, container orchestration, and CI/CD pipelines." },
    { name: "AI Agents", description: "Production AI agents that automate real business workflows with evaluations and guardrails." },
    { name: "AI Model Training", description: "Fine-tuning and training custom AI models on your domain data." },
    { name: "Java Modernization", description: "Migrating legacy Java applications to modern versions and frameworks with zero downtime." },
];

const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Services`,
    itemListElement: SERVICES.map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            url: `${SITE_URL}/services`,
        },
    })),
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdScript(servicesJsonLd) }}
            />
            {children}
        </>
    );
}
