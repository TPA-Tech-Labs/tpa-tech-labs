"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll-reveal. Fades sections in as they enter the viewport.
 *
 * Progressive enhancement: the hidden initial state only applies once JS adds
 * `js-reveal` to <html>, so crawlers and no-JS visitors always see content.
 * Skipped entirely when the visitor prefers reduced motion.
 */
export default function RevealObserver() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (!("IntersectionObserver" in window)) return;

        document.documentElement.classList.add("js-reveal");

        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                }
            },
            // threshold 0 fires as soon as any pixel intersects. A fractional
            // threshold would break tall elements (a full blog article can
            // never have 8% of itself visible at once, so it would stay hidden).
            { rootMargin: "0px 0px -8% 0px", threshold: 0 }
        );

        const observeAll = () =>
            document
                .querySelectorAll("main section:not(.is-visible), .reveal:not(.is-visible)")
                .forEach((el) => io.observe(el));

        observeAll();

        // Client-side navigations swap <main>'s children; pick up new sections.
        const mo = new MutationObserver(observeAll);
        const main = document.querySelector("main");
        if (main) mo.observe(main, { childList: true, subtree: true });

        return () => {
            io.disconnect();
            mo.disconnect();
        };
    }, []);

    return null;
}
