import React from "react";

const paths: Record<string, React.ReactNode> = {
  menu:     <><path d="M3 6h18M3 12h18M3 18h18"/></>,
  arrow:    <><path d="M5 12h14M13 5l7 7-7 7"/></>,
  check:    <><path d="M20 6L9 17l-5-5"/></>,
  calendar: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></>,
  code:     <><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></>,
  cloud:    <><path d="M18 10a4 4 0 01-.8 7.9H6a5 5 0 01-1.1-9.9A6 6 0 0118 10z"/></>,
  cpu:      <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></>,
  phone:    <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
  bot:      <><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 2v4M8 14h.01M16 14h.01M9 18h6"/></>,
  git:      <><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v10M5 17c0-4 3-6 7-6s7 2 7 6"/></>,
  chevron:  <><path d="M6 9l6 6 6-6"/></>,
  x:        <><path d="M18 6L6 18M6 6l12 12"/></>,
  star:     <><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></>,
  sparkle:  <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>,
  clock:    <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  shield:   <><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></>,
  mail:     <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  play:     <><polygon points="5,3 19,12 5,21"/></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 11v6"/></>,
  github:   <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9c0-1.1-.1-1.5-.5-2 3.5-.4 6.5-1.7 6.5-7.7a5.4 5.4 0 00-1.5-3.7c.2-.4.7-2-.2-4 0 0-1.2-.4-4 1.5a13.4 13.4 0 00-7 0C6 .5 4.8.9 4.8.9c-.9 2-.4 3.6-.2 4A5.4 5.4 0 003 8.7c0 6 3 7.3 6.5 7.7-.4.4-.7 1.1-.6 2V22"/></>,
};

interface IconProps {
  name: keyof typeof paths;
  size?: number;
  stroke?: number;
  className?: string;
  fill?: string;
  style?: React.CSSProperties;
}

export default function Icon({ name, size = 20, stroke = 2, className = "", fill = "none", style }: IconProps) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill={fill} stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, ...style }}
      className={className}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}
