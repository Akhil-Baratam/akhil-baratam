"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cta, nav, person } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const sentinel = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  // A sentinel plus an observer, rather than a scroll listener, so nothing
  // runs on every frame. The bar only grows a rule once it overlaps content.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute top-0 h-px w-full" />
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          stuck ? "border-b border-line bg-bg/80" : "border-b border-transparent bg-bg/0"
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6">
          <a
            href="#top"
            className="t-mono shrink-0 tracking-tight text-fg transition-colors hover:text-accent"
          >
            <span className="hidden sm:inline">{person.name}</span>
            <span className="sm:hidden">
              {person.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-rule text-[0.9rem]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <ThemeToggle />
            <a href={`mailto:${person.email}`} className="btn btn-ghost">
              {cta.contact}
              <ArrowUpRight size={15} weight="bold" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
