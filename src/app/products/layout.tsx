import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, jsonLdScript } from "@/lib/site";

export const metadata: Metadata = {
    title: "Products — TPA Upgrade, Scheduler, Agent Studio & Observatory",
    description:
        "Software products built by TPA Tech Labs: TPA Upgrade for automated Java migration, Scheduler for smart team scheduling, Agent Studio for building AI agent workflows, and Observatory for monitoring.",
    alternates: { canonical: "/products" },
    openGraph: {
        title: `Products | ${SITE_NAME}`,
        description:
            "TPA Upgrade, Scheduler, Agent Studio, and Observatory — products we build, run, and stand behind.",
        url: "/products",
    },
};

const PRODUCTS = [
    { name: "TPA Upgrade", description: "Automated refactoring and zero-downtime migration for legacy Java applications, with test generation and dependency resolution." },
    { name: "Scheduler", description: "Team scheduling with smart conflict detection, timezone intelligence, focus-time protection, and meeting analytics." },
    { name: "Agent Studio", description: "Visual workflow builder for AI agents with built-in evaluations and multi-model support." },
    { name: "Observatory", description: "Monitoring and observability for production systems and AI workloads." },
];

const productsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Products`,
    itemListElement: PRODUCTS.map((product, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "SoftwareApplication",
            name: product.name,
            description: product.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            url: `${SITE_URL}/products`,
        },
    })),
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdScript(productsJsonLd) }}
            />
            {children}
        </>
    );
}
