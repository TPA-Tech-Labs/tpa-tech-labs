// Single place to change the production domain and shared brand strings.
// NEXT_PUBLIC_SITE_URL (if set at build time) overrides the default.
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tpatechlabs.com";

export const SITE_NAME = "TPA Tech Labs";
export const SITE_TAGLINE = "Build · Innovate · Deliver";
export const SITE_DESCRIPTION =
    "Custom software, AI agents, Java modernization, and cloud platforms for small businesses and technical teams. Engineers you can actually talk to.";

// Escapes `<` so user-visible strings can never break out of a JSON-LD script tag.
export function jsonLdScript(data: object): string {
    return JSON.stringify(data).replace(/</g, "\\u003c");
}
