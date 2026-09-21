"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Reveals direct children in sequence once the group scrolls into view.
 *
 * IntersectionObserver rather than a scroll listener (no per-frame work) and
 * rather than CSS `animation-timeline: view()` (still unsupported in Firefox).
 * The observer disconnects after firing, so nothing stays subscribed.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = 70,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Milliseconds between each child. Set 0 for a single simultaneous reveal. */
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    Array.from(el.children).forEach((child, i) => {
      (child as HTMLElement).style.setProperty("--i", String(i));
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--stagger": `${stagger}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
