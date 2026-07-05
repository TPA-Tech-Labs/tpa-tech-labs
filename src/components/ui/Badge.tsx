import React from "react";

type BadgeVariant = "brand" | "cyan" | "purple" | "success" | "warn" | "neutral" | "solid" | "dark";

const variants: Record<BadgeVariant, React.CSSProperties> = {
  brand:   { background:"#EBF5FF", color:"#0048A8" },
  cyan:    { background:"#E6FAFF", color:"#007693" },
  purple:  { background:"#F3EBFF", color:"#4A0099" },
  success: { background:"#D1FAE5", color:"#065F46" },
  warn:    { background:"#FEF3C7", color:"#92400E" },
  neutral: { background:"#F1F5F9", color:"#334155", border:"1px solid #E2E8F0" },
  solid:   { background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white" },
  dark:    { background:"rgba(0,198,255,0.1)", color:"#00C6FF", border:"1px solid rgba(0,198,255,0.3)" },
};

export default function Badge({ variant = "brand", children, dot }: { variant?: BadgeVariant; children: React.ReactNode; dot?: boolean }) {
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:6,
      padding:"4px 10px", borderRadius:999,
      fontSize:11, fontWeight:600, fontFamily:"Inter",
      letterSpacing:"0.01em",
      ...variants[variant],
    }}>
      {dot && <span style={{ width:6, height:6, borderRadius:"50%", background:"currentColor" }}/>}
      {children}
    </span>
  );
}
