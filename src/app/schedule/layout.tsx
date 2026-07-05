import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, jsonLdScript } from "@/lib/site";

export const metadata: Metadata = {
    title: "Book a Call",
    description:
        "Schedule a free 30-minute technical consultation with a TPA Tech Labs engineer. No sales reps — talk directly to the people who will build your project.",
    alternates: { canonical: "/schedule" },
    openGraph: {
        title: `Book a Call | ${SITE_NAME}`,
        description:
            "Schedule a free 30-minute technical consultation with a TPA Tech Labs engineer.",
        url: "/schedule",
    },
};

const scheduleJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Book a Call — ${SITE_NAME}`,
    url: `${SITE_URL}/schedule`,
    potentialAction: {
        "@type": "ScheduleAction",
        name: "Book a technical consultation",
        target: `${SITE_URL}/schedule`,
    },
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdScript(scheduleJsonLd) }}
            />
            {children}
        </>
    );
}
