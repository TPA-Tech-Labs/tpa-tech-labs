import { CSSProperties, ReactNode } from "react";

interface ResponsiveGridProps {
    children: ReactNode;
    columns?: 2 | 3 | 4;
    gap?: number;
    style?: CSSProperties;
}

export function ResponsiveGrid({ children, columns = 2, gap = 24, style }: ResponsiveGridProps) {
    const baseStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: `${gap / 2}px`,
        ...style,
    };

    // Media query styles will be handled inline
    const responsiveClass = `responsive-grid-${columns}`;

    return (
        <>
            <div className={responsiveClass} style={baseStyle}>
                {children}
            </div>
            <style jsx>{`
        @media (min-width: 640px) {
          .responsive-grid-3,
          .responsive-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .responsive-grid-2 {
            grid-template-columns: repeat(2, 1fr);
            gap: ${gap}px;
          }
        }
        @media (min-width: 1024px) {
          .responsive-grid-3 {
            grid-template-columns: repeat(3, 1fr);
            gap: ${gap}px;
          }
          .responsive-grid-4 {
            grid-template-columns: repeat(4, 1fr);
            gap: ${gap}px;
          }
        }
      `}</style>
        </>
    );
}

interface ResponsiveContainerProps {
    children: ReactNode;
    padding?: string;
    style?: CSSProperties;
}

export function ResponsiveContainer({ children, padding, style }: ResponsiveContainerProps) {
    return (
        <>
            <div className="responsive-container" style={style}>
                {children}
            </div>
            <style jsx>{`
        .responsive-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: ${padding || "0 1rem"};
        }
        @media (min-width: 768px) {
          .responsive-container {
            padding: ${padding || "0 2rem"};
          }
        }
      `}</style>
        </>
    );
}

interface ResponsiveTextProps {
    children: ReactNode;
    as?: "h1" | "h2" | "h3" | "p";
    mobileFontSize?: string;
    desktopFontSize?: string;
    style?: CSSProperties;
}

export function ResponsiveText({
    children,
    as = "p",
    mobileFontSize = "1rem",
    desktopFontSize = "1.125rem",
    style,
}: ResponsiveTextProps) {
    const Tag = as;

    return (
        <>
            <Tag className="responsive-text" style={style}>
                {children}
            </Tag>
            <style jsx>{`
        .responsive-text {
          font-size: ${mobileFontSize};
        }
        @media (min-width: 768px) {
          .responsive-text {
            font-size: ${desktopFontSize};
          }
        }
      `}</style>
        </>
    );
}
