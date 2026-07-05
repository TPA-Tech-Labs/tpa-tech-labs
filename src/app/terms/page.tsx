import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the TPA Tech Labs website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Terms of Service"
      updated="July 2026"
      intro="These terms govern your use of the TPA Tech Labs website. Engagements for software development, AI, or consulting services are governed by a separate master services agreement signed by both parties."
      sections={[
        {
          heading: "Use of this site",
          body: "You may browse, link to, and share content from this site for lawful purposes. You may not attempt to disrupt the site, probe it for vulnerabilities without authorization, or misrepresent your affiliation with us.",
        },
        {
          heading: "Content and intellectual property",
          body: "All content on this site — text, graphics, logos, and code samples — belongs to TPA Tech Labs or its licensors. Blog posts may be quoted with attribution; wholesale reproduction requires our written permission.",
        },
        {
          heading: "Service engagements",
          body: "Proposals, timelines, and prices shown on this site are indicative. Binding scope, deliverables, fees, warranties, and IP ownership are defined exclusively in the signed agreement for each engagement.",
        },
        {
          heading: "No warranties",
          body: "This website is provided “as is.” While we keep information current, we make no warranties about its completeness or accuracy, and nothing here constitutes professional advice for your specific situation.",
        },
        {
          heading: "Limitation of liability",
          body: "To the maximum extent permitted by law, TPA Tech Labs is not liable for indirect, incidental, or consequential damages arising from use of this website.",
        },
        {
          heading: "Changes",
          body: "We may update these terms from time to time. The “Last updated” date above reflects the latest revision; continued use of the site after changes constitutes acceptance.",
        },
      ]}
    />
  );
}
