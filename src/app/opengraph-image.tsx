import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;

// Brand share card: hexagon mark on the deep-navy brand ground.
// Satori supports plain SVG shapes but not filters/gradients-in-text,
// so this uses flat brand colors.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0E1A 0%, #0D1528 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="170" height="170" viewBox="0 0 100 100">
          <polygon
            points="50,6 88,28 88,72 50,94 12,72 12,28"
            fill="none"
            stroke="#00C6FF"
            strokeWidth="4"
          />
          <polygon
            points="50,20 74,34 74,62 50,76 26,62 26,34"
            fill="#0072FF"
            opacity="0.15"
          />
          <rect x="30" y="34" width="40" height="7" rx="3.5" fill="#00C6FF" />
          <rect x="46" y="34" width="8" height="34" rx="4" fill="#00C6FF" />
          <circle cx="50" cy="6" r="4" fill="#00C6FF" />
          <circle cx="88" cy="28" r="4" fill="#0072FF" />
          <circle cx="88" cy="72" r="4" fill="#0072FF" />
          <circle cx="50" cy="94" r="4" fill="#00C6FF" />
          <circle cx="12" cy="72" r="4" fill="#7F00FF" />
          <circle cx="12" cy="28" r="4" fill="#7F00FF" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 24,
            marginTop: 40,
          }}
        >
          <div style={{ fontSize: 92, fontWeight: 800, color: "#00C6FF" }}>
            TPA
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 300,
              letterSpacing: 18,
              color: "#CCDDFF",
            }}
          >
            TECH LABS
          </div>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            letterSpacing: 8,
            color: "#7FA8D8",
          }}
        >
          BUILD · INNOVATE · DELIVER
        </div>
      </div>
    ),
    size
  );
}
