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
  palette:  <><path d="M12 2a10 10 0 100 20c1.4 0 2.2-.9 2.2-2 0-.6-.2-1-.6-1.4-.4-.4-.6-.8-.6-1.4a2 2 0 012-2h2.4A4.6 4.6 0 0022 10.6C22 5.8 17.5 2 12 2z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/></>,
  gear:     <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>,
  zap:      <><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></>,
  layers:   <><polygon points="12,2 2,7 12,12 22,7"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></>,
  refresh:  <><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9a9 9 0 0114.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0020.5 15"/></>,
  bell:     <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></>,
  lock:     <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
  link:     <><path d="M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7.1-7.1l-1.7 1.7"/><path d="M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007.1 7.1l1.7-1.7"/></>,
  users:    <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
  globe:    <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>,
  package:  <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></>,
  flask:    <><path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 006.24 22h11.52a2 2 0 001.74-3.5L14 9V3"/><path d="M7.5 15h9"/></>,
  leaf:     <><path d="M11 20A7 7 0 014 13c0-4 3-9 14-11-1 11-4 16-7 18z"/><path d="M4 21c3-4 6-6 10-7"/></>,
  chart:    <><path d="M18 20V10M12 20V4M6 20v-6"/></>,
  target:   <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
  book:     <><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>,
  rocket:   <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></>,
  search:   <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>,
  terminal: <><path d="M4 17l6-6-6-6M12 19h8"/></>,
  gauge:    <><path d="M12 14l3.5-3.5"/><path d="M20.3 18a10 10 0 10-16.6 0"/></>,
  alert:    <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></>,
  bulb:     <><path d="M9 18h6M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5.71.71 1.23 1.52 1.41 2.5"/></>,
  inbox:    <><polyline points="22,12 16,12 14,15 10,15 8,12 2,12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></>,
  send:     <><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></>,
  file:     <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></>,
  server:   <><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></>,
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
