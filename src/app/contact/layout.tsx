import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, jsonLdScript } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Talk to the engineers who will actually build your project. Email hello@tpatechlabs.com or send us a message — we reply within one business day.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: `Contact Us | ${SITE_NAME}`,
        description:
            "Talk to the engineers who will actually build your project. We reply within one business day.",
        url: "/contact",
    },
};

const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    mainEntity: {
        "@type": "Organization",
        name: SITE_NAME,
        email: "hello@tpatechlabs.com",
        url: SITE_URL,
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdScript(contactJsonLd) }}
            />
            {children}
        </>
    );
}
