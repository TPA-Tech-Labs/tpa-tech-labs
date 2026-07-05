import React from "react";
import Icon from "./Icon";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "dark";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: string;
  children: React.ReactNode;
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary:   { background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white", boxShadow:"0 6px 20px -6px rgba(0,114,255,0.5)" },
  secondary: { background:"white", color:"#0F1A2E", border:"1px solid #CBD5E1" },
  outline:   { background:"transparent", color:"white", border:"1px solid rgba(255,255,255,0.3)" },
  ghost:     { background:"transparent", color:"#0072FF", border:"none" },
  dark:      { background:"#0F1A2E", color:"white", border:"none" },
};

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { padding:"7px 14px", fontSize:13, borderRadius:9 },
  md: { padding:"10px 18px", fontSize:14, borderRadius:10 },
  lg: { padding:"14px 24px", fontSize:16, borderRadius:12 },
};

export default function Button({ variant = "primary", size = "md", icon, children, style, ...props }: ButtonProps) {
  return (
    <button
      style={{
        fontFamily:"'Inter',sans-serif",
        fontWeight:600,
        cursor:"pointer",
        display:"inline-flex",
        alignItems:"center",
        gap:8,
        textDecoration:"none",
        whiteSpace:"nowrap",
        border:"none",
        transition:"all 180ms cubic-bezier(0.16,1,0.3,1)",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {children}
      {icon && <Icon name={icon as Parameters<typeof Icon>[0]["name"]} size={size === "sm" ? 14 : 16} />}
    </button>
  );
}
