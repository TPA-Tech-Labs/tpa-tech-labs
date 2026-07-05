import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Security",
  description: "How TPA Tech Labs protects client code, data, and infrastructure.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <LegalPage
      kicker="Trust"
      title="Security"
      updated="July 2026"
      intro="Security is part of how we engineer, not a checkbox at the end. Here is how we protect client code, data, and infrastructure across every engagement."
      sections={[
        {
          heading: "Access control",
          body: "Client systems are accessed on a least-privilege basis with per-engineer accounts — never shared credentials. All team access requires hardware-key MFA, and access is revoked the day an engagement ends.",
        },
        {
          heading: "Code and data handling",
          body: "Client code stays in client-controlled repositories whenever possible. When we must hold data, it is encrypted at rest and in transit, isolated per client, and never used for anything beyond the engagement — including AI model training.",
        },
        {
          heading: "On-premise AI options",
          body: "For AI agent and model-training engagements with sensitive data, we support fully on-premise or private-cloud deployment so your data never leaves your infrastructure.",
        },
        {
          heading: "Secure development practices",
          body: "Every change ships through peer review, automated tests, dependency scanning, and secret scanning in CI. Infrastructure is defined as code and audited in version control.",
        },
        {
          heading: "Incident response",
          body: "If we discover a security issue affecting a client, we notify them within 24 hours with an assessment and remediation plan, and follow up with a written post-mortem.",
        },
        {
          heading: "Responsible disclosure",
          body: (
            <>
              Found a vulnerability in our website or products? Email{" "}
              <a href="mailto:security@tpatechlabs.com" style={{ color: "#0072FF", fontWeight: 600, textDecoration: "none" }}>security@tpatechlabs.com</a>{" "}
              — we respond to all reports and credit researchers who report in good faith.
            </>
          ),
        },
      ]}
    />
  );
}
