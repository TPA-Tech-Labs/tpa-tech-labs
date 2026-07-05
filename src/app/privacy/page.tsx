import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TPA Tech Labs collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Privacy Policy"
      updated="July 2026"
      intro="TPA Tech Labs respects your privacy. This policy explains what information we collect through our website and services, how we use it, and the choices you have."
      sections={[
        {
          heading: "Information we collect",
          body: (
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><b>Contact details</b> you submit through our contact or scheduling forms — name, work email, company, and the message you send us.</li>
              <li><b>Usage data</b> such as pages visited and approximate location derived from your IP address, collected via standard web analytics.</li>
              <li><b>Client project data</b> shared with us during an engagement, which is governed by the contract and NDA for that engagement.</li>
            </ul>
          ),
        },
        {
          heading: "How we use it",
          body: "We use your information to respond to inquiries, schedule and prepare for calls, deliver contracted services, and improve our website. We do not sell your personal information, and we do not use client project data to train models or for any purpose outside the engagement.",
        },
        {
          heading: "Sharing",
          body: "We share data only with service providers we use to run our business (e.g., email, calendaring, analytics, and cloud hosting), each bound by their own confidentiality obligations — or when required by law.",
        },
        {
          heading: "Retention",
          body: "Inquiry and scheduling data is kept for as long as needed to manage our relationship with you. Client project data is retained per the terms of the engagement contract and deleted or returned at its conclusion on request.",
        },
        {
          heading: "Your rights",
          body: "You may request access to, correction of, or deletion of your personal data at any time by emailing us. If you are in a jurisdiction with specific data-protection rights (such as the GDPR), we will honor requests as required by that law.",
        },
        {
          heading: "Cookies",
          body: "We use only essential cookies and privacy-respecting analytics. We do not run third-party advertising trackers.",
        },
      ]}
    />
  );
}
