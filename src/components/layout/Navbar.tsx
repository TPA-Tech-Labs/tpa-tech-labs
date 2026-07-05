"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoLight } from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(226,232,240,0.8)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <LogoLight height={44} />
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ gap: 4 }} className="nav-desktop">
          {NAV_ITEMS.map(item => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} style={{
                padding: "8px 14px", fontSize: 14, fontWeight: 500,
                color: active ? "#0072FF" : "#334155",
                borderRadius: 8, textDecoration: "none",
                transition: "all 150ms", fontFamily: "'Inter',sans-serif",
              }}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link href="/schedule" className="nav-desktop" style={{
          alignItems: "center", gap: 8,
          padding: "8px 18px", fontSize: 13, fontWeight: 600,
          background: "linear-gradient(135deg,#00C6FF,#0072FF)", color: "white",
          borderRadius: 9, textDecoration: "none", fontFamily: "'Inter',sans-serif",
          boxShadow: "0 6px 20px -6px rgba(0,114,255,0.5)",
          transition: "all 180ms cubic-bezier(0.16,1,0.3,1)",
          whiteSpace: "nowrap",
        }}>
          Book a call <Icon name="arrow" size={14} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav-mobile-btn"
          style={{
            padding: 8,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#334155",
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu" style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "white",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}>
          <nav style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 8 }}>
            {NAV_ITEMS.map(item => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "12px 16px",
                    fontSize: 16,
                    fontWeight: 500,
                    color: active ? "#0072FF" : "#334155",
                    background: active ? "#EBF5FF" : "transparent",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontFamily: "'Inter',sans-serif",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/schedule"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px 16px",
                fontSize: 16,
                fontWeight: 600,
                background: "linear-gradient(135deg,#00C6FF,#0072FF)",
                color: "white",
                borderRadius: 8,
                textDecoration: "none",
                fontFamily: "'Inter',sans-serif",
                marginTop: 8,
              }}
            >
              Book a call <Icon name="arrow" size={16} />
            </Link>
          </nav>
        </div>
      )}

    </header>
  );
}
